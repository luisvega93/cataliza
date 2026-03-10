import type { Locale } from "@/lib/i18n";

function toIntlLocale(locale: Locale) {
  return locale === "es" ? "es-MX" : "en-US";
}

export function formatCurrency(value: number, locale: Locale, maximumFractionDigits = 0) {
  return new Intl.NumberFormat(toIntlLocale(locale), {
    style: "currency",
    currency: "USD",
    maximumFractionDigits,
  }).format(value);
}

export function formatNumber(value: number, locale: Locale, maximumFractionDigits = 0) {
  return new Intl.NumberFormat(toIntlLocale(locale), {
    maximumFractionDigits,
  }).format(value);
}

export function formatPercent(value: number, locale: Locale, maximumFractionDigits = 0) {
  return new Intl.NumberFormat(toIntlLocale(locale), {
    style: "percent",
    maximumFractionDigits,
  }).format(value);
}
