"use client"

import { useScroll, useTransform, MotionValue } from "framer-motion"
import { useRef } from "react"

export function useScrollProgress(outputRange: [number, number] = [0, 1]) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  return { ref, scrollYProgress }
}

export function useParallax(
  scrollYProgress: MotionValue<number>,
  distance: number = 80
) {
  return useTransform(scrollYProgress, [0, 1], [-distance, distance])
}
