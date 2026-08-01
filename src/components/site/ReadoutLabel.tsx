import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Small mono "instrument readout" chip — the signature detail tying the
 * precision-fitting motif to real copy (measurements, stats), never invented
 * numbers.
 */
export function ReadoutLabel({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.span
      className={`inline-flex items-center gap-1.5 rounded-[3px] border border-secondary/40 bg-primary-deep/80 px-2.5 py-1 font-mono text-[10.5px] tracking-[0.08em] text-secondary ${className}`}
      initial={reduced ? false : { opacity: 0, y: 10 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: delay / 1000 }}
    >
      <span className="h-1 w-1 rounded-full bg-secondary" />
      {children}
    </motion.span>
  );
}
