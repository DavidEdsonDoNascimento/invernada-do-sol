/* Shared types for Invernada do Sol */

import type { LucideIcon } from "lucide-react"

export interface MenuItem {
  id: string
  name: string
  description: string
  price?: string
  category: MenuCategory
  tags?: string[]
  image?: string
  featured?: boolean
}

export type MenuCategory =
  | "entradas"
  | "principais"
  | "sobremesas"
  | "bebidas"
  | "especiais"

export interface Experience {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export interface Cabin {
  id: string
  name: string
  description: string
  capacity: number
  amenities: string[]
  image: string
  pricePerNight?: string
}

export interface AgendaItem {
  id: string
  day: string
  title: string
  description: string
  time?: string
}

export interface Moment {
  id: string
  src: string
  alt: string
  caption?: string
  size?: "tall" | "wide" | "square"
}

export interface GalleryImage {
  src: string
  alt: string
  width: number
  height: number
  category?: "food" | "cabin" | "nature" | "event"
}

export interface NavItem {
  label: string
  href: string
  external?: boolean
}

export interface SectionProps {
  className?: string
  id?: string
}
