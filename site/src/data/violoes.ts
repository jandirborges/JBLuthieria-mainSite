import { getSanityClient } from "../lib/sanity";

export type ViolaoStatus = "a-venda" | "amostra";

export type ViolaoPhoto = {
  url: string;
  alt?: string;
};

export type ViolaoSpec = {
  label: string;
  value: string;
};

export type Violao = {
  slug: string;
  title: string;
  wood: string;
  status: ViolaoStatus;
  photos: ViolaoPhoto[];
  description?: string;
  specifications?: ViolaoSpec[];
};

export function statusLabel(status: ViolaoStatus): string {
  return status === "a-venda" ? "À venda" : "Amostra";
}

// Dados mock — usados enquanto o Sanity não estiver configurado.
// Quando as env vars PUBLIC_SANITY_PROJECT_ID/PUBLIC_SANITY_DATASET estiverem
// presentes, o site passa a buscar do Sanity automaticamente.
const MOCK: Violao[] = [
  {
    slug: "modelo-om-pau-ferro",
    title: "Modelo OM",
    wood: "Pau-ferro & Spruce",
    status: "a-venda",
    photos: [],
    description:
      "Modelo OM com timbre equilibrado, projeção limpa e excelente resposta dinâmica. Construção totalmente artesanal.",
    specifications: [
      { label: "Tampo", value: "Spruce sólido" },
      { label: "Fundo e laterais", value: "Pau-ferro" },
      { label: "Braço", value: "Mogno" },
      { label: "Escala", value: "Ébano" },
    ],
  },
  {
    slug: "classico-jacaranda",
    title: "Modelo Clássico",
    wood: "Jacarandá & Cedro",
    status: "amostra",
    photos: [],
    description:
      "Violão clássico construído como peça de mostruário, demonstrando o trabalho da oficina em madeiras nobres.",
    specifications: [
      { label: "Tampo", value: "Cedro sólido" },
      { label: "Fundo e laterais", value: "Jacarandá" },
      { label: "Braço", value: "Cedro" },
      { label: "Escala", value: "Ébano" },
    ],
  },
  {
    slug: "folk-mogno",
    title: "Modelo Folk",
    wood: "Mogno & Spruce",
    status: "a-venda",
    photos: [],
    description:
      "Modelo folk com timbre quente do mogno, ideal para acompanhamento e dedilhado.",
    specifications: [
      { label: "Tampo", value: "Spruce sólido" },
      { label: "Fundo e laterais", value: "Mogno" },
      { label: "Braço", value: "Mogno" },
      { label: "Escala", value: "Pau-ferro" },
    ],
  },
];

const QUERY_LIST = `*[_type == "violao"] | order(coalesce(order, 999), _createdAt desc) {
  "slug": slug.current,
  title,
  wood,
  status,
  description,
  specifications,
  "photos": photos[]{
    "url": asset->url,
    "alt": alt
  }
}`;

const QUERY_ONE = `*[_type == "violao" && slug.current == $slug][0] {
  "slug": slug.current,
  title,
  wood,
  status,
  description,
  specifications,
  "photos": photos[]{
    "url": asset->url,
    "alt": alt
  }
}`;

export async function getViolaes(): Promise<Violao[]> {
  const client = getSanityClient();
  if (!client) return MOCK;
  try {
    return await client.fetch<Violao[]>(QUERY_LIST);
  } catch (e) {
    console.warn("Erro ao buscar violões do Sanity:", e);
    return [];
  }
}

export async function getViolao(slug: string): Promise<Violao | null> {
  const client = getSanityClient();
  if (!client) {
    return MOCK.find((v) => v.slug === slug) ?? null;
  }
  try {
    return await client.fetch<Violao | null>(QUERY_ONE, { slug });
  } catch (e) {
    console.warn("Erro ao buscar violão do Sanity:", e);
    return null;
  }
}
