"use client";

import { useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { getAltLocale, getLocaleLabel, type Locale } from "@/lib/i18n";

type LanguageToggleProps = {
  locale: Locale;
};

export function LanguageToggle({ locale }: LanguageToggleProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const otherLocale = getAltLocale(locale);

  const handleSwitch = (targetLocale: Locale) => {
    const segments = pathname.split("/");
    segments[1] = targetLocale;

    const nextPath = segments.join("/") || `/${targetLocale}`;
    const query = searchParams.toString();
    const hash = typeof window !== "undefined" ? window.location.hash : "";

    startTransition(() => {
      router.push(`${nextPath}${query ? `?${query}` : ""}${hash}`);
    });
  };

  return (
    <div className="language-toggle" aria-label="Language switcher">
      <button
        className={`language-pill${locale === "es" ? " active" : ""}`}
        onClick={() => handleSwitch("es")}
        type="button"
        disabled={isPending}
      >
        {getLocaleLabel("es")}
      </button>
      <button
        className={`language-pill${locale === "en" ? " active" : ""}`}
        onClick={() => handleSwitch("en")}
        type="button"
        disabled={isPending}
      >
        {getLocaleLabel("en")}
      </button>
      <span className="sr-only">Switch to {getLocaleLabel(otherLocale)}</span>
    </div>
  );
}
