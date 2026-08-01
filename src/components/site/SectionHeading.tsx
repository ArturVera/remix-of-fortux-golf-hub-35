import type { ReactNode } from "react";
import { Reveal } from "@/components/site/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span className="inline-block rounded-full bg-secondary/40 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">{subtitle}</p>}
    </Reveal>
  );
}
