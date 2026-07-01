import { AtSign, Mail, MapPin } from "lucide-react"
import { siteConfig } from "@/config/site"
import { whatsappLinks } from "@/lib/whatsapp"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-6 py-20">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
        <div className="space-y-4">
          <p className="font-heading text-2xl font-light text-foreground">
            Invernada <span className="italic text-primary">do Sol</span>
          </p>
          <p className="max-w-xs text-sm font-light leading-relaxed text-muted-foreground">
            Um refúgio de inverno em {siteConfig.location.city},{" "}
            {siteConfig.location.state}. Gastronomia, cabanas e o silêncio de
            Ouro - Santa Catarina.
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-xs font-light uppercase tracking-[0.3em] text-muted-foreground">
            Visite
          </p>
          <ul className="space-y-3 text-sm font-light text-foreground/80">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>
                {siteConfig.location.address}
                <br />
                {siteConfig.location.city} — {siteConfig.location.state}
              </span>
            </li>
            {siteConfig.openingHours.days.map((d) => (
              <li key={d.day} className="text-muted-foreground">
                {d.day}: {d.hours}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <p className="text-xs font-light uppercase tracking-[0.3em] text-muted-foreground">
            Fale com a gente
          </p>
          <ul className="space-y-3 text-sm font-light text-foreground/80">
            <li>
              <a
                href={whatsappLinks.reserveTable}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
              >
                {siteConfig.cta.reserveTable.label}
              </a>
            </li>
            <li>
              <a
                href={whatsappLinks.cabinAvailability}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
              >
                {siteConfig.cta.cabinAvailability.label}
              </a>
            </li>
            <li className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition-colors hover:text-primary"
              >
                <AtSign className="size-5" />
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                aria-label="E-mail"
                className="transition-colors hover:text-primary"
              >
                <Mail className="size-5" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl border-t border-border pt-8 text-center text-xs font-light text-muted-foreground">
        © {new Date().getFullYear()} {siteConfig.name}. Feito com calor em Ouro
        - Santa Catarina.
      </div>
    </footer>
  )
}
