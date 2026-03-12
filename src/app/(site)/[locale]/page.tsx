import Link from "next/link";
import { notFound } from "next/navigation";

import { ApplicationForm } from "@/components/application-form";
import { getPublicCopy } from "@/content/public-site";
import { getPublicSectionHash, getPublicSectionId } from "@/content/site-sections";
import { isLocale } from "@/lib/i18n";
import { resolveParams } from "@/lib/route-params";

type PublicPageProps = {
  params: Promise<{ locale: string }> | { locale: string };
};

type SectionIntroProps = {
  label: string;
  summary?: string;
};

function SectionIntro({ label, summary }: SectionIntroProps) {
  return (
    <div className="section-heading compact">
      <span className="eyebrow">{label}</span>
      <h2 className="sr-only">{label}</h2>
      {summary ? <p className="section-summary">{summary}</p> : null}
    </div>
  );
}

export default async function PublicPage({ params }: PublicPageProps) {
  const { locale } = await resolveParams(params);

  if (!isLocale(locale)) {
    notFound();
  }

  const copy = getPublicCopy(locale);
  const thesisId = getPublicSectionId(locale, "thesis");
  const searchId = getPublicSectionId(locale, "search");
  const offerId = getPublicSectionId(locale, "offer");
  const workId = getPublicSectionId(locale, "work");
  const processId = getPublicSectionId(locale, "process");
  const councilId = getPublicSectionId(locale, "council");
  const alliesId = getPublicSectionId(locale, "allies");
  const valuesId = getPublicSectionId(locale, "values");
  const applicationId = getPublicSectionId(locale, "application");

  return (
    <div className="page-stack">
      <section className="hero-panel hero-panel-lean anchor-section" id={getPublicSectionId(locale, "home")}>
        <div className="hero-copy">
          <span className="eyebrow">{copy.hero.eyebrow}</span>
          <h1>{copy.hero.title}</h1>
          <p className="hero-summary">{copy.hero.summary}</p>
          <div className="cta-row">
            <Link className="cta-button primary" href={getPublicSectionHash(locale, "application")}>
              {copy.hero.primaryCta}
            </Link>
          </div>
        </div>

        <aside className="hero-aside">
          <div className="stat-grid">
            {copy.hero.stats.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="feature-section anchor-section" id={thesisId}>
        <SectionIntro label={copy.thesis.eyebrow} />
        <article className="thesis-card">
          {copy.thesis.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </article>
      </section>

      <section className="feature-section anchor-section" id={searchId}>
        <SectionIntro label={copy.search.eyebrow} summary={copy.search.summary} />
        <div className="split-grid">
          {copy.search.groups.map((group) => (
            <article className="feature-card" key={group.title}>
              <h3>{group.title}</h3>
              <ul className="card-list">
                {group.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="feature-section anchor-section" id={offerId}>
        <SectionIntro label={copy.offer.eyebrow} summary={copy.offer.summary} />
        <div className="feature-grid">
          {copy.offer.cards.map((card) => (
            <article className="feature-card" key={card.title}>
              <h3>{card.title}</h3>
              {card.summary ? <p>{card.summary}</p> : null}
              <ul className="card-list">
                {card.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="feature-section anchor-section" id={workId}>
        <SectionIntro label={copy.work.eyebrow} summary={copy.work.summary} />
        <div className="split-grid">
          {copy.work.cards.map((card) => (
            <article className="feature-card" key={card.title}>
              <h3>{card.title}</h3>
              {card.summary ? <p>{card.summary}</p> : null}
              <ul className="card-list">
                {card.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="feature-section anchor-section" id={processId}>
        <SectionIntro label={copy.process.eyebrow} summary={copy.process.summary} />
        <div className="timeline">
          {copy.process.stages.map((stage) => (
            <article className="timeline-card" key={stage.title}>
              <div className="timeline-head">
                <h3>{stage.title}</h3>
                <span>{stage.timing}</span>
              </div>
              <ul className="card-list">
                {stage.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="feature-section anchor-section" id={councilId}>
        <SectionIntro label={copy.council.eyebrow} summary={copy.council.summary} />
        <div className="feature-grid three-up">
          {copy.council.pillars.map((pillar) => (
            <article className="feature-card" key={pillar.title}>
              <h3>{pillar.title}</h3>
              <p>{pillar.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="feature-section anchor-section" id={alliesId}>
        <SectionIntro label={copy.allies.eyebrow} summary={copy.allies.summary} />
        <article className="feature-card">
          <h3>{copy.allies.emptyTitle}</h3>
          <p>{copy.allies.emptySummary}</p>
        </article>
      </section>

      <section className="feature-section soft anchor-section" id={valuesId}>
        <SectionIntro label={copy.values.eyebrow} summary={copy.values.summary} />
        <div className="feature-grid">
          {copy.values.items.map((value) => (
            <article className="feature-card" key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="feature-section application-panel anchor-section" id={applicationId}>
        <SectionIntro label={copy.form.heading} summary={copy.form.intro} />
        <ApplicationForm copy={copy.form} locale={locale} />
      </section>
    </div>
  );
}
