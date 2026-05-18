import { createFileRoute } from "@tanstack/react-router";
import { waLink } from "@/lib/whatsapp";
import { useLang } from "@/lib/lang";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const { t, lang } = useLang();
  const hi = lang === "hi";
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <span className="text-xs uppercase tracking-[0.25em] text-[color:var(--wine)]/70">
        {t("संपर्क", "Contact")}
      </span>
      <h1 className={`mt-2 text-4xl font-semibold text-[color:var(--wine)] sm:text-5xl ${hi ? "font-hindi" : "font-display"}`}>
        {t("हमसे बात करें", "Talk to us")}
      </h1>
      <p className={`mt-2 text-foreground/70 ${hi ? "font-hindi" : ""}`}>
        {t("हम Hindi और English दोनों में मदद करते हैं।", "We help in both Hindi and English.")}
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <a
          href={waLink(t("नमस्ते Mahi Sarees!", "Hello Mahi Sarees!"))}
          target="_blank"
          rel="noreferrer"
          className="rounded-3xl p-6 text-white shadow-lg"
          style={{ backgroundColor: "var(--whatsapp)" }}
        >
          <p className="text-3xl">💬</p>
          <p className={`mt-2 text-xl font-bold ${hi ? "font-hindi" : ""}`}>
            {t("WhatsApp पर पूछें", "Ask on WhatsApp")}
          </p>
          <p className="text-sm opacity-90">+91 99999 99999</p>
        </a>
        <a
          href="tel:+919999999999"
          className="rounded-3xl bg-[color:var(--wine)] p-6 text-white shadow-lg"
        >
          <p className="text-3xl">📞</p>
          <p className={`mt-2 text-xl font-bold ${hi ? "font-hindi" : ""}`}>
            {t("कॉल करें", "Call us")}
          </p>
          <p className="text-sm opacity-90">+91 99999 99999</p>
        </a>
      </div>

      <div className="mt-6 rounded-3xl bg-white p-6 ring-1 ring-[color:var(--gold)]/30">
        <p className="font-display text-xl text-[color:var(--wine)]">
          {t("हमारी दुकान पर आइए", "Visit our shop")}
        </p>
        <p className={`mt-2 text-foreground/80 ${hi ? "font-hindi" : ""}`}>
          {t("मुख्य बाज़ार, दुकान नं. 24, आपका शहर, भारत", "Main Market, Shop No. 24, Your City, India")}
        </p>
        <p className="text-sm text-muted-foreground">
          🕙 {t("10 AM – 9 PM • रोज़ खुला", "10 AM – 9 PM • Open all days")}
        </p>
      </div>
    </div>
  );
}
