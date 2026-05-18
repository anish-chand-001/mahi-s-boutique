import { waLink } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border/60 bg-[color:var(--wine)] text-[color:var(--cream)]">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-full gold-gradient text-lg font-bold text-[color:var(--wine)]">
              M
            </span>
            <div>
              <p className="font-display text-xl">Mahi Sarees</p>
              <p className="font-hindi text-xs opacity-80">माही साड़ीज़ • Since 2010</p>
            </div>
          </div>
          <p className="font-hindi mt-4 text-sm opacity-80">
            हर महिला के लिए खास डिज़ाइन। साड़ियों और सिलाई का भरोसेमंद नाम।
          </p>
        </div>

        <div>
          <p className="font-display text-lg text-[color:var(--gold)]">Visit Shop</p>
          <p className="font-hindi mt-3 text-sm opacity-90">
            मुख्य बाज़ार, दुकान नं. 24,<br />
            आपका शहर, भारत
          </p>
          <p className="mt-2 text-sm opacity-80">Open: 10 AM – 9 PM</p>
        </div>

        <div>
          <p className="font-display text-lg text-[color:var(--gold)]">Quick Help</p>
          <ul className="font-hindi mt-3 space-y-2 text-sm opacity-90">
            <li>📞 +91 99999 99999</li>
            <li>✉️ hello@mahisarees.in</li>
            <li>📍 Get Directions</li>
          </ul>
        </div>

        <div>
          <p className="font-display text-lg text-[color:var(--gold)]">Order on WhatsApp</p>
          <a
            href={waLink("नमस्ते! मुझे ऑर्डर करना है।")}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex w-full items-center justify-center rounded-2xl px-5 py-3 text-base font-semibold text-white shadow-lg"
            style={{ backgroundColor: "var(--whatsapp)" }}
          >
            <span className="font-hindi">WhatsApp पर बात करें</span>
          </a>
          <p className="mt-3 text-xs opacity-70">
            Personalised help in Hindi & English.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs opacity-70">
        © {new Date().getFullYear()} Mahi Sarees. Made with ♥ for our customers.
      </div>
    </footer>
  );
}
