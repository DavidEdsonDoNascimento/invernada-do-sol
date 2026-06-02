import Image from "next/image"
import { AnimateIn } from "@/components/motion/AnimateIn"
import { WhatsappButton } from "@/components/ui/WhatsappButton"
import { siteConfig } from "@/config/site"
import { whatsappLinks } from "@/lib/whatsapp"

export function ReservationCTA() {
  return (
    <section id="reserva" className="relative overflow-hidden px-6 py-40 md:py-48">
      <Image
        src="/images/refugio/refugio-detalhe.webp"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-background/75" />
      <div className="gradient-vignette absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
        <AnimateIn>
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-primary/50" />
            <p className="text-xs font-light uppercase tracking-[0.35em] text-primary">
              Reserve sua noite
            </p>
            <span className="h-px w-8 bg-primary/50" />
          </div>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2 className="text-balance font-heading text-4xl font-light italic text-gradient-gold md:text-6xl">
            Você merece uma noite assim
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <p className="mx-auto max-w-md text-pretty font-sans text-base font-light leading-relaxed text-foreground/85">
            O fogo já está aceso. Escolha entre uma mesa para a noite ou uma
            cabana para ficar — e deixe a serra cuidar do resto.
          </p>
        </AnimateIn>
        <AnimateIn delay={0.3}>
          <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row">
            <WhatsappButton
              href={whatsappLinks.reserveTable}
              label={siteConfig.cta.reserveTable.label}
              variant="primary"
            />
            <WhatsappButton
              href={whatsappLinks.cabinAvailability}
              label={siteConfig.cta.cabinAvailability.label}
              variant="outline"
            />
          </div>
        </AnimateIn>
        <AnimateIn delay={0.4}>
          <p className="pt-2 text-sm font-light text-muted-foreground">
            Respondemos em instantes. {siteConfig.openingHours.summary},{" "}
            {siteConfig.openingHours.note.toLowerCase()}.
          </p>
        </AnimateIn>
      </div>
    </section>
  )
}
