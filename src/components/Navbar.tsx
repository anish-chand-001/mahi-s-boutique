import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { waLink } from "@/lib/whatsapp";
import { useLang } from "@/lib/lang";
import { LanguageToggle } from "@/components/LanguageToggle";

const nav = [
  { to: "/", hi: "होम", en: "Home" },
  { to: "/sarees", hi: "साड़ियाँ", en: "Sarees" },
  { to: "/suits", hi: "सूट", en: "Suits" },
  { to: "/tailoring", hi: "सिलाई", en: "Tailoring" },
  { to: "/contact", hi: "संपर्क", en: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { t, lang } = useLang();
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-[color:var(--cream)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-full gold-gradient text-lg font-bold text-[color:var(--wine)] shadow-md">
            M
          </span>
          <span className="leading-tight">
            <span className="block font-display text-xl font-semibold text-[color:var(--wine)]">
              Mahi Sarees
            </span>
            <span className={`block text-[11px] text-[color:var(--wine)]/70 ${lang === "hi" ? "font-hindi" : ""}`}>
              {t("माही साड़ीज़ • Since 2010", "Mahi Sarees • Since 2010")}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={`rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-[color:var(--peach)]/40 hover:text-[color:var(--wine)] [&.active]:bg-[color:var(--wine)] [&.active]:text-white ${lang === "hi" ? "font-hindi" : ""}`}
              activeOptions={{ exact: n.to === "/" }}
            >
              {t(n.hi, n.en)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle compact />
          <a
            href={waLink(t("नमस्ते Mahi Sarees!", "Hello Mahi Sarees!"))}
            target="_blank"
            rel="noreferrer"
            className={`hidden rounded-full px-4 py-2 text-sm font-semibold text-white shadow-md transition-transform hover:scale-[1.02] sm:inline-flex ${lang === "hi" ? "font-hindi" : ""}`}
            style={{ backgroundColor: "var(--whatsapp)" }}
          >
            📱 WhatsApp
          </a>
          <button
            aria-label="Menu"
            className="grid h-11 w-11 place-items-center rounded-full border border-border md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="text-xl">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border/60 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-4 py-3 text-base font-medium text-foreground/90 hover:bg-[color:var(--peach)]/40 [&.active]:bg-[color:var(--wine)] [&.active]:text-white ${lang === "hi" ? "font-hindi" : ""}`}
                activeOptions={{ exact: n.to === "/" }}
              >
                {t(n.hi, n.en)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
