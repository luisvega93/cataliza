"use client";

import { ProtectedStaticSection } from "@/components/protected-static-section";
import { defaultFinanceAssumptions, financeCurrency, financeLabels, hubBranchKeys } from "@/content/finance";
import type { PlaybookCopy } from "@/content/playbook";
import { formatCurrency, formatRunway } from "@/lib/format";
import type { Locale } from "@/lib/i18n";
import { calculateFinanceSummary } from "@/lib/finance-model";
import { siteBasePath } from "@/lib/site-config";

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
  const financeCopy = financeLabels[locale];
  const financeSummary = calculateFinanceSummary(defaultFinanceAssumptions);
  const finalYear = financeSummary.years[financeSummary.years.length - 1];

  return (
    <ProtectedStaticSection
      locale={locale}
      nextPath={`/${locale}/playbook`}
      summary={
        locale === "es"
          ? "El Playbook se desbloquea con una contraseña compartida guardada solo en esta sesión del navegador."
          : "The Playbook unlocks with a shared password stored only in this browser session."
      }
      title={locale === "es" ? "Entrar al Playbook" : "Enter the Playbook"}
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
                {stat.details ? (
                  <ul className="stat-detail-list">
                    {stat.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                ) : null}
                {stat.note ? <p className="stat-note">{stat.note}</p> : null}
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
              <h3>{locale === "es" ? "Estructura de decisión" : "Decision structure"}</h3>
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
          <figure className="diagram-figure">
            <div className="structure-map-head">
              <span className="eyebrow">{copy.operatingModel.structure.title}</span>
              <p>{copy.operatingModel.structure.intro}</p>
              <p className="structure-map-note">{copy.operatingModel.structure.note}</p>
            </div>
            <img
              alt={copy.operatingModel.structure.alt}
              className="diagram-image"
              src={`${siteBasePath}${copy.operatingModel.structure.imageSrc}`}
            />
          </figure>
        </section>

        <section className="feature-section">
          <SectionLead title={copy.values.title} summary={copy.values.summary} />
          <article className="feature-card">
            <ul className="card-list values-list">
              {copy.values.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="feature-section">
          <SectionLead title={copy.strategy.title} summary={copy.strategy.summary} />
          <div className="split-grid">
            <article className="feature-card">
              <h3>{copy.strategy.chainTitle}</h3>
              <ul className="card-list">
                {copy.strategy.chain.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="stack-list">
                <div className="stack-item">
                  <strong>{copy.strategy.riskTitle}</strong>
                  <p>{copy.strategy.riskSummary}</p>
                </div>
                <div className="stack-item">
                  <strong>{copy.strategy.responseTitle}</strong>
                  <p>{copy.strategy.responseSummary}</p>
                </div>
              </div>
            </article>
            <article className="feature-card">
              <h3>{copy.strategy.fieldsTitle}</h3>
              <div className="stack-list">
                {copy.strategy.fields.map((field) => (
                  <div className="stack-item" key={field.title}>
                    <strong>{field.title}</strong>
                    <p>{field.summary}</p>
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
                </tr>
              </thead>
              <tbody>
                {copy.cadence.rituals.map((ritual) => (
                  <tr key={ritual.cadence}>
                    <td data-label={cadenceLabels.cadence}>{ritual.cadence}</td>
                    <td data-label={cadenceLabels.focus}>{ritual.focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="feature-section">
          <div className="split-grid">
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
          <SectionLead title={copy.benchmarks.title} summary={copy.benchmarks.summary} />
          <div className="benchmark-grid">
            {copy.benchmarks.cases.map((item) => (
              <article className="feature-card benchmark-card" key={item.title}>
                <h3>{item.title}</h3>
                <div className="stack-list compact">
                  <div className="stack-item">
                    <strong>{copy.benchmarks.labels.mechanism}</strong>
                    <p>{item.mechanism}</p>
                  </div>
                  <div className="stack-item">
                    <strong>{copy.benchmarks.labels.environment}</strong>
                    <p>{item.environment}</p>
                  </div>
                  <div className="stack-item">
                    <strong>{copy.benchmarks.labels.culture}</strong>
                    <p>{item.culture}</p>
                  </div>
                  <div className="stack-item">
                    <strong>{copy.benchmarks.labels.takeaway}</strong>
                    <p>{item.takeaway}</p>
                  </div>
                </div>
              </article>
            ))}
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
          <SectionLead title={copy.aiNative.title} summary={copy.aiNative.summary} />
          <div className="feature-grid three-up">
            {copy.aiNative.executive.map((item) => (
              <article className="feature-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
          <div className="split-grid">
            <article className="feature-card">
              <h3>{copy.aiNative.principlesTitle}</h3>
              <ul className="card-list">
                {copy.aiNative.principles.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="feature-card">
              <h3>{copy.aiNative.operatingTitle}</h3>
              <div className="stack-list">
                <div className="stack-item">
                  <strong>{copy.aiNative.sequenceLabel}</strong>
                  <p>{copy.aiNative.sequence}</p>
                </div>
                <div className="stack-item">
                  <strong>{copy.aiNative.rhythmsTitle}</strong>
                  <p>{copy.aiNative.rhythms}</p>
                </div>
              </div>
            </article>
          </div>
          <div className="feature-grid auto-fit">
            {copy.aiNative.blueprint.map((item) => (
              <article className="feature-card" key={item.title}>
                <h3>{item.title}</h3>
                <div className="stack-list compact">
                  <div className="stack-item">
                    <strong>{item.owner}</strong>
                    <p>{item.ai}</p>
                  </div>
                  <div className="stack-item">
                    <strong>{item.deliverables}</strong>
                    <p>{item.kpi}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="feature-grid">
            <article className="feature-card">
              <h3>{copy.aiNative.humanTitle}</h3>
              <ul className="card-list">
                {copy.aiNative.human.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="feature-card">
              <h3>{copy.aiNative.aiTitle}</h3>
              <ul className="card-list">
                {copy.aiNative.ai.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="feature-card">
              <h3>{copy.aiNative.reviewTitle}</h3>
              <ul className="card-list">
                {copy.aiNative.review.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="feature-card">
              <h3>{copy.aiNative.standardizeTitle}</h3>
              <ul className="card-list">
                {copy.aiNative.standardize.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="feature-card">
              <h3>{copy.aiNative.escalationTitle}</h3>
              <ul className="card-list">
                {copy.aiNative.escalation.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="feature-card">
              <h3>{copy.aiNative.teamTitle}</h3>
              <p>{copy.aiNative.teamSummary}</p>
              <ul className="card-list">
                {copy.aiNative.team.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="stack-list compact">
                <div className="stack-item">
                  <strong>{copy.aiNative.avoidTitle}</strong>
                  <ul className="card-list">
                    {copy.aiNative.avoid.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="feature-section">
          <SectionLead title={copy.ecosystem.title} summary={copy.ecosystem.summary} />
          <div className="feature-grid">
            <article className="feature-card">
              <h3>{copy.ecosystem.signalsTitle}</h3>
              <div className="stack-list">
                {copy.ecosystem.signals.map((group) => (
                  <div className="stack-item" key={group.title}>
                    <strong>{group.title}</strong>
                    <ul className="card-list">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
            <article className="feature-card">
              <h3>{copy.ecosystem.ecosystemsTitle}</h3>
              <div className="stack-list">
                {copy.ecosystem.ecosystems.map((group) => (
                  <div className="stack-item" key={group.title}>
                    <strong>{group.title}</strong>
                    <p>{group.items.join(" · ")}</p>
                  </div>
                ))}
              </div>
            </article>
            <article className="feature-card">
              <h3>{copy.ecosystem.partnershipsTitle}</h3>
              <p>{copy.ecosystem.partnershipsSummary}</p>
              <div className="stack-list">
                {copy.ecosystem.partnerships.map((group) => (
                  <div className="stack-item" key={group.title}>
                    <strong>{group.title}</strong>
                    <p>{group.items.join(" · ")}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
          <article className="feature-card">
            <h3>{copy.ecosystem.speakerTitle}</h3>
            <div className="split-grid">
              <div className="stack-list">
                <div className="stack-item">
                  <strong>{copy.ecosystem.speakerTopicsTitle}</strong>
                  <ul className="card-list">
                    {copy.ecosystem.speakerTopics.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="stack-item">
                  <strong>{locale === "es" ? "Cadencia" : "Cadence"}</strong>
                  <p>{copy.ecosystem.speakerCadence}</p>
                </div>
              </div>
              <div className="stack-list">
                <div className="stack-item">
                  <strong>{copy.ecosystem.speakerKitTitle}</strong>
                  <ul className="card-list">
                    {copy.ecosystem.speakerKit.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="stack-item">
                  <strong>{copy.ecosystem.speakerKpisTitle}</strong>
                  <ul className="card-list">
                    {copy.ecosystem.speakerKpis.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </section>

        <section className="feature-section">
          <SectionLead title={copy.dashboard.title} summary={copy.dashboard.summary} />
          <div className="split-grid">
            <article className="feature-card">
              <h3>{copy.dashboard.snapshotTitle}</h3>
              <div className="mini-kpi-grid">
                <div className="mini-kpi">
                  <span>{financeCopy.cards.totalCostYearTen}</span>
                  <strong>{formatCurrency(financeSummary.yearTenTotalCost, locale, 0, financeCurrency)}</strong>
                </div>
                <div className="mini-kpi">
                  <span>{financeCopy.cards.monthlyBurnYearOne}</span>
                  <strong>{formatCurrency(financeSummary.yearOneMonthlyBurn, locale, 0, financeCurrency)}</strong>
                </div>
                <div className="mini-kpi">
                  <span>{financeCopy.cards.runway}</span>
                  <strong>{formatRunway(financeSummary.startingRunwayMonths, locale, financeCopy.states.unlimited)}</strong>
                </div>
                <div className="mini-kpi">
                  <span>{financeCopy.cards.cash}</span>
                  <strong>{formatCurrency(financeSummary.endingCash, locale, 0, financeCurrency)}</strong>
                </div>
                <div className="mini-kpi">
                  <span>{financeCopy.cards.coreHeadcount}</span>
                  <strong>{finalYear?.coreHeadcount ?? 0}</strong>
                </div>
              </div>
            </article>
            <article className="feature-card">
              <h3>{copy.dashboard.definitionsTitle}</h3>
              <div className="stack-list">
                {copy.dashboard.metrics.map((metric) => (
                  <div className="stack-item" key={metric.label}>
                    <strong>{metric.label}</strong>
                    <p>{metric.summary}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
          <article className="feature-card">
            <h3>{copy.dashboard.annualCategoryTitle}</h3>
            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>{financeCopy.categoryTable.year}</th>
                    <th>{financeCopy.categoryTable.allies}</th>
                    <th>{financeCopy.categoryTable.coreHeadcount}</th>
                    <th>{financeCopy.categoryTable.totalCost}</th>
                    {hubBranchKeys.map((branch) => (
                      <th key={branch}>{financeCopy.branches[branch]}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {financeSummary.years.map((year) => (
                    <tr key={year.year}>
                      <td>{year.year}</td>
                      <td>{year.allies}</td>
                      <td>{year.coreHeadcount}</td>
                      <td>{formatCurrency(year.totalCost, locale, 0, financeCurrency)}</td>
                      {hubBranchKeys.map((branch) => (
                        <td key={`${year.year}-${branch}`}>
                          {formatCurrency(year.categoryCosts[branch], locale, 0, financeCurrency)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>
        </section>
      </div>
    </ProtectedStaticSection>
  );
}
