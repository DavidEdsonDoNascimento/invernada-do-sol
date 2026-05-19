"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { staggerContainer } from "@/lib/animations/variants"

interface StaggerContainerProps {
  children: React.ReactNode
  className?: string
  once?: boolean
}

export function StaggerContainer({
  children,
  className,
  once = true,
}: StaggerContainerProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: "-10% 0px" })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  )
}
