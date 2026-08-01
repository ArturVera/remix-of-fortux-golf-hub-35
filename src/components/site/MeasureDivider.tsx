import { motion, useReducedMotion } from "motion/react";

/**
 * Decorative tick-mark rule used between homepage sections — the caliper/
 * instrument motif. Draws left-to-right once when scrolled into view.
 */
export function MeasureDivider({ className = "" }: { className?: string }) {
  const reduced = useReducedMotion();

  return (
    <div className={`relative h-4 w-full overflow-hidden ${className}`}>
      <motion.div
        className="tick-rule absolute inset-y-1/2 left-0 h-px w-full origin-left"
        initial={reduced ? false : { scaleX: 0 }}
        whileInView={reduced ? undefined : { scaleX: 1 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}
