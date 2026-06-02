"use client"

import { useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"
import { siteConfig } from "@/config/site"
import { whatsappLinks } from "@/lib/whatsapp"

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[60] flex flex-col bg-background/98 backdrop-blur-md lg:hidden"
        >
          <div className="flex items-center justify-between px-6 py-5">
            <span className="font-heading text-xl font-light text-foreground">
              Invernada <span className="italic text-primary">do Sol</span>
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar menu"
              className="text-foreground"
            >
              <X className="size-6" />
            </button>
          </div>

          <nav
            className="flex flex-1 flex-col justify-center gap-6 px-8"
            aria-label="Navegação mobile"
          >
            {siteConfig.nav.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={onClose}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.5 }}
                className="font-heading text-3xl font-light text-foreground/90 transition-colors hover:text-primary"
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 px-8 pb-10">
            <a
              href={whatsappLinks.reserveTable}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="rounded-full bg-primary px-6 py-3 text-center text-sm font-light text-primary-foreground"
            >
              {siteConfig.cta.reserveTable.label}
            </a>
            <a
              href={whatsappLinks.cabinAvailability}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="rounded-full border border-primary/60 px-6 py-3 text-center text-sm font-light text-primary"
            >
              {siteConfig.cta.cabinAvailability.label}
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
