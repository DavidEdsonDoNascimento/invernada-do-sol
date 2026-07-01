# Mapa do Projeto — Invernada do Sol

Guia prático de navegação: **"quero mudar X → mexo no arquivo Y"**. Reflete o
estado real do código (não o planejado). Sempre que uma seção for renomeada,
movida ou adicionada, **atualize este arquivo e o `homepage-structure.md`.**

---

## As 8 seções reais (ordem na tela)

A home é montada em `src/app/page.tsx`, empilhando as seções entre `<Header>` e
`<Footer>`. Cada seção é um componente próprio com seu `<section id="...">`.

| # | Seção | Âncora (`id`) | Componente | Conteúdo externo |
|---|-------|---------------|------------|------------------|
| 1 | Hero | `#inicio` | `sections/HeroSection.tsx` | — |
| 2 | A Experiência | `#experiencias` | `sections/ExperiencesSection.tsx` | — |
| 3 | Restaurante | `#restaurante` | `sections/RestaurantSection.tsx` | — |
| 4 | Agenda | `#agenda` | `sections/WeeklyAgenda.tsx` | — |
| 5 | A Cabana | `#cabanas` | `sections/CabinSection.tsx` | — |
| 6 | Momentos | `#momentos` | `sections/MomentsSection.tsx` | `content/moments.ts` |
| 7 | Localização | `#localizacao` | `sections/LocationSection.tsx` | `config/site.ts` |

> **Atenção:** a seção **Momentos (`#momentos`) não está no menu** de navegação
> (`siteConfig.nav` tem 6 itens, sem Momentos). É intencional até segunda ordem.
>
> **Fusão Refúgio → Cabana:** a antiga seção "O Refúgio" (`#refugio`) foi
> incorporada à Cabana a pedido do cliente. Seu vídeo (varanda da família) + os
> dois parágrafos agora **abrem** a `CabinSection`, sob o título "A Cabana". Não
> existe mais `RefugeSection.tsx` nem âncora `#refugio`.

---

## "Quero mudar..." → onde mexer

### Textos e cópia

| O que | Onde |
|---|---|
| Nome, tagline, descrição do site | `src/config/site.ts` → `name`, `tagline`, `description` |
| Título/subtítulos do Hero | `src/components/sections/HeroSection.tsx` (hardcoded na JSX) |
| Textos poéticos de cada seção (título, parágrafos, destaques) | **dentro do próprio componente da seção** — ver tabela acima |
| Vídeos da Agenda (almoço de domingo / espaço) | array inline em `WeeklyAgenda.tsx` |
| Fotos + legendas da galeria de Momentos | `src/content/moments.ts` (`featuredMoment` + array `moments`) |
| Destaques da Cabana (Só sua / Natureza / Silêncio / Pôr do sol) | array `highlights` em `CabinSection.tsx` |
| Destaques do Restaurante (Buffet / Café Colonial / Sabores) | array `highlights` em `RestaurantSection.tsx` |

> **Importante:** ao contrário do que sugere o `component-guidelines.md`, os
> textos narrativos das seções **estão hardcoded na JSX de cada componente** —
> não em `content/`. Só contatos, CTAs e momentos são externalizados hoje;
> a Agenda deixou de usar `content/agenda.ts` (ver arquivos órfãos abaixo).

### Contatos, horários e localização

Tudo em **`src/config/site.ts`** (fonte única):

| O que | Campo |
|---|---|
| Telefone / WhatsApp | `contact.phoneE164` (formato `+5549...`) e `contact.phoneDisplay` |
| E-mail | `contact.email` |
| Instagram / Facebook | `contact.instagramUrl`, `contact.instagram`, `contact.facebookUrl` |
| Endereço, CEP, coordenadas, URLs de mapa | `location.*` |
| Horários de funcionamento | `openingHours.days[]` (dia + faixa de horário) |

O número de telefone alimenta os links de WhatsApp via
`src/lib/whatsapp.ts` (`buildWhatsappUrl`).

### Botões de WhatsApp (CTAs)

Os CTAs são gerados a partir de `siteConfig.cta` em `src/config/site.ts`:

- `cta.reserveTable` → `label` (texto do botão) + `message` (mensagem pré-preenchida)
- `cta.cabinAvailability` → idem para a cabana

Os links prontos ficam em `src/lib/whatsapp.ts` (`whatsappLinks.reserveTable`,
`whatsappLinks.cabinAvailability`) e são consumidos pelo componente
`ui/WhatsappButton.tsx`, usado no Hero, Restaurante, Cabana, Header, Footer e
MobileMenu.

> **Nota:** o `label` de `reserveTable` já foi trocado para "Entre em Contato",
> mas a `message` ainda fala em "reservar uma mesa". Alinhe os dois se mudar o
> propósito do botão.

### Menu de navegação

`siteConfig.nav` em `src/config/site.ts` — array de `{ label, href }`. O mesmo
array alimenta o `Header.tsx` (desktop) e o `MobileMenu.tsx`.

### Cores, fontes e efeitos visuais

| O que | Onde |
|---|---|
| Paleta (gold, ember, background, foreground...) | `src/app/globals.css` → bloco `:root` (tokens em `oklch`) |
| Mapeamento token → classe Tailwind | `src/app/globals.css` → `@theme inline` |
| Fontes (Cormorant / DM Sans) | `src/app/layout.tsx` |
| Utilitários cinematográficos (`.text-gradient-gold`, `.gradient-vignette`, `.gradient-bottom-fade`, `.film-grain`) | `src/app/globals.css` → `@layer utilities` |

Site é **sempre dark** — não existe light mode nem variante `.dark`.

### Animações

- Presets de variantes: `src/lib/animations/variants.ts` (`fadeUp`, `fadeIn`, `scaleIn`, `staggerContainer`, `ease.cinematic`)
- Wrappers: `components/motion/AnimateIn.tsx` (reveal único) e `StaggerContainer.tsx` (lista)
- Parallax: `hooks/useScrollProgress.ts` (usado no Hero)

### SEO e metadados

| O que | Onde |
|---|---|
| Título, description, keywords, OG | `src/config/site.ts` → `seo.*` |
| Metadata do Next / Open Graph / ícones | `src/app/layout.tsx` |
| JSON-LD (Restaurant + LodgingBusiness + TouristAttraction) | `src/components/seo/JsonLd.tsx` |
| Sitemap / robots | `src/app/sitemap.ts`, `src/app/robots.ts` |

---

## Componentes reutilizáveis (`src/components/ui/`)

| Componente | Uso |
|---|---|
| `WhatsappButton.tsx` | Botão de CTA para WhatsApp (variantes `primary` / `outline`) — **em uso** |
| `BackgroundVideo.tsx` | Vídeo de fundo autoplay/loop/muted — **em uso** (Experiências, Restaurante, Agenda, Cabana, Momentos) |
| `SectionTitle.tsx` | Cabeçalho de seção (eyebrow + título + intro) — **em uso** (5 seções) |
| `DishCard.tsx` | Card de prato — **órfão** (nenhuma seção importa) |
| `button.tsx` | Primitivo shadcn/ui — não editar à mão |

---

## Arquivos órfãos (existem mas não são renderizados)

Deixados como scaffolding para features futuras. **Não confie neles como se
estivessem no ar:**

- **`src/content/menu.ts`** — cardápio com pratos e preços (`featuredDish` +
  `menuItems`). Nenhum componente importa. A seção Restaurante atual **não
  mostra cardápio nem preços**. Base pronta caso o cliente peça um cardápio.
- **`src/components/ui/DishCard.tsx`** — card de prato, par natural do `menu.ts`.
  Também sem uso.
- **`src/content/agenda.ts`** (`agendaEvents`, tipo `AgendaEvent`) — cards de
  eventos datados (ex.: "Dia dos Namorados"). A seção Agenda foi reconstruída
  para mostrar 2 vídeos fixos em vez desses cards; o arquivo ficou guardado
  para reativar uma grade de eventos datados no futuro, se o cliente pedir.

Se for ligar o cardápio, o caminho é: criar uma `MenuSection` que consuma
`content/menu.ts` via `DishCard`, e adicioná-la em `page.tsx` + no menu (`nav`).

---

## Rotas

Hoje o site é **single-page**: só existe `/` (`src/app/page.tsx`). Não há route
groups de booking nem página `/cardapio` — apesar de o `ARCHITECTURE.md`
mencioná-los como estrutura futura.
