import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { categories, products } from "@/lib/products";

type Search = { cat?: string };

export const Route = createFileRoute("/sarees")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    cat: typeof s.cat === "string" ? s.cat : undefined,
  }),
  component: SareesPage,
});

const priceBuckets = [
  { id: "low", label: "₹500 – ₹1000", emoji: "🪷", min: 0, max: 1000 },
  { id: "mid", label: "₹1000 – ₹3000", emoji: "💖", min: 1000, max: 3000 },
  { id: "high", label: "₹3000+", emoji: "👑", min: 3000, max: Infinity },
];

function SareesPage() {
  const { cat } = Route.useSearch();
  const [activeCat, setActiveCat] = useState<string | undefined>(cat);
  const [price, setPrice] = useState<string | undefined>();

  const filtered = products.filter((p) => {
    if (activeCat && p.category !== activeCat) return false;
    if (price) {
      const b = priceBuckets.find((x) => x.id === price)!;
      if (p.price < b.min || p.price > b.max) return false;
    }
    return true;
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div>
        <span className="text-xs uppercase tracking-[0.25em] text-[color:var(--wine)]/70">
          Collection
        </span>
        <h1 className="font-display mt-2 text-4xl font-semibold text-[color:var(--wine)] sm:text-5xl">
          <span className="font-hindi">साड़ियाँ</span>
        </h1>
        <p className="font-hindi mt-1 text-foreground/70">अपनी पसंद चुनें — WhatsApp पर ऑर्डर करें।</p>
      </div>

      {/* Category chips */}
      <div className="mt-6 -mx-4 overflow-x-auto px-4">
        <div className="flex w-max gap-3 pb-2">
          <Chip active={!activeCat} onClick={() => setActiveCat(undefined)} label="सभी" emoji="🛍️" />
          {categories.map((c) => (
            <Chip
              key={c.slug}
              active={activeCat === c.slug}
              onClick={() => setActiveCat(c.slug)}
              label={c.hindi}
              emoji={c.emoji}
            />
          ))}
        </div>
      </div>

      {/* Price buckets */}
      <div className="mt-3 flex flex-wrap gap-2">
        {priceBuckets.map((b) => (
          <button
            key={b.id}
            onClick={() => setPrice((p) => (p === b.id ? undefined : b.id))}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              price === b.id
                ? "bg-[color:var(--wine)] text-white"
                : "bg-[color:var(--peach)]/40 text-[color:var(--wine)] hover:bg-[color:var(--peach)]/60"
            }`}
          >
            {b.emoji} <span className="font-hindi">{b.label}</span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {filtered.map((p, i) => (
          <ProductCard key={p.id} p={p} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="font-hindi mt-12 text-center text-foreground/70">
          इस फ़िल्टर में अभी कुछ नहीं है। कृपया दूसरा चुनें।
        </p>
      )}
    </div>
  );
}

function Chip({
  active,
  onClick,
  label,
  emoji,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  emoji: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ring-1 transition-colors ${
        active
          ? "bg-[color:var(--wine)] text-white ring-[color:var(--wine)]"
          : "bg-white text-[color:var(--wine)] ring-[color:var(--gold)]/40 hover:bg-[color:var(--peach)]/40"
      }`}
    >
      <span className="text-base">{emoji}</span>
      <span className="font-hindi">{label}</span>
    </button>
  );
}
