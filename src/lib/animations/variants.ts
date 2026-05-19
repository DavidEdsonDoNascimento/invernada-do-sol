import type { Variants } from "framer-motion"

/* Easing curves for cinematic feel */
export const ease = {
  cinematic: [0.25, 0.46, 0.45, 0.94] as const,
  smooth: [0.43, 0.13, 0.23, 0.96] as const,
  spring: { type: "spring", stiffness: 60, damping: 20 },
}

/* Fade in from below — default reveal animation */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: ease.cinematic },
  },
}

/* Fade in */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: ease.cinematic },
  },
}

/* Staggered container */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

/* Scale in — for images and hero elements */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: ease.cinematic },
  },
}

/* Slide in from left */
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: ease.cinematic },
  },
}

/* Slide in from right */
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: ease.cinematic },
  },
}

/* Parallax wrapper — controlled externally via motion values */
export const parallaxVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.4, ease: ease.cinematic } },
}
