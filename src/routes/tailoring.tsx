import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import tailoringImg from "@/assets/cat-tailoring.jpg";
import { tailoringServices } from "@/lib/products";
import { waLink } from "@/lib/whatsapp";

export const Route = createFileRoute("/tailoring")({
  component: TailoringPage,
});

function TailoringPage() {
  return (
    <div>
      <section className="silk-bg">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 md:grid-cols-2 md:py-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/50 bg-white/70 px-3 py-1 text-xs font-medium text-[color:var(--wine)]">
              ✂️ <span className="font-hindi">अनुभवी टेलर</span>
            </span>
            <h1 className="font-display mt-3 text-4xl font-semibold text-[color:var(--wine)] sm:text-5xl">
              <span className="font-hindi">सिलाई और</span>{" "}
              <span className="text-gold-gradient font-hindi">फिटिंग सेवा</span>
            </h1>
            <p className="font-hindi mt-3 max-w-md text-foreground/80">
              ब्लाउज़, सूट, अल्टरेशन और कस्टम डिज़ाइनिंग — समय पर डिलीवरी की गारंटी।
            </p>
            <a
              href={waLink("नमस्ते! मुझे सिलाई बुक करनी है।")}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex rounded-2xl px-5 py-4 text-base font-semibold text-white shadow-lg"
              style={{ backgroundColor: "var(--whatsapp)" }}
            >
              <span className="font-hindi">अभी बुक करें</span>
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
        <h2 className="font-display text-3xl font-semibold text-[color:var(--wine)]">
          <span className="font-hindi">हमारी सेवाएँ</span>
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
              <p className="font-hindi mt-2 text-lg font-semibold text-[color:var(--wine)]">
                {s.hindi}
              </p>
              <p className="text-xs text-muted-foreground">{s.title}</p>
              <div className="mt-3 flex items-center justify-between">
                <p className="font-display text-xl font-bold text-[color:var(--wine)]">
                  ₹{s.from}+
                </p>
                <a
                  href={waLink(`नमस्ते! मुझे ${s.hindi} के बारे में पूछना है।`)}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full px-3 py-2 text-xs font-semibold text-white"
                  style={{ backgroundColor: "var(--whatsapp)" }}
                >
                  <span className="font-hindi">पूछें</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-[2rem] bg-[color:var(--wine)] p-8 text-white">
          <h3 className="font-display text-2xl font-semibold">
            <span className="font-hindi">कैसे काम करता है?</span>
          </h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {[
              { n: "1", h: "WhatsApp भेजें", e: "Send your design / photo" },
              { n: "2", h: "माप लें", e: "Visit shop or share measurements" },
              { n: "3", h: "डिलीवरी पाएँ", e: "Ready in 5–7 days" },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <span className="grid h-10 w-10 place-items-center rounded-full gold-gradient text-base font-bold text-[color:var(--wine)]">
                  {s.n}
                </span>
                <p className="font-hindi mt-3 text-lg font-semibold">{s.h}</p>
                <p className="text-xs text-white/75">{s.e}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
