import { cn } from "@/lib/utils"

interface BackgroundVideoProps {
  src: string
  label: string
  poster?: string
  className?: string
}

export function BackgroundVideo({
  src,
  label,
  poster,
  className,
}: BackgroundVideoProps) {
  return (
    <video
      className={cn("h-full w-full object-cover", className)}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      poster={poster}
      aria-label={label}
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}
