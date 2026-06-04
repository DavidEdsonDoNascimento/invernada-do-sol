import { AnimateIn } from "@/components/motion/AnimateIn"
import { StaggerContainer } from "@/components/motion/StaggerContainer"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { ExperienceCard } from "@/components/ui/ExperienceCard"
import { experiences } from "@/content/experiences"

export function ExperiencesSection() {
  return (
    <section id="experiencias" className="bg-secondary px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <AnimateIn>
          <SectionTitle
            eyebrow="A Experiência"
            title="O que faz da Invernada um refúgio"
            intro="Mais do que uma refeição: encontros, gastronomia afetiva e a serra inteira pra desacelerar e aquecer a alma."
          />
        </AnimateIn>

        <StaggerContainer className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {experiences.map((experience) => (
            <AnimateIn key={experience.id}>
              <ExperienceCard {...experience} />
            </AnimateIn>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
