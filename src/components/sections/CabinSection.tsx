import Image from "next/image"
import { Sparkles, TreePine, Moon, Sunset } from "lucide-react"
import { AnimateIn } from "@/components/motion/AnimateIn"
import { StaggerContainer } from "@/components/motion/StaggerContainer"
import { scaleIn } from "@/lib/animations/variants"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { BackgroundVideo } from "@/components/ui/BackgroundVideo"
import { WhatsappButton } from "@/components/ui/WhatsappButton"
import { whatsappLinks } from "@/lib/whatsapp"
import { siteConfig } from "@/config/site"

const highlights = [
  {
    id: "exclusividade",
    icon: Sparkles,
    title: "Só sua",
    description: "Uma única cabana na propriedade. Privacidade do começo ao fim.",
  },
  {
    id: "natureza",
    icon: TreePine,
    title: "Natureza ao redor",
    description: "Cercada por araucárias, com a paisagem de Ouro - Santa Catarina de janela.",
  },
  {
    id: "silencio",
    icon: Moon,
    title: "Silêncio de verdade",
    description: "O barulho aqui é o do vento e da lareira. Nada além disso.",
  },
  {
    id: "paisagem",
    icon: Sunset,
    title: "O pôr do sol",
    description: "O fim de tarde mais bonito da região, direto da varanda.",
  },
]

export function CabinSection() {
  return (
    <section id="cabanas" className="px-6 py-28 md:py-36">
      <div className="mx-auto max-w-7xl">
        <AnimateIn>
          <SectionTitle
            eyebrow="A Cabana"
            title="Uma cabana, uma experiência só sua"
            intro="Aqui não existem dezenas de quartos. Existe uma cabana, pensada pra quem quer se desligar do mundo e se reconectar com a serra, o silêncio e quem veio junto."
          />
        </AnimateIn>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
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
              <h3 className="text-balance font-heading text-3xl font-light italic text-foreground md:text-4xl">
                Um lugar pra desacelerar e reunir quem a gente ama
              </h3>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <p className="max-w-prose font-sans text-base font-light leading-relaxed text-muted-foreground">
                A Invernada do Sol é feita de encontros. Da varanda com vista pra
                Ouro - Santa Catarina, do cheiro da churrasqueira acesa, das araucárias
                que cercam tudo — e até o cachorro da família é bem-vindo. Aqui o
                tempo passa mais devagar.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="max-w-prose font-sans text-base font-light leading-relaxed text-muted-foreground">
                É a gastronomia afetiva, a lareira acesa e o pôr do sol mais bonito
                da região se juntando pra criar histórias. Você chega visitante e
                vai embora com memórias que aquecem muito depois da viagem.
              </p>
            </AnimateIn>
          </div>
        </div>

        <AnimateIn variants={scaleIn} className="mt-16">
          <div className="relative aspect-video overflow-hidden rounded-sm">
            <BackgroundVideo
              src="/images/cabanas/cabana-invernada-do-sol.mp4"
              label="Cabana da Invernada do Sol em meio a Ouro - Santa Catarina"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>
        </AnimateIn>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <AnimateIn>
              <h3 className="text-balance font-heading text-3xl font-light italic text-foreground md:text-4xl">
                Dormir ouvindo o silêncio da serra
              </h3>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <p className="max-w-prose font-sans text-base font-light leading-relaxed text-muted-foreground">
                Depois que o pôr do sol se despede e a última taça é servida, a
                cabana te recebe. A lareira acesa, a vista das araucárias e a
                névoa descendo devagar sobre o vale.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="max-w-prose font-sans text-base font-light leading-relaxed text-muted-foreground">
                Você acorda com o canto dos pássaros e toda a paisagem de Ouro
                - Santa Catarina diante de você. É a conexão com a natureza que
                só a exclusividade de estar sozinho num lugar assim oferece.
              </p>
            </AnimateIn>
          </div>

          <AnimateIn variants={scaleIn}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src="/images/cabanas/paisagem-dia.webp"
                alt="Vista de Ouro - Santa Catarina a partir da cabana da Invernada do Sol"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </AnimateIn>
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <StaggerContainer className="order-2 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:order-1">
            {highlights.map((item) => (
              <AnimateIn key={item.id} className="space-y-3">
                <item.icon className="size-7 text-primary" strokeWidth={1.25} />
                <h4 className="font-heading text-2xl font-light italic text-foreground">
                  {item.title}
                </h4>
                <p className="font-sans text-sm font-light leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </AnimateIn>
            ))}
          </StaggerContainer>

          <AnimateIn variants={scaleIn} className="order-1 lg:order-2">
            <div className="relative aspect-video overflow-hidden rounded-sm">
              <BackgroundVideo
                src="/images/cabanas/cabana-invernada-do-sol-2.mp4"
                label="Detalhes da cabana da Invernada do Sol e a paisagem da serra"
              />
            </div>
          </AnimateIn>
        </div>

        <AnimateIn className="mt-16 text-center" delay={0.1}>
          <WhatsappButton
            href={whatsappLinks.cabinAvailability}
            label={siteConfig.cta.cabinAvailability.label}
            variant="outline"
          />
        </AnimateIn>
      </div>
    </section>
  )
}
