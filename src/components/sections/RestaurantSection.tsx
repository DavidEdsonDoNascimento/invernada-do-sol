import Image from "next/image"
import { AnimateIn } from "@/components/motion/AnimateIn"
import { StaggerContainer } from "@/components/motion/StaggerContainer"
import { scaleIn } from "@/lib/animations/variants"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { DishCard } from "@/components/ui/DishCard"
import { WhatsappButton } from "@/components/ui/WhatsappButton"
import { featuredDish, menuItems } from "@/content/menu"
import { whatsappLinks } from "@/lib/whatsapp"
import { siteConfig } from "@/config/site"

export function RestaurantSection() {
  return (
    <section id="restaurante" className="px-6 py-28 md:py-36">
      <div className="mx-auto max-w-7xl">
        <AnimateIn>
          <SectionTitle
            eyebrow="Restaurante"
            title="O que o fogo prepara"
            intro="Cozinha de inverno feita na lenha, com ingredientes da serra e o tempo que cada prato merece."
          />
        </AnimateIn>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <AnimateIn variants={scaleIn}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src={featuredDish.image!}
                alt={featuredDish.name}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </AnimateIn>

          <div className="space-y-4">
            <AnimateIn>
              <p className="text-xs font-light uppercase tracking-[0.3em] text-muted-foreground">
                Prato da casa
              </p>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h3 className="font-heading text-3xl font-light italic text-foreground md:text-4xl">
                {featuredDish.name}
              </h3>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="max-w-prose font-sans text-base font-light leading-relaxed text-muted-foreground">
                {featuredDish.description}
              </p>
            </AnimateIn>
            {featuredDish.price && (
              <AnimateIn delay={0.3}>
                <p className="font-sans text-lg font-light text-primary">
                  {featuredDish.price}
                </p>
              </AnimateIn>
            )}
          </div>
        </div>

        <StaggerContainer className="mt-20 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {menuItems.map((dish) => (
            <AnimateIn key={dish.id}>
              <DishCard {...dish} />
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
