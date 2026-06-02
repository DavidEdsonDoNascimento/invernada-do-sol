import { cn } from "@/lib/utils"

interface WhatsappButtonProps {
  href: string
  label: string
  variant?: "primary" | "outline"
  className?: string
}

export function WhatsappButton({
  href,
  label,
  variant = "primary",
  className,
}: WhatsappButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-light tracking-wide transition-all duration-300",
        variant === "primary"
          ? "bg-primary text-primary-foreground hover:bg-primary/85"
          : "border border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground",
        className
      )}
    >
      {label}
    </a>
  )
}
