"use client"

import { useEffect, useState } from "react"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/config/site"
import { whatsappLinks } from "@/lib/whatsapp"
import { MobileMenu } from "@/components/layout/MobileMenu"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-border bg-background/85 py-3 backdrop-blur-md"
            : "border-b border-transparent bg-transparent py-5"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <a
            href="#inicio"
            className="font-heading text-xl font-light tracking-wide text-foreground"
          >
            Invernada <span className="italic text-primary">do Sol</span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-light text-foreground/80 transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={whatsappLinks.reserveTable}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full border border-primary/60 px-5 py-2 text-sm font-light text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:inline-block"
            >
              {siteConfig.cta.reserveTable.label}
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="text-foreground lg:hidden"
              aria-label="Abrir menu"
            >
              <Menu className="size-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
