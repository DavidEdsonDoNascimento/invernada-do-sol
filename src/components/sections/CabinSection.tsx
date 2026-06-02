import { AnimateIn } from "@/components/motion/AnimateIn"
import { StaggerContainer } from "@/components/motion/StaggerContainer"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { CabinCard } from "@/components/ui/CabinCard"
import { WhatsappButton } from "@/components/ui/WhatsappButton"
import { cabins } from "@/content/cabins"
import { whatsappLinks } from "@/lib/whatsapp"
import { siteConfig } from "@/config/site"

export function CabinSection() {
  return (
    <section id="cabanas" className="px-6 py-28 md:py-36">
      <div className="mx-auto max-w-7xl">
        <AnimateIn>
          <SectionTitle
            eyebrow="As Cabanas"
            title="Não venha apenas jantar. Fique."
            intro="Quando a última taça é servida, a serra ainda tem muito a oferecer. Durma dentro da névoa e acorde com o vale aos seus pés."
          />
        </AnimateIn>

        <StaggerContainer className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cabins.map((cabin) => (
            <AnimateIn key={cabin.id}>
              <CabinCard {...cabin} />
            </AnimateIn>
          ))}
        </StaggerContainer>

        <AnimateIn className="mt-16 text-center" delay={0.1}>
          <WhatsappButton
            href={whatsappLinks.cabinAvailability}
            label={siteConfig.cta.cabinAvailability.label}
            variant="outline"
          />
        </AnimateIn>
      </div>
    </section>
  )
}
