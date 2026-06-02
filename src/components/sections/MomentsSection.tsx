import Image from "next/image"
import { AnimateIn } from "@/components/motion/AnimateIn"
import { StaggerContainer } from "@/components/motion/StaggerContainer"
import { scaleIn } from "@/lib/animations/variants"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { cn } from "@/lib/utils"
import { moments } from "@/content/moments"

const sizeClasses: Record<NonNullable<(typeof moments)[number]["size"]>, string> =
  {
    tall: "row-span-2",
    wide: "col-span-2",
    square: "",
  }

export function MomentsSection() {
  return (
    <section id="momentos" className="bg-secondary px-6 py-28 md:py-36">
      <div className="mx-auto max-w-7xl">
        <AnimateIn>
          <SectionTitle
            eyebrow="Momentos na Invernada"
            title="Memórias que aquecem depois da viagem"
            intro="Nem tudo cabe em palavras. Algumas coisas só se sentem — o brilho do fogo, o vinho na taça, o silêncio compartilhado."
          />
        </AnimateIn>

        <StaggerContainer className="mt-16 grid auto-rows-[200px] grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[240px]">
          {moments.map((moment) => (
            <AnimateIn
              key={moment.id}
              variants={scaleIn}
              className={cn(
                "group relative overflow-hidden rounded-sm",
                moment.size && sizeClasses[moment.size]
              )}
            >
              <Image
                src={moment.src}
                alt={moment.alt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/95 via-background/25 to-transparent" />
              {moment.caption && (
                <p className="absolute inset-x-0 bottom-0 p-5 font-heading text-lg font-light italic leading-snug text-foreground">
                  {moment.caption}
                </p>
              )}
            </AnimateIn>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
