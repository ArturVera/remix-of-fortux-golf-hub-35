import { LANGS, useI18n } from "@/lib/i18n";

export function LanguageSwitcher() {
  const { lang, setLang } = useI18n();
  return (
    <div className="inline-flex items-center font-display text-[11px] font-medium tracking-[0.1em] text-atelier-muted select-none">
      {LANGS.map((l, i) => (
        <span key={l.code} className="inline-flex items-center">
          {i > 0 && <span aria-hidden className="mx-1.5 text-atelier-line">/</span>}
          <button
            type="button"
            onClick={() => setLang(l.code)}
            className={
              "uppercase transition-colors " +
              (lang === l.code
                ? "text-atelier-ink"
                : "text-atelier-muted hover:text-atelier-accent")
            }
            aria-pressed={lang === l.code}
          >
            {l.code}
          </button>
        </span>
      ))}
    </div>
  );
}
