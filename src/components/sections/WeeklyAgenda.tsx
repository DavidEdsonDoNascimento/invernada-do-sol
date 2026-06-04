import Image from "next/image"
import { AnimateIn } from "@/components/motion/AnimateIn"
import { StaggerContainer } from "@/components/motion/StaggerContainer"
import { scaleIn } from "@/lib/animations/variants"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { agendaEvents } from "@/content/agenda"
import { siteConfig } from "@/config/site"

export function WeeklyAgenda() {
  return (
    <section id="agenda" className="bg-secondary px-6 py-28 md:py-36">
      <div className="mx-auto max-w-5xl">
        <AnimateIn>
          <SectionTitle
            eyebrow="Agenda"
            title="Sempre tem algo acontecendo por aqui"
            intro="Jantares especiais, Café Colonial, datas comemorativas e encontros que mudam a cada semana. A nossa agenda é viva."
          />
        </AnimateIn>

        <StaggerContainer className="mt-16 grid gap-8 sm:grid-cols-2">
          {agendaEvents.map((event) => (
            <AnimateIn key={event.id} variants={scaleIn}>
              <article className="group overflow-hidden rounded-sm border border-border bg-background/40">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={event.image}
                    alt={`${event.title} — ${event.tag} na Invernada do Sol`}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2 p-6">
                  <p className="text-xs font-light uppercase tracking-[0.3em] text-primary">
                    {event.tag}
                  </p>
                  <h3 className="font-heading text-2xl font-light italic text-foreground">
                    {event.title}
                  </h3>
                  <p className="font-sans text-sm font-light leading-relaxed text-muted-foreground">
                    {event.description}
                  </p>
                </div>
              </article>
            </AnimateIn>
          ))}
        </StaggerContainer>

        <AnimateIn className="mt-12 text-center" delay={0.1}>
          <p className="font-sans text-base font-light leading-relaxed text-muted-foreground">
            A programação muda toda semana. Acompanhe as novidades no nosso{" "}
            <a
              href={siteConfig.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-4 hover:underline"
            >
              Instagram {siteConfig.contact.instagram}
            </a>{" "}
            e venha viver a próxima.
          </p>
        </AnimateIn>
      </div>
    </section>
  )
}
