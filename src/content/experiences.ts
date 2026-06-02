import { Flame, Mountain, Wine, Moon } from "lucide-react"
import type { Experience } from "@/types"

export const experiences: Experience[] = [
  {
    id: "fogo",
    title: "O fogo aceso",
    description:
      "Cada noite começa em torno das chamas. Lareira acesa, brasa viva e o calor que reúne quem chega.",
    icon: Flame,
  },
  {
    id: "serra",
    title: "A serra ao redor",
    description:
      "Entre araucárias e neblina, o silêncio da Serra Catarinense convida a desacelerar e simplesmente estar.",
    icon: Mountain,
  },
  {
    id: "mesa",
    title: "A mesa demorada",
    description:
      "Vinhos da serra, pratos de inverno e o tempo que não tem pressa. Aqui, a refeição é o destino.",
    icon: Wine,
  },
  {
    id: "noite",
    title: "A noite na cabana",
    description:
      "Quando a última taça é servida, você não vai embora. Fica. Dorme sob o céu de Ouro e acorda com a serra.",
    icon: Moon,
  },
]
