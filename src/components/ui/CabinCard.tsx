import Image from "next/image"
import { Users } from "lucide-react"
import type { Cabin } from "@/types"

export function CabinCard({
  name,
  description,
  capacity,
  amenities,
  image,
  pricePerNight,
}: Cabin) {
  return (
    <article className="group relative overflow-hidden rounded-sm">
      <div className="aspect-[3/4] overflow-hidden">
        <Image
          src={image}
          alt={`Cabana ${name} — Invernada do Sol`}
          width={700}
          height={933}
          className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/65 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 space-y-3 p-6">
        <div className="flex items-center justify-between">
          <h3 className="font-heading text-2xl font-light italic text-foreground">
            {name}
          </h3>
          <span className="flex items-center gap-1 text-xs font-light text-muted-foreground">
            <Users className="size-3.5" /> {capacity}
          </span>
        </div>
        <p className="font-sans text-sm font-light leading-relaxed text-foreground/80">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          {amenities.map((a) => (
            <span
              key={a}
              className="rounded-full border border-border px-3 py-1 text-xs font-light text-muted-foreground"
            >
              {a}
            </span>
          ))}
        </div>
        {pricePerNight && (
          <p className="pt-1 font-sans text-sm font-light text-primary">
            {pricePerNight}
          </p>
        )}
      </div>
    </article>
  )
}
