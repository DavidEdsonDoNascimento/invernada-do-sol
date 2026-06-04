import Image from "next/image"
import { AnimateIn } from "@/components/motion/AnimateIn"
import { scaleIn } from "@/lib/animations/variants"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { cn } from "@/lib/utils"
import { galleryImages } from "@/content/gallery"

export function GallerySection() {
  return (
    <section id="galeria" className="px-6 py-28 md:py-36">
      <div className="mx-auto max-w-7xl">
        <AnimateIn>
          <SectionTitle
            eyebrow="Galeria"
            title="Um passeio pela serra, a lareira e o pôr do sol"
          />
        </AnimateIn>

        <div className="mt-16 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <AnimateIn
              key={image.src}
              variants={scaleIn}
              delay={(index % 4) * 0.08}
              className={cn(
                "group overflow-hidden rounded-sm",
                index === 0 && "col-span-2 row-span-2"
              )}
            >
              <div
                className={cn(
                  "relative h-full overflow-hidden",
                  index === 0 ? "aspect-square lg:aspect-auto lg:h-full" : "aspect-square"
                )}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
