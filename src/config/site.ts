/** Origem canônica do site — sempre sem barra final (homepage, OG, JSON-LD, sitemap). */
const SITE_ORIGIN = "https://invernadadosol.com.br"

export function siteUrl(path = ""): string {
  if (!path) return SITE_ORIGIN
  return `${SITE_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`
}

export const siteConfig = {
  name: "Invernada do Sol",
  tagline: "Uma experiência que aquece a alma",
  description:
    "Restaurante e cabanas em Ouro, SC. Gastronomia de inverno, aconchego e natureza em Ouro - Santa Catarina.",
  url: SITE_ORIGIN,
  seo: {
    title: "Invernada do Sol | Restaurante e Cabana em Ouro - Santa Catarina",
    description:
      "Gastronomia afetiva, cabana exclusiva, natureza e o mais belo pôr do sol de Ouro - Santa Catarina, no distrito de Santa Lúcia. Restaurante, eventos e experiências.",
    ogImage: "/og-image.jpg",
    ogImageAlt:
      "Pôr do sol sobre Ouro - Santa Catarina, entre araucárias, na Invernada do Sol em Santa Lúcia",
    keywords: [
      "Invernada do Sol",
      "restaurante Ouro SC",
      "cabana Ouro Santa Catarina",
      "Café Colonial",
      "Buffet de Sopas",
      "gastronomia afetiva",
      "pôr do sol Ouro Santa Catarina",
      "turismo rural Santa Catarina",
      "eventos e casamentos na serra",
      "Santa Lúcia Ouro SC",
    ],
  },
  location: {
    city: "Ouro",
    state: "SC",
    country: "Brasil",
    region: "Ouro - Santa Catarina",
    address: "Rod. SC 467, km 14, Santa Lúcia, Ouro-SC",
    cep: "89663-000",
    coordinates: { lat: -27.3414, lng: -51.6181 },
    mapsPlaceUrl:
      "https://www.google.com/maps/search/?api=1&query=Invernada+do+Sol,Rod.+SC+467,+km+14,+Santa+L%C3%BAcia,+Ouro,+SC",
    mapsDirectionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Invernada+do+Sol,Rod.+SC+467,+km+14,+Santa+L%C3%BAcia,+Ouro,+SC",
    mapEmbedUrl:
      "https://www.google.com/maps?q=Invernada+do+Sol,Rod.+SC+467,+km+14,+Santa+L%C3%BAcia,+Ouro,+SC&output=embed",
  },
  contact: {
    phoneE164: "+5549999711536",
    phoneDisplay: "(49) 9 99971-1536",
    email: "contato@invernadadosol.com.br",
    instagram: "@invernadadosol",
    instagramUrl: "https://instagram.com/invernadadosol",
    facebookUrl: "https://facebook.com/invernadadosol",
  },
  openingHours: {
    days: [
      { day: "Sexta-feira", hours: "18h às 23h" },
      { day: "Sábado", hours: "12h às 23h" },
      { day: "Domingo", hours: "12h às 18h" },
    ],
    summary: "Sexta a Domingo",
    note: "Reserva recomendada",
  },
  cta: {
    reserveTable: {
      label: "Entre em Contato",
      message:
        "Olá! Gostaria de reservar uma mesa na Invernada do Sol. Poderiam me ajudar com data e horário?",
    },
    cabinAvailability: {
      label: "Consultar Disponibilidade da Cabana",
      message:
        "Olá! Gostaria de consultar a disponibilidade da cabana da Invernada do Sol.",
    },
  },
  nav: [
    { label: "Início", href: "#inicio" },
    { label: "Experiências", href: "#experiencias" },
    { label: "Restaurante", href: "#restaurante" },
    { label: "Agenda", href: "#agenda" },
    { label: "Cabana", href: "#cabanas" },
    { label: "Localização", href: "#localizacao" },
  ],
} as const
