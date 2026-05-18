import { useLang } from "@/lib/lang";

export function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useLang();
  return (
    <div
      role="group"
      aria-label="Language toggle"
      className="inline-flex items-center rounded-full border border-[color:var(--gold)]/50 bg-white p-1 shadow-sm"
    >
      <button
        type="button"
        onClick={() => setLang("hi")}
        aria-pressed={lang === "hi"}
        className={`rounded-full px-3 py-1.5 text-xs font-bold transition-colors ${
          lang === "hi"
            ? "bg-[color:var(--wine)] text-white"
            : "text-[color:var(--wine)] hover:bg-[color:var(--peach)]/40"
        }`}
      >
        <span className="font-hindi">हिंदी</span>
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`rounded-full px-3 py-1.5 text-xs font-bold transition-colors ${
          lang === "en"
            ? "bg-[color:var(--wine)] text-white"
            : "text-[color:var(--wine)] hover:bg-[color:var(--peach)]/40"
        }`}
      >
        {compact ? "EN" : "English"}
      </button>
    </div>
  );
}
