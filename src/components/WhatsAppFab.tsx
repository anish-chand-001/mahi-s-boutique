import { waLink } from "@/lib/whatsapp";

export function WhatsAppFab() {
  return (
    <a
      href={waLink("नमस्ते Mahi Sarees! मुझे आपकी कलेक्शन देखनी है।")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp पर संपर्क करें"
      className="animate-wa-pulse fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full text-white shadow-2xl ring-4 ring-white/60 transition-transform hover:scale-105 sm:bottom-6 sm:right-6"
      style={{ backgroundColor: "var(--whatsapp)" }}
    >
      <svg viewBox="0 0 32 32" className="h-8 w-8 fill-current" aria-hidden>
        <path d="M19.11 17.18c-.27-.14-1.58-.78-1.83-.87-.25-.09-.43-.14-.61.14-.18.27-.7.87-.86 1.05-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.15-1.33-.79-.7-1.33-1.57-1.49-1.84-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.46h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.97 2.63 1.11 2.81.14.18 1.91 2.91 4.62 4.08.65.28 1.15.45 1.55.58.65.21 1.24.18 1.71.11.52-.08 1.58-.65 1.81-1.28.22-.62.22-1.16.16-1.28-.07-.11-.25-.18-.52-.32zM16.02 5C9.94 5 5 9.93 5 16c0 1.96.51 3.79 1.41 5.39L5 27l5.78-1.39A11 11 0 0 0 27 16c0-6.07-4.93-11-11-11zm0 20.07a9.05 9.05 0 0 1-4.61-1.27l-.33-.2-3.43.82.82-3.35-.22-.34a9.04 9.04 0 1 1 16.83-4.66 9.05 9.05 0 0 1-9.06 9z" />
      </svg>
    </a>
  );
}
