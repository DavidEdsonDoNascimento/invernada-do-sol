import Image from "next/image"
import { AnimateIn } from "@/components/motion/AnimateIn"
import { StaggerContainer } from "@/components/motion/StaggerContainer"
import { scaleIn } from "@/lib/animations/variants"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { moments } from "@/content/moments"

export function MomentsSection() {
  return (
    <section id="momentos" className="bg-secondary px-6 py-28 md:py-36">
      <div className="mx-auto max-w-7xl">
        <AnimateIn>
          <SectionTitle
            eyebrow="Momentos na Invernada"
            title="Histórias reais que aconteceram aqui"
            intro="Famílias, encontros, casamentos e celebrações. Cada pessoa que passa pela Invernada do Sol leva embora uma memória — e deixa um pedacinho da sua história com a gente."
          />
        </AnimateIn>

        <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-3">
          {moments.map((moment) => (
            <AnimateIn
              key={moment.id}
              variants={scaleIn}
              className="group relative overflow-hidden rounded-sm"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={moment.src}
                  alt={moment.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 space-y-2 p-6">
                <p className="text-xs font-light uppercase tracking-[0.3em] text-primary">
                  {moment.tag}
                </p>
                <p className="font-heading text-xl font-light italic leading-snug text-foreground">
                  {moment.caption}
                </p>
              </div>
            </AnimateIn>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
