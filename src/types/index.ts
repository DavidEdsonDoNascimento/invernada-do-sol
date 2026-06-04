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

export interface AgendaEvent {
  id: string
  tag: string
  title: string
  description: string
  image: string
}

export interface Moment {
  id: string
  src: string
  alt: string
  tag: string
  caption: string
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
