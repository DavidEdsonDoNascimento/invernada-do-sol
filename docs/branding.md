# Branding — Invernada do Sol

## Brand Essence

**Invernada do Sol** is a contradiction made beautiful: winter and sun, cold and warmth, solitude and belonging. It exists at the intersection of the rugged hills of Ouro - Santa Catarina and the intimate glow of a fireplace. The brand does not sell food — it sells a feeling that stays with you long after you leave.

The experience is not for everyone. It is for those who seek depth, slowness, and beauty in unexpected places.

---

## Brand Pillars

### 1. Cinematic Warmth
Every touchpoint — digital or physical — should feel like a frame from a film. Not theatrical or exaggerated, but quietly composed. The warmth of candlelight in a dark room. A bowl of soup on a cold evening. The brand leans into contrast: darkness that makes warmth feel earned.

### 2. Deliberate Slowness
Slowness is a feature, not a flaw. The brand moves at its own pace — unhurried navigation, measured animations, generous whitespace. Speed feels cheap. Invernada do Sol takes its time, and so should every user interaction.

### 3. Terroir of the Serra
The brand is rooted in place. Ouro, SC is not a backdrop — it is a character. The fog on the fields. The altitude. The specific cold of a Southern Brazilian winter. Everything references this geography without being folkloric or kitschy.

### 4. Poetic Restraint
Luxury is not loudness. The brand communicates through what it chooses not to say. Negative space. A single image instead of a carousel. One typeface instead of five. Restraint signals confidence.

---

## Visual Language

### Color System

The palette is built around firelight in winter darkness.

| Name | Token | Value | Usage |
|---|---|---|---|
| Charcoal Night | `--background` | `oklch(0.09 0.01 50)` | Base background — near-black with warm undertone |
| Ember Cream | `--foreground` | `oklch(0.93 0.02 82)` | Primary text — warm off-white, never pure white |
| Firelight Gold | `--gold` / `primary` | `oklch(0.74 0.10 72)` | Main accent — the light in the darkness |
| Gold Light | `--gold-light` | `oklch(0.85 0.08 75)` | Highlight states, gradient top |
| Gold Dark | `--gold-dark` | `oklch(0.55 0.10 65)` | Deep amber, gradient bottom |
| Burnt Ember | `--ember` / `accent` | `oklch(0.60 0.14 42)` | Secondary accent — warmth and earth |
| Dark Smoke | `--secondary` | `oklch(0.18 0.01 50)` | Card surfaces, elevated backgrounds |
| Muted | `--muted-foreground` | `oklch(0.58 0.02 70)` | Secondary text, labels |

**Rules:**
- Never use pure black (`#000000`) or pure white (`#ffffff`)
- The site is always dark. There is no light mode.
- Gold is used sparingly — it earns its power from contrast
- Gradients always flow from lighter gold to deeper amber, never reversed

### Color in Practice

```
• Hero headlines → .text-gradient-gold
• Section eyebrows (labels) → text-muted-foreground uppercase tracking-widest
• Body copy → text-foreground (warm cream)
• Borders → border-border (white at 8% opacity)
• Image overlays → .gradient-vignette or .gradient-bottom-fade
• Interactive gold glow → ring-primary/50 or shadow with gold tint
```

---

## Typography

### Type System

Two typefaces. Jedira carries the brand's identity in titles; DM Sans keeps long-form copy readable and accessible.

#### Jedira — The Soul
- **Role**: Headlines, section titles, pull quotes, brand name, short accent captions
- **Variable**: `--font-jedira`, mapped to `font-heading`
- **Files**: local font in `src/app/fonts/` — `Jedira-Regular.otf` (normal, 400), `Jedira-Italic.otf` (italic, 400), loaded via `next/font/local`
- **Character**: The identity typeface of Invernada do Sol — old-world elegance, distinctive, decorative
- **Style**: Italic is the default for hero headlines and emotional copy. Upright for menu items and section titles.
- **Never**: Long-form paragraphs. Decorative display faces hurt readability and accessibility at body-text sizes — reserve Jedira for short, large-type moments.
- **Fallback**: `serif` if the font fails to load

#### DM Sans — The Voice
- **Role**: Body text, navigation, labels, captions, UI elements — anywhere someone reads more than a line or two
- **Variable**: `--font-dm-sans`, mapped to `font-sans`
- **Character**: Geometric, neutral, warm — reads cleanly at any size, generous spacing
- **Weights used**: Light (300), Regular (400), Medium (500)

### Type Scale

| Name | Class | Usage |
|---|---|---|
| Display | `text-8xl md:text-9xl font-heading font-light italic` | Hero titles only |
| Hero | `text-6xl md:text-8xl font-heading font-light italic` | Section heroes |
| Title | `text-4xl md:text-5xl font-heading font-light` | Section headings |
| Subtitle | `text-2xl md:text-3xl font-heading font-light italic` | Sub-headings, menu items |
| Eyebrow | `text-xs uppercase tracking-[0.3em] font-sans font-light text-muted-foreground` | Labels above titles |
| Body | `text-base md:text-lg font-sans font-light leading-relaxed` | Paragraph text |
| Caption | `text-sm font-sans font-light text-muted-foreground` | Image captions, metadata |

### Typography Rules

1. **Eyebrow before headline**: Every major section has a small uppercase label before the title. Creates visual hierarchy and rhythm.
2. **Italic for emotion**: Use italic Jedira for any text that carries emotional weight — taglines, quotes, poetic copy.
3. **Never sentence-case for labels**: Eyebrows and nav items use all-caps with wide tracking.
4. **Line length**: Body text maxes at `max-w-prose` (~65 characters). Don't let text run edge-to-edge.
5. **Text balance**: Apply `text-balance` to all headlines. Headlines should never widow.
6. **Language**: All user-facing copy is in Portuguese (pt-BR). Tone is poetic and literary, not commercial.

---

## Logo & Identity Mark

The wordmark uses Jedira at light weight, with "Invernada" slightly larger than "do Sol" to create a natural pause — as if you're reading it aloud and letting the name land. Never set Jedira for running body paragraphs — it's a display face reserved for the wordmark and short headline moments.

For digital use:
- Always on dark backgrounds
- Never in a box or container — it breathes open space
- Gold gradient version for hero placements, plain cream for nav

---

## Tone of Voice

**Portuguese (pt-BR) only** for all user-facing content.

| Do | Don't |
|---|---|
| "Uma experiência que aquece a alma" | "Reserve agora com desconto!" |
| "O fogo aceso te espera" | "Confira nosso cardápio completo" |
| "Onde o inverno encontra o sol" | "Clique aqui para saber mais" |
| "Savore o silêncio" | "Atendimento de segunda a domingo" |

The voice is:
- **Poetic but not purple**: Simple words arranged beautifully
- **Suggestive, not instructive**: Invite, don't demand
- **Intimate**: Write as if speaking to one person by firelight
- **Time-aware**: Acknowledge the season, the cold, the darkness — they are not negatives
