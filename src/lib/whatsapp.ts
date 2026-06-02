import { siteConfig } from "@/config/site"

export function buildWhatsappUrl(message: string): string {
  const phone = siteConfig.contact.whatsapp.replace(/\D/g, "")
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

export const whatsappLinks = {
  reserveTable: buildWhatsappUrl(siteConfig.cta.reserveTable.message),
  cabinAvailability: buildWhatsappUrl(siteConfig.cta.cabinAvailability.message),
}
