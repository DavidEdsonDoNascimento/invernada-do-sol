import Image from "next/image"
import { Soup, Coffee, Mountain } from "lucide-react"
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
    id: "sopas",
    icon: Soup,
    title: "Buffet de Sopas",
    description:
      "Caldos e sopas quentinhas pra aquecer as noites de inverno na serra.",
  },
  {
    id: "colonial",
    icon: Coffee,
    title: "Café Colonial",
    description:
      "A fartura da mesa colonial: pães, cucas, doces e o melhor da nossa terra.",
  },
  {
    id: "serra",
    icon: Mountain,
    title: "Sabores de Ouro - Santa Catarina",
    description:
      "Gastronomia afetiva, feita com ingredientes da região e tempo de sobra.",
  },
]

const tableGallery = [
  {
    src: "/images/restaurante/churrasco-1.jpg",
    alt: "Churrasco assando na brasa, no fogo de chão da Invernada do Sol",
  },
  {
    src: "/images/restaurante/churrasco-2.jpg",
    alt: "Carnes na lenha sendo preparadas na Invernada do Sol",
  },
  {
    src: "/images/restaurante/mesa-farta-1.jpg",
    alt: "Mesa farta com pratos de Ouro - Santa Catarina para compartilhar",
  },
  {
    src: "/images/restaurante/mesa-farta-2.jpg",
    alt: "Fartura da mesa colonial da Invernada do Sol servida para a família",
  },
]

export function RestaurantSection() {
  return (
    <section id="restaurante" className="px-6 py-28 md:py-36">
      <div className="mx-auto max-w-7xl">
        <AnimateIn>
          <SectionTitle
            eyebrow="Restaurante"
            title="Sabores que reúnem momentos que encantam"
            intro="Tradição, sabor e momentos especiais esperam por você! Todos os domingos, desfrute do nosso tradicional almoço em família, preparado com todo carinho. E fique atento às nossas noites temáticas e eventos especiais, como Noite de Sopas, Café Colonial e Noite Italiana, realizados em datas selecionadas para tornar sua experiência ainda mais saborosa. Acompanhe nossas novidades e venha viver bons momentos conosco."
          />
        </AnimateIn>

        <AnimateIn variants={scaleIn} className="mt-16">
          <div className="relative aspect-video overflow-hidden rounded-sm">
            <BackgroundVideo
              src="/images/restaurante/buffet.mp4"
              label="Buffet da Invernada do Sol com pratos quentes servidos na serra"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>
        </AnimateIn>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <AnimateIn variants={scaleIn}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src="/images/restaurante/buffet_de_sopas.webp"
                alt="Buffet de Sopas da Invernada do Sol, com panelas de caldos quentes"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </AnimateIn>

          <div className="space-y-4">
            <AnimateIn>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-primary/50" />
                <p className="text-xs font-light uppercase tracking-[0.35em] text-primary">
                  O famoso Buffet de Sopas
                </p>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h3 className="font-heading text-3xl font-light italic text-foreground md:text-4xl">
                A sopa quentinha que virou tradição
              </h3>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="max-w-prose font-sans text-base font-light leading-relaxed text-muted-foreground">
                Nas noites frias da serra, nada como sentar perto da lareira com
                uma sopa fumegante na mão. No fim de semana, o Café Colonial
                completa a experiência com a fartura e o carinho da nossa mesa.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.3}>
              <p className="max-w-prose font-sans text-base font-light leading-relaxed text-muted-foreground">
                É comida de verdade, feita pra ser compartilhada entre encontros,
                conversas e o pôr do sol pintando as araucárias lá fora.
              </p>
            </AnimateIn>
          </div>
        </div>

        <div className="mt-20">
          <AnimateIn>
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-primary/50" />
              <p className="text-xs font-light uppercase tracking-[0.35em] text-primary">
                Do fogo de chão à mesa farta
              </p>
              <span className="h-px w-8 bg-primary/50" />
            </div>
          </AnimateIn>
          <StaggerContainer className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {tableGallery.map((photo) => (
              <AnimateIn
                key={photo.src}
                variants={scaleIn}
                className="group overflow-hidden rounded-sm"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
              </AnimateIn>
            ))}
          </StaggerContainer>
        </div>

        <StaggerContainer className="mt-20 grid gap-10 sm:grid-cols-3">
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

        <AnimateIn className="mt-16 text-center" delay={0.1}>
          <WhatsappButton
            href={whatsappLinks.reserveTable}
            label={siteConfig.cta.reserveTable.label}
            variant="primary"
          />
        </AnimateIn>
      </div>
    </section>
  )
}
