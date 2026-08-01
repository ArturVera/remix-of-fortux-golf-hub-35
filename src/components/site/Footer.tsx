import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Mail, Phone, Lock } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { SITE } from "@/lib/site";
import footerLogo from "@/assets/brand/fortux-horizontal-navy-nobg.png";
import { useI18n } from "@/lib/i18n";

const social = [
  { href: SITE.social.instagram, label: "Instagram", Icon: Instagram },
  { href: SITE.social.facebook, label: "Facebook", Icon: Facebook },
  { href: SITE.social.youtube, label: "YouTube", Icon: Youtube },
];

export function Footer() {
  const { t } = useI18n();
  const reduced = useReducedMotion();

  const col = (i: number) => ({
    initial: reduced ? false : { opacity: 0, y: 16 },
    whileInView: reduced ? undefined : { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-10% 0px" },
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const, delay: (i * 60) / 1000 },
  });

  /* Atelier register: the footer reads as the colophon of a printed dossier —
     ivory ground, a brass rule above it, serif column heads. */
  return (
    <footer className="border-t-2 border-atelier-accent bg-atelier text-atelier-ink">
      <div className="container-fortux grid gap-10 py-14 md:grid-cols-4">
        <motion.div className="md:col-span-2" {...col(0)}>
          <Link to="/" className="mb-5 inline-flex" aria-label="Fortux — Inicio">
            <img src={footerLogo} alt="Fortux" className="h-9 w-auto" />
          </Link>
          <p className="max-w-md text-[14.5px] leading-[1.7] text-atelier-ink/80">{t("footer.tagline")}</p>
          <div className="mt-6 flex gap-2.5">
            {social.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid h-9 w-9 place-items-center border border-atelier-line text-atelier-muted transition-colors hover:border-atelier-brass hover:text-atelier-accent"
              >
                <Icon className="h-4 w-4" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div {...col(1)}>
          <h4 className="mb-3.5 font-display text-[10px] font-bold uppercase tracking-[0.16em] text-atelier-brass">
            {t("footer.nav")}
          </h4>
          <ul className="space-y-2 text-[14px] text-atelier-ink/80">
            <li><Link to="/servicios" className="transition-colors hover:text-atelier-accent">{t("nav.services")}</Link></li>
            <li><Link to="/tienda" className="transition-colors hover:text-atelier-accent">{t("nav.shop")}</Link></li>
            <li><Link to="/academia" className="transition-colors hover:text-atelier-accent">{t("nav.academy")}</Link></li>
            <li><Link to="/circuito" className="transition-colors hover:text-atelier-accent">{t("nav.circuit")}</Link></li>
            <li><Link to="/noticias" className="transition-colors hover:text-atelier-accent">{t("nav.news")}</Link></li>
            <li><Link to="/galeria" className="transition-colors hover:text-atelier-accent">{t("nav.gallery")}</Link></li>
          </ul>
        </motion.div>

        <motion.div {...col(2)}>
          <h4 className="mb-3.5 font-display text-[10px] font-bold uppercase tracking-[0.16em] text-atelier-brass">
            {t("footer.contact")}
          </h4>
          <ul className="space-y-2.5 text-[14px] text-atelier-ink/80">
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-atelier-muted" strokeWidth={1.5} />
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="tabular-nums transition-colors hover:text-atelier-accent">
                {SITE.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-atelier-muted" strokeWidth={1.5} />
              <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-atelier-accent">
                {SITE.email}
              </a>
            </li>
          </ul>
        </motion.div>
      </div>

      <div className="border-t border-atelier-line">
        <div className="container-fortux flex flex-col items-center gap-3 py-5 font-display text-[11px] text-atelier-muted">
          <p>© {new Date().getFullYear()} Fortux. {t("footer.rights")}</p>
          <div className="flex gap-4">
            <a href="#" className="transition-colors hover:text-atelier-accent">{t("footer.legal")}</a>
            <a href="#" className="transition-colors hover:text-atelier-accent">{t("footer.privacy")}</a>
            <a href="#" className="transition-colors hover:text-atelier-accent">{t("footer.cookies")}</a>
          </div>
          <Link to="/admin" className="inline-flex items-center gap-1.5 transition-colors hover:text-atelier-accent">
            <Lock className="h-3 w-3" />
            {t("footer.admin")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
