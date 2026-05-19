/* Shared types for Invernada do Sol */

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

export interface Cabin {
  id: string
  name: string
  description: string
  capacity: number
  amenities: string[]
  images: string[]
  pricePerNight?: string
}

export interface GalleryImage {
  src: string
  alt: string
  width: number
  height: number
  category?: "food" | "cabin" | "nature" | "event"
}

export interface Testimonial {
  id: string
  author: string
  location?: string
  text: string
  rating: 1 | 2 | 3 | 4 | 5
  date?: string
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
