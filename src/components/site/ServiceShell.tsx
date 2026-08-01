import type { ReactNode } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { waLink } from "@/lib/site";
import { Reveal } from "@/components/site/Reveal";
import { useParallax } from "@/hooks/useParallax";

export function ServiceHero({
  eyebrow = "Servicios técnicos",
  title,
  description,
  image,
  imageAlt,
  cta = "Solicitar revisión",
  ctaMsg = "Hola, querría solicitar una revisión de mi equipo.",
  compact = false,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  cta?: string;
  ctaMsg?: string;
  compact?: boolean;
}) {
  const parallaxRef = useParallax<HTMLImageElement>(28);
  return (
    <section className="relative overflow-hidden bg-surface">
      <img
        ref={parallaxRef}
        src={image}
        alt={imageAlt}
        style={{
          position: "absolute",
          top: -40,
          right: 0,
          bottom: -40,
          width: "58vw",
          objectFit: "cover",
          objectPosition: "center right",
          zIndex: 0,
        }}
      />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-surface-edge via-surface-raised via-surface-deep to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[55%] bg-gradient-to-r from-surface-raised via-surface-raised/80 to-transparent" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-surface/45 via-transparent to-surface/35" />

      <div
        className={
          compact
            ? "container-fortux relative z-[2] py-12 md:py-16 lg:py-20"
            : "container-fortux relative z-[2] py-20 md:py-28 lg:py-32"
        }
      >
        <Reveal className="max-w-xl">
          <span className="inline-block text-[12px] font-medium uppercase tracking-[0.22em] text-secondary">
            {eyebrow}
          </span>
          <h1
            className={
              compact
                ? "mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] text-balance text-primary-foreground"
                : "mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-balance text-primary-foreground"
            }
          >
            {title}
          </h1>
          <p
            className={
              compact
                ? "mt-4 max-w-lg text-[14px] md:text-[15px] text-primary-foreground/70 leading-[1.6]"
                : "mt-6 text-[15px] md:text-[16px] text-primary-foreground/70 leading-[1.6]"
            }
          >
            {description}
          </p>
          <div className={compact ? "mt-6 flex flex-wrap gap-3" : "mt-9 flex flex-wrap gap-3"}>
            <a
              href={waLink(ctaMsg)}
              target="_blank"
              rel="noopener"
              className="inline-flex h-11 items-center gap-2 rounded-[6px] bg-[#B9D986] px-6 text-[12px] font-medium uppercase tracking-[0.12em] text-surface transition-colors hover:bg-[#c5e294]"
            >
              {cta} <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
            </a>
            <a
              href="tel:+34635112656"
              className="inline-flex h-11 items-center gap-2 rounded-[6px] border border-white/[0.22] bg-transparent px-6 text-[12px] font-medium uppercase tracking-[0.12em] text-white/85 transition-colors hover:bg-white/[0.04] hover:text-white"
            >
              <Phone className="h-4 w-4" strokeWidth={1.75} /> 635 112 656
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ServiceMedia({
  src,
  alt,
  caption,
  ratio = "16/9",
}: {
  src: string;
  alt: string;
  caption?: string;
  ratio?: "16/9" | "4/3" | "3/2" | "1/1";
}) {
  const aspect =
    ratio === "4/3"
      ? "aspect-[4/3]"
      : ratio === "3/2"
        ? "aspect-[3/2]"
        : ratio === "1/1"
          ? "aspect-square"
          : "aspect-[16/9]";
  return (
    <figure className="my-8 overflow-hidden rounded-[10px] border border-white/[0.08] bg-surface-raised">
      <div className={`relative ${aspect} overflow-hidden`}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface/40 via-transparent to-transparent" />
      </div>
      {caption && (
        <figcaption className="px-5 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-primary-foreground/55">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function ServiceSection({
  eyebrow,
  title,
  children,
  tone = "base",
}: {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  tone?: "base" | "alt";
}) {
  return (
    <section
      className={
        tone === "alt"
          ? "border-y border-white/[0.06] bg-surface-raised py-20 md:py-24"
          : "bg-surface py-20 md:py-24"
      }
    >
      <Reveal className="container-fortux max-w-5xl">
        {eyebrow && (
          <span className="inline-block text-[11px] font-medium uppercase tracking-[0.22em] text-secondary">
            {eyebrow}
          </span>
        )}
        {title && (
          <h2 className="mt-4 font-display text-2xl md:text-3xl lg:text-4xl font-bold text-balance text-primary-foreground">
            {title}
          </h2>
        )}
        <div className={title || eyebrow ? "mt-8" : ""}>{children}</div>
      </Reveal>
    </section>
  );
}

export function ServiceCard({
  index,
  title,
  children,
}: {
  index?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-[10px] border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-secondary/40 hover:bg-white/[0.05]">
      <div className="flex items-baseline gap-3">
        {index && (
          <span className="font-display text-lg font-bold text-secondary">{index}</span>
        )}
        <h3 className="font-display text-base md:text-lg font-bold text-primary-foreground">
          {title}
        </h3>
      </div>
      <div className="mt-3 text-sm text-primary-foreground/70 leading-relaxed">{children}</div>
    </div>
  );
}

export function ServiceProse({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-4 text-[15px] text-primary-foreground/75 leading-[1.7] [&_strong]:text-primary-foreground [&_strong]:font-semibold [&_a]:text-secondary [&_a]:underline-offset-4 hover:[&_a]:underline">
      {children}
    </div>
  );
}

export function ServiceFinalCTA({
  title,
  subtitle,
  msg = "Hola, querría más información.",
}: {
  title: string;
  subtitle?: string;
  msg?: string;
}) {
  return (
    <section className="bg-surface py-20">
      <div className="container-fortux">
        <Reveal className="relative overflow-hidden rounded-[10px] border border-white/[0.08] bg-surface-raised p-10 md:p-14 text-center">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_0%,rgba(185,217,134,0.05),transparent_60%)]" />
          <div className="relative">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground text-balance">
              {title}
            </h2>
            {subtitle && (
              <p className="mx-auto mt-4 max-w-2xl text-[15px] text-primary-foreground/70 leading-[1.6]">
                {subtitle}
              </p>
            )}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={waLink(msg)}
                target="_blank"
                rel="noopener"
                className="inline-flex h-11 items-center gap-2 rounded-[6px] bg-[#B9D986] px-6 text-[12px] font-medium uppercase tracking-[0.12em] text-surface transition-colors hover:bg-[#c5e294]"
              >
                WhatsApp <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
              </a>
              <a
                href="tel:+34635112656"
                className="inline-flex h-11 items-center gap-2 rounded-[6px] border border-white/[0.22] bg-transparent px-6 text-[12px] font-medium uppercase tracking-[0.12em] text-white/85 transition-colors hover:bg-white/[0.04] hover:text-white"
              >
                <Phone className="h-4 w-4" strokeWidth={1.75} /> 635 112 656
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ServiceBackLink() {
  return (
    <Link
      to="/servicios"
      className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-primary-foreground/60 hover:text-secondary"
    >
      ← Todos los servicios
    </Link>
  );
}