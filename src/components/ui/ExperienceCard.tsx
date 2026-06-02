import type { Experience } from "@/types"

export function ExperienceCard({ title, description, icon: Icon }: Experience) {
  return (
    <div className="space-y-4">
      <Icon className="size-7 text-primary" strokeWidth={1.25} />
      <h3 className="font-heading text-2xl font-light italic text-foreground">
        {title}
      </h3>
      <p className="font-sans text-sm font-light leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  )
}
