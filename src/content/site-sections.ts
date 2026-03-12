import type { Locale } from "@/lib/i18n";

export const publicSectionKeys = [
  "home",
  "thesis",
  "search",
  "offer",
  "work",
  "values",
  "process",
  "council",
  "allies",
  "application",
] as const;

export const publicNavSectionKeys = [
  "home",
  "thesis",
  "search",
  "offer",
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
    search: "que-buscamos",
    offer: "que-recibe-el-aliado",
    work: "como-trabajamos",
    process: "proceso",
    council: "consejo",
    allies: "otros-aliados",
    values: "valores",
    application: "aplicacion",
  },
  en: {
    home: "home",
    thesis: "our-thesis",
    search: "what-we-seek",
    offer: "what-the-ally-receives",
    work: "how-we-work",
    process: "process",
    council: "council",
    allies: "other-allies",
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
