import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ServiceHero } from "@/components/site/ServiceShell";
import { Reveal } from "@/components/site/Reveal";
import gripsImg from "@/assets/servicios-v2/03-grips.jpg.asset.json";
import varillasImg from "@/assets/servicios-v2/01-reparacion.jpg.asset.json";
import swingWeightImg from "@/assets/servicios-v2/02-mantenimiento.jpg.asset.json";
import lieLoftImg from "@/assets/servicios-v2/04-fitting.jpg.asset.json";

export const Route = createFileRoute("/servicios/")({
  head: () => ({
    meta: [
      { title: "Servicios — Fortux" },
      { name: "description", content: "Servicios profesionales para tus palos de golf en Fortux." },
    ],
    links: [{ rel: "canonical", href: "/servicios" }],
  }),
  component: Page,
});

const SERVICES = [
  {
    n: "01",
    to: "/servicios/reemplazo-del-grip" as const,
    title: "Reemplazo de grip",
    desc: "Cambio profesional de grips para recuperar control, sensación y comodidad en cada swing.",
    img: gripsImg.url,
  },
  {
    n: "02",
    to: "/servicios/ajustes-de-varillas" as const,
    title: "Ajuste de varillas",
    desc: "Reparamos, ajustamos y cambiamos varillas de driver, hierros y putters — grafito o acero.",
    img: varillasImg.url,
  },
  {
    n: "03",
    to: "/servicios/swing-weight" as const,
    title: "Swing Weight",
    desc: "Ajustamos el equilibrio de tus palos para mejorar control, ritmo y prevenir lesiones.",
    img: swingWeightImg.url,
  },
  {
    n: "04",
    to: "/servicios/lie-loft" as const,
    title: "Lie & Loft",
    desc: "Ajustamos el lie y loft para lograr precisión, dirección y consistencia en cada golpe.",
    img: lieLoftImg.url,
  },
];

function Page() {
  return (
    <div className="bg-surface text-primary-foreground">
      <ServiceHero
        eyebrow="Servicios"
        title="Servicios técnicos para cuidar tu equipo"
        description="Reparación, mantenimiento, grips, fitting y personalización con atención experta y criterio profesional."
        image={varillasImg.url}
        imageAlt="Taller técnico Fortux"
        compact
      />

      {/* SERVICE INDEX */}
      <section className="border-t border-white/[0.06] bg-surface">
        <Reveal as="div" className="container-fortux grid grid-cols-2 gap-y-4 py-6 md:grid-cols-4 md:py-7">
          {SERVICES.map((s) => (
            <Link
              key={s.n}
              to={s.to}
              className="group flex flex-col items-start border-l border-white/[0.06] pl-4 transition-colors hover:border-secondary/60"
            >
              <span className="font-display text-2xl font-bold text-secondary transition-opacity group-hover:opacity-90">
                {s.n}
              </span>
              <span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-foreground/80 transition-colors group-hover:text-secondary">
                {s.title}
              </span>
            </Link>
          ))}
        </Reveal>
      </section>

      {/* SERVICE GRID */}
      <section className="bg-surface py-10 md:py-14">
        <div className="container-fortux">
          <div className="grid gap-5 sm:grid-cols-2">
            {SERVICES.map((s, i) => (
              <Reveal key={s.to} delay={i * 80}>
              <Link
                to={s.to}
                className="group relative flex flex-col overflow-hidden rounded-[10px] border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-secondary/60 hover:bg-white/[0.06] hover:shadow-[0_18px_40px_-20px_rgba(185,217,134,0.18)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-all duration-500 group-hover:scale-[1.04] group-hover:brightness-110"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-base font-bold text-secondary">{s.n}</span>
                    <h3 className="font-display text-xl font-bold text-primary-foreground transition-colors group-hover:text-secondary">
                      {s.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm text-primary-foreground/70 leading-relaxed">
                    {s.desc}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary">
                    <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]">
                      Ver servicio
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </span>
                </div>
              </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
