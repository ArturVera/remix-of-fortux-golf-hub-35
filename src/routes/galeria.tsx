import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { SectionHeading } from "@/components/site/SectionHeading";
import { supabase } from "@/integrations/supabase/client";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galería — Fortux" },
      { name: "description", content: "Fotografías y vídeos de reparaciones, eventos, academia, competiciones y productos." },
      { property: "og:title", content: "Galería — Fortux" },
      { property: "og:description", content: "Multimedia de Fortux: reparaciones, eventos, academia y competiciones." },
      { property: "og:url", content: "/galeria" },
    ],
    links: [{ rel: "canonical", href: "/galeria" }],
  }),
  component: Page,
});

type Media = { id: string; title: string | null; url: string; category: string | null };

function Page() {
  const { t } = useI18n();
  const [active, setActive] = useState<string>(t("shop.all"));

  const { data: items = [], isLoading } = useQuery({
    queryKey: ["media"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("media")
        .select("id,title,url,category")
        .eq("is_published", true)
        .order("sort_order");
      if (error) throw error;
      return data as Media[];
    },
  });

  const ALL = t("shop.all");
  const filters = useMemo(
    () => [ALL, ...Array.from(new Set(items.map((i) => i.category).filter(Boolean) as string[]))],
    [items, ALL]
  );
  const list = active === ALL ? items : items.filter((i) => i.category === active);

  return (
    <section className="py-20 md:py-28">
      <div className="container-fortux">
        <SectionHeading eyebrow={t("gal.eyebrow")} title={t("gal.title")} />
        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${active === f ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border hover:bg-muted"}`}
            >
              {f}
            </button>
          ))}
        </div>
        {isLoading ? (
          <p className="mt-10 text-muted-foreground">{t("gal.loading")}</p>
        ) : (
          <div className="mt-10 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {list.map((m, i) => (
              <Reveal key={m.id} delay={Math.min(i, 7) * 50} className="aspect-square rounded-xl bg-gradient-hero relative overflow-hidden group">
                <img src={m.url} alt={m.title ?? "Fortux"} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity grid place-items-end p-3">
                  <span className="text-primary-foreground text-xs font-semibold">{m.category}</span>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
