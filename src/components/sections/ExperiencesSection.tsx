import Image from "next/image"
import { AnimateIn } from "@/components/motion/AnimateIn"
import { StaggerContainer } from "@/components/motion/StaggerContainer"
import { scaleIn } from "@/lib/animations/variants"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { BackgroundVideo } from "@/components/ui/BackgroundVideo"

export function ExperiencesSection() {
  return (
    <section id="experiencias" className="bg-secondary px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <AnimateIn>
          <SectionTitle
            eyebrow="A Experiência"
            title="Vida de serra, no ritmo da natureza"
            intro="Animais por perto, araucárias até onde a vista alcança e o pôr do sol fechando o dia. Aqui a experiência é viver o campo de verdade, sem pressa."
          />
        </AnimateIn>

        <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-2">
          <AnimateIn variants={scaleIn} className="group relative overflow-hidden rounded-sm">
            <div className="relative aspect-[4/5] overflow-hidden">
              <BackgroundVideo
                src="/images/experiencias/menina-carinho-cabra.mp4"
                label="Criança fazendo carinho em uma cabra na Invernada do Sol"
                className="transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 space-y-2 p-6">
              <p className="text-xs font-light uppercase tracking-[0.3em] text-primary">
                Vida no campo
              </p>
              <p className="font-heading text-xl font-light italic leading-snug text-foreground">
                Pertinho dos animais, no tempo da natureza
              </p>
            </div>
          </AnimateIn>

          <AnimateIn variants={scaleIn} className="group relative overflow-hidden rounded-sm">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/cabanas/paisagem-dia.webp"
                alt="Pôr do sol sobre a Serra Catarinense, entre araucárias, na Invernada do Sol"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 space-y-2 p-6">
              <p className="text-xs font-light uppercase tracking-[0.3em] text-primary">
                Serra Catarinense
              </p>
              <p className="font-heading text-xl font-light italic leading-snug text-foreground">
                O pôr do sol entre as araucárias
              </p>
            </div>
          </AnimateIn>
        </StaggerContainer>
      </div>
    </section>
  )
}
