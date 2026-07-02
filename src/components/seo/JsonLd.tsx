import { siteConfig, siteUrl } from "@/config/site"

const { name, location, contact, seo, openingHours } = siteConfig
const url = siteUrl()

const telephone = contact.phoneE164

const dayMap: Record<string, string> = {
  "Sexta-feira": "https://schema.org/Friday",
  Sábado: "https://schema.org/Saturday",
  Domingo: "https://schema.org/Sunday",
}

function parseHours(range: string) {
  const match = range.match(/(\d{1,2})h.*?(\d{1,2})h/)
  if (!match) return null
  const pad = (n: string) => n.padStart(2, "0")
  return { opens: `${pad(match[1])}:00`, closes: `${pad(match[2])}:00` }
}

const openingHoursSpecification = openingHours.days
  .map((d) => {
    const hours = parseHours(d.hours)
    const dayOfWeek = dayMap[d.day]
    if (!hours || !dayOfWeek) return null
    return {
      "@type": "OpeningHoursSpecification",
      dayOfWeek,
      opens: hours.opens,
      closes: hours.closes,
    }
  })
  .filter(Boolean)

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${url}/#website`,
      url,
      name,
      description: seo.description,
      inLanguage: "pt-BR",
      publisher: { "@id": `${url}/#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${url}/#organization`,
      name,
      url,
      logo: {
        "@type": "ImageObject",
        url: `${url}/favicon-512.png`,
        width: 512,
        height: 512,
      },
      sameAs: [contact.instagramUrl, contact.facebookUrl],
    },
    {
      "@type": ["Restaurant", "LodgingBusiness"],
      "@id": `${url}/#business`,
      name,
      url,
      description: seo.description,
      image: {
        "@type": "ImageObject",
        url: `${url}${seo.ogImage}`,
        width: 1200,
        height: 630,
      },
      telephone,
      priceRange: "$$$",
      servesCuisine: ["Gastronomia afetiva", "Café Colonial", "Buffet de Sopas"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rod. SC 467, km 14, Santa Lúcia",
        addressLocality: location.city,
        addressRegion: location.state,
        postalCode: location.cep,
        addressCountry: "BR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: location.coordinates.lat,
        longitude: location.coordinates.lng,
      },
      hasMap: location.mapsPlaceUrl,
      openingHoursSpecification,
      sameAs: [contact.instagramUrl, contact.facebookUrl],
    },
    {
      "@type": "TouristAttraction",
      "@id": `${url}/#attraction`,
      name: `Pôr do sol da Invernada do Sol — ${location.region}`,
      description:
        "O mais belo pôr do sol de Ouro - Santa Catarina, entre araucárias, em Santa Lúcia.",
      url,
      image: `${url}${seo.ogImage}`,
      isPartOf: { "@id": `${url}/#business` },
      address: {
        "@type": "PostalAddress",
        addressLocality: location.city,
        addressRegion: location.state,
        addressCountry: "BR",
      },
    },
  ],
}

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}
