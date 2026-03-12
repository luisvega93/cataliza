"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import { LanguageToggle } from "@/components/language-toggle";
import type { ShellCopy } from "@/content/common";
import { getPublicSectionHref, getPublicSectionId, publicNavSectionKeys } from "@/content/site-sections";
import { siteBasePath } from "@/lib/site-config";
import type { Locale } from "@/lib/i18n";

type SiteHeaderProps = {
  locale: Locale;
  copy: ShellCopy;
};

function normalizePathname(pathname: string) {
  const withoutBasePath =
    pathname.startsWith(siteBasePath) && siteBasePath.length > 0
      ? pathname.slice(siteBasePath.length) || "/"
      : pathname;

  if (withoutBasePath.length > 1 && withoutBasePath.endsWith("/")) {
    return withoutBasePath.slice(0, -1);
  }

  return withoutBasePath;
}

export function SiteHeader({ locale, copy }: SiteHeaderProps) {
  const pathname = usePathname();
  const normalizedPathname = normalizePathname(pathname);
  const isLandingPage = normalizedPathname === `/${locale}`;
  const [activeSection, setActiveSection] = useState<(typeof publicNavSectionKeys)[number]>("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [normalizedPathname]);

  useEffect(() => {
    if (!isLandingPage) {
      setActiveSection("home");
      return;
    }

    const entries = publicNavSectionKeys
      .map((key) => ({ key, element: document.getElementById(getPublicSectionId(locale, key)) }))
      .filter((item): item is { key: (typeof publicNavSectionKeys)[number]; element: HTMLElement } => Boolean(item.element));

    if (entries.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (observedEntries) => {
        const visibleEntries = observedEntries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio);

        if (visibleEntries[0]) {
          const match = entries.find((item) => item.element === visibleEntries[0].target);

          if (match) {
            setActiveSection(match.key);
          }
        }
      },
      {
        rootMargin: "-22% 0px -58% 0px",
        threshold: [0.15, 0.35, 0.6],
      },
    );

    entries.forEach((item) => observer.observe(item.element));

    return () => {
      observer.disconnect();
    };
  }, [isLandingPage, locale]);

  const utilityState = useMemo(
    () => ({
      playbook: normalizedPathname.startsWith(`/${locale}/playbook`),
      financialModel: normalizedPathname.startsWith(`/${locale}/financial-model`),
      access: normalizedPathname.startsWith(`/${locale}/access`),
    }),
    [locale, normalizedPathname],
  );

  return (
    <header className="site-header">
      <div className="brand-block">
        <Link className="brand-mark" href={`/${locale}`}>
          Cataliza Capital
        </Link>
        <p className="brand-deck">{copy.brandDeck}</p>
      </div>

      <button
        aria-controls="site-navigation"
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? copy.closeMenuLabel : copy.menuLabel}
        className="menu-button"
        onClick={() => setIsMenuOpen((current) => !current)}
        type="button"
      >
        <span />
        <span />
      </button>

      <div className={`header-links${isMenuOpen ? " is-open" : ""}`} id="site-navigation">
        <nav className="header-nav" aria-label={copy.navLabel}>
          {copy.nav.map((item) => {
            const href = getPublicSectionHref(locale, item.section);
            const isActive = isLandingPage && activeSection === item.section;

            return (
              <Link
                key={item.section}
                aria-current={isActive ? "location" : undefined}
                className={`header-link${isActive ? " active" : ""}`}
                href={href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="header-utilities">
          <Link
            aria-current={utilityState.playbook ? "page" : undefined}
            className={`utility-link${utilityState.playbook ? " active" : ""}`}
            href={`/${locale}/playbook`}
          >
            {copy.utilities.playbook}
          </Link>
          <Link
            aria-current={utilityState.financialModel ? "page" : undefined}
            className={`utility-link${utilityState.financialModel ? " active" : ""}`}
            href={`/${locale}/financial-model`}
          >
            {copy.utilities.financialModel}
          </Link>
          <Link
            aria-current={utilityState.access ? "page" : undefined}
            className={`access-chip${utilityState.access ? " active" : ""}`}
            href={`/${locale}/access`}
          >
            {copy.utilities.access}
          </Link>
          <LanguageToggle locale={locale} />
        </div>
      </div>
    </header>
  );
}
