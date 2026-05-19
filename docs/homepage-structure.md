# Homepage Structure — Invernada do Sol

## Overview

The homepage is a single, continuous narrative scroll. It does not function as a landing page with isolated sections — it functions as a **cinematic sequence**, where each section leads naturally into the next, building emotional momentum toward a reservation.

Total sections: **8**
Estimated scroll depth: **~6000–7000px** on desktop
Reading time at natural scroll: **3–5 minutes**

This is intentional. The visitor who stays is the visitor who will reserve.

---

## Section Map

```
┌─────────────────────────────────────────────────────┐
│  1. HERO               Full-screen cinematic opener │
├─────────────────────────────────────────────────────┤
│  2. ABOUT              Brand story & origin         │
├─────────────────────────────────────────────────────┤
│  3. EXPERIENCE         What makes it different      │
├─────────────────────────────────────────────────────┤
│  4. MENU               Featured dishes              │
├─────────────────────────────────────────────────────┤
│  5. GALLERY            Atmospheric imagery          │
├─────────────────────────────────────────────────────┤
│  6. CABINS             Stay overnight               │
├─────────────────────────────────────────────────────┤
│  7. TESTIMONIALS       Guest voices                 │
├─────────────────────────────────────────────────────┤
│  8. RESERVATION CTA    The invitation               │
└─────────────────────────────────────────────────────┘
```

---

## Section Details

### 1. Hero — `HeroSection`

**File**: `src/components/sections/HeroSection.tsx`
**Route anchor**: `#inicio`

**Layout**: Full viewport height (`min-h-screen`), full-bleed background image, centered content

**Structure**:
```
<section id="inicio" className="relative min-h-screen overflow-hidden">
  {/* Background image with parallax */}
  <div className="absolute inset-0">
    <next/image (parallax via motion.div + useScrollProgress) />
    <div className="gradient-vignette absolute inset-0" />
    <div className="gradient-bottom-fade absolute inset-0" />
  </div>

  {/* Content — vertically and horizontally centered */}
  <div className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center">
    <AnimateIn variants={fadeIn} delay={0.3}>
      <p>eyebrow — "Ouro, Santa Catarina"</p>
    </AnimateIn>
    <AnimateIn variants={fadeUp} delay={0.6}>
      <h1>Invernada do Sol</h1>  {/* .text-gradient-gold */}
    </AnimateIn>
    <AnimateIn variants={fadeUp} delay={0.9}>
      <p>tagline</p>
    </AnimateIn>
    <AnimateIn variants={fadeIn} delay={1.4}>
      <ChevronDown />  {/* subtle scroll hint, animates slowly up/down */}
    </AnimateIn>
  </div>
</section>
```

**Image**: Full-bleed landscape of the Serra/property — mist, winter light, or firelight interior. Landscape orientation (16:9 or wider).

**Typography**:
- Eyebrow: `text-xs uppercase tracking-[0.3em] text-muted-foreground`
- H1: `text-7xl md:text-9xl font-heading font-light italic text-gradient-gold`
- Tagline: `text-lg md:text-xl font-sans font-light text-foreground/80`

**Notes**:
- No navigation visible on initial load — nav fades in as user scrolls
- Scroll indicator: `ChevronDown` with gentle bounce animation, fades out after first scroll
- Hero image should be `priority` loaded

---

### 2. About — `AboutSection`

**File**: `src/components/sections/AboutSection.tsx`
**Route anchor**: `#sobre`

**Layout**: Two-column on desktop (text left, image right), single column on mobile. Asymmetric — text takes ~45%, image ~55%.

**Structure**:
```
<section id="sobre" className="py-32 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

    {/* Text column */}
    <div className="space-y-6">
      <AnimateIn><p>eyebrow — "Nossa História"</p></AnimateIn>
      <AnimateIn delay={0.1}><h2>title</h2></AnimateIn>
      <AnimateIn delay={0.2}><p>body — 2–3 paragraphs</p></AnimateIn>
    </div>

    {/* Image column */}
    <AnimateIn variants={scaleIn}>
      <div className="aspect-[4/5] overflow-hidden rounded-sm">
        <next/image className="object-cover" />
      </div>
    </AnimateIn>
  </div>
</section>
```

**Image**: Interior or kitchen shot — warm, intimate. Portrait orientation.

**Notes**:
- `rounded-sm` (slight, not aggressive rounding) on images
- On mobile: image appears first (above text) — image leads, text follows

---

### 3. Experience — `ExperienceSection`

**File**: `src/components/sections/ExperienceSection.tsx`
**Route anchor**: `#experiencia`

**Layout**: Full-width with dark card background (`bg-secondary`), 3–4 column grid of experience pillars

**Structure**:
```
<section id="experiencia" className="py-32 px-6 bg-secondary">
  <div className="max-w-6xl mx-auto">

    {/* Header */}
    <AnimateIn><eyebrow /></AnimateIn>
    <AnimateIn delay={0.1}><h2>title</h2></AnimateIn>
    <AnimateIn delay={0.2}><p>intro paragraph</p></AnimateIn>

    {/* Pillars grid */}
    <StaggerContainer className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {pillars.map(p => (
        <AnimateIn key={p.id} className="space-y-4">
          <Icon className="text-primary" />
          <h3>{p.title}</h3>
          <p>{p.description}</p>
        </AnimateIn>
      ))}
    </StaggerContainer>
  </div>
</section>
```

**Notes**:
- Icons from Lucide: `Flame`, `Snowflake`, `UtensilsCrossed`, `Moon`
- Pillar titles in `font-heading italic`
- Descriptions in `font-sans font-light text-muted-foreground`
- Horizontal divider (gold, 1px, 40% opacity) above this section creates a pause

---

### 4. Menu — `MenuSection`

**File**: `src/components/sections/MenuSection.tsx`
**Route anchor**: `#cardapio`

**Layout**: Editorial. Large featured item left, grid of supporting items right. Or alternating large/small rows.

**Structure** (Option A — Editorial):
```
<section id="cardapio" className="py-32 px-6">
  <div className="max-w-7xl mx-auto">

    <header>
      <eyebrow>"Cardápio de Inverno"</eyebrow>
      <h2>O que o fogo prepara</h2>
    </header>

    {/* Featured dish — large */}
    <AnimateIn variants={scaleIn}>
      <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
        <div className="aspect-[4/3] overflow-hidden">
          <next/image />
        </div>
        <div>
          <h3>dish name</h3>
          <p>10-word description</p>
          <p className="text-primary">R$ 00,00</p>
        </div>
      </div>
    </AnimateIn>

    {/* Supporting dishes */}
    <StaggerContainer className="mt-16 grid grid-cols-2 lg:grid-cols-3 gap-8">
      {supporting.map(dish => <DishCard key={dish.id} {...dish} />)}
    </StaggerContainer>

    {/* CTA to full menu */}
    <AnimateIn className="mt-12 text-center">
      <a>Ver cardápio completo</a>
    </AnimateIn>
  </div>
</section>
```

**Notes**:
- Content sourced from `src/content/menu.ts`
- Dish prices are shown but not emphasized
- "Ver cardápio completo" links to `/cardapio` route

---

### 5. Gallery — `GallerySection`

**File**: `src/components/sections/GallerySection.tsx`
**Route anchor**: `#galeria`

**Layout**: Asymmetric masonry-like grid. Not a uniform grid — some images tall, some wide, some square. Creates organic, editorial feeling.

**Structure**:
```
<section id="galeria" className="py-32">
  {/* Section header */}
  <div className="px-6 mb-12">
    <eyebrow />
    <h2 />
  </div>

  {/* Gallery grid — CSS grid with custom areas */}
  <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-auto gap-2 px-2">
    {/* Large image — spans 2 cols/rows */}
    <AnimateIn variants={scaleIn} className="col-span-2 row-span-2">
      <div className="aspect-square overflow-hidden">
        <next/image />
      </div>
    </AnimateIn>

    {/* Smaller images */}
    {galleryImages.slice(1).map((img, i) => (
      <AnimateIn key={i} variants={scaleIn} delay={i * 0.08}>
        <div className="aspect-square overflow-hidden">
          <next/image className="hover:scale-105 transition-transform duration-700" />
        </div>
      </AnimateIn>
    ))}
  </div>
</section>
```

**Notes**:
- Minimal text — let images dominate
- Images sourced from `public/images/gallery/`
- On mobile: 2-column uniform grid (masonry is a desktop luxury)
- No lightbox required at launch; can be added later

---

### 6. Cabins — `CabinSection`

**File**: `src/components/sections/CabinSection.tsx`
**Route anchor**: `#cabanas`

**Layout**: Full-bleed section with dark overlay. Two or three cabin cards side by side.

**Structure**:
```
<section id="cabanas" className="py-32 px-6">
  <div className="max-w-7xl mx-auto">
    <header>
      <eyebrow>"Onde o sonho passa a noite"</eyebrow>
      <h2>As Cabanas</h2>
      <p>Não venha apenas jantar. Fique.</p>
    </header>

    <StaggerContainer className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {cabins.map(cabin => (
        <AnimateIn key={cabin.id} className="group relative overflow-hidden rounded-sm">
          <div className="aspect-[3/4] overflow-hidden">
            <next/image className="group-hover:scale-103 transition-transform duration-1000" />
          </div>
          <div className="absolute bottom-0 inset-x-0 p-6 gradient-bottom-fade">
            <h3>{cabin.name}</h3>
            <p>{cabin.description}</p>
          </div>
        </AnimateIn>
      ))}
    </StaggerContainer>

    <AnimateIn className="mt-12 text-center">
      <a>Reservar uma cabana</a>  {/* → WhatsApp */}
    </AnimateIn>
  </div>
</section>
```

**Notes**:
- Content sourced from `src/content/cabins.ts`
- Cabin names must be evocative: "A Brasa", "O Pinheiro", "A Névoa"
- This section transitions naturally into testimonials and the CTA

---

### 7. Testimonials — `TestimonialsSection`

**File**: `src/components/sections/TestimonialsSection.tsx`
**Route anchor**: `#depoimentos`

**Layout**: Dark card background. 3 testimonial cards in a row on desktop. Single on mobile with optional swipe carousel.

**Notes**:
- Content from `src/content/testimonials.ts`
- No star ratings displayed visually (implied 5-star by curation)
- Author: first name + city only
- Optional: quote mark as large decorative gold character behind the text

---

### 8. Reservation CTA — `ReservationCTA`

**File**: `src/components/sections/ReservationCTA.tsx`
**Route anchor**: `#reserva`

**Layout**: Full-bleed with atmospheric background image (fire, candlelight). Centered content. Single primary action.

**Structure**:
```
<section id="reserva" className="relative py-48 px-6 overflow-hidden">
  {/* Background image with overlay */}
  <div className="absolute inset-0">
    <next/image (fire/candle image) />
    <div className="absolute inset-0 bg-background/70" />
  </div>

  <div className="relative z-10 text-center space-y-6 max-w-2xl mx-auto">
    <AnimateIn><eyebrow>"Reserve sua noite"</eyebrow></AnimateIn>
    <AnimateIn delay={0.1}><h2>Você merece uma noite assim</h2></AnimateIn>
    <AnimateIn delay={0.2}><p>description</p></AnimateIn>
    <AnimateIn delay={0.3}>
      <a href={whatsappUrl} className="btn-primary">Falar com a gente</a>
    </AnimateIn>
    <AnimateIn delay={0.4}>
      <p className="text-sm text-muted-foreground">
        Respondemos em instantes. {siteConfig.openingHours.weekends}.
      </p>
    </AnimateIn>
  </div>
</section>
```

**Notes**:
- WhatsApp URL built from `siteConfig.contact.whatsapp`
- Pre-filled message: "Olá! Gostaria de reservar uma mesa na Invernada do Sol."
- This is the emotional peak — the section that closes the story

---

## Navigation Anchor Map

| Section | ID | Nav Label |
|---|---|---|
| Hero | `#inicio` | Início |
| About | `#sobre` | Nossa História |
| Experience | `#experiencia` | A Experiência |
| Menu | `#cardapio` | Cardápio |
| Gallery | `#galeria` | Galeria |
| Cabins | `#cabanas` | Cabanas |
| Reservation | `#reserva` | Reservar |

---

## Section Transitions

Between every section, use a visual breath — either:
- **Whitespace only**: natural py-32 gap between dark backgrounds
- **Subtle divider**: 1px horizontal line in `border-border` (white at 8%)
- **Background shift**: alternating between `bg-background` and `bg-secondary` creates natural visual chapters

Never add ornamental borders, swoosh shapes, or triangular dividers — they look cheap.
