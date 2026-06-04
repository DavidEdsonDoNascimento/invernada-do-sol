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
    address: "Estrada da Invernada, s/n — Interior",
    cep: "89663-000",
    coordinates: { lat: -27.336, lng: -51.616 },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Ouro+Santa+Catarina",
    mapEmbedUrl:
      "https://www.google.com/maps?q=Ouro,Santa+Catarina,Brasil&output=embed",
  },
  contact: {
    whatsapp: "+55 49 9 0000-0000",
    phoneDisplay: "(49) 9 0000-0000",
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
        "Olá! Gostaria de consultar a disponibilidade das cabanas da Invernada do Sol.",
    },
  },
  nav: [
    { label: "Início", href: "#inicio" },
    { label: "O Refúgio", href: "#refugio" },
    { label: "Experiências", href: "#experiencias" },
    { label: "Restaurante", href: "#restaurante" },
    { label: "Agenda", href: "#agenda" },
    { label: "Cabana", href: "#cabanas" },
    { label: "Galeria", href: "#galeria" },
    { label: "Localização", href: "#localizacao" },
  ],
} as const
