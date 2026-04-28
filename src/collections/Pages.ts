import type { CollectionConfig } from "payload";

import { isAdmin } from "../access/isAdmin.ts";
import { pageLayoutBlocks } from "../fields/pageLayoutBlocks.ts";

export const Pages: CollectionConfig = {
  slug: "pages",
  access: {
    create: isAdmin,
    delete: isAdmin,
    read: () => true,
    update: isAdmin,
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "updatedAt"],
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: {
        description: "z. B. start, kontakt, karriere oder referenzen",
      },
    },
    {
      name: "metaDescription",
      type: "textarea",
      required: true,
    },
    {
      name: "hero",
      type: "group",
      fields: [
        {
          name: "eyebrow",
          type: "text",
        },
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
          type: "row",
          fields: [
            {
              name: "primaryCta",
              type: "group",
              fields: [
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
              ],
            },
            {
              name: "secondaryCta",
              type: "group",
              fields: [
                {
                  name: "label",
                  type: "text",
                },
                {
                  name: "href",
                  type: "text",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "sections",
      type: "blocks",
      blocks: pageLayoutBlocks,
      required: true,
    },
  ],
};
