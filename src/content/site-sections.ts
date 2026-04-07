import type { Locale } from "@/lib/i18n";

export const publicSectionKeys = [
  "home",
  "thesis",
  "model",
  "search",
  "work",
  "values",
  "process",
  "council",
  "application",
] as const;

export const publicNavSectionKeys = [
  "home",
  "thesis",
  "model",
  "search",
  "work",
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
    work: "como-trabajamos",
    process: "proceso",
    council: "consejo",
    values: "valores",
    application: "aplicacion",
  },
  en: {
    home: "home",
    thesis: "our-thesis",
    model: "how-cataliza-works",
    search: "what-we-seek",
    work: "how-we-work",
    process: "process",
    council: "council",
    values: "values",
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
