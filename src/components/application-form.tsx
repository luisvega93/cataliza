"use client";

import Link from "next/link";
import { useState } from "react";

import type { FormCopy } from "@/content/public-site";
import { getPublicSectionHash } from "@/content/site-sections";
import type { Locale } from "@/lib/i18n";
import {
  hasApplicationContactConfigured,
  hasGoogleFormConfigured,
  staticSiteConfig,
} from "@/lib/site-config";

type ApplicationFormProps = {
  copy: FormCopy;
  locale: Locale;
};

export function ApplicationForm({ copy, locale }: ApplicationFormProps) {
  const isConfigured = hasGoogleFormConfigured();
  const hasContactUrl = hasApplicationContactConfigured();
  const [showEmbed, setShowEmbed] = useState(false);

  if (!isConfigured) {
    return (
      <div className="application-grid">
        <article className="feature-card application-card">
          <span className="eyebrow">{copy.fallbackEyebrow}</span>
          <h3>{copy.fallbackTitle}</h3>
          <p>{copy.fallbackSummary}</p>
          <div className="stack-list">
            {copy.checklist.map((item) => (
              <div className="stack-item" key={item}>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
          <div className="cta-row">
            {hasContactUrl ? (
              <a
                className="cta-button primary"
                href={staticSiteConfig.googleForm.contactUrl}
                rel="noreferrer"
                target="_blank"
              >
                {copy.primaryCta}
              </a>
            ) : null}
            <Link className="cta-button secondary" href={getPublicSectionHash(locale, "search")}>
              {copy.fallbackCta}
            </Link>
          </div>
          <p className="protected-note">{copy.fallbackNote}</p>
        </article>
      </div>
    );
  }

  return (
    <div className="application-grid">
      <article className="feature-card application-card">
        <span className="eyebrow">{copy.heading}</span>
        <h3>{copy.lead}</h3>
        <p>{copy.intro}</p>
        <div className="application-checklist">
          <strong>{copy.checklistTitle}</strong>
          <ul className="card-list">
            {copy.checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="cta-row">
          <a
            className="cta-button primary"
            href={staticSiteConfig.googleForm.openUrl}
            rel="noreferrer"
            target="_blank"
          >
            {copy.externalCta}
          </a>
          <button
            aria-expanded={showEmbed}
            className="cta-button secondary"
            onClick={() => setShowEmbed((current) => !current)}
            type="button"
          >
            {showEmbed ? copy.embedClose : copy.embedOpen}
          </button>
        </div>
      </article>

      <article className="feature-card application-card application-embed-card">
        <span className="eyebrow">{copy.embedTitle}</span>
        <h3>
          {locale === "es"
            ? "Aplicaci\u00f3n ligera, sin fricci\u00f3n"
            : "A lighter application flow"}
        </h3>
        <p>{copy.embedSummary}</p>
        {showEmbed ? (
          <iframe
            className="embedded-form"
            loading="lazy"
            src={staticSiteConfig.googleForm.embedUrl}
            title={
              locale === "es"
                ? "Formulario de aplicaci\u00f3n de Cataliza"
                : "Cataliza application form"
            }
          >
            Loading...
          </iframe>
        ) : (
          <div className="application-embed-placeholder">
            <p>
              {locale === "es"
                ? "Abre la vista previa embebida solo si prefieres revisar el formulario sin salir del sitio."
                : "Open the embedded preview only if you want to review the form without leaving the site."}
            </p>
          </div>
        )}
      </article>
    </div>
  );
}
