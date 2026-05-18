import { waLink } from "@/lib/whatsapp";
import { useLang } from "@/lib/lang";

export function Footer() {
  const { t, lang } = useLang();
  return (
    <footer className="mt-16 border-t border-border/60 bg-[color:var(--wine)] text-[color:var(--cream)]">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-full gold-gradient text-lg font-bold text-[color:var(--wine)]">
              M
            </span>
            <div>
              <p className="font-display text-xl">Mahi Sarees</p>
              <p className={`text-xs opacity-80 ${lang === "hi" ? "font-hindi" : ""}`}>
                {t("माही साड़ीज़ • Since 2010", "Mahi Sarees • Since 2010")}
              </p>
            </div>
          </div>
          <p className={`mt-4 text-sm opacity-80 ${lang === "hi" ? "font-hindi" : ""}`}>
            {t(
              "हर महिला के लिए खास डिज़ाइन। साड़ियों और सिलाई का भरोसेमंद नाम।",
              "Special designs for every woman. The trusted name in sarees and tailoring.",
            )}
          </p>
        </div>

        <div>
          <p className="font-display text-lg text-[color:var(--gold)]">{t("दुकान पर आइए", "Visit Shop")}</p>
          <p className={`mt-3 text-sm opacity-90 ${lang === "hi" ? "font-hindi" : ""}`}>
            {t("मुख्य बाज़ार, दुकान नं. 24,", "Main Market, Shop No. 24,")}
            <br />
            {t("आपका शहर, भारत", "Your City, India")}
          </p>
          <p className="mt-2 text-sm opacity-80">{t("खुलने का समय: 10 AM – 9 PM", "Open: 10 AM – 9 PM")}</p>
        </div>

        <div>
          <p className="font-display text-lg text-[color:var(--gold)]">{t("त्वरित सहायता", "Quick Help")}</p>
          <ul className="mt-3 space-y-2 text-sm opacity-90">
            <li>📞 +91 99999 99999</li>
            <li>✉️ hello@mahisarees.in</li>
            <li>📍 {t("दिशा-निर्देश", "Get Directions")}</li>
          </ul>
        </div>

        <div>
          <p className="font-display text-lg text-[color:var(--gold)]">
            {t("WhatsApp पर ऑर्डर करें", "Order on WhatsApp")}
          </p>
          <a
            href={waLink(t("नमस्ते! मुझे ऑर्डर करना है।", "Hello! I'd like to place an order."))}
            target="_blank"
            rel="noreferrer"
            className={`mt-3 inline-flex w-full items-center justify-center rounded-2xl px-5 py-3 text-base font-semibold text-white shadow-lg ${lang === "hi" ? "font-hindi" : ""}`}
            style={{ backgroundColor: "var(--whatsapp)" }}
          >
            {t("WhatsApp पर बात करें", "Chat on WhatsApp")}
          </a>
          <p className="mt-3 text-xs opacity-70">
            {t("Hindi और English में मदद उपलब्ध।", "Personalised help in Hindi & English.")}
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs opacity-70">
        © {new Date().getFullYear()} Mahi Sarees. {t("प्यार से बनाया गया ♥", "Made with ♥ for our customers.")}
      </div>
    </footer>
  );
}
