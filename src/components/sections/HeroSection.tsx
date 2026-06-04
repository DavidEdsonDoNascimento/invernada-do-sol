"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { useScrollProgress, useParallax } from "@/hooks/useScrollProgress"
import { fadeUp, fadeIn } from "@/lib/animations/variants"
import { siteConfig } from "@/config/site"
import { whatsappLinks } from "@/lib/whatsapp"
import { WhatsappButton } from "@/components/ui/WhatsappButton"

export function HeroSection() {
  const { ref, scrollYProgress } = useScrollProgress()
  const y = useParallax(scrollYProgress, 60)

  return (
    <section
      id="inicio"
      ref={ref}
      className="film-grain relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 -top-20 -bottom-20">
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/hero/fireplace.webp"
          aria-label="Lareira acesa em uma cabana de madeira da Invernada do Sol"
        >
          <source src="/hero_fireplace.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Amber warmth + cinematic darkening for legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.09 0.02 50 / 0.55) 0%, oklch(0.10 0.03 55 / 0.30) 40%, oklch(0.08 0.01 50 / 0.92) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 85% 65% at 50% 52%, oklch(0.05 0.01 50 / 0.62), transparent 72%)",
        }}
      />
      <div className="gradient-vignette absolute inset-0" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.3 }}
          className="text-xs font-light uppercase tracking-[0.4em] text-primary/90"
        >
          {siteConfig.location.city} · {siteConfig.location.region}
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.5 }}
          className="mt-6 text-balance font-heading text-6xl font-light italic text-gradient-gold md:text-8xl lg:text-9xl"
        >
          Invernada do Sol
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.8 }}
          className="mt-6 max-w-2xl text-pretty font-heading text-xl font-light italic text-foreground/90 md:text-2xl"
        >
          Gastronomia, natureza e o mais belo fim de tarde da região.
        </motion.p>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 1 }}
          className="mt-5 max-w-xl text-pretty font-sans text-base font-light leading-relaxed text-foreground/70"
        >
          Um refúgio acolhedor para viver devagar, reunir pessoas queridas e
          sentir o calor das boas experiências.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 1.3 }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
        >
          <WhatsappButton
            href={whatsappLinks.reserveTable}
            label={siteConfig.cta.reserveTable.label}
            variant="primary"
          />
          <WhatsappButton
            href={whatsappLinks.cabinAvailability}
            label={siteConfig.cta.cabinAvailability.label}
            variant="outline"
          />
        </motion.div>
      </div>

      <motion.a
        href="#refugio"
        aria-label="Descer para o conteúdo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.8, duration: 1 },
          y: { delay: 1.8, duration: 2.2, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-8 z-10 text-foreground/50"
      >
        <ArrowDown className="size-6" strokeWidth={1.25} />
      </motion.a>
    </section>
  )
}
