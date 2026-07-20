import { AnimateIn } from "@/components/motion/AnimateIn"
import { StaggerContainer } from "@/components/motion/StaggerContainer"
import { scaleIn } from "@/lib/animations/variants"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { BackgroundVideo } from "@/components/ui/BackgroundVideo"
import { siteConfig } from "@/config/site"

export function WeeklyAgenda() {
  return (
    <section id="agenda" className="bg-secondary px-6 py-28 md:py-36">
      <div className="mx-auto max-w-5xl">
        <AnimateIn>
          <SectionTitle
            eyebrow="Agenda"
            title="O melhor da Invernada acontece aqui"
            intro="A cada semana uma nova experiência espera por você!"
          />
        </AnimateIn>

        <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2">
          <AnimateIn variants={scaleIn} className="group relative overflow-hidden rounded-sm">
            <div className="relative aspect-[4/5] overflow-hidden">
              <BackgroundVideo
                src="/images/refugio/almoço-de-domingo.mp4"
                label="Almoço de domingo em família na Invernada do Sol"
                className="transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </AnimateIn>

          <AnimateIn variants={scaleIn} className="group relative overflow-hidden rounded-sm">
            <div className="relative aspect-[4/5] overflow-hidden">
              <BackgroundVideo
                src="/images/refugio/magia-do-buteco.mp4"
                label="A magia do boteco na Invernada do Sol"
                className="transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </AnimateIn>
        </StaggerContainer>

        <AnimateIn className="mt-12 text-center" delay={0.1}>
          <p className="font-sans text-base font-light leading-relaxed text-muted-foreground">
            Acompanhe as novidades em nosso{" "}
            <a
              href={siteConfig.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-4 hover:underline"
            >
              Instagram {siteConfig.contact.instagram}
            </a>{" "}
            e venha fazer parte dos próximos momentos especiais.
          </p>
        </AnimateIn>
      </div>
    </section>
  )
}
