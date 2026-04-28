import type { CollectionConfig } from "payload";

import { isAdmin } from "../access/isAdmin.ts";

export const Inquiries: CollectionConfig = {
  slug: "inquiries",
  access: {
    create: isAdmin,
    delete: isAdmin,
    read: isAdmin,
    update: isAdmin,
  },
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "email", "interest", "status", "createdAt"],
  },
  fields: [
    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "new",
      options: [
        { label: "Neu", value: "new" },
        { label: "In Bearbeitung", value: "in-progress" },
        { label: "Abgeschlossen", value: "done" },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
        },
        {
          name: "email",
          type: "email",
          required: true,
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "phone",
          type: "text",
        },
        {
          name: "interest",
          type: "text",
        },
      ],
    },
    {
      name: "sourcePage",
      type: "text",
    },
    {
      name: "message",
      type: "textarea",
      required: true,
    },
    {
      name: "consentAccepted",
      type: "checkbox",
      required: true,
    },
  ],
};
