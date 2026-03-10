import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { SiteShell } from "@/components/site-shell";
import { getPublicCopy } from "@/content/public-site";
import { isLocale, locales } from "@/lib/i18n";
import { resolveParams } from "@/lib/route-params";

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
    title: copy.meta.title,
    description: copy.meta.description,
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

  return <SiteShell locale={locale}>{children}</SiteShell>;
}
