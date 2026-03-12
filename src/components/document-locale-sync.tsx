"use client";

import { useEffect } from "react";

import { rememberLocale, type Locale } from "@/lib/i18n";

type DocumentLocaleSyncProps = {
  locale: Locale;
};

export function DocumentLocaleSync({ locale }: DocumentLocaleSyncProps) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dataset.locale = locale;
    rememberLocale(locale);
  }, [locale]);

  return null;
}
