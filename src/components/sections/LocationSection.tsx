import { Clock, MapPin } from "lucide-react"
import { AnimateIn } from "@/components/motion/AnimateIn"
import { scaleIn } from "@/lib/animations/variants"
import { siteConfig } from "@/config/site"

export function LocationSection() {
  return (
    <section id="localizacao" className="px-6 pt-28 pb-32 md:pt-36 md:pb-40">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-6">
          <AnimateIn>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-primary/50" />
              <p className="text-xs font-light uppercase tracking-[0.35em] text-primary">
                Localização
              </p>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="text-balance font-heading text-4xl font-light italic text-foreground md:text-5xl">
              Ouro - Santa Catarina
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="max-w-prose font-sans text-base font-light leading-relaxed text-muted-foreground">
              A Invernada do Sol está localizada na rodovia SC-467, km 14, em
              Ouro-SC, em um cenário privilegiado cercado pela natureza. De
              fácil acesso, estamos a aproximadamente 24 km de Ouro, 46 km de
              Concórdia e 27 km de Joaçaba, oferecendo o destino perfeito para
              quem busca boa gastronomia, tranquilidade e um dos mais belos
              pôr do sol da região.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.3}>
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" strokeWidth={1.25} />
                <div className="font-sans text-sm font-light text-foreground/85">
                  <p>{siteConfig.location.address}</p>
                  <p>{siteConfig.location.region}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 size-5 shrink-0 text-primary" strokeWidth={1.25} />
                <ul className="font-sans text-sm font-light text-foreground/85">
                  {siteConfig.openingHours.days.map((d) => (
                    <li key={d.day}>
                      {d.day}: {d.hours}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.4}>
            <a
              href={siteConfig.location.mapsPlaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-light text-primary underline-offset-4 hover:underline"
            >
              Abrir no Maps
            </a>
            <br />
            <a
              href={siteConfig.location.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-light text-primary underline-offset-4 hover:underline"
            >
              Abrir rota no mapa
            </a>
          </AnimateIn>
        </div>

        <AnimateIn variants={scaleIn}>
          <div className="aspect-[4/3] overflow-hidden rounded-sm border border-border">
            <iframe
              title={`Mapa da ${siteConfig.name}`}
              src={siteConfig.location.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full grayscale-[0.3]"
            />
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
