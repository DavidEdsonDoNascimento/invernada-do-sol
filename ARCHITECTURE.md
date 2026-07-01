# Architecture Documentation — Invernada do Sol

## Overview

This is a **cinematic marketing website** with a future-ready architecture for reservations, CMS content, and WhatsApp integration. Built on Next.js 15 App Router for optimal performance and SEO.

## Folder Structure

```
invernada-do-sol/
├── src/
│   ├── app/                         # App Router root
│   │   ├── layout.tsx               # Root layout — fonts, metadata, html lang
│   │   ├── page.tsx                 # Home page (assembles sections)
│   │   ├── globals.css              # Design system CSS variables + Tailwind
│   │   └── (routes)/                # Future route groups
│   │       ├── (booking)/           # Reservation flow
│   │       └── cardapio/            # Menu page
│   │
│   ├── components/
│   │   ├── ui/                      # shadcn/ui primitives — DO NOT EDIT MANUALLY
│   │   │   └── button.tsx
│   │   ├── layout/                  # Persistent layout components
│   │   │   ├── Header.tsx           # Top navigation
│   │   │   ├── Footer.tsx           # Footer with contact + social
│   │   │   └── MobileMenu.tsx       # Slide-in mobile nav
│   │   ├── sections/                # Full-width page sections (in render order)
│   │   │   ├── HeroSection.tsx      # #inicio — full-screen cinematic hero
│   │   │   ├── ExperiencesSection.tsx # #experiencias — country life
│   │   │   ├── RestaurantSection.tsx # #restaurante — food & warmth
│   │   │   ├── WeeklyAgenda.tsx     # #agenda — weekly events (content/agenda.ts)
│   │   │   ├── CabinSection.tsx     # #cabanas — the cabin (opens with the merged "refúgio" block)
│   │   │   ├── MomentsSection.tsx   # #momentos — celebrations (content/moments.ts)
│   │   │   └── LocationSection.tsx  # #localizacao — map + hours
│   │   ├── seo/
│   │   │   └── JsonLd.tsx           # Restaurant + LodgingBusiness JSON-LD
│   │   └── motion/                  # Framer Motion wrappers
│   │       ├── AnimateIn.tsx        # Single element reveal (useInView)
│   │       └── StaggerContainer.tsx # Staggered list reveal
│   │
│   ├── hooks/
│   │   ├── useScrollProgress.ts     # Scroll-driven parallax
│   │   └── useMediaQuery.ts         # Responsive breakpoint detection
│   │
│   ├── lib/
│   │   ├── utils.ts                 # shadcn cn() + shared utilities
│   │   └── animations/
│   │       └── variants.ts          # All Framer Motion variant presets
│   │
│   ├── config/
│   │   └── site.ts                  # Brand name, contact, hours, location
│   │
│   ├── types/
│   │   └── index.ts                 # MenuItem, Cabin, GalleryImage, etc.
│   │
│   └── content/                     # Static content — CMS migration target
│       ├── agenda.ts                # Weekly agenda events (in use)
│       ├── moments.ts               # Featured moment + gallery (in use)
│       └── menu.ts                  # Dishes + prices (ORPHAN — not rendered yet)
│
├── public/
│   ├── images/                      # Optimized media (WebP + mp4 background videos)
│   │   ├── hero/
│   │   ├── refugio/
│   │   ├── experiencias/
│   │   ├── restaurante/
│   │   ├── cabanas/
│   │   └── momentos/
│   ├── hero_fireplace.mp4           # Hero background video
│   └── og-image.jpg                 # Open Graph image
│
├── docs/                            # Project documentation (see mapa-do-projeto.md)
├── CLAUDE.md                        # AI assistant guide
├── ARCHITECTURE.md                  # This file
├── components.json                  # shadcn/ui config
├── .prettierrc                      # Code formatting
└── tsconfig.json                    # TypeScript config
```

## Rendering Strategy

| Route | Strategy | Reason |
|---|---|---|
| `/` | Static (SSG) | Pure marketing content, no dynamic data |
| `/cardapio` | Static or ISR | Content rarely changes |
| `/(booking)/*` | Dynamic (SSR) | Reservation availability is real-time |

## Animation Architecture

Animations use **scroll-triggered reveals** via `useInView` (Framer Motion). The pattern is:

1. Wrap content in `<AnimateIn>` or `<StaggerContainer>`
2. Components animate in once when they enter the viewport
3. No re-animations on scroll-back (`once: true`)

Parallax effects are implemented with `useScrollProgress` → `useTransform` → `motion.div` style bindings. Keep parallax subtle (max 80px travel) to avoid motion sickness.

## State Management

No global state manager. This site is primarily static/presentational.

- UI state (mobile menu open, modal) → local `useState`
- Scroll position → Framer Motion's `useScroll`
- Future: reservation form state → React Hook Form + Zod

## Future: Reservation System

Scaffold location: `src/app/(booking)/`

Planned flow:
1. WhatsApp deep link (immediate, no backend)
2. Simple form → WhatsApp message generation
3. Future: full booking system with availability calendar

## Future: CMS Integration

`src/content/` is structured as static TypeScript objects matching the types in `src/types/index.ts`. Migration path:

1. Extract types stay the same
2. Replace `import { menu } from "@/content/menu"` with `await sanityClient.fetch(...)`
3. Pages become dynamic with `revalidate` for ISR

## Performance Targets

- LCP < 2.5s (hero image preloaded, no CLS)
- CLS < 0.1 (reserve space for images with aspect ratio)
- FID < 100ms (minimal client JS until interaction)
- Use `next/image` for all images with proper `width`, `height`, `priority` on hero
- Fonts use `display: swap` and are subset to Latin
