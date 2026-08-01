import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { waLink } from "@/lib/site";
import navLogo from "@/assets/brand/fortux-horizontal-navy-nobg.png";
import { useI18n } from "@/lib/i18n";

type NavItem = {
  to?: string;
  href?: string;
  label: string;
  children?: { to: string; label: string }[];
};

/* Atelier register: ivory ground, navy ink, brass hairline for the active item. */
const linkBase =
  "relative inline-flex items-center gap-1.5 py-2 font-display text-[11px] font-medium uppercase tracking-[0.12em] text-atelier-muted transition-colors hover:text-atelier-ink";
const linkUnderline =
  " [&.active]:text-atelier-ink [&.active]:after:scale-x-100 after:absolute after:left-0 after:right-0 after:-bottom-1 after:mx-auto after:h-px after:w-5 after:scale-x-0 after:bg-atelier-brass after:transition-transform after:duration-300";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useI18n();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const NAV: NavItem[] = [
    {
      to: "/servicios",
      label: t("nav.services"),
      children: [
        { to: "/servicios/reemplazo-del-grip", label: t("nav.gripReplace") },
        { to: "/servicios/ajustes-de-varillas", label: t("nav.shaftAdjust") },
        { to: "/servicios/swing-weight", label: "Swing Weight" },
        { to: "/servicios/lie-loft", label: "Lie & Loft" },
      ],
    },
    { to: "/tienda", label: t("nav.shop") },
    { to: "/academia", label: t("nav.academy") },
    { to: "/circuito", label: t("nav.tournaments") },
    { href: "/#nosotros", label: t("nav.about") },
    { to: "/contacto", label: t("nav.contact") },
  ];
  return (
    <header
      className={
        "sticky top-0 z-50 w-full bg-atelier text-atelier-ink transition-all duration-500 " +
        (scrolled
          ? "border-b border-atelier-line bg-atelier/95 backdrop-blur-xl"
          : "border-b border-transparent")
      }
    >
      <div className="mx-auto flex h-[68px] max-w-[1440px] items-center justify-between gap-10 px-6 md:px-10 lg:px-14">
        <Link
          to="/"
          className="flex items-center shrink-0 py-3"
          onClick={() => setOpen(false)}
          aria-label="Fortux — Inicio"
        >
          <img src={navLogo} alt="Fortux" className="h-6 md:h-[26px] w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          {NAV.map((item) =>
            item.children && item.to ? (
              <div key={item.to} className="relative group">
                <Link to={item.to} className={linkBase + linkUnderline} activeProps={{ className: "active" }}>
                  {item.label}
                  <ChevronDown className="h-3 w-3 opacity-50 transition-transform group-hover:rotate-180" />
                </Link>
                <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="min-w-[240px] border border-atelier-line bg-white p-2 shadow-[0_1px_2px_rgba(36,30,25,0.06),0_14px_30px_-16px_rgba(36,30,25,0.28)]">
                    {item.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        className="block px-3 py-2 font-display text-[11.5px] font-medium uppercase tracking-[0.11em] text-atelier-muted transition-colors hover:bg-atelier hover:text-atelier-ink"
                        activeProps={{ className: "text-atelier-ink" }}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : item.href ? (
              <a key={item.href} href={item.href} className={linkBase}>
                {item.label}
              </a>
            ) : (
              <Link
                key={item.to!}
                to={item.to!}
                activeOptions={{ exact: item.to === "/" }}
                className={linkBase + linkUnderline}
                activeProps={{ className: "active" }}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-6 shrink-0">
          <LanguageSwitcher />
          <a
            href={waLink(t("atl.wa.review"))}
            target="_blank"
            rel="noopener"
            className="group inline-flex h-[38px] items-center gap-2 border border-atelier-accent bg-transparent px-[22px] font-display text-[11px] font-medium uppercase tracking-[0.12em] text-atelier-accent transition-colors duration-300 hover:bg-atelier-accent hover:text-atelier"
          >
            {t("atl.hero.cta1")}
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
          </a>
        </div>

        <button
          aria-label="Menu"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center text-atelier-ink transition-transform hover:bg-atelier-line/50 active:scale-90"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
            exit={{ height: 0, opacity: 0, transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] } }}
            className="lg:hidden overflow-hidden border-t border-atelier-line bg-atelier text-atelier-ink"
          >
            <div className="mx-auto max-w-[1440px] px-6 py-5 flex flex-col gap-1">
              {NAV.map((item) =>
                item.children && item.to ? (
                  <div key={item.to} className="flex flex-col">
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      className="flex items-center justify-between px-3 py-3 font-display text-[12px] font-medium uppercase tracking-[0.11em] text-atelier-ink hover:bg-atelier-line/40"
                    >
                      {item.label}
                      <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                    </button>
                    {mobileServicesOpen && (
                      <div className="ml-3 flex flex-col border-l border-atelier-line pl-3">
                        <Link
                          to={item.to}
                          onClick={() => setOpen(false)}
                          className="px-3 py-2 font-display text-[12px] font-medium uppercase tracking-[0.11em] text-atelier-muted hover:text-atelier-ink"
                          activeProps={{ className: "text-atelier-ink" }}
                        >
                          {t("nav.allServices")}
                        </Link>
                        {item.children.map((c) => (
                          <Link
                            key={c.to}
                            to={c.to}
                            onClick={() => setOpen(false)}
                            className="px-3 py-2 font-display text-[12px] font-medium uppercase tracking-[0.11em] text-atelier-muted hover:text-atelier-ink"
                            activeProps={{ className: "text-atelier-ink" }}
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : item.href ? (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="px-3 py-3 font-display text-[12px] font-medium uppercase tracking-[0.11em] text-atelier-ink hover:bg-atelier-line/40"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.to!}
                    to={item.to!}
                    onClick={() => setOpen(false)}
                    className="px-3 py-3 font-display text-[12px] font-medium uppercase tracking-[0.11em] text-atelier-ink hover:bg-atelier-line/40"
                    activeProps={{ className: "text-atelier-accent" }}
                  >
                    {item.label}
                  </Link>
                ),
              )}
              <div className="mt-4 flex items-center justify-between gap-4 border-t border-atelier-line pt-4">
                <LanguageSwitcher />
                <a
                  href={waLink("Hola, querría solicitar una revisión de mi equipo.")}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex h-[38px] items-center gap-2 border border-atelier-accent bg-transparent px-6 font-display text-[11px] font-medium uppercase tracking-[0.12em] text-atelier-accent"
                >
                  {t("atl.hero.cta1")}
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.25} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
