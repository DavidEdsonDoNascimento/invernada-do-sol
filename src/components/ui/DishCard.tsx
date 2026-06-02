import Image from "next/image"
import type { MenuItem } from "@/types"

export function DishCard({ name, description, price, image }: MenuItem) {
  return (
    <div className="group space-y-4">
      {image && (
        <div className="aspect-[4/5] overflow-hidden rounded-sm">
          <Image
            src={image}
            alt={name}
            width={600}
            height={750}
            className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
        </div>
      )}
      <div className="space-y-1">
        <h3 className="font-heading text-xl font-light text-foreground">
          {name}
        </h3>
        <p className="font-sans text-sm font-light leading-relaxed text-muted-foreground">
          {description}
        </p>
        {price && (
          <p className="pt-1 font-sans text-sm font-light text-primary">
            {price}
          </p>
        )}
      </div>
    </div>
  )
}
