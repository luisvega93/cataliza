"use client";

import type { PlaybookCopy } from "@/content/playbook";
import { formatCurrency } from "@/lib/format";
import type { Locale } from "@/lib/i18n";

import { ProtectedStaticSection } from "@/components/protected-static-section";

type PlaybookPageClientProps = {
  locale: Locale;
  copy: PlaybookCopy;
};

export function PlaybookPageClient({ locale, copy }: PlaybookPageClientProps) {
  return (
    <ProtectedStaticSection
      locale={locale}
      nextPath={`/${locale}/playbook`}
      title={locale === "es" ? "Entrar al playbook interno" : "Enter the internal playbook"}
      summary={
        locale === "es"
          ? "El playbook se desbloquea con una contrasena compartida guardada solo en esta sesion del navegador."
          : "The playbook unlocks with a shared password stored only in this browser session."
      }
    >
      <div className="page-stack">
        <section className="hero-panel tight">
          <div className="hero-copy">
            <span className="eyebrow">{copy.hero.eyebrow}</span>
            <h1>{copy.hero.title}</h1>
            <p className="hero-summary">{copy.hero.summary}</p>
          </div>
          <div className="stat-grid">
            {copy.hero.stats.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="feature-section">
          <div className="section-heading">
            <span className="eyebrow">{copy.operatingModel.title}</span>
            <h2>{copy.operatingModel.title}</h2>
            <p className="section-summary">{copy.operatingModel.summary}</p>
          </div>
          <div className="split-grid">
            <article className="feature-card">
              <h3>Shared services</h3>
              <div className="stack-list">
                {copy.operatingModel.sharedServices.map((service) => (
                  <div className="stack-item" key={service.title}>
                    <strong>{service.title}</strong>
                    <p>{service.summary}</p>
                  </div>
                ))}
              </div>
            </article>
            <article className="feature-card">
              <h3>{locale === "es" ? "Gobernanza" : "Governance"}</h3>
              <div className="stack-list">
                {copy.operatingModel.governance.map((item) => (
                  <div className="stack-item" key={item.title}>
                    <strong>{item.title}</strong>
                    <p>{item.summary}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="feature-section">
          <div className="section-heading">
            <span className="eyebrow">{copy.cadence.title}</span>
            <h2>{copy.cadence.title}</h2>
            <p className="section-summary">{copy.cadence.summary}</p>
          </div>
          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>{locale === "es" ? "Cadencia" : "Cadence"}</th>
                  <th>{locale === "es" ? "Foco" : "Focus"}</th>
                  <th>Owner</th>
                </tr>
              </thead>
              <tbody>
                {copy.cadence.rituals.map((ritual) => (
                  <tr key={ritual.cadence}>
                    <td>{ritual.cadence}</td>
                    <td>{ritual.focus}</td>
                    <td>{ritual.owner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="feature-section">
          <div className="feature-grid">
            <article className="feature-card">
              <span className="eyebrow">{copy.incentives.title}</span>
              <h2>{copy.incentives.title}</h2>
              <p>{copy.incentives.summary}</p>
              <div className="stack-list">
                {copy.incentives.levers.map((lever) => (
                  <div className="stack-item" key={lever.title}>
                    <strong>{lever.title}</strong>
                    <p>{lever.summary}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="feature-card">
              <span className="eyebrow">{copy.milestones.title}</span>
              <h2>{copy.milestones.title}</h2>
              <p>{copy.milestones.summary}</p>
              <div className="stack-list">
                {copy.milestones.items.map((item) => (
                  <div className="stack-item" key={item.quarter}>
                    <strong>
                      {item.quarter} - {item.target}
                    </strong>
                    <p>{item.signal}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="feature-section">
          <div className="section-heading">
            <span className="eyebrow">{copy.dashboard.title}</span>
            <h2>{copy.dashboard.title}</h2>
            <p className="section-summary">{copy.dashboard.summary}</p>
          </div>
          <div className="split-grid">
            <article className="feature-card">
              <h3>{copy.dashboard.sampleProject}</h3>
              <div className="mini-kpi-grid">
                {copy.dashboard.metrics.map((metric) => (
                  <div className="mini-kpi" key={metric.label}>
                    <span>{metric.label}</span>
                    <strong>{metric.value}</strong>
                  </div>
                ))}
              </div>
            </article>
            <article className="feature-card">
              <h3>Budget snapshot</h3>
              <div className="budget-list">
                {copy.dashboard.budgetRows.map((row) => (
                  <div className="budget-row" key={row.label}>
                    <span>{row.label}</span>
                    <strong>{formatCurrency(row.amount, locale)}</strong>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>
      </div>
    </ProtectedStaticSection>
  );
}
