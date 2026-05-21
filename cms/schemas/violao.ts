import { defineType, defineField } from "sanity";

export const violaoType = defineType({
  name: "violao",
  title: "Violão",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Nome do modelo",
      type: "string",
      description: 'Ex: "Modelo OM Pau-ferro"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "URL (slug)",
      type: "slug",
      description: "Gerado automaticamente a partir do nome — pode ajustar se quiser.",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "À venda", value: "a-venda" },
          { title: "Amostra", value: "amostra" },
        ],
        layout: "radio",
      },
      initialValue: "a-venda",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "wood",
      title: "Madeiras (resumo curto)",
      type: "string",
      description: 'Aparece como subtítulo. Ex: "Pau-ferro & Spruce"',
    }),
    defineField({
      name: "description",
      title: "Descrição",
      type: "text",
      rows: 5,
      description: "Texto livre. Quebras de linha são respeitadas no site.",
    }),
    defineField({
      name: "photos",
      title: "Fotos",
      type: "array",
      description:
        "A primeira foto é a capa do card no catálogo. Arraste para reordenar.",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Texto alternativo (acessibilidade)",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1).error("Adicione pelo menos uma foto."),
    }),
    defineField({
      name: "specifications",
      title: "Especificações técnicas",
      type: "array",
      description:
        "Lista de características que aparecem em duas colunas na página do violão.",
      of: [
        {
          type: "object",
          name: "spec",
          fields: [
            { name: "label", title: "Característica", type: "string" },
            { name: "value", title: "Valor", type: "string" },
          ],
          preview: {
            select: { title: "label", subtitle: "value" },
          },
        },
      ],
    }),
    defineField({
      name: "order",
      title: "Ordem na lista",
      type: "number",
      description:
        "Menor número aparece primeiro no catálogo. Deixe em branco para usar a data de criação.",
    }),
  ],
  preview: {
    select: {
      title: "title",
      status: "status",
      media: "photos.0",
    },
    prepare({ title, status, media }) {
      return {
        title,
        subtitle: status === "a-venda" ? "✓ À venda" : "○ Amostra",
        media,
      };
    },
  },
});
