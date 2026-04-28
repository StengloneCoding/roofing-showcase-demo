import type { CollectionConfig } from "payload";

import { isAdmin } from "../access/isAdmin.ts";

export const GalleryItems: CollectionConfig = {
  slug: "gallery-items",
  access: {
    create: isAdmin,
    delete: isAdmin,
    read: () => true,
    update: isAdmin,
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "serviceType", "completionYear"],
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
    },
    {
      name: "summary",
      type: "textarea",
      required: true,
    },
    {
      type: "row",
      fields: [
        {
          name: "serviceType",
          type: "text",
          required: true,
        },
        {
          name: "completionYear",
          type: "number",
        },
        {
          name: "result",
          type: "text",
        },
      ],
    },
    {
      name: "location",
      type: "text",
    },
    {
      name: "tags",
      type: "array",
      fields: [
        {
          name: "text",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "coverImage",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "gallery",
      type: "array",
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
  ],
};
