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
  const modelId = getPublicSectionId(locale, "model");
  const searchId = getPublicSectionId(locale, "search");
  const processId = getPublicSectionId(locale, "process");
  const applicationId = getPublicSectionId(locale, "application");

  return (
    <div className="page-stack">
      <section className="hero-panel hero-panel-lean tight anchor-section" id={getPublicSectionId(locale, "home")}>
        <div className="hero-copy">
          <span className="eyebrow">{copy.hero.eyebrow}</span>
          <h1>{copy.hero.title}</h1>
          <p className="hero-summary">
            {copy.hero.summaryBlocks?.length
              ? copy.hero.summaryBlocks.map((block, blockIndex) => (
                  <span className="hero-summary-block" key={`hero-block-${blockIndex}`}>
                    {block.map((part, partIndex) =>
                      part.emphasis ? (
                        <strong key={`${part.text}-${blockIndex}-${partIndex}`}>{part.text}</strong>
                      ) : (
                        <span key={`${part.text}-${blockIndex}-${partIndex}`}>{part.text}</span>
                      ),
                    )}
                  </span>
                ))
              : copy.hero.summary}
          </p>
          {copy.hero.explainer?.length ? (
            <p className="hero-explainer">
              {copy.hero.explainer.map((part, index) =>
                part.emphasis ? <strong key={`${part.text}-${index}`}>{part.text}</strong> : <span key={`${part.text}-${index}`}>{part.text}</span>,
              )}
            </p>
          ) : null}
          <div className="cta-row">
            <Link className="cta-button primary" href={getPublicSectionHash(locale, "application")}>
              {copy.hero.primaryCta}
            </Link>
          </div>
        </div>
      </section>

      <section className="feature-section anchor-section" id={thesisId}>
        <SectionIntro label={copy.thesis.eyebrow} />
        <div className="stack-list">
          <article className="thesis-card">
            {copy.thesis.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </article>
        </div>
      </section>

      <section className="feature-section anchor-section" id={modelId}>
        <SectionIntro label={copy.model.eyebrow} summary={copy.model.summary} />
        <div className="feature-grid auto-fit">
          {copy.model.cards.map((card) => (
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

      <section className="feature-section application-panel anchor-section" id={applicationId}>
        <SectionIntro label={copy.form.heading} summary={copy.form.intro} />
        <ApplicationForm copy={copy.form} locale={locale} />
      </section>
    </div>
  );
}
