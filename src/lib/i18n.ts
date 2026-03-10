export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getAltLocale(locale: Locale): Locale {
  return locale === "es" ? "en" : "es";
}

export function getLocaleLabel(locale: Locale) {
  return locale === "es" ? "Español" : "English";
}
