import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import heroImg from "@/assets/hero-saree.jpg";
import shopInterior from "@/assets/shop-interior.jpg";
import tailoringImg from "@/assets/cat-tailoring.jpg";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductCard } from "@/components/ProductCard";
import { categories, products, tailoringServices } from "@/lib/products";
import { waLink } from "@/lib/whatsapp";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
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
            <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/50 bg-white/70 px-3 py-1 text-xs font-medium text-[color:var(--wine)] backdrop-blur">
              ✨ <span className="font-hindi">माही साड़ीज़ • Since 2010</span>
            </span>
            <h1 className="font-display mt-4 text-4xl font-semibold leading-[1.1] text-[color:var(--wine)] sm:text-5xl md:text-6xl">
              <span className="font-hindi block">
                हर मौके के लिए
              </span>
              <span className="text-gold-gradient font-hindi block">
                खूबसूरत साड़ियाँ
              </span>
              <span className="font-hindi block">और सूट</span>
            </h1>
            <p className="font-hindi mt-4 max-w-md text-base text-foreground/80 sm:text-lg">
              सिलाई और डिज़ाइनिंग की सुविधा उपलब्ध। 15+ साल का भरोसा, हाथ से चुनी गई कलेक्शन।
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={waLink("नमस्ते Mahi Sarees! मुझे साड़ी के बारे में पूछना है।")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl px-5 py-4 text-base font-semibold text-white shadow-lg transition-transform hover:scale-[1.02]"
                style={{ backgroundColor: "var(--whatsapp)" }}
              >
                <span className="font-hindi">🟢 WhatsApp पर पूछें</span>
              </a>
              <Link
                to="/sarees"
                className="inline-flex items-center gap-2 rounded-2xl bg-[color:var(--wine)] px-5 py-4 text-base font-semibold text-white shadow-lg transition-transform hover:scale-[1.02]"
              >
                <span className="font-hindi">👗 साड़ियाँ देखें</span>
              </Link>
              <Link
                to="/tailoring"
                className="inline-flex items-center gap-2 rounded-2xl border-2 border-[color:var(--wine)] bg-white px-5 py-4 text-base font-semibold text-[color:var(--wine)] shadow-sm"
              >
                <span className="font-hindi">✂️ टेलरिंग सेवा</span>
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5 text-xs text-foreground/70">
              <span className="inline-flex items-center gap-1.5"><span className="text-base">⭐</span> 4.9 / 5 (1200+ reviews)</span>
              <span className="inline-flex items-center gap-1.5"><span className="text-base">🚚</span> Home delivery</span>
              <span className="inline-flex items-center gap-1.5"><span className="text-base">🪡</span> In-house tailor</span>
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
                  <p className="font-hindi text-sm font-semibold text-[color:var(--wine)]">
                    नई कलेक्शन आ गई है
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
          eyebrow="Categories"
          hindi="अपनी पसंद चुनें"
          english="Shop by category"
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
          <p className="font-hindi text-sm font-semibold text-[color:var(--wine)]">
            अपने बजट में देखें
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
                <span className="font-hindi">{b.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TRENDING */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex items-end justify-between gap-3">
          <SectionHeading
            eyebrow="Trending"
            hindi="आजकल की पसंद"
            english="Trending sarees"
          />
          <Link
            to="/sarees"
            className="hidden rounded-full border border-[color:var(--wine)] px-4 py-2 text-sm font-semibold text-[color:var(--wine)] sm:inline-flex"
          >
            <span className="font-hindi">सब देखें →</span>
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
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-[color:var(--gold)] ring-1 ring-[color:var(--gold)]/40">
              ✂️ <span className="font-hindi">अपनी फिटिंग, अपनी पसंद</span>
            </span>
            <h2 className="font-display mt-3 text-3xl font-semibold sm:text-4xl">
              <span className="font-hindi">परफेक्ट सिलाई,</span>{" "}
              <span className="text-gold-gradient font-hindi">हर साइज़ में</span>
            </h2>
            <p className="font-hindi mt-3 max-w-md text-white/85">
              ब्लाउज़, सूट और डिज़ाइनर फिटिंग — अनुभवी टेलर, समय पर डिलीवरी।
            </p>

            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              {tailoringServices.map((s) => (
                <div
                  key={s.title}
                  className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10"
                >
                  <div>
                    <p className="font-hindi text-base font-semibold">
                      {s.emoji} {s.hindi}
                    </p>
                    <p className="text-xs text-white/70">{s.title}</p>
                  </div>
                  <p className="text-sm font-semibold text-[color:var(--gold)]">
                    ₹{s.from}+
                  </p>
                </div>
              ))}
            </div>

            <a
              href={waLink("नमस्ते Mahi Sarees! मुझे सिलाई सेवा के लिए पूछना है।")}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-2xl px-5 py-4 text-base font-semibold text-white shadow-lg"
              style={{ backgroundColor: "var(--whatsapp)" }}
            >
              <span className="font-hindi">सिलाई के लिए पूछें</span>
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
            <svg
              aria-hidden
              viewBox="0 0 200 60"
              className="pointer-events-none absolute -bottom-4 left-6 right-6 h-10 w-[calc(100%-3rem)] text-[color:var(--gold)]"
            >
              <path
                d="M5 30 Q 50 5, 100 30 T 195 30"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
            </svg>
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
              Owner's Welcome
            </span>
            <h3 className="font-display mt-2 text-3xl font-semibold text-[color:var(--wine)]">
              <span className="font-hindi">नमस्ते जी 🙏</span>
            </h3>
            <p className="font-hindi mt-4 text-base text-foreground/85">
              हम पिछले 15+ वर्षों से महिलाओं के लिए खूबसूरत डिज़ाइन लेकर आ रहे हैं।
              हमारी कोशिश है कि हर ग्राहक को घर जैसी पसंद और भरोसा मिले।
            </p>
            <p className="font-hindi mt-3 text-sm text-foreground/70">
              — माही जी, Mahi Sarees
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full bg-[color:var(--peach)]/60 px-3 py-1 font-semibold text-[color:var(--wine)]">
                ⭐ 4.9 Google Rating
              </span>
              <span className="rounded-full bg-[color:var(--peach)]/60 px-3 py-1 font-semibold text-[color:var(--wine)]">
                👩 1200+ Happy Customers
              </span>
              <span className="rounded-full bg-[color:var(--peach)]/60 px-3 py-1 font-semibold text-[color:var(--wine)]">
                🪡 In-house Tailor
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
          <h3 className="font-display text-3xl font-semibold sm:text-4xl">
            <span className="font-hindi">सिर्फ़ एक मैसेज की दूरी पर</span>
          </h3>
          <p className="font-hindi mt-2 text-white/90">
            अपनी पसंद की डिज़ाइन का फोटो भेजें — हम आपको पूरी जानकारी देंगे।
          </p>
          <a
            href={waLink("नमस्ते! मुझे एक डिज़ाइन के बारे में जानना है।")}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-4 text-base font-bold text-[color:var(--whatsapp)] shadow-lg"
          >
            <span className="font-hindi">अभी WhatsApp करें →</span>
          </a>
        </div>
      </section>

      {/* LOCATION */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <SectionHeading eyebrow="Visit Us" hindi="हमारे पास आइए" english="Find our shop" />
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
            <p className="font-hindi mt-2 text-sm text-foreground/80">
              मुख्य बाज़ार, दुकान नं. 24,<br />
              आपका शहर, भारत
            </p>
            <ul className="font-hindi mt-4 space-y-2 text-sm">
              <li>🕙 खुलने का समय: सुबह 10 – रात 9</li>
              <li>📞 +91 99999 99999</li>
              <li>📍 Free parking available</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  hindi,
  english,
}: {
  eyebrow: string;
  hindi: string;
  english: string;
}) {
  return (
    <div>
      <span className="text-xs uppercase tracking-[0.25em] text-[color:var(--wine)]/70">
        {eyebrow}
      </span>
      <h2 className="font-display mt-2 text-3xl font-semibold text-[color:var(--wine)] sm:text-4xl">
        <span className="font-hindi">{hindi}</span>
      </h2>
      <p className="text-sm text-muted-foreground">{english}</p>
    </div>
  );
}
