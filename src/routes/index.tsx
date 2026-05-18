import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import heroImg from "@/assets/hero-saree.jpg";
import shopInterior from "@/assets/shop-interior.jpg";
import tailoringImg from "@/assets/cat-tailoring.jpg";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductCard } from "@/components/ProductCard";
import { categories, products, tailoringServices } from "@/lib/products";
import { waLink } from "@/lib/whatsapp";
import { useLang } from "@/lib/lang";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const { t, lang } = useLang();
  const hi = lang === "hi";
  return (
    <div>
      {/* HERO */}
      <section className="silk-bg relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 pb-12 pt-8 md:grid-cols-2 md:gap-12 md:pb-20 md:pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className={`inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/50 bg-white/70 px-3 py-1 text-xs font-medium text-[color:var(--wine)] backdrop-blur ${hi ? "font-hindi" : ""}`}>
              ✨ {t("माही साड़ीज़ • Since 2010", "Mahi Sarees • Since 2010")}
            </span>
            <h1 className={`mt-4 text-4xl font-semibold leading-[1.1] text-[color:var(--wine)] sm:text-5xl md:text-6xl ${hi ? "font-hindi" : "font-display"}`}>
              {hi ? (
                <>
                  <span className="block">हर मौके के लिए</span>
                  <span className="text-gold-gradient block">खूबसूरत साड़ियाँ</span>
                  <span className="block">और सूट</span>
                </>
              ) : (
                <>
                  <span className="block">Beautiful sarees</span>
                  <span className="text-gold-gradient block">& designer suits</span>
                  <span className="block">for every occasion</span>
                </>
              )}
            </h1>
            <p className={`mt-4 max-w-md text-base text-foreground/80 sm:text-lg ${hi ? "font-hindi" : ""}`}>
              {t(
                "सिलाई और डिज़ाइनिंग की सुविधा उपलब्ध। 15+ साल का भरोसा, हाथ से चुनी गई कलेक्शन।",
                "Tailoring and custom design available. 15+ years of trust, handpicked collection.",
              )}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={waLink(t(
                  "नमस्ते Mahi Sarees! मुझे साड़ी के बारे में पूछना है।",
                  "Hello Mahi Sarees! I'd like to ask about sarees.",
                ))}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-2 rounded-2xl px-5 py-4 text-base font-semibold text-white shadow-lg transition-transform hover:scale-[1.02] ${hi ? "font-hindi" : ""}`}
                style={{ backgroundColor: "var(--whatsapp)" }}
              >
                {t("🟢 WhatsApp पर पूछें", "🟢 Ask on WhatsApp")}
              </a>
              <Link
                to="/sarees"
                className={`inline-flex items-center gap-2 rounded-2xl bg-[color:var(--wine)] px-5 py-4 text-base font-semibold text-white shadow-lg transition-transform hover:scale-[1.02] ${hi ? "font-hindi" : ""}`}
              >
                {t("👗 साड़ियाँ देखें", "👗 View Sarees")}
              </Link>
              <Link
                to="/tailoring"
                className={`inline-flex items-center gap-2 rounded-2xl border-2 border-[color:var(--wine)] bg-white px-5 py-4 text-base font-semibold text-[color:var(--wine)] shadow-sm ${hi ? "font-hindi" : ""}`}
              >
                {t("✂️ टेलरिंग सेवा", "✂️ Tailoring")}
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5 text-xs text-foreground/70">
              <span className="inline-flex items-center gap-1.5"><span className="text-base">⭐</span> 4.9 / 5 (1200+ reviews)</span>
              <span className="inline-flex items-center gap-1.5"><span className="text-base">🚚</span> {t("होम डिलीवरी", "Home delivery")}</span>
              <span className="inline-flex items-center gap-1.5"><span className="text-base">🪡</span> {t("दुकान में टेलर", "In-house tailor")}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="animate-silk absolute -inset-4 -z-10 rounded-[3rem] bg-[color:var(--gold)]/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl ring-4 ring-white">
              <img
                src={heroImg}
                alt="Mahi Sarees boutique"
                width={1600}
                height={1024}
                className="h-[420px] w-full object-cover sm:h-[520px]"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur">
                <div>
                  <p className={`text-sm font-semibold text-[color:var(--wine)] ${hi ? "font-hindi" : ""}`}>
                    {t("नई कलेक्शन आ गई है", "New collection has arrived")}
                  </p>
                  <p className="text-xs text-foreground/70">Wedding Season 2026</p>
                </div>
                <span className="rounded-full bg-[color:var(--wine)] px-3 py-1 text-xs font-semibold text-white">
                  New
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionHeading
          eyebrow={t("कैटेगरी", "Categories")}
          title={t("अपनी पसंद चुनें", "Shop by category")}
          sub={t("Shop by category", "अपनी पसंद चुनें")}
          hi={hi}
        />
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-6">
          {categories.map((c, i) => (
            <CategoryCard key={c.slug} cat={c} index={i} />
          ))}
        </div>
      </section>

      {/* PRICE FILTERS */}
      <section className="mx-auto max-w-6xl px-4 pb-4">
        <div className="rounded-3xl border border-[color:var(--gold)]/30 bg-white p-5 shadow-sm sm:p-6">
          <p className={`text-sm font-semibold text-[color:var(--wine)] ${hi ? "font-hindi" : ""}`}>
            {t("अपने बजट में देखें", "Shop by budget")}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {[
              { label: "₹500 – ₹1000", emoji: "🪷" },
              { label: "₹1000 – ₹3000", emoji: "💖" },
              { label: "₹3000+", emoji: "👑" },
            ].map((b) => (
              <Link
                key={b.label}
                to="/sarees"
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--peach)]/50 px-5 py-3 text-base font-semibold text-[color:var(--wine)] transition-colors hover:bg-[color:var(--peach)]"
              >
                <span>{b.emoji}</span>
                <span>{b.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TRENDING */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex items-end justify-between gap-3">
          <SectionHeading
            eyebrow={t("ट्रेंडिंग", "Trending")}
            title={t("आजकल की पसंद", "Trending sarees")}
            sub={t("Trending sarees", "आजकल की पसंद")}
            hi={hi}
          />
          <Link
            to="/sarees"
            className={`hidden rounded-full border border-[color:var(--wine)] px-4 py-2 text-sm font-semibold text-[color:var(--wine)] sm:inline-flex ${hi ? "font-hindi" : ""}`}
          >
            {t("सब देखें →", "View all →")}
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {products.slice(0, 4).map((p, i) => (
            <ProductCard key={p.id} p={p} index={i} />
          ))}
        </div>
      </section>

      {/* TAILORING */}
      <section className="relative overflow-hidden bg-[color:var(--wine)] text-white">
        <svg
          aria-hidden
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
          className="absolute inset-x-0 top-0 h-12 w-full text-[color:var(--cream)]"
        >
          <path d="M0,0 Q300,80 600,40 T1200,30 L1200,0 Z" fill="currentColor" />
        </svg>
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 pb-16 pt-20 md:grid-cols-2 md:gap-12">
          <div>
            <span className={`inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-[color:var(--gold)] ring-1 ring-[color:var(--gold)]/40 ${hi ? "font-hindi" : ""}`}>
              ✂️ {t("अपनी फिटिंग, अपनी पसंद", "Your fit, your choice")}
            </span>
            <h2 className={`mt-3 text-3xl font-semibold sm:text-4xl ${hi ? "font-hindi" : "font-display"}`}>
              {t("परफेक्ट सिलाई, हर साइज़ में", "Perfect stitching, in every size")}
            </h2>
            <p className={`mt-3 max-w-md text-white/85 ${hi ? "font-hindi" : ""}`}>
              {t(
                "ब्लाउज़, सूट और डिज़ाइनर फिटिंग — अनुभवी टेलर, समय पर डिलीवरी।",
                "Blouses, suits and designer fitting — experienced tailors, on-time delivery.",
              )}
            </p>

            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              {tailoringServices.map((s) => (
                <div
                  key={s.title}
                  className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10"
                >
                  <div>
                    <p className={`text-base font-semibold ${hi ? "font-hindi" : ""}`}>
                      {s.emoji} {t(s.hindi, s.title)}
                    </p>
                    <p className="text-xs text-white/70">{hi ? s.title : s.hindi}</p>
                  </div>
                  <p className="text-sm font-semibold text-[color:var(--gold)]">
                    ₹{s.from}+
                  </p>
                </div>
              ))}
            </div>

            <a
              href={waLink(t(
                "नमस्ते Mahi Sarees! मुझे सिलाई सेवा के लिए पूछना है।",
                "Hello Mahi Sarees! I'd like to ask about tailoring.",
              ))}
              target="_blank"
              rel="noreferrer"
              className={`mt-6 inline-flex items-center gap-2 rounded-2xl px-5 py-4 text-base font-semibold text-white shadow-lg ${hi ? "font-hindi" : ""}`}
              style={{ backgroundColor: "var(--whatsapp)" }}
            >
              {t("सिलाई के लिए पूछें", "Ask about tailoring")}
            </a>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-[color:var(--gold)]/20 blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] shadow-2xl ring-4 ring-white/10">
              <img
                src={tailoringImg}
                alt="Tailor at work"
                loading="lazy"
                width={800}
                height={800}
                className="h-[460px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OWNER WELCOME */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid items-center gap-8 rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-[color:var(--gold)]/30 md:grid-cols-[1fr_1.2fr] md:p-10">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={shopInterior}
              alt="Mahi Sarees shop"
              loading="lazy"
              width={1200}
              height={800}
              className="h-72 w-full object-cover md:h-96"
            />
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--wine)]/70">
              {t("मालिक का स्वागत", "Owner's Welcome")}
            </span>
            <h3 className={`mt-2 text-3xl font-semibold text-[color:var(--wine)] ${hi ? "font-hindi" : "font-display"}`}>
              {t("नमस्ते जी 🙏", "Namaste 🙏")}
            </h3>
            <p className={`mt-4 text-base text-foreground/85 ${hi ? "font-hindi" : ""}`}>
              {t(
                "हम पिछले 15+ वर्षों से महिलाओं के लिए खूबसूरत डिज़ाइन लेकर आ रहे हैं। हमारी कोशिश है कि हर ग्राहक को घर जैसी पसंद और भरोसा मिले।",
                "For 15+ years we've been bringing beautiful designs for women. Our goal is for every customer to feel at home and trusted.",
              )}
            </p>
            <p className={`mt-3 text-sm text-foreground/70 ${hi ? "font-hindi" : ""}`}>
              — {t("माही जी, Mahi Sarees", "Mahi ji, Mahi Sarees")}
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full bg-[color:var(--peach)]/60 px-3 py-1 font-semibold text-[color:var(--wine)]">
                ⭐ 4.9 Google Rating
              </span>
              <span className="rounded-full bg-[color:var(--peach)]/60 px-3 py-1 font-semibold text-[color:var(--wine)]">
                👩 1200+ {t("खुश ग्राहक", "Happy Customers")}
              </span>
              <span className="rounded-full bg-[color:var(--peach)]/60 px-3 py-1 font-semibold text-[color:var(--wine)]">
                🪡 {t("दुकान में टेलर", "In-house Tailor")}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* WHATSAPP CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div
          className="relative overflow-hidden rounded-[2rem] p-8 text-center text-white shadow-xl sm:p-12"
          style={{ backgroundColor: "var(--whatsapp)" }}
        >
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
          <h3 className={`text-3xl font-semibold sm:text-4xl ${hi ? "font-hindi" : "font-display"}`}>
            {t("सिर्फ़ एक मैसेज की दूरी पर", "Just one message away")}
          </h3>
          <p className={`mt-2 text-white/90 ${hi ? "font-hindi" : ""}`}>
            {t(
              "अपनी पसंद की डिज़ाइन का फोटो भेजें — हम आपको पूरी जानकारी देंगे।",
              "Send us a photo of the design you like — we'll share all the details.",
            )}
          </p>
          <a
            href={waLink(t(
              "नमस्ते! मुझे एक डिज़ाइन के बारे में जानना है।",
              "Hello! I'd like to know about a design.",
            ))}
            target="_blank"
            rel="noreferrer"
            className={`mt-6 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-4 text-base font-bold text-[color:var(--whatsapp)] shadow-lg ${hi ? "font-hindi" : ""}`}
          >
            {t("अभी WhatsApp करें →", "Message on WhatsApp →")}
          </a>
        </div>
      </section>

      {/* LOCATION */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <SectionHeading
          eyebrow={t("हमसे मिलिए", "Visit Us")}
          title={t("हमारे पास आइए", "Find our shop")}
          sub={t("Find our shop", "हमारे पास आइए")}
          hi={hi}
        />
        <div className="mt-6 grid gap-6 md:grid-cols-[1.2fr_1fr]">
          <div className="overflow-hidden rounded-3xl ring-1 ring-[color:var(--gold)]/30">
            <iframe
              title="Mahi Sarees location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=77.20%2C28.60%2C77.25%2C28.65&layer=mapnik"
              className="h-72 w-full md:h-full"
              loading="lazy"
            />
          </div>
          <div className="rounded-3xl bg-white p-6 ring-1 ring-[color:var(--gold)]/30">
            <p className="font-display text-2xl text-[color:var(--wine)]">Mahi Sarees</p>
            <p className={`mt-2 text-sm text-foreground/80 ${hi ? "font-hindi" : ""}`}>
              {t("मुख्य बाज़ार, दुकान नं. 24,", "Main Market, Shop No. 24,")}
              <br />
              {t("आपका शहर, भारत", "Your City, India")}
            </p>
            <ul className={`mt-4 space-y-2 text-sm ${hi ? "font-hindi" : ""}`}>
              <li>🕙 {t("खुलने का समय: सुबह 10 – रात 9", "Open: 10 AM – 9 PM")}</li>
              <li>📞 +91 99999 99999</li>
              <li>📍 {t("मुफ़्त पार्किंग उपलब्ध", "Free parking available")}</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  sub,
  hi,
}: {
  eyebrow: string;
  title: string;
  sub: string;
  hi: boolean;
}) {
  return (
    <div>
      <span className="text-xs uppercase tracking-[0.25em] text-[color:var(--wine)]/70">
        {eyebrow}
      </span>
      <h2 className={`mt-2 text-3xl font-semibold text-[color:var(--wine)] sm:text-4xl ${hi ? "font-hindi" : "font-display"}`}>
        {title}
      </h2>
      <p className="text-sm text-muted-foreground">{sub}</p>
    </div>
  );
}
