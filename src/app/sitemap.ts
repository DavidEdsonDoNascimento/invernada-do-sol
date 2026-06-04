import type { MetadataRoute } from "next"
import { siteUrl } from "@/config/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: siteUrl(),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    // Estrutura pronta para páginas futuras (cardápio, cabana, eventos...):
    // {
    //   url: siteUrl("/cardapio"),
    //   lastModified,
    //   changeFrequency: "monthly",
    //   priority: 0.8,
    // },
  ]
}
