import { cn } from "@/lib/utils"
import { siteConfig } from "@/config/site"
import { LogoMark } from "@/components/layout/LogoMark"

interface LogoProps {
  as?: "a" | "p"
  href?: string
  className?: string
  markClassName?: string
}

export function Logo({ as = "p", href, className, markClassName }: LogoProps) {
  const [first, second] = siteConfig.name.split(" do ")
  const content = (
    <>
      <LogoMark className={cn("h-9 w-9 shrink-0 text-foreground", markClassName)} />
      <span className="font-heading text-xl font-light leading-none tracking-wide text-foreground">
        {first} <span className="italic text-primary">do {second}</span>
      </span>
    </>
  )

  const classes = cn("inline-flex items-center gap-3", className)

  if (as === "a") {
    return (
      <a href={href} aria-label={siteConfig.name} className={classes}>
        {content}
      </a>
    )
  }

  return <p className={classes}>{content}</p>
}
