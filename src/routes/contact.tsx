import { createFileRoute } from "@tanstack/react-router";
import { waLink } from "@/lib/whatsapp";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <span className="text-xs uppercase tracking-[0.25em] text-[color:var(--wine)]/70">
        Contact
      </span>
      <h1 className="font-display mt-2 text-4xl font-semibold text-[color:var(--wine)] sm:text-5xl">
        <span className="font-hindi">हमसे बात करें</span>
      </h1>
      <p className="font-hindi mt-2 text-foreground/70">
        हम Hindi और English दोनों में मदद करते हैं।
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <a
          href={waLink("नमस्ते Mahi Sarees!")}
          target="_blank"
          rel="noreferrer"
          className="rounded-3xl p-6 text-white shadow-lg"
          style={{ backgroundColor: "var(--whatsapp)" }}
        >
          <p className="text-3xl">💬</p>
          <p className="font-hindi mt-2 text-xl font-bold">WhatsApp पर पूछें</p>
          <p className="text-sm opacity-90">+91 99999 99999</p>
        </a>
        <a
          href="tel:+919999999999"
          className="rounded-3xl bg-[color:var(--wine)] p-6 text-white shadow-lg"
        >
          <p className="text-3xl">📞</p>
          <p className="font-hindi mt-2 text-xl font-bold">कॉल करें</p>
          <p className="text-sm opacity-90">+91 99999 99999</p>
        </a>
      </div>

      <div className="mt-6 rounded-3xl bg-white p-6 ring-1 ring-[color:var(--gold)]/30">
        <p className="font-display text-xl text-[color:var(--wine)]">Visit our shop</p>
        <p className="font-hindi mt-2 text-foreground/80">
          मुख्य बाज़ार, दुकान नं. 24, आपका शहर, भारत
        </p>
        <p className="text-sm text-muted-foreground">🕙 10 AM – 9 PM • Open all days</p>
      </div>
    </div>
  );
}
