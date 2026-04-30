import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { getSiteSettings } from "@/lib/cms";

type FrontendLayoutProps = {
  children: ReactNode;
};

export default async function FrontendLayout({ children }: FrontendLayoutProps) {
  const siteSettings = await getSiteSettings();

  return (
    <div className="flex min-h-screen flex-col bg-[color:var(--color-background)]">
      <SiteHeader siteSettings={siteSettings} />
      <main className="flex-1">{children}</main>
      <SiteFooter siteSettings={siteSettings} />
      <ScrollToTop />
    </div>
  );
}
