import type { AgendaItem } from "@/types"

export const agenda: AgendaItem[] = [
  {
    id: "sexta",
    day: "Sexta",
    title: "Noite da lareira",
    description:
      "Jantar harmonizado ao som do fogo, com a serra escurecendo pelas janelas.",
    time: "a partir das 18h",
  },
  {
    id: "sabado",
    day: "Sábado",
    title: "Tarde de vinhos",
    description:
      "Degustação de rótulos de altitude com tábuas da região, ao pôr do sol.",
    time: "16h às 23h",
  },
  {
    id: "domingo",
    day: "Domingo",
    title: "Almoço da serra",
    description:
      "Almoço demorado de inverno, para fechar o fim de semana sem pressa de partir.",
    time: "12h às 18h",
  },
]
