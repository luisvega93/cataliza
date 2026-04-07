import type { Locale } from "@/lib/i18n";

export const publicSectionKeys = [
  "home",
  "thesis",
  "model",
  "search",
  "process",
  "application",
] as const;

export const publicNavSectionKeys = [
  "home",
  "thesis",
  "model",
  "search",
  "process",
  "application",
] as const;

export type PublicSectionKey = (typeof publicSectionKeys)[number];
export type PublicNavSectionKey = (typeof publicNavSectionKeys)[number];

const publicSectionIds: Record<Locale, Record<PublicSectionKey, string>> = {
  es: {
    home: "home",
    thesis: "nuestra-tesis",
    model: "como-funciona",
    search: "que-buscamos",
    process: "proceso",
    application: "aplicacion",
  },
  en: {
    home: "home",
    thesis: "our-thesis",
    model: "how-it-works",
    search: "what-we-seek",
    process: "process",
    application: "application",
  },
};

export function getPublicSectionId(locale: Locale, key: PublicSectionKey) {
  return publicSectionIds[locale][key];
}

export function getPublicSectionHash(locale: Locale, key: PublicSectionKey) {
  return `#${getPublicSectionId(locale, key)}`;
}

export function getPublicSectionHref(locale: Locale, key: PublicSectionKey) {
  return key === "home" ? `/${locale}` : `/${locale}${getPublicSectionHash(locale, key)}`;
}
