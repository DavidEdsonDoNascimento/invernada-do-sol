import Image from "next/image"
import { AnimateIn } from "@/components/motion/AnimateIn"
import { scaleIn } from "@/lib/animations/variants"

export function RefugeSection() {
  return (
    <section id="refugio" className="px-6 py-28 md:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <AnimateIn variants={scaleIn} className="order-1">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src="/images/refugio/refugio-principal.webp"
              alt="Interior aconchegante do refúgio Invernada do Sol"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
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
              Onde a serra abraça e o fogo acolhe
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="max-w-prose font-sans text-base font-light leading-relaxed text-muted-foreground md:text-lg">
              A Invernada do Sol nasceu de um desejo simples: criar um lugar onde
              o inverno deixa de ser frio e passa a ser aconchego. Entre
              araucárias e neblina, cada detalhe foi pensado para que você
              respire fundo e fique.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <p className="max-w-prose font-sans text-base font-light leading-relaxed text-muted-foreground md:text-lg">
              Não é um hotel. É um refúgio. Um convite a desacelerar, comer bem,
              dormir sob o céu da serra e levar embora memórias que aquecem muito
              depois da viagem.
            </p>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
