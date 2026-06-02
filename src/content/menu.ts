import type { MenuItem } from "@/types"

export const featuredDish: MenuItem = {
  id: "cordeiro-brasa",
  name: "Cordeiro na brasa",
  description:
    "Pernil de cordeiro da serra assado lentamente sobre a lenha, com raízes e ervas do inverno.",
  price: "R$ 148",
  category: "principais",
  image: "/images/restaurante/destaque.webp",
  featured: true,
}

export const menuItems: MenuItem[] = [
  {
    id: "assado-domingo",
    name: "Assado de domingo",
    description: "Carnes douradas no forno a lenha, com legumes da estação.",
    price: "R$ 96",
    category: "principais",
    image: "/images/restaurante/prato-1.webp",
  },
  {
    id: "entrada-horta",
    name: "Entrada da horta",
    description: "Vegetais e ervas frescas da serra para abrir a noite.",
    price: "R$ 42",
    category: "entradas",
    image: "/images/restaurante/prato-2.webp",
  },
  {
    id: "espetos-brasa",
    name: "Espetos na brasa",
    description: "Cortes marinados grelhados no fogo de chão.",
    price: "R$ 78",
    category: "principais",
    image: "/images/restaurante/prato-3.webp",
  },
  {
    id: "carta-inverno",
    name: "Carta de inverno",
    description: "Vinhos de altitude e drinks autorais ao redor do fogo.",
    price: "sob consulta",
    category: "bebidas",
    image: "/images/restaurante/prato-4.webp",
  },
]
