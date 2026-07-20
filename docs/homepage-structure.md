# Homepage Structure — Invernada do Sol

## Overview

The homepage is a single, continuous narrative scroll. It does not function as a
landing page with isolated sections — it functions as a **cinematic sequence**,
where each section leads naturally into the next, building emotional momentum
toward a conversation on WhatsApp.

Total sections: **6**
Reading time at natural scroll: **3–5 minutes**

This is intentional. The visitor who stays is the visitor who will reach out.

> This document reflects the **real, shipped structure**. For a task-oriented
> "where do I edit X" guide, see [`mapa-do-projeto.md`](./mapa-do-projeto.md).

---

## Section Map

```
┌─────────────────────────────────────────────────────┐
│  1. HERO           #inicio       Cinematic opener    │
├─────────────────────────────────────────────────────┤
│  2. A EXPERIÊNCIA  #experiencias Country life        │
├─────────────────────────────────────────────────────┤
│  3. RESTAURANTE    #restaurante  Food & warmth       │
├─────────────────────────────────────────────────────┤
│  4. AGENDA         #agenda       Weekly events       │
├─────────────────────────────────────────────────────┤
│  5. A CABANA       #cabanas      Refuge + stay        │
├─────────────────────────────────────────────────────┤
│  6. LOCALIZAÇÃO    #localizacao  Where we are        │
└─────────────────────────────────────────────────────┘
```

> The former **O Refúgio** section (`#refugio`) was merged into **A Cabana** at
> the client's request — its video + copy now open the Cabin section. There is no
> `#refugio` anchor anymore, and the Hero scroll hint points to `#experiencias`.

Assembled in `src/app/page.tsx`, wrapped by `<Header>` and `<Footer>`.

---

## Section Details

### 1. Hero — `HeroSection`

**File**: `src/components/sections/HeroSection.tsx` · **Anchor**: `#inicio`

Full-viewport (`min-h-screen`) cinematic opener with a **looping background
video** (`/hero_fireplace.mp4`, poster `fireplace.webp`) under amber/vignette
overlays and a `.film-grain` layer. Centered content: eyebrow (city · region),
H1 "Invernada do Sol" in `.text-gradient-gold`, two subtitles, and two
`WhatsappButton` CTAs (Entre em Contato / Consultar Cabana). Subtle parallax on
the video via `useScrollProgress` + `useParallax`. `ArrowDown` scroll hint at the
bottom with a gentle bounce.

### 2. A Experiência — `ExperiencesSection`

**File**: `src/components/sections/ExperiencesSection.tsx` · **Anchor**: `#experiencias`

`bg-secondary` band. `SectionTitle` (eyebrow "A Experiência") + a 2-column grid
of two tall cards: a `BackgroundVideo` (child with a goat) and an `Image`
(sunset among araucárias), each with a bottom gradient and caption overlay.

### 3. Restaurante — `RestaurantSection`

**File**: `src/components/sections/RestaurantSection.tsx` · **Anchor**: `#restaurante`

The richest section. `SectionTitle` (eyebrow "Restaurante") → wide
`BackgroundVideo` (buffet) → two-column block about the *Buffet de Sopas* (image
+ text) → a centered label divider → a 4-photo `tableGallery` grid → three
icon `highlights` (Buffet de Sopas / Café Colonial / Sabores da Serra) → a
centered `WhatsappButton` CTA. Photos and highlights are arrays in the file.

> **Note:** this section does **not** render a menu with prices. The
> `content/menu.ts` file (dishes + prices) is currently orphaned.

### 4. Agenda — `WeeklyAgenda`

**File**: `src/components/sections/WeeklyAgenda.tsx` · **Anchor**: `#agenda`

`bg-secondary` band. `SectionTitle` (eyebrow "Agenda") + a 2-video `BackgroundVideo`
grid (Sunday family lunch, the venue itself — same visual pattern as
`ExperiencesSection`) with tag/caption overlays hardcoded in the component.
Closes with a paragraph linking to Instagram via `siteConfig.contact`.

> `content/agenda.ts` (`agendaEvents`, dated event cards like "Dia dos
> Namorados") is no longer used here — it was replaced by the video grid and
> is now an orphan, kept for a possible future dated-events row.

### 5. A Cabana — `CabinSection`

**File**: `src/components/sections/CabinSection.tsx` · **Anchor**: `#cabanas`

`SectionTitle` (eyebrow "A Cabana") → **merged "refúgio" opening**: two-column
block with the family-on-the-porch `BackgroundVideo` + two poetic paragraphs
("Um lugar pra desacelerar e reunir quem a gente ama") → wide `BackgroundVideo`
(cabin) → two-column block (text + landscape image) → a second two-column block
pairing a `highlights` grid (Só sua / Natureza ao redor / Silêncio de verdade /
O pôr do sol) with a second cabin video → centered `WhatsappButton` (outline,
cabin availability). Single cabin — exclusivity is the pitch. This is the only
WhatsApp CTA between the Restaurant section and the footer.

### 6. Localização — `LocationSection`

**File**: `src/components/sections/LocationSection.tsx` · **Anchor**: `#localizacao`

`bg-secondary` band. Two-column: left holds address, opening hours (from
`siteConfig.openingHours.days`) and Maps links; right embeds a Google Maps
`iframe`. All data comes from `siteConfig.location` and `siteConfig.openingHours`.

---

## Navigation Anchor Map

The nav (`siteConfig.nav`, feeding both `Header` and `MobileMenu`) mirrors all
6 sections.

| Section | ID | Nav Label |
|---|---|---|
| Hero | `#inicio` | Início |
| A Experiência | `#experiencias` | Experiências |
| Restaurante | `#restaurante` | Restaurante |
| Agenda | `#agenda` | Agenda |
| A Cabana | `#cabanas` | Cabana |
| Localização | `#localizacao` | Localização |

---

## Section Transitions

Between sections, use a visual breath — never ornamental dividers:

- **Whitespace only**: the natural `py-28 md:py-36` gap between sections.
- **Background shift**: alternating `bg-background` and `bg-secondary` creates
  natural visual chapters (Experiência, Agenda and Localização use
  `bg-secondary`).

Never add ornamental borders, swoosh shapes, or triangular dividers — they look
cheap.
