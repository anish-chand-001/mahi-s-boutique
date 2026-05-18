import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import type { Category } from "@/lib/products";

export function CategoryCard({ cat, index = 0 }: { cat: Category; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to="/sarees"
        search={{ cat: cat.slug }}
        className="group relative block overflow-hidden rounded-3xl bg-white shadow-[0_8px_30px_-12px_rgba(80,20,30,0.25)] ring-1 ring-[color:var(--gold)]/30"
      >
        <div className="aspect-[4/5] overflow-hidden">
          <img
            src={cat.image}
            alt={cat.title}
            loading="lazy"
            width={800}
            height={1000}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[color:var(--wine)]/90 via-[color:var(--wine)]/30 to-transparent p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-hindi text-lg font-semibold text-white drop-shadow">
                {cat.emoji} {cat.hindi}
              </p>
              <p className="text-xs text-white/80">{cat.title}</p>
            </div>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-white/95 text-[color:var(--wine)] shadow">
              →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
