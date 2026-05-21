export type ViolaoStatus = "a-venda" | "amostra";

export type Violao = {
  slug: string;
  title: string;
  wood: string;
  status: ViolaoStatus;
  photos: string[];
  description?: string;
};

// TODO: quando o Sanity for integrado, isto vira uma função async que faz fetch
// das entradas publicadas pelo luthier. A forma dos objetos permanece a mesma.
export const violoes: Violao[] = [
  {
    slug: "modelo-om-pau-ferro",
    title: "Modelo OM",
    wood: "Pau-ferro & Spruce",
    status: "a-venda",
    photos: [],
  },
  {
    slug: "classico-jacaranda",
    title: "Modelo Clássico",
    wood: "Jacarandá & Cedro",
    status: "amostra",
    photos: [],
  },
  {
    slug: "folk-mogno",
    title: "Modelo Folk",
    wood: "Mogno & Spruce",
    status: "a-venda",
    photos: [],
  },
];

export function statusLabel(status: ViolaoStatus): string {
  return status === "a-venda" ? "À venda" : "Amostra";
}
