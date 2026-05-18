import { createFileRoute } from "@tanstack/react-router";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

export const Route = createFileRoute("/suits")({
  component: SuitsPage,
});

function SuitsPage() {
  const list = products.filter((p) => p.category === "suits");
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <span className="text-xs uppercase tracking-[0.25em] text-[color:var(--wine)]/70">
        Designer Suits
      </span>
      <h1 className="font-display mt-2 text-4xl font-semibold text-[color:var(--wine)] sm:text-5xl">
        <span className="font-hindi">डिज़ाइनर सूट</span>
      </h1>
      <p className="font-hindi mt-1 text-foreground/70">
        अनारकली, को-ऑर्ड और पार्टी सूट — फिटिंग के साथ।
      </p>
      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {list.map((p, i) => (
          <ProductCard key={p.id} p={p} index={i} />
        ))}
      </div>
    </div>
  );
}
