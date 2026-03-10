import Link from "next/link";
import { Suspense, type ReactNode } from "react";

import { shellCopy } from "@/content/common";
import type { Locale } from "@/lib/i18n";

import { LanguageToggle } from "@/components/language-toggle";

function LanguageToggleFallback() {
  return (
    <div className="language-toggle" aria-hidden="true">
      <span className="language-pill active">Español</span>
      <span className="language-pill">English</span>
    </div>
  );
}

type SiteShellProps = {
  locale: Locale;
  children: ReactNode;
};

export function SiteShell({ locale, children }: SiteShellProps) {
  const copy = shellCopy[locale];

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="brand-block">
          <Link className="brand-mark" href={`/${locale}`}>
            Cataliza Capital
          </Link>
          <p className="brand-deck">{copy.brandDeck}</p>
        </div>

        <div className="header-links">
          <nav className="header-nav" aria-label="Primary navigation">
            {copy.nav.map((item) => (
              <Link key={item.href} href={`/${locale}${item.href === "#home" ? "" : item.href}`}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-utilities">
            <Link className="utility-link" href={`/${locale}/playbook`}>
              {copy.utilities.playbook}
            </Link>
            <Link className="utility-link" href={`/${locale}/financial-model`}>
              {copy.utilities.financialModel}
            </Link>
            <span className="access-chip">{copy.utilities.access}</span>
            <Suspense fallback={<LanguageToggleFallback />}>
              <LanguageToggle locale={locale} />
            </Suspense>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <p>{copy.footer.line}</p>
        <span>{copy.footer.note}</span>
      </footer>
    </div>
  );
}
