import { AnimateIn } from "@/components/motion/AnimateIn"
import { scaleIn } from "@/lib/animations/variants"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { BackgroundVideo } from "@/components/ui/BackgroundVideo"
import { WhatsappButton } from "@/components/ui/WhatsappButton"
import { whatsappLinks } from "@/lib/whatsapp"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

interface StoryBlock {
  id: string
  paragraph: string
  videoSrc: string
  videoLabel: string
  reverse?: boolean
}

const storyBlocks: StoryBlock[] = [
  {
    id: "acolhimento",
    paragraph:
      "Desperte ao som da natureza e viva dias de tranquilidade em nossas cabanas. Com um ambiente acolhedor, cercadas por paisagens naturais e pelo charme da madeira rústica, elas são o refúgio ideal para quem deseja desacelerar, descansar e aproveitar momentos especiais a dois, em família ou entre amigos. Aqui, conforto, natureza e hospitalidade se encontram para tornar sua estadia inesquecível.",
    videoSrc: "/images/cabanas/cabana-invernada-do-sol.mp4",
    videoLabel: "Cabana da Invernada do Sol em meio a Ouro - Santa Catarina",
  },
  {
    id: "conexao",
    paragraph:
      "Nossas cabanas foram pensadas para oferecer muito mais do que uma hospedagem: proporcionam uma experiência de descanso, aconchego e conexão com a natureza. Em um ambiente tranquilo, com vistas encantadoras e toda a rusticidade que torna o lugar único, cada detalhe convida você a relaxar, renovar as energias e criar memórias que ficarão para sempre.",
    videoSrc: "/images/cabanas/cabana-invernada-do-sol-2.mp4",
    videoLabel: "Detalhes da cabana da Invernada do Sol e a paisagem da serra",
    reverse: true,
  },
]

export function CabinSection() {
  return (
    <section id="cabanas" className="px-6 py-28 md:py-36">
      <div className="mx-auto max-w-7xl">
        <AnimateIn>
          <SectionTitle
            eyebrow="A Hospedagem"
            title="Uma cabana, uma experiência só sua"
            intro="Aqui não existem dezenas de quartos. Existe uma cabana, pensada pra quem quer se desligar do mundo e se reconectar com a serra, o silêncio e quem veio junto."
          />
        </AnimateIn>

        <div className="mt-16 space-y-16 md:space-y-24">
          {storyBlocks.map((block) => (
            <div
              key={block.id}
              className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
            >
              <AnimateIn className={cn("order-1", block.reverse && "lg:order-2")}>
                <p className="max-w-prose font-sans text-lg font-light leading-relaxed text-muted-foreground md:text-xl">
                  {block.paragraph}
                </p>
              </AnimateIn>
              <AnimateIn
                variants={scaleIn}
                className={cn("order-2", block.reverse && "lg:order-1")}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                  <BackgroundVideo src={block.videoSrc} label={block.videoLabel} />
                </div>
              </AnimateIn>
            </div>
          ))}
        </div>

        <AnimateIn className="mt-16 text-center md:mt-24" delay={0.1}>
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
