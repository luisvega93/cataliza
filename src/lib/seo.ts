import type { Metadata } from "next";

import { defaultLocale, getAltLocale, getOpenGraphLocale, type Locale } from "@/lib/i18n";
import { buildSiteUrl, siteName } from "@/lib/site-config";

type LocaleMetadataOptions = {
  locale: Locale;
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
};

export function buildLocaleMetadata({
  locale,
  title,
  description,
  path,
  type = "website",
}: LocaleMetadataOptions): Metadata {
  const localePath = path.startsWith("/") ? path : `/${path}`;
  const alternateLocale = getAltLocale(locale);

  return {
    title,
    description,
    alternates: {
      canonical: buildSiteUrl(localePath),
      languages: {
        es: buildSiteUrl(localePath.replace(`/${locale}`, "/es")),
        en: buildSiteUrl(localePath.replace(`/${locale}`, "/en")),
        "x-default": buildSiteUrl(`/${defaultLocale}`),
      },
    },
    openGraph: {
      title,
      description,
      url: buildSiteUrl(localePath),
      siteName,
      type,
      locale: getOpenGraphLocale(locale),
      alternateLocale: [getOpenGraphLocale(alternateLocale)],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
