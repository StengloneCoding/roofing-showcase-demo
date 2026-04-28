import "dotenv/config";

import { sqliteAdapter } from "@payloadcms/db-sqlite";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { GalleryItems } from "./collections/GalleryItems.ts";
import { Inquiries } from "./collections/Inquiries.ts";
import { Media } from "./collections/Media.ts";
import { Pages } from "./collections/Pages.ts";
import { Users } from "./collections/Users.ts";
import { SiteSettings } from "./globals/SiteSettings.ts";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Pages, GalleryItems, Inquiries],
  globals: [SiteSettings],
  secret: process.env.PAYLOAD_SECRET || "grimmundlechner-local-secret",
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || "file:./grimmundlechner.db",
    },
  }),
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
});
