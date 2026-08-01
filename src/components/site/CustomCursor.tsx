import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

/**
 * Decorative crosshair that trails the real cursor — never replaces it, so
 * losing this component (or a JS error) never costs pointer feedback.
 * Desktop + fine-pointer only, and skipped under prefers-reduced-motion since
 * it's continuous pointer-linked motion, not a one-time entrance.
 */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 320, damping: 32, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 320, damping: 32, mass: 0.4 });

  useEffect(() => {
    const hoverFine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(hoverFine.matches && !reduced.matches);
    update();
    hoverFine.addEventListener("change", update);
    reduced.addEventListener("change", update);
    return () => {
      hoverFine.removeEventListener("change", update);
      reduced.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] h-7 w-7 -translate-x-1/2 -translate-y-1/2"
      style={{ x: springX, y: springY }}
    >
      <svg viewBox="0 0 28 28" className="h-full w-full opacity-70">
        <circle cx="14" cy="14" r="10" fill="none" stroke="#2F4A3B" strokeWidth="1" />
        <line x1="14" y1="0" x2="14" y2="5" stroke="#2F4A3B" strokeWidth="1" />
        <line x1="14" y1="23" x2="14" y2="28" stroke="#2F4A3B" strokeWidth="1" />
        <line x1="0" y1="14" x2="5" y2="14" stroke="#2F4A3B" strokeWidth="1" />
        <line x1="23" y1="14" x2="28" y2="14" stroke="#2F4A3B" strokeWidth="1" />
      </svg>
    </motion.div>
  );
}
