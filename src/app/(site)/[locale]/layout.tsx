import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import "@/app/globals.css";

import { SiteShell } from "@/components/site-shell";
import { getPublicCopy } from "@/content/public-site";
import { display, sans } from "@/lib/fonts";
import { isLocale, locales } from "@/lib/i18n";
import { resolveParams } from "@/lib/route-params";
import { buildLocaleMetadata } from "@/lib/seo";
import { siteOrigin } from "@/lib/site-config";

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }> | { locale: string };
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }> | { locale: string };
}): Promise<Metadata> {
  const { locale } = await resolveParams(params);

  if (!isLocale(locale)) {
    return {};
  }

  const copy = getPublicCopy(locale);

  return {
    metadataBase: new URL(siteOrigin),
    ...buildLocaleMetadata({
      locale,
      title: copy.meta.title,
      description: copy.meta.description,
      path: `/${locale}`,
    }),
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await resolveParams(params);

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${display.variable} ${sans.variable}`}>
        <SiteShell locale={locale}>{children}</SiteShell>
      </body>
    </html>
  );
}
