import type { ReactNode } from "react";

import { DocumentLocaleSync } from "@/components/document-locale-sync";
import { SiteHeader } from "@/components/site-header";
import { shellCopy } from "@/content/common";
import type { Locale } from "@/lib/i18n";

type SiteShellProps = {
  locale: Locale;
  children: ReactNode;
};

export function SiteShell({ locale, children }: SiteShellProps) {
  const copy = shellCopy[locale];

  return (
    <div className="site-shell">
      <DocumentLocaleSync locale={locale} />
      <a className="skip-link" href="#main-content">
        {copy.skipLink}
      </a>
      <SiteHeader copy={copy} locale={locale} />

      <main id="main-content">{children}</main>

      <footer className="site-footer">
        <p>{copy.footer.line}</p>
        <span>{copy.footer.note}</span>
      </footer>
    </div>
  );
}
