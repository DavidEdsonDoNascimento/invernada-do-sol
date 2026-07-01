# Component Guidelines — Invernada do Sol

## Component Philosophy

Components at Invernada do Sol are built around three ideas:

1. **Composition over configuration** — simple, focused components assembled into complexity
2. **Semantic naming** — names describe what a component *is*, not what it *does*
3. **Brand-first** — components express the brand; they are not generic UI primitives dressed up

---

## Component Taxonomy

### Layer 1: Primitives (`src/components/ui/`)
Generated and maintained by shadcn/ui. **Do not hand-edit these files.**

Add via CLI only:
```bash
npx shadcn@latest add button
npx shadcn@latest add input
npx shadcn@latest add dialog
```

Current primitives:
- `button.tsx` — styled per brand, primary uses gold background

Primitives to add as needed: `input`, `textarea`, `dialog`, `sheet`, `badge`, `separator`, `card`

---

### Layer 2: Motion Wrappers (`src/components/motion/`)
Generic, reusable, brand-agnostic animation primitives.

- `AnimateIn.tsx` — single-element scroll-triggered reveal
- `StaggerContainer.tsx` — staggered group reveal

These should have **no brand-specific styling**. They are structural only.

---

### Layer 3: Layout Components (`src/components/layout/`)
Components that persist across pages. They know the full site context.

| Component | Description |
|---|---|
| `Header.tsx` | Fixed top nav, transparent → frosted on scroll (`"use client"`) |
| `Footer.tsx` | Brand info, social links, WhatsApp (Server Component) |
| `MobileMenu.tsx` | Full-screen overlay mobile navigation (`"use client"`) |

Nav links are rendered inline by mapping over `siteConfig.nav` in `Header` and
`MobileMenu` — there is no separate `NavLink` component today. `Header` and
`MobileMenu` are client components (scroll listener / open state); `Footer` is a
Server Component.

---

### Layer 4: Section Components (`src/components/sections/`)
Full-width page sections. These are the primary building blocks of the homepage.

Each section component:
- Has its own `<section>` tag with a **hardcoded** anchor `id` (e.g. `#cabanas`)
- Handles its own animations internally
- Sources **structured/reusable data** (contacts, CTAs, agenda events, moments)
  from `src/config/site.ts` or `src/content/`

> **Reality check:** the `SectionProps` type exists in `src/types/index.ts`, but
> the shipped sections **do not accept props** — they hardcode their `id`. And
> their **narrative copy is written inline in the JSX**, not externalized. Only
> contacts, CTAs, agenda (`content/agenda.ts`) and moments (`content/moments.ts`)
> live outside the components. Treat "never hardcode strings" as the aspiration,
> not the current state.

---

## Naming Conventions

### Files
```
PascalCase for components:        HeroSection.tsx, AnimateIn.tsx
camelCase for hooks:              useScrollProgress.ts, useMediaQuery.ts
camelCase for utilities/config:   site.ts, variants.ts, utils.ts
```

### Component Functions
Named exports only. No default exports in section or layout components.
```ts
// Good
export function HeroSection({ id, className }: SectionProps) { ... }

// Avoid
export default function HeroSection() { ... }
```

Exception: `page.tsx` and `layout.tsx` use default exports (Next.js requirement).

### Props Interfaces
```ts
// Inline for simple props
export function NavLink({ href, label }: { href: string; label: string }) { ... }

// Named interface for complex props
interface DishCardProps {
  name: string
  description: string
  price?: string
  image: string
  featured?: boolean
}
export function DishCard({ name, description, price, image, featured }: DishCardProps) { ... }
```

---

## Section Component Template

Every section follows this pattern:

```tsx
import { cn } from "@/lib/utils"
import { AnimateIn } from "@/components/motion/AnimateIn"
import { StaggerContainer } from "@/components/motion/StaggerContainer"
import { fadeUp, scaleIn } from "@/lib/animations/variants"
import type { SectionProps } from "@/types"

export function ExampleSection({ className, id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-32 px-6", className)}
    >
      <div className="mx-auto max-w-6xl">

        {/* Section header pattern */}
        <header className="space-y-4 mb-16">
          <AnimateIn>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Eyebrow Label
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="font-heading text-4xl font-light md:text-5xl text-gradient-gold">
              Section Title
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="max-w-prose font-sans font-light text-muted-foreground">
              Supporting description, kept short.
            </p>
          </AnimateIn>
        </header>

        {/* Section content */}
        <StaggerContainer className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <AnimateIn key={item.id}>
              <ItemCard {...item} />
            </AnimateIn>
          ))}
        </StaggerContainer>

      </div>
    </section>
  )
}
```

---

## Card Components

Cards are used for dishes, cabins, testimonials, and experience pillars. All cards follow shared visual rules:

### Visual Rules
- Background: `bg-card` (slightly lighter than page background)
- Border: `border border-border` (white at 8% opacity) — subtle, not dominant
- Radius: `rounded-sm` or `rounded-md` — never `rounded-xl` or `rounded-3xl`
- No drop shadows on cards — the border is sufficient
- Image within card: always `overflow-hidden` wrapping, so hover scale is contained

### Hover State
```tsx
<div className="group overflow-hidden rounded-sm border border-border bg-card transition-colors hover:border-primary/30">
  {/* Image */}
  <div className="overflow-hidden">
    <img className="transition-transform duration-700 group-hover:scale-[1.03]" />
  </div>
  {/* Content */}
  <div className="p-6">...</div>
</div>
```

---

## Specific Component Patterns

### Eyebrow + Headline Pair
Used as section headers throughout. Eyebrow sets context; headline delivers the promise.

```tsx
<header className="space-y-3">
  <p className="text-xs font-sans font-light uppercase tracking-[0.3em] text-muted-foreground">
    {eyebrow}
  </p>
  <h2 className="font-heading text-4xl font-light italic md:text-5xl text-gradient-gold">
    {headline}
  </h2>
</header>
```

### WhatsApp CTA Button
Used in multiple sections. **Do not hand-roll the URL** — the app already has a
dedicated component and link builder:

- `src/lib/whatsapp.ts` builds URLs from `siteConfig.contact.phoneE164` and
  exposes ready-made `whatsappLinks.reserveTable` / `whatsappLinks.cabinAvailability`.
- `src/components/ui/WhatsappButton.tsx` renders the button (`primary` / `outline`).

```tsx
import { WhatsappButton } from "@/components/ui/WhatsappButton"
import { whatsappLinks } from "@/lib/whatsapp"
import { siteConfig } from "@/config/site"

<WhatsappButton
  href={whatsappLinks.reserveTable}
  label={siteConfig.cta.reserveTable.label}
  variant="primary"
/>
```

> The phone field is `siteConfig.contact.phoneE164` (E.164, e.g. `+5549...`) —
> there is no `contact.whatsapp` field.

### Gold Divider
A subtle separator between major thematic shifts.

```tsx
<div className="my-16 h-px w-24 bg-primary/40 mx-auto" />
```

Or full-width at low opacity:
```tsx
<div className="my-0 h-px w-full bg-border" />
```

---

## "use client" vs Server Component Strategy

| Component Type | Default | When to add "use client" |
|---|---|---|
| Layout (Header, Footer) | Server | If Header needs scroll listener → extract `ScrollHeader` wrapper as client |
| Sections | Server | If section uses `useInView` → wrap only the animated child |
| Motion wrappers | Client | Always (they use Framer Motion hooks) |
| Cards (static) | Server | Never |
| Forms | Client | Always |
| Interactive nav | Client | Yes |

**Rule**: Push `"use client"` as far down the tree as possible. The less client JS at the root, the faster the page.

---

## Content Separation

Contacts, prices, CTAs and repeated data should not be hardcoded in components.
(Narrative section copy currently *is* inline — see the reality-check note under
"Section Components" — but new structured data should follow this table.)

| Data type | Source | Status |
|---|---|---|
| Brand name, contact, hours, CTAs, nav | `src/config/site.ts` | in use |
| Agenda events | `src/content/agenda.ts` | in use |
| Moments (featured + gallery) | `src/content/moments.ts` | in use |
| Menu items (dishes + prices) | `src/content/menu.ts` | **orphan** — not rendered |

`DishCard` (`src/components/ui/DishCard.tsx`) is the natural consumer for
`menu.ts` but is also currently unused. There is no `cabins.ts`,
`testimonials.ts`, `gallery.ts` or `config/navigation.ts` — nav lives in
`siteConfig.nav`.

This structure makes CMS migration trivial: replace `import` with `fetch`.

---

## Component Checklist

Before marking a component complete, verify:

- [ ] Accepts `SectionProps` (`id`, `className`) if it's a section
- [ ] Content sourced from `src/content/` or `src/config/` — no hardcoded strings
- [ ] Images use `next/image` with explicit dimensions
- [ ] Animations use variants from `src/lib/animations/variants.ts`
- [ ] `"use client"` added if and only if the component uses hooks or browser APIs
- [ ] Font classes use `font-heading` and `font-sans`, never hardcoded font names
- [ ] Colors use design tokens (`text-primary`, `bg-card`, `text-muted-foreground`), not arbitrary hex values
- [ ] Hover and focus states are defined
- [ ] Mobile layout tested (single-column fallback)
- [ ] `cn()` used for conditional classes, not string interpolation
