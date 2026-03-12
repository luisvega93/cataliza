import { staticSiteConfig } from "@/lib/site-config";

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

export function getOpenGraphLocale(locale: Locale) {
  return locale === "es" ? "es_MX" : "en_US";
}

export function detectLocaleFromLanguages(languages: readonly string[]) {
  const values = languages.flatMap((language) => language.toLowerCase().split(/[-_]/));
  return values.includes("en") ? "en" : defaultLocale;
}

export function getStoredLocale() {
  if (typeof window === "undefined") {
    return null;
  }

  const value = window.localStorage.getItem(staticSiteConfig.localeStorageKey);
  return value && isLocale(value) ? value : null;
}

export function rememberLocale(locale: Locale) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(staticSiteConfig.localeStorageKey, locale);
}

export function resolvePreferredLocale() {
  const storedLocale = getStoredLocale();

  if (storedLocale) {
    return storedLocale;
  }

  if (typeof window !== "undefined") {
    return detectLocaleFromLanguages(window.navigator.languages);
  }

  return defaultLocale;
}
