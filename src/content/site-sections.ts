import type { Locale } from "@/lib/i18n";

export const publicSectionKeys = [
  "home",
  "search",
  "offer",
  "work",
  "process",
  "team",
  "portfolio",
  "ecosystem",
  "values",
  "application",
] as const;

export const publicNavSectionKeys = ["home", "search", "offer", "work", "process", "application"] as const;

export type PublicSectionKey = (typeof publicSectionKeys)[number];
export type PublicNavSectionKey = (typeof publicNavSectionKeys)[number];

const publicSectionIds: Record<Locale, Record<PublicSectionKey, string>> = {
  es: {
    home: "home",
    search: "que-buscamos",
    offer: "que-ofrecemos",
    work: "como-trabajamos",
    process: "proceso",
    team: "equipo-consejo",
    portfolio: "portafolio",
    ecosystem: "ecosistema",
    values: "valores",
    application: "aplicacion",
  },
  en: {
    home: "home",
    search: "what-we-seek",
    offer: "what-we-offer",
    work: "how-we-work",
    process: "process",
    team: "team-council",
    portfolio: "portfolio",
    ecosystem: "ecosystem",
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
