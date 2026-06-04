import { AnimateIn } from "@/components/motion/AnimateIn"
import { scaleIn } from "@/lib/animations/variants"
import { BackgroundVideo } from "@/components/ui/BackgroundVideo"

export function RefugeSection() {
  return (
    <section id="refugio" className="px-6 py-28 md:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <AnimateIn variants={scaleIn} className="order-1">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <BackgroundVideo
              src="/images/refugio/familia-e-cachorro-varanda.mp4"
              label="Família reunida na varanda da Invernada do Sol, com o cachorro por perto e a serra ao fundo"
            />
          </div>
        </AnimateIn>

        <div className="order-2 space-y-6">
          <AnimateIn>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-primary/50" />
              <p className="text-xs font-light uppercase tracking-[0.35em] text-primary">
                O Refúgio
              </p>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="text-balance font-heading text-4xl font-light italic text-foreground md:text-5xl">
              Um lugar pra desacelerar e reunir quem a gente ama
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="max-w-prose font-sans text-base font-light leading-relaxed text-muted-foreground md:text-lg">
              A Invernada do Sol é feita de encontros. Da varanda com vista pra
              Serra Catarinense, do cheiro da churrasqueira acesa, das araucárias
              que cercam tudo — e até o cachorro da família é bem-vindo. Aqui o
              tempo passa mais devagar.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <p className="max-w-prose font-sans text-base font-light leading-relaxed text-muted-foreground md:text-lg">
              É a gastronomia afetiva, a lareira acesa e o pôr do sol mais bonito
              da região se juntando pra criar histórias. Você chega visitante e
              vai embora com memórias que aquecem muito depois da viagem.
            </p>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
