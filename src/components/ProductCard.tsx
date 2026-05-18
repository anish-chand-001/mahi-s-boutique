import { motion } from "motion/react";
import { waLink } from "@/lib/whatsapp";
import type { Product } from "@/lib/products";
import { useLang } from "@/lib/lang";

export function ProductCard({ p, index = 0 }: { p: Product; index?: number }) {
  const { t, lang } = useLang();
  const msg = t(
    `नमस्ते Mahi Sarees! मुझे यह डिज़ाइन चाहिए: ${p.name} (₹${p.price}) — कोड ${p.id}`,
    `Hello Mahi Sarees! I'd like this design: ${p.name} (₹${p.price}) — code ${p.id}`,
  );
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-3xl bg-white shadow-[0_8px_30px_-15px_rgba(80,20,30,0.3)] ring-1 ring-[color:var(--gold)]/20"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          width={800}
          height={1000}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
        />
        {p.tag && (
          <span className="absolute left-3 top-3 rounded-full bg-[color:var(--wine)] px-3 py-1 text-xs font-semibold text-white shadow">
            {p.tag}
          </span>
        )}
      </div>
      <div className="p-4">
        <p className={`text-base font-semibold text-[color:var(--wine)] ${lang === "hi" ? "font-hindi" : ""}`}>
          {t(p.hindi, p.name)}
        </p>
        <p className="text-xs text-muted-foreground">{lang === "hi" ? p.name : p.hindi}</p>
        <div className="mt-2 flex items-end justify-between gap-2">
          <p className="font-display text-2xl font-bold text-[color:var(--wine)]">
            ₹{p.price.toLocaleString("en-IN")}
          </p>
        </div>
        <a
          href={waLink(msg)}
          target="_blank"
          rel="noreferrer"
          className={`mt-3 flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3 text-base font-semibold text-white shadow-md transition-transform active:scale-[0.98] ${lang === "hi" ? "font-hindi" : ""}`}
          style={{ backgroundColor: "var(--whatsapp)" }}
        >
          {t("मुझे चाहिए", "I want this")}
          <span aria-hidden>→</span>
        </a>
      </div>
    </motion.div>
  );
}
