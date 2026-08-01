import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { SectionHeading } from "@/components/site/SectionHeading";
import { supabase } from "@/integrations/supabase/client";
import { useI18n } from "@/lib/i18n";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/noticias")({
  head: () => ({
    meta: [
      { title: "Noticias — Fortux" },
      { name: "description", content: "Actualidad del circuito, novedades de la academia, competiciones, productos y la familia Fortux." },
      { property: "og:title", content: "Noticias — Fortux" },
      { property: "og:description", content: "Toda la actualidad de Fortux y del circuito." },
      { property: "og:url", content: "/noticias" },
    ],
    links: [{ rel: "canonical", href: "/noticias" }],
  }),
  component: Page,
});

type News = {
  id: string;
  slug: string | null;
  title: string;
  excerpt: string | null;
  cover_url: string | null;
  published_at: string | null;
  source: "fortux" | "circuit";
  external_url: string | null;
};

const CIRCUIT_SUPABASE_URL = "https://xskmbgbjxixezdudbgme.supabase.co";
const CIRCUIT_SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhza21iZ2JqeGl4ZXpkdWRiZ21lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAxMzY2ODEsImV4cCI6MjA5NTcxMjY4MX0.Pc-Z8pcizE0TGHb_luIWtZ8gH7wp4S7HD0D26Affrac";

async function fetchCircuitNews(): Promise<News[]> {
  try {
    const res = await fetch(
      `${CIRCUIT_SUPABASE_URL}/rest/v1/news?select=id,title,excerpt,image_url,created_at,published&published=eq.true&order=created_at.desc`,
      { headers: { apikey: CIRCUIT_SUPABASE_KEY, Authorization: `Bearer ${CIRCUIT_SUPABASE_KEY}` } },
    );
    if (!res.ok) return [];
    const rows = (await res.json()) as Array<{ id: string; title: string; excerpt: string | null; image_url: string | null; created_at: string }>;
    return rows.map((r) => ({
      id: `circuit-${r.id}`,
      slug: null,
      title: r.title,
      excerpt: r.excerpt,
      cover_url: r.image_url,
      published_at: r.created_at,
      source: "circuit" as const,
      external_url: `https://fortux.fairwaystudio.ai/noticies`,
    }));
  } catch {
    return [];
  }
}

function Page() {
  const { t, lang } = useI18n();
  const { data: news = [], isLoading } = useQuery({
    queryKey: ["news", "merged"],
    queryFn: async () => {
      const [localRes, circuit] = await Promise.all([
        supabase
          .from("news")
          .select("id,slug,title,excerpt,cover_url,published_at")
          .eq("is_published", true)
          .order("published_at", { ascending: false }),
        fetchCircuitNews(),
      ]);
      if (localRes.error) throw localRes.error;
      const local: News[] = (localRes.data ?? []).map((n) => ({
        id: n.id,
        slug: n.slug,
        title: n.title,
        excerpt: n.excerpt,
        cover_url: n.cover_url,
        published_at: n.published_at,
        source: "fortux" as const,
        external_url: null,
      }));
      return [...local, ...circuit].sort(
        (a, b) => new Date(b.published_at ?? 0).getTime() - new Date(a.published_at ?? 0).getTime(),
      );
    },
    staleTime: 0,
    refetchOnMount: "always",
    refetchOnWindowFocus: true,
  });

  return (
    <section className="py-20 md:py-28">
      <div className="container-fortux">
        <SectionHeading eyebrow={t("news.eyebrow")} title={t("news.title")} subtitle={t("news.subtitle")} />
        {isLoading ? (
          <p className="mt-10 text-muted-foreground">{t("news.loading")}</p>
        ) : (
          <div className="mt-10 flex flex-col gap-5">
            {news.map((n, i) => {
              const inner = (
                <article className="group grid grid-cols-1 sm:grid-cols-[280px_1fr] gap-0 rounded-2xl border border-border bg-card overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-elegant cursor-pointer">
                  <div className="aspect-[16/10] sm:aspect-auto sm:h-full bg-gradient-hero">
                    {n.cover_url && <img src={n.cover_url} alt={n.title} className="h-full w-full object-cover" loading="lazy" />}
                  </div>
                  <div className="p-6 sm:p-7 flex flex-col justify-center">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold uppercase tracking-wider text-primary">
                        {n.source === "circuit" ? "Circuit Fortux" : "Fortux"}
                      </span>
                      {n.published_at && (
                        <span className="text-muted-foreground">
                          {new Date(n.published_at).toLocaleDateString(lang === "ca" ? "ca-ES" : "es-ES", { day: "2-digit", month: "short", year: "numeric" })}
                        </span>
                      )}
                    </div>
                    <h3 className="mt-3 font-display text-xl md:text-2xl font-bold group-hover:text-primary transition-colors">{n.title}</h3>
                    {n.excerpt && <p className="mt-2 text-muted-foreground line-clamp-3">{n.excerpt}</p>}
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      {n.source === "circuit" ? "Ver en el circuito" : "Leer más"} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </article>
              );
              if (n.source === "circuit" && n.external_url) {
                return (
                  <Reveal key={n.id} delay={Math.min(i, 6) * 60}>
                    <a href={n.external_url} target="_blank" rel="noopener noreferrer" className="block">
                      {inner}
                    </a>
                  </Reveal>
                );
              }
              return (
                <Reveal key={n.id} delay={Math.min(i, 6) * 60}>
                  <Link to="/noticias/$slug" params={{ slug: n.slug ?? n.id }} className="block">
                    {inner}
                  </Link>
                </Reveal>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
