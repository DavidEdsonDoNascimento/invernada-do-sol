import { Calendar } from "lucide-react"
import { AnimateIn } from "@/components/motion/AnimateIn"
import { StaggerContainer } from "@/components/motion/StaggerContainer"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { agenda } from "@/content/agenda"

export function WeeklyAgenda() {
  return (
    <section id="agenda" className="bg-secondary px-6 py-28 md:py-36">
      <div className="mx-auto max-w-5xl">
        <AnimateIn>
          <SectionTitle
            eyebrow="Agenda da Semana"
            title="Três dias, três convites"
            intro="Abrimos de sexta a domingo. Cada dia tem o seu ritmo — escolha o seu."
          />
        </AnimateIn>

        <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-3">
          {agenda.map((item) => (
            <AnimateIn key={item.id}>
              <div className="flex h-full flex-col gap-4 rounded-sm border border-border bg-background/40 p-8">
                <div className="flex items-center gap-2 text-primary">
                  <Calendar className="size-4" strokeWidth={1.25} />
                  <span className="text-xs font-light uppercase tracking-[0.25em]">
                    {item.day}
                  </span>
                </div>
                <h3 className="font-heading text-2xl font-light italic text-foreground">
                  {item.title}
                </h3>
                <p className="flex-1 font-sans text-sm font-light leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                {item.time && (
                  <p className="font-sans text-sm font-light text-foreground/70">
                    {item.time}
                  </p>
                )}
              </div>
            </AnimateIn>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
