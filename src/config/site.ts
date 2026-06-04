export const siteConfig = {
  name: "Invernada do Sol",
  tagline: "Uma experiência que aquece a alma",
  description:
    "Restaurante e cabanas em Ouro, SC. Gastronomia de inverno, aconchego e natureza na Serra Catarinense.",
  url: "https://invernadadosol.com.br",
  location: {
    city: "Ouro",
    state: "SC",
    country: "Brasil",
    region: "Serra Catarinense",
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
    whatsapp: "+55049999711536",
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
      label: "Reservar Mesa",
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
    { label: "O Refúgio", href: "#refugio" },
    { label: "Experiências", href: "#experiencias" },
    { label: "Restaurante", href: "#restaurante" },
    { label: "Agenda", href: "#agenda" },
    { label: "Cabana", href: "#cabanas" },
    { label: "Localização", href: "#localizacao" },
  ],
} as const
