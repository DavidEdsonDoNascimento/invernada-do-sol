# Motion System — Invernada do Sol

## Philosophy

Motion at Invernada do Sol is never decorative. Every animation serves one of three purposes:

1. **Reveal** — bringing content into existence gradually, so the eye settles rather than startles
2. **Guide** — directing attention to what matters, in the order it matters
3. **Deepen** — reinforcing the feeling of slowness, depth, and deliberate craft

The baseline rule: **if removing the animation makes the page feel equally good, remove it.**

Motion should feel like the page is *breathing*, not performing.

---

## Core Principles

### Slowness is a Feature
Minimum duration: 0.7s. Preferred range: 0.8s–1.4s. The temptation is to make animations faster to feel "modern" — resist it. Slowness communicates confidence and luxury.

### Ease Toward Rest
All animations ease out — they decelerate as they arrive. Nothing snaps. Nothing bounces (with rare exception for playful micro-interactions).

### Enter Once, Stay
Every element animates in **once**. When the user scrolls back up, elements remain visible. Re-animating on scroll-back is noise. Use `once: true` on all `useInView` calls.

### Stagger, Don't Flood
When multiple elements appear together, stagger them by 100–150ms. Never show more than 5 items in a single stagger group. Split large lists into logical sub-groups.

### Motion Respects Reduced-Motion
Always check `prefers-reduced-motion`. When active, skip translate/scale animations but keep opacity fades at 50% duration.

---

## Easing Curves

Defined in `src/lib/animations/variants.ts`:

```ts
export const ease = {
  cinematic: [0.25, 0.46, 0.45, 0.94],   // primary — smooth deceleration
  smooth:    [0.43, 0.13, 0.23, 0.96],   // for scale transforms
  spring:    { type: "spring", stiffness: 60, damping: 20 },  // for playful interactions only
}
```

- **`cinematic`**: The default. Used on `fadeUp`, `fadeIn`, `slideIn`. Feels like a camera settling.
- **`smooth`**: Used on scale transforms (`scaleIn`). Prevents the zoomed appearance from feeling mechanical.
- **`spring`**: Reserved for small UI moments: button hover growth, icon pop. Never on section-level reveals.

---

## Animation Variant Catalog

All defined in `src/lib/animations/variants.ts` and used via the motion wrappers.

### `fadeUp` — Default Reveal
The workhorse. Elements rise from 24px below and fade in.

```ts
fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: ease.cinematic } }
}
```

**Use for**: Headlines, paragraphs, cards, any text content.

---

### `fadeIn` — Pure Opacity
No movement. Element simply appears.

```ts
fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, ease: ease.cinematic } }
}
```

**Use for**: Background overlays, decorative elements, dividers, anything that should not physically move.

---

### `scaleIn` — Image Reveal
Image starts slightly zoomed in and settles to natural size. Creates a "developing photograph" feel.

```ts
scaleIn = {
  hidden:  { opacity: 0, scale: 1.05 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: ease.smooth } }
}
```

**Use for**: Hero image, gallery images, cabin photography, any full-bleed media.

---

### `staggerContainer` + `fadeUp` children — List Reveals
Container triggers stagger; children inherit the stagger delay.

```ts
staggerContainer = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
}
```

**Use for**: Experience pillars, menu items, cabin features, testimonial cards.

---

### `slideInLeft` / `slideInRight` — Lateral Reveals
For content that arrives in a meaningful direction — e.g., two-column layouts where text and image arrive from opposite sides.

```ts
slideInLeft  = { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, ... } }
slideInRight = { hidden: { opacity: 0, x:  40 }, visible: { opacity: 1, x: 0, ... } }
```

**Use for**: Two-column about sections, side-by-side story moments. Use sparingly.

---

## Motion Wrappers

### `<AnimateIn>` — Single Element Reveal
Wraps any element in a scroll-triggered `useInView` animation.

```tsx
import { AnimateIn } from "@/components/motion/AnimateIn"
import { scaleIn } from "@/lib/animations/variants"

<AnimateIn variants={scaleIn} delay={0.2}>
  <img src="..." alt="..." />
</AnimateIn>
```

Props:
- `variants` — defaults to `fadeUp`
- `delay` — additional delay in seconds (default 0)
- `once` — default `true`
- `className` — forwarded to motion.div

---

### `<StaggerContainer>` — Grouped Reveals
Wraps a list of `<AnimateIn>` or `motion.div` children and staggers them.

```tsx
import { StaggerContainer } from "@/components/motion/StaggerContainer"
import { AnimateIn } from "@/components/motion/AnimateIn"

<StaggerContainer className="grid grid-cols-3 gap-8">
  {pillars.map(p => (
    <AnimateIn key={p.id}>
      <PillarCard {...p} />
    </AnimateIn>
  ))}
</StaggerContainer>
```

---

## Scroll-Driven Parallax

Used for depth effects — hero images scrolling slower than content, floating decorative elements.

```tsx
"use client"
import { useScrollProgress, useParallax } from "@/hooks/useScrollProgress"
import { motion } from "framer-motion"

function ParallaxHero() {
  const { ref, scrollYProgress } = useScrollProgress()
  const y = useParallax(scrollYProgress, 80)

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <img ... />
      </motion.div>
    </section>
  )
}
```

**Rules for parallax**:
- Maximum travel: `±80px`. Beyond this, it looks cheap.
- Only on full-bleed images, never on text
- Parallax direction: images move *up* as user scrolls down (the scene recedes)
- Never on mobile — disable via `useMediaQuery` at `md` breakpoint

---

## Micro-Interactions

Small motion for interactive elements. These should be subtle — felt, not seen.

| Element | Animation | Value |
|---|---|---|
| Nav links | Underline slide-in | `scaleX` from 0→1 on hover |
| Buttons | Slight grow + gold glow | `scale: 1.02` + `boxShadow` |
| Image hover (gallery) | Subtle zoom | `scale: 1.03` on the image inside overflow-hidden |
| CTA (WhatsApp) | Pulse | Gentle ring-pulse animation via CSS keyframes |
| Menu items | Opacity shift | `opacity: 0.6` → `1.0` on hover |

---

## Page Transitions

Between pages (if multi-page), use a fade-out / fade-in at the layout level via `AnimatePresence`. Duration: 0.4s. No slide transitions — they feel too web-2.0.

```tsx
// In layout.tsx or a transition wrapper
<AnimatePresence mode="wait">
  <motion.div
    key={pathname}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4, ease: ease.cinematic }}
  >
    {children}
  </motion.div>
</AnimatePresence>
```

---

## Performance Contracts

- All `motion.div` elements that use `transform` or `opacity` only — GPU-composited, no layout thrash
- Never animate `width`, `height`, `top`, `left`, `margin`, `padding` — these cause layout recalculation
- Lazy-load heavy animation libraries only in client components (`"use client"`)
- Keep the total animated elements per viewport under 8
- Test with DevTools CPU throttling at 4x — animations should still feel intentional, not broken

---

## Reduced Motion

```ts
// In variants, wrap transitions:
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

const safeVariant = prefersReducedMotion
  ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
  : fadeUp
```

Or use Framer Motion's built-in `useReducedMotion()` hook at the component level.
