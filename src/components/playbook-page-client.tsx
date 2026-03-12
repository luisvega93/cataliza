"use client";

import { ProtectedStaticSection } from "@/components/protected-static-section";
import type { PlaybookCopy } from "@/content/playbook";
import { formatCurrency } from "@/lib/format";
import type { Locale } from "@/lib/i18n";

type PlaybookPageClientProps = {
  locale: Locale;
  copy: PlaybookCopy;
};

type SectionLeadProps = {
  title: string;
  summary?: string;
  level?: "h1" | "h2";
  summaryClassName?: string;
};

function SectionLead({ title, summary, level = "h2", summaryClassName = "section-summary" }: SectionLeadProps) {
  const Heading = level;

  return (
    <div className="section-heading compact">
      <span className="eyebrow">{title}</span>
      <Heading className="sr-only">{title}</Heading>
      {summary ? <p className={summaryClassName}>{summary}</p> : null}
    </div>
  );
}

export function PlaybookPageClient({ locale, copy }: PlaybookPageClientProps) {
  const cadenceLabels = copy.cadence.labels;

  return (
    <ProtectedStaticSection
      locale={locale}
      nextPath={`/${locale}/playbook`}
      summary={
        locale === "es"
          ? "El playbook se desbloquea con una contrase\u00f1a compartida guardada solo en esta sesi\u00f3n del navegador."
          : "The playbook unlocks with a shared password stored only in this browser session."
      }
      title={locale === "es" ? "Entrar al playbook interno" : "Enter the internal playbook"}
    >
      <div className="page-stack">
        <section className="hero-panel tight">
          <div className="hero-copy">
            <SectionLead level="h1" summaryClassName="hero-summary" title={copy.hero.title} summary={copy.hero.summary} />
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
          <SectionLead title={copy.operatingModel.title} summary={copy.operatingModel.summary} />
          <div className="split-grid">
            <article className="feature-card">
              <h3>{locale === "es" ? "Servicios compartidos" : "Shared services"}</h3>
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
          <SectionLead title={copy.cadence.title} summary={copy.cadence.summary} />
          <div className="table-wrap playbook-cadence-wrap">
            <table className="data-table cadence-table">
              <caption className="sr-only">{copy.cadence.title}</caption>
              <thead>
                <tr>
                  <th scope="col">{cadenceLabels.cadence}</th>
                  <th scope="col">{cadenceLabels.focus}</th>
                  <th scope="col">{cadenceLabels.owner}</th>
                </tr>
              </thead>
              <tbody>
                {copy.cadence.rituals.map((ritual) => (
                  <tr key={ritual.cadence}>
                    <td data-label={cadenceLabels.cadence}>{ritual.cadence}</td>
                    <td data-label={cadenceLabels.focus}>{ritual.focus}</td>
                    <td data-label={cadenceLabels.owner}>{ritual.owner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="feature-section">
          <div className="feature-grid">
            <article className="feature-card">
              <SectionLead title={copy.incentives.title} summary={copy.incentives.summary} />
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
              <SectionLead title={copy.milestones.title} summary={copy.milestones.summary} />
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
          <SectionLead title={copy.council.title} summary={copy.council.summary} />
          <div className="feature-grid three-up">
            {copy.council.pillars.map((pillar) => (
              <article className="feature-card" key={pillar.title}>
                <h3>{pillar.title}</h3>
                <p>{pillar.summary}</p>
                <ul className="card-list">
                  {pillar.members.map((member) => (
                    <li key={member}>{member}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="feature-section">
          <SectionLead title={copy.ecosystem.title} summary={copy.ecosystem.summary} />
          <article className="feature-card">
            <ul className="card-list">
              {copy.ecosystem.prompts.map((prompt) => (
                <li key={prompt}>{prompt}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="feature-section">
          <SectionLead title={copy.dashboard.title} summary={copy.dashboard.summary} />
          <div className="feature-grid">
            <article className="feature-card">
              <h3>{copy.dashboard.snapshotTitle}</h3>
              <p>{copy.dashboard.sampleProject}</p>
              <div className="mini-kpi-grid wide">
                {copy.dashboard.metrics.map((metric) => (
                  <div className="mini-kpi" key={metric.label}>
                    <span>{metric.label}</span>
                    <strong>{metric.value}</strong>
                  </div>
                ))}
              </div>
            </article>
            <article className="feature-card">
              <h3>{copy.dashboard.definitionsTitle}</h3>
              <div className="stack-list">
                {copy.dashboard.metrics.map((metric) => (
                  <div className="stack-item" key={`${metric.label}-summary`}>
                    <strong>{metric.label}</strong>
                    <p>{metric.summary}</p>
                  </div>
                ))}
              </div>
            </article>
            <article className="feature-card">
              <h3>{copy.dashboard.budgetTitle}</h3>
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
