// Update this number to the shop's real WhatsApp (international format, no +).
export const WHATSAPP_NUMBER = "919999999999";

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
