import { Flame, Mountain, Wine, Moon } from "lucide-react"
import type { Experience } from "@/types"

export const experiences: Experience[] = [
  {
    id: "fogo",
    title: "A lareira acesa",
    description:
      "Toda noite começa em volta do fogo. A lareira acesa, o calor e aquele aconchego que reúne quem chega.",
    icon: Flame,
  },
  {
    id: "serra",
    title: "A Serra Catarinense",
    description:
      "Entre araucárias e neblina, o silêncio da serra convida a desacelerar e simplesmente estar presente.",
    icon: Mountain,
  },
  {
    id: "mesa",
    title: "Gastronomia afetiva",
    description:
      "Buffet de Sopas, Café Colonial e os sabores da serra numa mesa feita pra encontros que não têm pressa.",
    icon: Wine,
  },
  {
    id: "noite",
    title: "O pôr do sol",
    description:
      "O fim de tarde mais bonito da região pintando o céu — e histórias que viram memória pra vida toda.",
    icon: Moon,
  },
]
