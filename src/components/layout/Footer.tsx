import { AtSign, Mail, MapPin } from "lucide-react"
import { siteConfig } from "@/config/site"
import { whatsappLinks } from "@/lib/whatsapp"
import { Logo } from "@/components/layout/Logo"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-6 py-20">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
        <div className="space-y-4">
          <Logo markClassName="h-11 w-11" />
          <p className="max-w-xs text-sm font-light leading-relaxed text-muted-foreground">
            Mais do que um destino, um convite
            para relaxar, apreciar a natureza e viver bons momentos.
          </p>
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
        © {new Date().getFullYear()} {siteConfig.name}. Sabores, natureza e momentos inesquecíveis.
      </div>
    </footer>
  )
}
