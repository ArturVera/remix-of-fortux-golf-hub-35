import { useEffect, useRef } from "react";

/**
 * Shifts the ref'd element vertically as its containing section crosses the
 * viewport. Skipped entirely under prefers-reduced-motion — unlike a one-time
 * reveal, parallax is continuous scroll-linked motion, which is exactly the
 * kind of effect that setting is meant to suppress.
 */
export function useParallax<T extends HTMLElement>(strength = 24) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const parent = el.parentElement;
    if (!parent) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = parent.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const center = rect.top + rect.height / 2;
      const progress = (center - vh / 2) / (vh / 2 + rect.height / 2);
      const clamped = Math.max(-1, Math.min(1, progress));
      el.style.transform = `translate3d(0, ${(-clamped * strength).toFixed(2)}px, 0)`;
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [strength]);

  return ref;
}
