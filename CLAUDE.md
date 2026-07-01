@AGENTS.md

# Invernada do Sol — Claude Code Guide

## Project Identity

Premium cinematic website for **Invernada do Sol**, a winter restaurant and cabin experience in Ouro, SC, Brazil. Every decision must reflect the brand: emotional, immersive, boutique, premium.

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | Next.js 16 (App Router) — see `AGENTS.md`: APIs may differ from training data, read `node_modules/next/dist/docs/` before writing framework code |
| UI runtime | React 19 with **React Compiler enabled** (`reactCompiler: true` in `next.config.ts`) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 + CSS variables |
| Components | shadcn/ui (`base-nova` style, base color neutral) on `@base-ui/react` |
| Animation | Framer Motion |
| Icons | Lucide React |
| Fonts | Cormorant (headings) + DM Sans (body) |

Because **React Compiler is on**, do not hand-write `useMemo`, `useCallback`, or
`React.memo` — the compiler handles memoization. Keep components idiomatic and
let it optimize.

## Architecture

```
src/
├── app/                    # Next.js App Router pages & layouts
├── components/
│   ├── ui/                 # shadcn/ui primitives (auto-generated, don't edit)
│   ├── layout/             # Header, Footer, Nav, MobileMenu
│   ├── sections/           # Full page sections (Hero, Refuge, Experiences, Restaurant, WeeklyAgenda, Cabin, Moments, Location)
│   └── motion/             # Reusable Framer Motion wrappers (AnimateIn, StaggerContainer)
├── hooks/                  # useScrollProgress, useParallax, useMediaQuery
├── lib/
│   ├── utils.ts            # shadcn cn() utility
│   └── animations/         # variants.ts — Framer Motion variant presets
├── config/
│   └── site.ts             # Brand config, contact info, opening hours
├── types/
│   └── index.ts            # MenuItem, Cabin, GalleryImage, Testimonial, etc.
└── content/                # Static content, CMS-ready JSON/objects
```

## Design System

### Colors (always dark — no light mode)

| Token | Usage |
|---|---|
| `--gold` / `primary` | Main accent — firelight amber |
| `--ember` / `accent` | Secondary accent — burnt terracotta |
| `--background` | Near-black warm charcoal |
| `--foreground` | Warm cream off-white |
| `--muted-foreground` | Subdued body text |

Use the CSS utilities `.text-gradient-gold`, `.gradient-vignette`, `.gradient-bottom-fade` for cinematic overlays.

### Typography

- **Headings** → `font-heading` (Cormorant, serif, italic or light)
- **Body** → `font-sans` (DM Sans, clean and readable)
- Scale: Cinematic — use large type. `text-7xl`–`text-9xl` for hero headlines.
- Letter spacing: `tracking-[0.2em]` or `tracking-[0.3em]` for labels and eyebrows.

### Animation Guidelines

Use presets from `@/lib/animations/variants`:

```ts
import { fadeUp, staggerContainer, scaleIn } from "@/lib/animations/variants"
```

- **Reveals**: `fadeUp` with `useInView` (via `<AnimateIn>` wrapper)
- **Lists**: `staggerContainer` + `fadeUp` per child (via `<StaggerContainer>`)
- **Image reveals**: `scaleIn` (slight zoom-out)
- **Parallax**: `useScrollProgress` + `useParallax` hooks
- Always `once: true` — elements don't re-animate on scroll-back
- Duration: 0.8s–1.4s. Never rush animations.
- Easing: `ease.cinematic` ([0.25, 0.46, 0.45, 0.94])

### Spacing

Generous spacing evokes luxury. Use `py-24`, `py-32`, `py-40` for sections. Whitespace is intentional.

## Code Conventions

- No comments unless non-obvious invariant or workaround
- No default exports from barrel `index.ts` files — named exports only
- Strict TypeScript — no `any`
- All client animations in `"use client"` components; keep server components as default
- Use `cn()` from `@/lib/utils` for conditional class merging
- Site config lives in `@/config/site.ts` — no hardcoded strings in components
- Contact info (WhatsApp, email) must come from `siteConfig.contact`

## Key Patterns

### Section Component Template
```tsx
import { AnimateIn } from "@/components/motion/AnimateIn"
import { siteConfig } from "@/config/site"
import type { SectionProps } from "@/types"

export function ExampleSection({ className, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-32 px-6", className)}>
      <div className="max-w-6xl mx-auto">
        <AnimateIn>
          <h2 className="font-heading text-5xl font-light italic text-gradient-gold">
            Section Title
          </h2>
        </AnimateIn>
      </div>
    </section>
  )
}
```

### WhatsApp CTA
Don't build the URL by hand. Use `whatsappLinks` from `@/lib/whatsapp` (built
from `siteConfig.contact.phoneE164` — there is no `contact.whatsapp` field) with
the `WhatsappButton` component:
```tsx
import { WhatsappButton } from "@/components/ui/WhatsappButton"
import { whatsappLinks } from "@/lib/whatsapp"
import { siteConfig } from "@/config/site"

<WhatsappButton href={whatsappLinks.reserveTable} label={siteConfig.cta.reserveTable.label} variant="primary" />
```

## Future Integrations (scaffold-ready)

- **Reservation system** → `src/app/(booking)/` route group
- **WhatsApp** → use `siteConfig.contact.phoneE164` via `lib/whatsapp.ts`, link to wa.me
- **CMS** → `src/content/` folder structured for Sanity or Contentlayer migration
- **Analytics** → add to `src/app/layout.tsx` (Vercel Analytics or Plausible)

## Commands

```bash
npm run dev      # Development server (http://localhost:3000)
npm run build    # Production build
npm start        # Serve the production build (after npm run build)
npm run lint     # ESLint (flat config, eslint.config.mjs)
npm run icons    # Regenerate favicons from source (scripts/generate-favicons.mjs)
```

No test framework is configured — there is no `npm test`. Verify changes by
running `npm run dev` / `npm run build`.

## Documentation

`docs/` holds the design/brand rationale and structure. Start with
`docs/mapa-do-projeto.md` — the practical "want to change X → edit file Y" map
(kept in sync with the real code). `docs/homepage-structure.md` documents the 8
real sections; `docs/component-guidelines.md`, `branding.md`, `storytelling.md`,
`motion-system.md` and `ux-principles.md` cover conventions and feel.

## Brand Voice

- Portuguese (pt-BR) for all user-facing copy
- Tone: poetic, warm, evocative — never generic or corporate
- Never say "clique aqui" — use verbs that create desire
