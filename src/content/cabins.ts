import type { Cabin } from "@/types"

export const cabins: Cabin[] = [
  {
    id: "brasa",
    name: "A Brasa",
    description:
      "Cabana íntima com lareira a lenha e banheira aquecida. Para dois que buscam o calor.",
    capacity: 2,
    amenities: ["Lareira a lenha", "Banheira", "Vista para a serra"],
    image: "/images/cabanas/cabana-brasa.webp",
    pricePerNight: "a partir de R$ 690",
  },
  {
    id: "pinheiro",
    name: "O Pinheiro",
    description:
      "Entre araucárias, varanda privativa e o cheiro de madeira. Silêncio que se ouve.",
    capacity: 3,
    amenities: ["Varanda privativa", "Aquecimento", "Café da manhã"],
    image: "/images/cabanas/cabana-pinheiro.webp",
    pricePerNight: "a partir de R$ 780",
  },
  {
    id: "nevoa",
    name: "A Névoa",
    description:
      "A cabana mais alta do refúgio. Acorde dentro da neblina, com o vale aos seus pés.",
    capacity: 4,
    amenities: ["Vista panorâmica", "Hidromassagem", "Adega privativa"],
    image: "/images/cabanas/cabana-nevoa.webp",
    pricePerNight: "a partir de R$ 940",
  },
]
