/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import config from "@payload-config";
import { generatePageMetadata, RootPage } from "@payloadcms/next/views";
import type { Metadata } from "next";

import { importMap } from "@/app/(payload)/admin/importMap";

type PayloadAdminPageProps = {
  params: Promise<{
    segments: string[];
  }>;
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
};

export const generateMetadata = ({
  params,
  searchParams,
}: PayloadAdminPageProps): Promise<Metadata> =>
  generatePageMetadata({ config, params, searchParams });

export default function PayloadAdminPage({
  params,
  searchParams,
}: PayloadAdminPageProps) {
  return RootPage({ config, params, searchParams, importMap });
}
