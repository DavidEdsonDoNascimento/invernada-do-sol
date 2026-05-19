"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { fadeUp } from "@/lib/animations/variants"
import type { Variants } from "framer-motion"

interface AnimateInProps {
  children: React.ReactNode
  variants?: Variants
  className?: string
  delay?: number
  once?: boolean
}

export function AnimateIn({
  children,
  variants = fadeUp,
  className,
  delay = 0,
  once = true,
}: AnimateInProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: "-10% 0px" })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
