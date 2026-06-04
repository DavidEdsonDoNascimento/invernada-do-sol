import Image from "next/image"
import { AnimateIn } from "@/components/motion/AnimateIn"
import { StaggerContainer } from "@/components/motion/StaggerContainer"
import { scaleIn } from "@/lib/animations/variants"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { BackgroundVideo } from "@/components/ui/BackgroundVideo"
import { featuredMoment, moments } from "@/content/moments"

export function MomentsSection() {
  return (
    <section id="momentos" className="bg-secondary px-6 py-28 md:py-36">
      <div className="mx-auto max-w-7xl">
        <AnimateIn>
          <SectionTitle
            eyebrow="Momentos na Invernada"
            title="O palco dos dias mais importantes da vida"
            intro="Casamentos, famílias, encontros e celebrações. Cada pessoa que passa por aqui leva uma memória — e deixa um pedacinho da sua história com a gente."
          />
        </AnimateIn>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimateIn variants={scaleIn}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <BackgroundVideo
                src={featuredMoment.src}
                label={featuredMoment.label}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
            </div>
          </AnimateIn>

          <div className="space-y-5">
            <AnimateIn>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-primary/50" />
                <p className="text-xs font-light uppercase tracking-[0.35em] text-primary">
                  {featuredMoment.tag}
                </p>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h3 className="text-balance font-heading text-3xl font-light italic text-foreground md:text-4xl">
                {featuredMoment.title}
              </h3>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="max-w-prose font-sans text-base font-light leading-relaxed text-muted-foreground">
                {featuredMoment.text}
              </p>
            </AnimateIn>
          </div>
        </div>

        <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
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
