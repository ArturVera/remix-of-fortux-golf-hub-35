import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { ArrowRight, Star, ChevronDown, ExternalLink, BarChart3, ListChecks, Users, Cpu, MessageSquare, Award, ShieldCheck } from "lucide-react";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { SITE, waLink } from "@/lib/site";
import { supabase } from "@/integrations/supabase/client";
import { Reveal } from "@/components/site/Reveal";
import { useI18n } from "@/lib/i18n";
import marcPhoto from "@/assets/retrat-marc.jpg";
import gerardPhoto from "@/assets/retrat-gerard.jpg";
import heroImg from "@/assets/hero-taller-grip.jpg";
import gripAssemblyImg from "@/assets/taller-grip-muntatge.jpg";
import fortuxMark from "@/assets/brand/fortux-vertical-nobg.png";
import vanLineArt from "@/assets/fortux-van-lineart.png";
import mulliganCrest from "@/assets/mulligan-segell.png";
import fortuxCrest from "@/assets/fortux-segell.png";
import repairImg from "@/assets/servei-reparacio-wedge.jpg";
import varillasImg from "@/assets/servei-manteniment-joc.jpg";
import lieLoftImg from "@/assets/servei-personalitzacio-putter.jpg";
import academyImg from "@/assets/servei-academia-classe.jpg";
import cBdalona from "@/assets/campos/bdalona.png.asset.json";
import cCanCuyas from "@/assets/campos/can-cuyas.png.asset.json";
import cCanRafel from "@/assets/campos/can-rafel.png.asset.json";
import cStCebria from "@/assets/campos/st-cebria.png.asset.json";
import cDaro from "@/assets/campos/daro.png.asset.json";
import cFranciac from "@/assets/campos/franciac.png.asset.json";
import cLaRoca from "@/assets/campos/la-roca.png.asset.json";
import cPar3 from "@/assets/campos/par-3.png.asset.json";
import cLaGarriga from "@/assets/campos/la-garriga.png.asset.json";
import cLloret from "@/assets/campos/lloret.png.asset.json";
import cCanMascaro from "@/assets/campos/can-mascaro.png.asset.json";
import cMora from "@/assets/campos/mora.png.asset.json";
import cPals from "@/assets/campos/pals.png.asset.json";
import cRoc3 from "@/assets/campos/roc-3.png.asset.json";
import cTeia from "@/assets/campos/teia.png.asset.json";
import cGolfSquare from "@/assets/campos/golfsquare.png.asset.json";
import cUrgell from "@/assets/campos/urgell.png.asset.json";
import cBonarea from "@/assets/campos/bonarea.png.asset.json";
import cSantCugat from "@/assets/campos/sant-cugat.png.asset.json";
import cMontseny from "@/assets/campos/montseny.png.asset.json";
import cElVendrell from "@/assets/campos/el-vendrell.png.asset.json";

const EASE = [0.22, 1, 0.36, 1] as const;

const PARTNER_COURSES = [
  { name: "Badalona", url: cBdalona.url },
  { name: "Can Cuyàs", url: cCanCuyas.url },
  { name: "Can Rafel", url: cCanRafel.url },
  { name: "Sant Cebrià", url: cStCebria.url },
  { name: "Daró", url: cDaro.url },
  { name: "Franciac", url: cFranciac.url },
  { name: "La Roca", url: cLaRoca.url },
  { name: "Par 3", url: cPar3.url },
  { name: "La Garriga", url: cLaGarriga.url },
  { name: "Lloret", url: cLloret.url },
  { name: "Can Mascaró", url: cCanMascaro.url },
  { name: "Mora", url: cMora.url },
  { name: "Pals", url: cPals.url },
  { name: "Roc 3", url: cRoc3.url },
  { name: "Teià", url: cTeia.url },
  { name: "El Vendrell", url: cElVendrell.url },
  { name: "Golf Square", url: cGolfSquare.url },
  { name: "Urgell", url: cUrgell.url },
  { name: "BonÀrea", url: cBonarea.url },
  { name: "Sant Cugat", url: cSantCugat.url },
  { name: "Montseny", url: cMontseny.url },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fortux — El teu equip, ajustat a tu" },
      { name: "description", content: "Taller de golf a Barcelona. Reparem, ajustem i posem a punt pals de golf: grips, varetes, lie, loft i swing weight. Peça a peça, a mà." },
      { property: "og:title", content: "Fortux — El teu equip, ajustat a tu" },
      { property: "og:description", content: "Reparació, manteniment, grips, fitting, personalització i acadèmia. Taller de golf a Barcelona." },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

/* Copy lives in the i18n dictionaries (ca + es); these tables hold only the
   lookup keys and the things that are not language-dependent. */
const SERVICES = [
  { k: "s1", img: repairImg, to: "/servicios/reemplazo-del-grip" as const },
  { k: "s2", img: varillasImg, to: "/servicios/ajustes-de-varillas" as const },
  { k: "s3", img: heroImg, to: "/tienda" as const },
  { k: "s4", img: gripAssemblyImg, to: "/servicios/swing-weight" as const },
  { k: "s5", img: lieLoftImg, to: "/servicios/lie-loft" as const },
  { k: "s6", img: academyImg, to: "/academia" as const },
];

const PROCESS = ["p1", "p2", "p3", "p4"];

const VALUES = [
  { icon: Cpu, k: "v1" },
  { icon: MessageSquare, k: "v2" },
  { icon: Award, k: "v3" },
  { icon: ShieldCheck, k: "v4" },
];

function Home() {
  const { t } = useI18n();
  const { data: reviews = [] } = useQuery({
    queryKey: ["reviews-home"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("reviews")
        .select("id,author_name,author_location,rating,content,avatar_url,review_date,created_at")
        .eq("is_published", true)
        .eq("rating", 5)
        .order("created_at", { ascending: false })
        .limit(5);
      if (error) throw error;
      return data;
    },
  });

  return (
    <div className="bg-atelier text-atelier-ink">
      <HeroSection />
      <IntroSection />

      <ServicesSection />
      <RitualSection />

      <ExpertsSection />
      <ValuesSection />
      <CircuitSection />
      <PartnerCoursesSection />
      <ReviewsSection reviews={reviews} />
      <SignOffSection />
    </div>
  );
}

/* --------------------------------- INTRO ---------------------------------- */

/**
 * Manifest, set as a two-column block: the statement runs large down the left
 * and the photo sits quiet on the right. The column ratio, the type size and
 * the flat treatment of the image all pull weight towards the words on purpose.
 */
function IntroSection() {
  const { t } = useI18n();
  return (
    <section className="py-16 md:py-24">
      <div className="container-fortux">
        <div className="grid items-center gap-10 lg:grid-cols-[1.75fr_1fr] lg:gap-16">
          <Reveal>
            <blockquote className="font-display text-[clamp(2rem,4.6vw,3.9rem)] font-bold uppercase leading-[0.98] text-balance">
              {t("atl.quote")}
            </blockquote>
            <div className="mt-6 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-atelier-brass">
              {t("atl.quoteAttr")}
            </div>
            <p className="mt-8 max-w-[46ch] text-[15.5px] leading-[1.8] text-atelier-ink/85">
              {t("atl.intro.after")}
            </p>
          </Reveal>

          {/* Flat and unlifted — no white mount, no shadow — so it reads as a
              reference image next to the statement rather than a feature. */}
          <Reveal delay={160} as="figure">
            <img
              src={gripAssemblyImg}
              alt={t("atl.fig.grip")}
              loading="lazy"
              width={1100}
              height={825}
              className="block w-full border border-atelier-line object-cover opacity-90"
            />
            <figcaption className="mt-2.5 flex items-center justify-between font-display text-[10px] uppercase tracking-[0.08em] text-atelier-brass">
              <span>{t("atl.fig.grip")}</span>
              <span>{t("atl.figNote")}</span>
            </figcaption>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- SHARED BITS ------------------------------- */

/**
 * Full-bleed hero: the photo runs edge to edge with the headline resting on the
 * scrimmed left side. This deliberately drops the mounted-plate framing the rest
 * of the page uses, so the gallery code is carried instead by the cartela rule
 * directly beneath the image.
 *
 * Veil stops were measured, not eyeballed: the gradients were composited over
 * the real photo at each breakpoint, checking both the worst pixel behind the
 * copy and how much of the photo's own brightness survives. A single diagonal
 * veil failed on narrow screens (1.92:1 at 375px) because the cover-crop puts
 * the lit concrete wall behind bottom-anchored text; veiling everything to fix
 * that left only ~15% of the photo's light and killed the image. Splitting the
 * two cases at lg holds 5.6-10.9:1 on the copy while keeping ~75% of the photo.
 */
function HeroSection() {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 64]);

  const group = { visible: { transition: { staggerChildren: 0.09 } } };
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
  };

  return (
    <>
      <section
        ref={sectionRef}
        className="relative isolate flex min-h-[440px] items-end overflow-hidden bg-atelier-ink md:min-h-[560px] lg:min-h-[640px]"
      >
        <motion.img
          src={heroImg}
          alt="Colocación de un grip nuevo en un putter sujeto en el torno del taller Fortux"
          width={1536}
          height={1024}
          className="absolute inset-x-0 -inset-y-[9%] h-[118%] w-full object-cover object-[center_45%]"
          style={{ y: reduced ? 0 : parallaxY }}
        />

        {/* Below lg the copy spans the full width, so it needs a bottom band —
            but the band stops at 72% so the top of the frame stays clear. */}
        <div
          className="pointer-events-none absolute inset-0 z-[1] lg:hidden"
          style={{
            background:
              "linear-gradient(to top, rgba(20,16,12,0.94) 0%, rgba(20,16,12,0.86) 50%, rgba(20,16,12,0.30) 72%, rgba(20,16,12,0.02) 100%)",
          }}
        />
        {/* From lg the copy sits in a narrow left column, so the veil can fall
            away sharply and leave the right two thirds of the photo untouched. */}
        <div
          className="pointer-events-none absolute inset-0 z-[1] hidden lg:block"
          style={{
            background:
              "linear-gradient(78deg, rgba(20,16,12,0.94) 0%, rgba(20,16,12,0.88) 40%, rgba(20,16,12,0.22) 60%, rgba(20,16,12,0.04) 78%, rgba(20,16,12,0) 100%)",
          }}
        />

        <motion.div
          className="container-fortux relative z-[2] py-12 md:py-16"
          variants={reduced ? undefined : group}
          initial={reduced ? undefined : "hidden"}
          animate={reduced ? undefined : "visible"}
        >
          <div className="max-w-[46ch]">
            <motion.span
              variants={reduced ? undefined : item}
              className="inline-block font-display text-[10px] font-bold uppercase tracking-[0.2em] text-[#D8C79E]"
            >
              {t("atl.dateline")}
            </motion.span>
            <motion.h1
              variants={reduced ? undefined : item}
              className="mt-5 font-display text-[2.1rem] font-bold uppercase leading-[1.02] tracking-[0.005em] text-balance text-atelier md:text-5xl lg:text-6xl"
            >
              {t("atl.hero.title")}
            </motion.h1>
            <motion.p
              variants={reduced ? undefined : item}
              className="mt-5 max-w-[38ch] text-[14.5px] leading-[1.7] text-atelier/85"
            >
              {t("atl.hero.sub")}
            </motion.p>
            <motion.div variants={reduced ? undefined : item} className="mt-8 flex flex-wrap gap-3">
              <a
                href={waLink(t("atl.wa.review"))}
                target="_blank"
                rel="noopener"
                className="inline-flex h-11 items-center gap-2 bg-[#D8C79E] px-6 font-display text-[11px] font-bold uppercase tracking-[0.1em] text-atelier-ink transition-colors hover:bg-[#e4d6b3]"
              >
                {t("atl.hero.cta1")} <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
              </a>
              <Link
                to="/servicios"
                className="inline-flex h-11 items-center border border-[#D8C79E]/70 px-6 font-display text-[11px] font-bold uppercase tracking-[0.1em] text-atelier transition-colors hover:bg-[#D8C79E] hover:text-atelier-ink"
              >
                {t("atl.hero.cta2")}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Cartela rule — keeps the gallery code the full-bleed image gives up. */}
      <div className="border-b border-atelier-line">
        <div className="container-fortux flex items-center justify-between gap-4 py-3 font-display text-[10px] uppercase tracking-[0.08em] text-atelier-brass">
          <span>{t("atl.fig1")}</span>
          <span>{t("atl.figNote")}</span>
        </div>
      </div>
    </>
  );
}

/* -------------------------------- SERVICES -------------------------------- */

/**
 * Horizontal accordion: all six photos stay on screen as narrow desaturated
 * strips and the active one opens, regains colour and reveals its description.
 * It cycles on its own every 3.5s.
 *
 * Autoplay is deliberately easy to stop — it halts on hover, on keyboard focus,
 * when scrolled out of view, and via an explicit button — and never starts at
 * all under prefers-reduced-motion. Each strip is a real link, so the section
 * is fully usable with no pointer and no JavaScript-driven motion.
 */
function ServicesSection() {
  const { t } = useI18n();
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-15% 0px" });
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [held, setHeld] = useState(false);

  const running = !paused && !held && inView && !reduced;

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => setActive((a) => (a + 1) % SERVICES.length), 3500);
    return () => window.clearInterval(id);
  }, [running]);

  return (
    <section className="py-14 md:py-20">
      <div className="container-fortux">
        <span className="mb-8 block font-display text-[10.5px] font-bold uppercase tracking-[0.16em] text-atelier-brass">
          {t("atl.services.eyebrow")}
        </span>

        <Reveal>
          <div
            ref={ref}
            className="flex h-[420px] flex-col gap-1 md:h-[320px] md:flex-row"
            onMouseEnter={() => setHeld(true)}
            onMouseLeave={() => setHeld(false)}
          >
            {SERVICES.map((s, i) => {
              const on = i === active;
              return (
                <Link
                  key={s.k}
                  to={s.to}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => {
                    setActive(i);
                    setHeld(true);
                  }}
                  onBlur={() => setHeld(false)}
                  style={{ flexGrow: on ? 3.4 : 1 }}
                  className="group relative min-h-0 flex-1 basis-0 overflow-hidden border border-atelier-line transition-[flex-grow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                >
                  <img
                    src={s.img}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className={
                      "absolute inset-0 h-full w-full object-cover transition-[filter] duration-500 " +
                      (on ? "" : "brightness-[0.82] grayscale-[0.55]")
                    }
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(20,16,12,0.82)] via-[rgba(20,16,12,0.18)] to-transparent"
                  />
                  <span className="absolute left-2.5 top-2 z-[2] font-display text-[9px] font-bold tracking-[0.1em] text-[#D8C79E]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={
                      "absolute bottom-3 left-3 right-3 z-[2] block font-display font-bold uppercase leading-[1.05] text-atelier " +
                      (on ? "text-lg md:text-xl" : "text-[13px] md:[writing-mode:vertical-rl] md:rotate-180 md:bottom-3 md:right-auto")
                    }
                  >
                    {t(`atl.${s.k}.t`)}
                  </span>
                  <span
                    className={
                      "absolute bottom-11 left-3 right-3 z-[2] hidden text-[12px] leading-[1.45] text-atelier/90 transition-opacity duration-300 md:block " +
                      (on ? "opacity-100 delay-150" : "opacity-0")
                    }
                  >
                    {t(`atl.${s.k}.d`)}
                  </span>
                </Link>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/servicios"
            className="inline-flex items-center gap-2 font-display text-[11px] font-semibold uppercase tracking-wide text-atelier-accent hover:text-atelier-brass"
          >
            {t("atl.services.cta")} <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          {!reduced && (
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              aria-label={t("atl.anim.label")}
              className="border border-atelier-accent px-3 py-1.5 font-display text-[10px] font-bold uppercase tracking-[0.12em] text-atelier-accent transition-colors hover:bg-atelier-accent hover:text-atelier"
            >
              {paused ? t("atl.anim.play") : t("atl.anim.pause")}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- RITUAL --------------------------------- */

/* The van drawing dissolves away exactly where the reading column starts, so it
   never sits behind running text — and the fade doubles as a hint of movement.
   It is pure decoration, hence empty alt and aria-hidden. */
const VAN_FADE =
  "linear-gradient(100deg, transparent 4%, rgba(0,0,0,0.35) 32%, #000 78%)";

function RitualSection() {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.5"] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="relative overflow-hidden py-14 md:py-20">
      <img
        src={vanLineArt}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none absolute -bottom-[6%] -right-[6%] w-[110%] select-none opacity-[0.08] md:w-[70%] md:opacity-30"
        style={{ WebkitMaskImage: VAN_FADE, maskImage: VAN_FADE }}
      />

      <div className="container-fortux relative">
        <div ref={ref} className="relative max-w-[62ch] pl-8">
          <span className="mb-6 block font-display text-[10.5px] font-bold uppercase tracking-[0.16em] text-atelier-brass">
            {t("atl.ritual.eyebrow")}
          </span>
          <div className="pointer-events-none absolute left-[3px] top-9 bottom-1.5 w-px bg-atelier-line" />
          <motion.div
            className="pointer-events-none absolute left-[3px] top-9 w-px origin-top bg-atelier-brass"
            style={{ scaleY: reduced ? 1 : lineScale, height: "calc(100% - 44px)" }}
          />
          {PROCESS.map((p, i) => (
            <Reveal key={p} delay={i * 90} className="relative mb-9 last:mb-0">
              <span className="absolute -left-8 top-1.5 h-1.5 w-1.5 rounded-full bg-atelier-brass" />
              <h3 className="font-display text-lg font-bold uppercase">{t(`atl.${p}.t`)}</h3>
              <p className="mt-1 text-[13.5px] leading-[1.6] text-atelier-muted">{t(`atl.${p}.d`)}</p>
            </Reveal>
          ))}

          <Reveal delay={PROCESS.length * 90} className="mt-10 border-t border-atelier-line pt-6">
            <h3 className="font-display text-xl font-bold uppercase text-atelier-accent">
              {t("atl.mobile.title")}
            </h3>
            <p className="mt-2 max-w-[46ch] text-[13.5px] leading-[1.6] text-atelier-muted">
              {t("atl.mobile.body")}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- EXPERTS -------------------------------- */

function StatCounter({ target, suffix = "", label }: { target: number; suffix?: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduced = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    // Safety net: if the viewport observer never fires (e.g. a
    // backgrounded/prerendered tab), don't leave the stat stuck at 0.
    const fallback = window.setTimeout(() => setValue((v) => (v === 0 ? target : v)), 5000);
    return () => window.clearTimeout(fallback);
  }, [target]);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setValue(target);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const duration = 1100;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduced, target]);

  return (
    <div ref={ref}>
      <div className="font-display text-4xl font-semibold tabular-nums text-atelier-accent">
        {value}
        {suffix}
      </div>
      <div className="mt-1 font-display text-[10px] uppercase tracking-[0.14em] text-atelier-muted">{label}</div>
    </div>
  );
}

/* Split screen: half the section each, portraits full-bleed with the name over
   a bottom scrim.
 *
 * Both values below were measured by compositing the scrim over the two real
 * photographs at desktop and mobile crops, not eyeballed. The brand brass
 * (#D8C79E) only reaches 3.5:1 on the role label, well under the 4.5:1 floor
 * for text that size. Rather than wash the label out to near-white, the scrim
 * carries a little more weight (0.93) so a genuinely brass tone still clears
 * it: worst case 4.83:1. Change either one and the pair needs re-measuring. */
const SPLIT_SCRIM =
  "linear-gradient(0deg, rgba(20,16,12,0.93) 0%, rgba(20,16,12,0.22) 62%, rgba(20,16,12,0) 100%)";
const SPLIT_BRASS = "#E6D8B6";

function TeamHalf({
  photo,
  name,
  role,
  line,
  delay,
}: {
  photo: string;
  name: string;
  role: string;
  line: string;
  delay: number;
}) {
  return (
    <Reveal delay={delay} className="relative flex min-h-[360px] items-end overflow-hidden md:min-h-[460px]">
      <img
        src={photo}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-[center_35%]"
      />
      <div className="pointer-events-none absolute inset-0" style={{ background: SPLIT_SCRIM }} />
      <div className="relative z-[2] p-6 md:p-7">
        <h3 className="font-display text-3xl font-bold uppercase leading-none text-atelier md:text-4xl">
          {name}
        </h3>
        <div
          className="mt-2 font-display text-[10px] font-bold uppercase tracking-[0.16em]"
          style={{ color: SPLIT_BRASS }}
        >
          {role}
        </div>
        <p className="mt-3 max-w-[34ch] text-[12.5px] leading-[1.5] text-atelier/90">{line}</p>
      </div>
    </Reveal>
  );
}

function ExpertsSection() {
  const { t } = useI18n();
  return (
    <section id="nosotros" className="border-y border-atelier-line py-14 md:py-20">
      <div className="container-fortux">
        <Reveal>
          <span className="mb-6 block font-display text-[10.5px] font-bold uppercase tracking-[0.18em] text-atelier-brass">
            {t("atl.experts.eyebrow")}
          </span>
        </Reveal>

        <div className="grid gap-1 md:grid-cols-2">
          <TeamHalf
            photo={marcPhoto}
            name="Marc Fortuny"
            role={t("atl.team.marcRole")}
            line={t("atl.team.marcLine")}
            delay={0}
          />
          <TeamHalf
            photo={gerardPhoto}
            name="Gerard Rubio"
            role={t("atl.team.gerardRole")}
            line={t("atl.team.gerardLine")}
            delay={120}
          />
        </div>

        <Reveal className="mt-6 flex flex-wrap items-center justify-between gap-6">
          <Link
            to="/contacto"
            className="inline-flex h-11 items-center border border-atelier-accent px-6 font-display text-[11px] font-semibold uppercase tracking-[0.1em] text-atelier-accent transition-colors hover:bg-atelier-accent hover:text-atelier"
          >
            {t("atl.experts.cta")}
          </Link>
          <StatCounter target={20} suffix="+" label={t("atl.experts.stat")} />
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------- VALUES --------------------------------- */

function ValuesSection() {
  const { t } = useI18n();
  return (
    <section className="py-14">
      <div className="container-fortux">
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-4">
          {VALUES.map((v, i) => (
            <Reveal key={v.k} delay={i * 70} className="flex items-start gap-3.5">
              <v.icon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-atelier-brass" strokeWidth={1.5} />
              <div className="min-w-0">
                <h3 className="font-display text-[16px] font-bold uppercase">{t(`atl.${v.k}.t`)}</h3>
                <p className="mt-0.5 text-[12.5px] leading-[1.55] text-atelier-muted">{t(`atl.${v.k}.d`)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- CIRCUIT -------------------------------- */

/**
 * The embed sits inside a scoreboard-style frame with both clubs' crests in the
 * header bar, so it reads as part of the page rather than a pasted-in widget.
 *
 * The two crests are sized to equal *area*, not equal height: once trimmed of
 * their margins Mulligan's is near-square (1.04) while Fortux's is landscape
 * (1.37), so matching heights would leave Fortux visibly wider and therefore
 * bigger. h-16/h-14 and h-14/h-12 put them within 1% of the same area.
 */
function CircuitSection() {
  const { t } = useI18n();
  return (
    <section className="border-y border-atelier-line py-16 md:py-20">
      <div className="container-fortux">
        <Reveal>
          <span className="font-display text-[10.5px] font-bold uppercase tracking-[0.18em] text-atelier-brass">
            {t("atl.circuit.eyebrow")}
          </span>
        </Reveal>

        <Reveal delay={80} className="mt-4 border-2 border-atelier-ink bg-white">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-b-2 border-atelier-ink px-5 py-5 sm:flex-nowrap sm:justify-between sm:px-8">
            <img
              src={mulliganCrest}
              alt="Mulligan Pitch & Putt Club"
              loading="lazy"
              className="order-1 h-14 w-auto sm:h-16"
            />
            <h2 className="order-3 w-full text-center font-display text-[clamp(1.45rem,3.4vw,2.6rem)] font-bold uppercase leading-none text-balance sm:order-2 sm:w-auto">
              Circuit Fortux × Mulligan 2026
            </h2>
            <img
              src={fortuxCrest}
              alt="Fortux Golf"
              loading="lazy"
              className="order-2 h-12 w-auto sm:order-3 sm:h-14"
            />
          </div>

          {/* The embed has no fixed height of its own: the circuit site's content
              gets much taller as it narrows (its collaborators block ends at
              y≈2320 when 1212px wide but y≈4691 at 375px), so a single height
              either clipped the sponsors on phones or left ~2400px of blank
              space on desktop. These steps were measured on the live site and
              each one lands in the ~64px gap between the sponsors block and the
              circuit's own footer, which we do not want to show twice.
              This will drift if that site is redesigned — the durable fix is for
              it to post its height to the parent. */}
          <div className="relative w-full overflow-hidden h-[4700px] sm:h-[4180px] md:h-[3980px] min-[900px]:h-[3540px] lg:h-[2660px] xl:h-[2260px]">
            <iframe
              src="https://fortux.fairwaystudio.ai/"
              title="Circuit Fortux x Mulligan 2026"
              loading="lazy"
              scrolling="no"
              className="absolute left-0 w-full border-0"
              style={{ top: "-90px", height: "calc(100% + 90px)" }}
            />
          </div>
        </Reveal>

        <Reveal className="mt-5">
          <a
            href={SITE.circuitUrl}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 font-display text-[11px] font-semibold uppercase tracking-wide text-atelier-accent hover:text-atelier-brass"
          >
            {t("atl.circuit.cta")} <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </Reveal>

        <CircuitTabs />
      </div>
    </section>
  );
}

/* ----------------------------- PARTNER COURSES ----------------------------- */

function PartnerCoursesSection() {
  const { t } = useI18n();
  const track = [...PARTNER_COURSES, ...PARTNER_COURSES];
  return (
    <section className="py-16 md:py-20">
      <div className="container-fortux">
        <Reveal>
          <h2 className="text-center font-display text-3xl font-bold uppercase md:text-4xl">{t("atl.partners.title")}</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-[13.5px] text-atelier-muted">
            {t("atl.partners.sub")}
          </p>
        </Reveal>
      </div>
      <div className="mt-10 overflow-hidden">
        <div className="marquee-track flex w-max gap-3">
          {track.map((c, i) => (
            <div
              key={`${c.name}-${i}`}
              aria-hidden={i >= PARTNER_COURSES.length}
              className="group relative flex h-24 w-32 shrink-0 items-center justify-center border border-atelier-line bg-white p-4 transition-colors duration-300 hover:border-atelier-brass"
            >
              <img
                src={c.url}
                alt={i < PARTNER_COURSES.length ? `Camp de golf ${c.name}` : ""}
                loading="lazy"
                className="max-h-full max-w-full object-contain opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- REVIEWS -------------------------------- */

type Review = {
  id: string;
  author_name: string;
  author_location: string | null;
  rating: number;
  content: string;
  avatar_url: string | null;
};

function ReviewsSection({ reviews }: { reviews: Review[] }) {
  const { t } = useI18n();
  if (reviews.length === 0) return null;
  return (
    <section className="border-t border-atelier-line py-16 md:py-20">
      <div className="container-fortux">
        <Reveal>
          <h2 className="text-center font-display text-3xl font-bold uppercase md:text-4xl">{t("atl.reviews.title")}</h2>
        </Reveal>
        <div className="mx-auto mt-10 grid max-w-5xl gap-8 md:grid-cols-3">
          {reviews.slice(0, 3).map((r, i) => (
            <Reveal key={r.id} delay={i * 90} as="article">
              <div className="flex gap-0.5">
                {Array.from({ length: r.rating }).map((_, idx) => (
                  <Star key={idx} className="h-3.5 w-3.5 fill-atelier-brass text-atelier-brass" />
                ))}
              </div>
              <p className="mt-3 font-sans italic leading-relaxed text-atelier-ink/90">"{r.content}"</p>
              <div className="mt-4 flex items-center gap-3">
                {r.avatar_url ? (
                  <img src={r.avatar_url} alt={r.author_name} className="h-9 w-9 rounded-full object-cover" />
                ) : (
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-atelier-line text-xs font-semibold">
                    {r.author_name.slice(0, 2).toUpperCase()}
                  </div>
                )}
                <div className="min-w-0">
                  <div className="truncate font-display text-[11.5px] font-semibold uppercase tracking-wide">{r.author_name}</div>
                  {r.author_location && (
                    <div className="truncate text-[11px] text-atelier-muted">{r.author_location}</div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- SIGN-OFF -------------------------------- */

function MagneticLink({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15 });
  const springY = useSpring(y, { stiffness: 200, damping: 15 });
  const reduced = useReducedMotion();

  function handleMove(e: ReactMouseEvent<HTMLAnchorElement>) {
    if (reduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.3);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.3);
  }
  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener"
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.a>
  );
}

function SignOffSection() {
  const { t } = useI18n();
  return (
    <section className="py-20 md:py-24">
      <div className="container-fortux">
        <Reveal className="mx-auto max-w-xl text-center">
          <img src={fortuxMark} alt="Fortux" className="mx-auto h-16 w-auto object-contain md:h-20" />
          <p className="mt-8 font-sans text-xl italic leading-[1.5] md:text-2xl">
            {t("atl.signoff")}
          </p>
          <div className="mt-4 font-display text-[10px] uppercase tracking-[0.14em] text-atelier-brass">{t("atl.signoff.kicker")}</div>
          <MagneticLink
            href={waLink("Hola, querría solicitar una revisión de mi equipo.")}
            className="mt-8 inline-flex h-12 items-center gap-2 border border-atelier-accent px-8 font-display text-[11px] font-semibold uppercase tracking-[0.1em] text-atelier-accent transition-colors hover:bg-atelier-accent hover:text-atelier"
          >
            {t("atl.signoff.cta")} <ArrowRight className="h-4 w-4" />
          </MagneticLink>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------- CIRCUIT TABS --------------------------------- */

const TABS = [
  { key: "rankings", label: "Class. acumulades", icon: BarChart3, url: "https://fortux.fairwaystudio.ai/rankings" },
  { key: "proves", label: "Prova a prova", icon: ListChecks, url: "https://fortux.fairwaystudio.ai/proves" },
  { key: "jugadors", label: "Jugadors", icon: Users, url: "https://fortux.fairwaystudio.ai/jugadors" },
] as const;

function CircuitTabs() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div className="mt-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {TABS.map((tab) => {
          const isOpen = open === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => setOpen(isOpen ? null : tab.key)}
              className={`inline-flex items-center justify-center gap-2 border px-4 py-4 font-display text-[11px] font-semibold uppercase tracking-wider transition-colors ${
                isOpen
                  ? "border-atelier-accent bg-atelier-accent text-atelier"
                  : "border-atelier-line bg-white text-atelier-ink hover:border-atelier-brass"
              }`}
            >
              <tab.icon className="h-4 w-4" />
              <span>{tab.label}</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>
          );
        })}
        <a
          href="https://fortux.fairwaystudio.ai/"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center justify-center gap-2 border border-atelier-accent bg-atelier-accent px-4 py-4 font-display text-[11px] font-semibold uppercase tracking-wider text-atelier transition-colors hover:opacity-90"
        >
          <ExternalLink className="h-4 w-4" />
          <span>Veure web del circuit</span>
        </a>
      </div>

      {TABS.map((tab) => (
        <Collapsible key={tab.key} open={open === tab.key}>
          <CollapsibleContent className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
            <div className="relative w-full overflow-hidden border border-atelier-line bg-white mt-4" style={{ height: "2000px" }}>
              <iframe
                src={tab.url}
                title={tab.label}
                loading="lazy"
                scrolling="no"
                className="absolute left-0 w-full border-0"
                style={{ top: "-90px", height: "calc(100% + 90px)" }}
              />
            </div>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  );
}
