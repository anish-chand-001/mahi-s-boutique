import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import tailoringImg from "@/assets/cat-tailoring.jpg";
import { tailoringServices } from "@/lib/products";
import { waLink } from "@/lib/whatsapp";
import { useLang } from "@/lib/lang";

export const Route = createFileRoute("/tailoring")({
  component: TailoringPage,
});

function TailoringPage() {
  const { t, lang } = useLang();
  const hi = lang === "hi";
  return (
    <div>
      <section className="silk-bg">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 md:grid-cols-2 md:py-20">
          <div>
            <span className={`inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/50 bg-white/70 px-3 py-1 text-xs font-medium text-[color:var(--wine)] ${hi ? "font-hindi" : ""}`}>
              ✂️ {t("अनुभवी टेलर", "Experienced tailors")}
            </span>
            <h1 className={`mt-3 text-4xl font-semibold text-[color:var(--wine)] sm:text-5xl ${hi ? "font-hindi" : "font-display"}`}>
              {t("सिलाई और फिटिंग सेवा", "Tailoring & Fitting Services")}
            </h1>
            <p className={`mt-3 max-w-md text-foreground/80 ${hi ? "font-hindi" : ""}`}>
              {t(
                "ब्लाउज़, सूट, अल्टरेशन और कस्टम डिज़ाइनिंग — समय पर डिलीवरी की गारंटी।",
                "Blouses, suits, alterations and custom designs — on-time delivery guaranteed.",
              )}
            </p>
            <a
              href={waLink(t("नमस्ते! मुझे सिलाई बुक करनी है।", "Hello! I'd like to book tailoring."))}
              target="_blank"
              rel="noreferrer"
              className={`mt-5 inline-flex rounded-2xl px-5 py-4 text-base font-semibold text-white shadow-lg ${hi ? "font-hindi" : ""}`}
              style={{ backgroundColor: "var(--whatsapp)" }}
            >
              {t("अभी बुक करें", "Book now")}
            </a>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden rounded-[2rem] shadow-2xl ring-4 ring-white"
          >
            <img src={tailoringImg} alt="" width={800} height={800} className="h-[420px] w-full object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className={`text-3xl font-semibold text-[color:var(--wine)] ${hi ? "font-hindi" : "font-display"}`}>
          {t("हमारी सेवाएँ", "Our Services")}
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {tailoringServices.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-3xl bg-white p-5 ring-1 ring-[color:var(--gold)]/30"
            >
              <p className="text-3xl">{s.emoji}</p>
              <p className={`mt-2 text-lg font-semibold text-[color:var(--wine)] ${hi ? "font-hindi" : ""}`}>
                {t(s.hindi, s.title)}
              </p>
              <p className="text-xs text-muted-foreground">{hi ? s.title : s.hindi}</p>
              <div className="mt-3 flex items-center justify-between">
                <p className="font-display text-xl font-bold text-[color:var(--wine)]">
                  ₹{s.from}+
                </p>
                <a
                  href={waLink(
                    t(
                      `नमस्ते! मुझे ${s.hindi} के बारे में पूछना है।`,
                      `Hello! I'd like to ask about ${s.title}.`,
                    ),
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className={`rounded-full px-3 py-2 text-xs font-semibold text-white ${hi ? "font-hindi" : ""}`}
                  style={{ backgroundColor: "var(--whatsapp)" }}
                >
                  {t("पूछें", "Ask")}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-[2rem] bg-[color:var(--wine)] p-8 text-white">
          <h3 className={`text-2xl font-semibold ${hi ? "font-hindi" : "font-display"}`}>
            {t("कैसे काम करता है?", "How it works")}
          </h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {[
              { n: "1", hiT: "WhatsApp भेजें", enT: "Send on WhatsApp", e: "Send your design / photo" },
              { n: "2", hiT: "माप लें", enT: "Take measurements", e: "Visit shop or share measurements" },
              { n: "3", hiT: "डिलीवरी पाएँ", enT: "Get delivery", e: "Ready in 5–7 days" },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <span className="grid h-10 w-10 place-items-center rounded-full gold-gradient text-base font-bold text-[color:var(--wine)]">
                  {s.n}
                </span>
                <p className={`mt-3 text-lg font-semibold ${hi ? "font-hindi" : ""}`}>
                  {t(s.hiT, s.enT)}
                </p>
                <p className="text-xs text-white/75">{s.e}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
