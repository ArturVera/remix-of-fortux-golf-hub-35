import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { SITE, waLink } from "@/lib/site";
import { useI18n } from "@/lib/i18n";
import contactoHero from "@/assets/contacto-hero.jpg.asset.json";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Fortux" },
      { name: "description", content: "Contacta con Fortux: formulario, WhatsApp, teléfono y email." },
      { property: "og:title", content: "Contacto — Fortux" },
      { property: "og:description", content: "Estamos a tu disposición para cualquier consulta." },
      { property: "og:url", content: "/contacto" },
    ],
    links: [{ rel: "canonical", href: "/contacto" }],
  }),
  component: Page,
});

const inputClass =
  "mt-1.5 h-11 bg-white/[0.03] border-white/10 text-[#F4F5F0] placeholder:text-white/[0.38] rounded-lg px-3.5 transition-colors focus-visible:border-[#B9D986] focus-visible:ring-1 focus-visible:ring-[#B9D986]/20 focus-visible:outline-none";

const textareaClass =
  "mt-1.5 min-h-[140px] bg-white/[0.03] border-white/10 text-[#F4F5F0] placeholder:text-white/[0.38] rounded-lg px-3.5 py-3 transition-colors focus-visible:border-[#B9D986] focus-visible:ring-1 focus-visible:ring-[#B9D986]/20 focus-visible:outline-none resize-y";

function ContactCard({
  href,
  icon,
  title,
  desc,
  external,
}: {
  href: string;
  icon: ReactNode;
  title: string;
  desc: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener" : undefined}
      className="group flex items-center gap-4 rounded-[10px] border border-white/10 bg-surface-card p-4 transition-colors duration-300 hover:border-[#B9D986]/60"
    >
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-white/10 bg-surface-card text-[#B9D986] transition-colors duration-300 group-hover:border-[#B9D986]/40">
        {icon}
      </span>
      <div className="min-w-0">
        <div className="truncate font-semibold text-[#F4F5F0]">{title}</div>
        <div className="text-sm text-[#F4F5F0]/55">{desc}</div>
      </div>
    </a>
  );
}

function Page() {
  const [sending, setSending] = useState(false);
  const { t } = useI18n();

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success(t("con.form.ok"), { description: t("con.form.okDesc") });
    }, 700);
  };

  return (
    <div className="relative bg-surface">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(185,217,134,0.06),transparent_55%)]" />
        <div className="container-fortux relative grid items-center gap-10 py-16 md:py-20 lg:grid-cols-2 lg:gap-12 min-h-[420px] md:min-h-[460px]">
          <Reveal className="relative z-10">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B9D986]">
              {t("con.eyebrow")}
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] text-[#F4F5F0] text-balance md:text-5xl lg:text-6xl">
              {t("con.title")}
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-[#F4F5F0]/60 md:text-lg">
              {t("con.subtitle")}
            </p>
          </Reveal>
          <Reveal delay={120} className="relative h-[260px] sm:h-[320px] lg:h-[420px]">
            <img
              src={contactoHero.url}
              alt=""
              width={1280}
              height={896}
              className="absolute inset-0 h-full w-full object-cover rounded-lg"
            />
            {/* Fade integration */}
            <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-surface via-surface/70 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-surface to-transparent" />
            <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-surface/80 to-transparent" />
          </Reveal>
        </div>
      </section>

      {/* Main block */}
      <section className="relative py-16 md:py-24">
        <div className="container-fortux relative">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal as="div" className="flex flex-col">
              <div className="space-y-3.5">
              <ContactCard
                href={waLink()}
                external
                icon={<MessageCircle className="h-5 w-5" />}
                title={t("con.wa")}
                desc={t("con.wa.desc")}
              />
              <ContactCard
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                icon={<Phone className="h-5 w-5" />}
                title={SITE.phone}
                desc={t("con.phone.desc")}
              />
              <ContactCard
                href={`mailto:${SITE.email}`}
                icon={<Mail className="h-5 w-5" />}
                title={SITE.email}
                desc={t("con.email.desc")}
              />
            </div>
          </Reveal>

            <Reveal delay={120} className="relative overflow-hidden rounded-xl border border-white/10 bg-surface-raised p-6 md:p-8">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#B9D986]/30 to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.04),transparent_60%)]" />
              <div className="relative mb-7 flex items-center gap-3">
                <span className="h-px w-8 bg-[#B9D986]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#B9D986]">
                  {t("con.form.heading")}
                </span>
              </div>
              <form onSubmit={submit} className="relative space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-[#F4F5F0]/75">
                    {t("con.form.name")}
                  </Label>
                  <Input id="name" name="name" required maxLength={100} className={inputClass} />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-[#F4F5F0]/75">
                    {t("con.form.email")}
                  </Label>
                  <Input id="email" name="email" type="email" required maxLength={255} className={inputClass} />
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-[#F4F5F0]/75">
                    {t("con.form.phone")}
                  </Label>
                  <Input id="phone" name="phone" type="tel" maxLength={20} className={inputClass} />
                </div>
                <div>
                  <Label htmlFor="subject" className="text-sm font-medium text-[#F4F5F0]/75">
                    {t("con.form.subject")}
                  </Label>
                  <Input id="subject" name="subject" required maxLength={120} className={inputClass} />
                </div>
              </div>
              <div>
                <Label htmlFor="message" className="text-sm font-medium text-[#F4F5F0]/75">
                  {t("con.form.message")}
                </Label>
                <Textarea id="message" name="message" required maxLength={1000} className={textareaClass} />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="h-12 w-full rounded-md bg-[#B9D986] px-5 text-sm font-semibold uppercase tracking-wider text-surface transition-colors duration-300 hover:bg-[#c8e49e] disabled:opacity-60"
              >
                {sending ? t("con.form.sending") : t("con.form.send")}
              </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
