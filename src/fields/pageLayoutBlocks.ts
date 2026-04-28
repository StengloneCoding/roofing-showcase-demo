import type { Block } from "payload";

const ctaFields = [
  {
    name: "label",
    type: "text",
    required: true,
  },
  {
    name: "href",
    type: "text",
    required: true,
  },
] as const;

export const statsBlock: Block = {
  slug: "stats",
  interfaceName: "StatsBlock",
  labels: {
    singular: "Statistik-Band",
    plural: "Statistik-Baender",
  },
  fields: [
    {
      name: "eyebrow",
      type: "text",
    },
    {
      name: "heading",
      type: "text",
      required: true,
    },
    {
      name: "items",
      type: "array",
      minRows: 2,
      fields: [
        {
          name: "value",
          type: "text",
          required: true,
        },
        {
          name: "label",
          type: "text",
          required: true,
        },
        {
          name: "description",
          type: "textarea",
        },
      ],
    },
  ],
};

export const serviceGridBlock: Block = {
  slug: "serviceGrid",
  interfaceName: "ServiceGridBlock",
  labels: {
    singular: "Leistungsraster",
    plural: "Leistungsraster",
  },
  fields: [
    {
      name: "eyebrow",
      type: "text",
    },
    {
      name: "heading",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
    },
    {
      name: "items",
      type: "array",
      minRows: 2,
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "description",
          type: "textarea",
          required: true,
        },
        {
          name: "bullets",
          type: "array",
          fields: [
            {
              name: "text",
              type: "text",
              required: true,
            },
          ],
        },
      ],
    },
  ],
};

export const processBlock: Block = {
  slug: "process",
  interfaceName: "ProcessBlock",
  labels: {
    singular: "Ablauf",
    plural: "Ablaeufe",
  },
  fields: [
    {
      name: "eyebrow",
      type: "text",
    },
    {
      name: "heading",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
    },
    {
      name: "steps",
      type: "array",
      minRows: 3,
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "description",
          type: "textarea",
          required: true,
        },
      ],
    },
  ],
};

export const textColumnsBlock: Block = {
  slug: "textColumns",
  interfaceName: "TextColumnsBlock",
  labels: {
    singular: "Textspalten",
    plural: "Textspalten",
  },
  fields: [
    {
      name: "eyebrow",
      type: "text",
    },
    {
      name: "heading",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
    },
    {
      name: "columns",
      type: "array",
      minRows: 2,
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "body",
          type: "textarea",
          required: true,
        },
      ],
    },
  ],
};

export const faqBlock: Block = {
  slug: "faq",
  interfaceName: "FaqBlock",
  labels: {
    singular: "FAQ",
    plural: "FAQs",
  },
  fields: [
    {
      name: "eyebrow",
      type: "text",
    },
    {
      name: "heading",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
    },
    {
      name: "items",
      type: "array",
      minRows: 2,
      fields: [
        {
          name: "question",
          type: "text",
          required: true,
        },
        {
          name: "answer",
          type: "textarea",
          required: true,
        },
      ],
    },
  ],
};

export const ctaBlock: Block = {
  slug: "cta",
  interfaceName: "CtaBlock",
  labels: {
    singular: "Call to Action",
    plural: "Call to Actions",
  },
  fields: [
    {
      name: "eyebrow",
      type: "text",
    },
    {
      name: "heading",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      type: "row",
      fields: [
        {
          name: "primaryCta",
          type: "group",
          fields: [...ctaFields],
        },
        {
          name: "secondaryCta",
          type: "group",
          fields: [...ctaFields],
        },
      ],
    },
  ],
};

export const contactCardsBlock: Block = {
  slug: "contactCards",
  interfaceName: "ContactCardsBlock",
  labels: {
    singular: "Kontaktkarten",
    plural: "Kontaktkarten",
  },
  fields: [
    {
      name: "eyebrow",
      type: "text",
    },
    {
      name: "heading",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
    },
    {
      name: "items",
      type: "array",
      minRows: 2,
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "body",
          type: "textarea",
          required: true,
        },
        {
          name: "label",
          type: "text",
        },
        {
          name: "href",
          type: "text",
        },
        {
          name: "icon",
          type: "select",
          required: true,
          options: [
            { label: "Telefon", value: "phone" },
            { label: "E-Mail", value: "mail" },
            { label: "Adresse", value: "map" },
            { label: "Zeit", value: "clock" },
          ],
        },
      ],
    },
  ],
};

export const jobHighlightsBlock: Block = {
  slug: "jobHighlights",
  interfaceName: "JobHighlightsBlock",
  labels: {
    singular: "Karriere-Highlights",
    plural: "Karriere-Highlights",
  },
  fields: [
    {
      name: "eyebrow",
      type: "text",
    },
    {
      name: "heading",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
    },
    {
      name: "items",
      type: "array",
      minRows: 3,
      fields: [
        {
          name: "text",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "note",
      type: "textarea",
    },
  ],
};

export const pageLayoutBlocks = [
  statsBlock,
  serviceGridBlock,
  processBlock,
  textColumnsBlock,
  faqBlock,
  ctaBlock,
  contactCardsBlock,
  jobHighlightsBlock,
];
