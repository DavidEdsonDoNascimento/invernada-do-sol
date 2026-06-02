import { cn } from "@/lib/utils"

interface SectionTitleProps {
  eyebrow?: string
  title: string
  intro?: string
  align?: "left" | "center"
  className?: string
}

export function SectionTitle({
  eyebrow,
  title,
  intro,
  align = "center",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "max-w-2xl space-y-4",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "flex items-center gap-3",
            align === "center" && "justify-center"
          )}
        >
          <span className="h-px w-8 bg-primary/50" />
          <p className="text-xs font-light uppercase tracking-[0.35em] text-primary">
            {eyebrow}
          </p>
          {align === "center" && <span className="h-px w-8 bg-primary/50" />}
        </div>
      )}
      <h2 className="text-balance font-heading text-4xl font-light italic text-foreground md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {intro && (
        <p className="text-pretty font-sans text-base font-light leading-relaxed text-muted-foreground md:text-lg">
          {intro}
        </p>
      )}
    </div>
  )
}
