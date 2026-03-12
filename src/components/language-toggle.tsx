"use client";

import { useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";

import { getAltLocale, getLocaleLabel, rememberLocale, type Locale } from "@/lib/i18n";
import { siteBasePath } from "@/lib/site-config";

type LanguageToggleProps = {
  locale: Locale;
};

export function LanguageToggle({ locale }: LanguageToggleProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const otherLocale = getAltLocale(locale);

  const handleSwitch = (targetLocale: Locale) => {
    const withoutBasePath =
      pathname.startsWith(siteBasePath) && siteBasePath.length > 0
        ? pathname.slice(siteBasePath.length) || "/"
        : pathname;
    const segments = withoutBasePath.split("/").filter(Boolean);
    const nextPath =
      segments.length === 0 ? `/${targetLocale}` : `/${[targetLocale, ...segments.slice(1)].join("/")}`;
    const query = typeof window !== "undefined" ? window.location.search : "";
    const hash = typeof window !== "undefined" ? window.location.hash : "";

    rememberLocale(targetLocale);

    startTransition(() => {
      router.push(`${nextPath}${query}${hash}`);
    });
  };

  return (
    <div aria-label="Language switcher" className="language-toggle" role="group">
      <button
        aria-pressed={locale === "es"}
        className={`language-pill${locale === "es" ? " active" : ""}`}
        disabled={isPending}
        onClick={() => handleSwitch("es")}
        type="button"
      >
        {getLocaleLabel("es")}
      </button>
      <button
        aria-pressed={locale === "en"}
        className={`language-pill${locale === "en" ? " active" : ""}`}
        disabled={isPending}
        onClick={() => handleSwitch("en")}
        type="button"
      >
        {getLocaleLabel("en")}
      </button>
      <span className="sr-only">Switch to {getLocaleLabel(otherLocale)}</span>
    </div>
  );
}
