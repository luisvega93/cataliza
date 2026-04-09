import type { Locale } from "@/lib/i18n";

function toIntlLocale(locale: Locale) {
  return locale === "es" ? "es-MX" : "en-US";
}

export function formatCurrency(
  value: number,
  locale: Locale,
  maximumFractionDigits = 0,
  currency = "USD",
) {
  return new Intl.NumberFormat(toIntlLocale(locale), {
    style: "currency",
    currency,
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

export function formatSignedCurrency(value: number, locale: Locale, currency = "USD") {
  const formatted = formatCurrency(Math.abs(value), locale, 0, currency);
  return value > 0 ? `+${formatted}` : value < 0 ? `-${formatted}` : formatted;
}

export function formatRunway(value: number, locale: Locale, fallback: string) {
  if (!Number.isFinite(value)) {
    return fallback;
  }

  return `${formatNumber(value, locale, 1)} ${locale === "es" ? "meses" : "months"}`;
}

export function formatDscr(value: number | null, locale: Locale, fallback: string) {
  if (value === null) {
    return fallback;
  }

  return `${formatNumber(value, locale, 2)}x`;
}
