# UX Principles — Invernada do Sol

## The Guiding Statement

> "A great premium digital experience makes you feel like you're already there."

Every UX decision is measured against this. Not "is this usable?" but "does this make the visitor *feel* something?"

This does not mean usability is ignored — it means usability is the floor, not the ceiling.

---

## Interaction Philosophy

### 1. Invitation, Not Direction
Premium experiences guide — they don't push. Replace directives with invitations:

- Instead of "Clique aqui" → use contextual CTAs: "Reserve uma noite" or "Conheça o cardápio"
- Instead of arrows and carousels → let full-bleed images speak; the user will scroll
- Instead of modal popups → use gentle reveals that don't interrupt the narrative flow

### 2. Earned Actions
Nothing important happens immediately. A button reveals itself only after you've read what it responds to. A CTA appears only after the section has made its case. Actions feel earned — which makes them feel more meaningful.

### 3. Friction as Curation
Some friction is intentional. The site doesn't show everything at once. It withholds to create desire. Full menus are revealed after the *feeling* of the food is established. Cabin prices appear after the dream is set.

---

## Navigation

### Desktop Nav
- Fixed position, transparent at top, frosted-glass with subtle dark overlay on scroll
- Items in `font-sans` uppercase tracking-widest, small size — they are way-markers, not headlines
- Active state: gold underline (not background fill)
- No mega-menus, no dropdowns — flat, simple, single-level
- Transition: opacity + slight translateY on scroll-trigger

### Mobile Nav
- Hamburger icon (Lucide `Menu`) — right-aligned
- Full-screen overlay slide-in from right
- Items stagger in with `fadeUp`
- Close via `X` or swipe right
- Background: near-black with slight blur — the content beneath is visible but dreamy

### Scroll Behavior
- `scroll-smooth` on `<html>` for anchor navigation
- Anchor links have offset to account for fixed nav height (use `scroll-margin-top`)
- No horizontal scroll, ever

---

## Scroll Design

### Progressive Disclosure
Content arrives as the user scrolls, not before. This prevents overwhelming and creates a sense of discovery. Each section should feel like turning a page — anticipation followed by satisfaction.

### Scroll Progress Indicators
- None for the hero — the emptiness is the point
- Optional thin gold line at the very top (1px, low opacity) — only if it adds to the atmosphere
- Never a percentage progress bar — too utility-focused

### Scroll Speed
- No scroll-jacking or custom scroll behavior
- Parallax depth (images moving slower than content) creates natural sense of scroll speed variation
- Respect the browser's native scroll velocity

---

## Visual Hierarchy in Context

### The Rule of One Focus
Each section has exactly one primary visual element — one image, one headline, one CTA. Everything else is support. If two elements compete for attention, one is wrong.

### Contrast as Hierarchy
- Gold on dark → primary action, critical information
- Cream on dark → reading-weight content
- Muted on dark → meta information, dates, captions

### Whitespace as Status
Generous whitespace is a design choice, not laziness. `py-32` to `py-40` between sections. Wide margins. Short paragraphs with visible line breaks. Whitespace communicates that each element matters enough to breathe.

---

## Premium UI Behavior

### Images
- Always `next/image` with explicit `width` and `height` — no layout shift
- Hero image: `priority` prop, preloaded
- Object-fit: `cover` — never `contain` for atmospheric photography
- Alt text: descriptive but poetic ("Prato de risoto ao calor da lareira" not "risoto")
- No image borders or drop shadows on editorial photography
- Hover: subtle scale-in (1.03) within overflow-hidden container

### Buttons & CTAs
- Primary: gold background, dark text, light `rounded-full` or very slight `rounded-lg` — no sharp corners
- Secondary: transparent with gold border, gold text
- Ghost: no border, gold text only, underline appears on hover
- Padding: generous — `px-8 py-4` minimum for primary CTAs
- Never use red or high-contrast destructive colors in primary UI

### Forms (future: reservation)
- Dark input backgrounds with subtle warm border
- Focus ring: gold glow (`ring-primary/50`)
- Labels above inputs, never floating
- Error states: soft red text, not red backgrounds
- Success: gold checkmark, poetic confirmation copy

### Links
- Never underlined by default in editorial text — underline on hover
- Color: `text-primary` (gold) for standalone links, `text-foreground` for in-paragraph links
- Visited state: slightly dimmer gold

---

## Responsive Design

### Breakpoint Philosophy
Design mobile-first, but the *experience* is conceived for large screens. Mobile is a graceful reduction, not the primary canvas.

| Breakpoint | Experience |
|---|---|
| `< 640px` | Single column, stacked, images fill viewport width |
| `640–1024px` | Two-column possible, reduced animation complexity |
| `> 1024px` | Full cinematic layout, parallax, wide compositions |

### Mobile-Specific Rules
- Disable parallax on mobile (CSS `@media` or `useMediaQuery` check)
- Font sizes step down but never below `text-5xl` for hero headlines
- Touch targets minimum 48×48px
- Swipe gestures for gallery if implemented

### Typography Scale — Responsive
```
Hero: text-5xl sm:text-7xl lg:text-9xl
Title: text-3xl sm:text-4xl lg:text-5xl
Body: text-base lg:text-lg
```

---

## Accessibility

### Non-Negotiable
- Color contrast: minimum 4.5:1 for body text against dark background
- Gold (#C8935A equivalent) on near-black meets AA — verify with final values
- All images have meaningful `alt` text
- Navigation is keyboard-accessible (focus-visible states)
- Framer Motion animations respond to `prefers-reduced-motion`
- `<html lang="pt-BR">` is set in layout

### Focus States
- Use `focus-visible` (not `focus`) to avoid ugly focus rings on mouse click
- Focus ring: 2px gold, 4px offset — clearly visible but on-brand
- Never `outline: none` without a replacement

### Semantic HTML
- Each page section is a `<section>` with an `id` for anchor navigation
- One `<h1>` per page (the brand name or primary headline)
- Section titles are `<h2>`, sub-titles `<h3>`
- Nav uses `<nav>` with `aria-label="Principal"`
- CTAs are `<a>` or `<button>` — never `<div onClick>`

---

## Loading Experience

### Font Loading
- Fonts use `display: swap` — text is visible immediately in system font
- Both fonts are Google-hosted via `next/font` — optimal loading, no layout shift

### Image Loading
- Hero image: `priority` ensures it's preloaded
- All other images: lazy loaded (Next.js default)
- Use `placeholder="blur"` with a warm dark blurDataURL for atmospheric loading state

### Skeleton States (future, reservation)
- Dark skeleton pulses with warm undertone — not gray-on-white flash
- Match the exact dimensions of loading content to eliminate CLS

---

## Error States

Errors should feel considered, not alarming. The brand voice applies to error states too.

| Scenario | Message |
|---|---|
| 404 | "Este lugar não existe — mas temos um que vai te surpreender." |
| Form error | "Algo saiu errado. Tente novamente ou nos chame no WhatsApp." |
| Network issue | "Parece que a conexão está fria como o inverno. Tente em breve." |

These are poetic, not sarcastic. Always follow with a direct recovery action.
