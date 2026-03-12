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

export default async function PublicPage({ params }: PublicPageProps) {
  const { locale } = await resolveParams(params);

  if (!isLocale(locale)) {
    notFound();
  }

  const copy = getPublicCopy(locale);
  const searchId = getPublicSectionId(locale, "search");
  const offerId = getPublicSectionId(locale, "offer");
  const workId = getPublicSectionId(locale, "work");
  const processId = getPublicSectionId(locale, "process");
  const teamId = getPublicSectionId(locale, "team");
  const portfolioId = getPublicSectionId(locale, "portfolio");
  const ecosystemId = getPublicSectionId(locale, "ecosystem");
  const valuesId = getPublicSectionId(locale, "values");
  const applicationId = getPublicSectionId(locale, "application");

  return (
    <div className="page-stack">
      <section className="hero-panel anchor-section" id={getPublicSectionId(locale, "home")}>
        <div className="hero-copy">
          <span className="eyebrow">{copy.hero.eyebrow}</span>
          <h1>{copy.hero.title}</h1>
          <p className="hero-summary">{copy.hero.summary}</p>
          <div className="cta-row">
            <Link className="cta-button primary" href={getPublicSectionHash(locale, "application")}>
              {copy.hero.primaryCta}
            </Link>
            <Link className="cta-button secondary" href={getPublicSectionHash(locale, "search")}>
              {copy.hero.secondaryCta}
            </Link>
          </div>
        </div>

        <aside className="hero-aside">
          <div className="thesis-card">
            {copy.hero.thesis.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
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

      <section className="feature-section anchor-section" id={searchId}>
        <div className="section-heading">
          <span className="eyebrow">{copy.search.eyebrow}</span>
          <h2>{copy.search.title}</h2>
          <p className="section-summary">{copy.search.summary}</p>
        </div>
        <div className="bullet-grid">
          {copy.search.points.map((point) => (
            <article className="bullet-card" key={point}>
              <p>{point}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="feature-section anchor-section" id={offerId}>
        <div className="section-heading">
          <span className="eyebrow">{copy.offer.eyebrow}</span>
          <h2>{copy.offer.title}</h2>
          <p className="section-summary">{copy.offer.summary}</p>
        </div>
        <div className="feature-grid">
          {copy.offer.cards.map((card) => (
            <article className="feature-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.summary}</p>
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
        <div className="section-heading">
          <span className="eyebrow">{copy.work.eyebrow}</span>
          <h2>{copy.work.title}</h2>
          <p className="section-summary">{copy.work.summary}</p>
        </div>
        <div className="split-grid">
          <article className="feature-card">
            <h3>{locale === "es" ? "Modelo operativo" : "Operating model"}</h3>
            <ul className="card-list">
              {copy.work.model.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <div className="feature-grid nested-two">
            {copy.work.roles.map((role) => (
              <article className="feature-card" key={role.title}>
                <h3>{role.title}</h3>
                <p>{role.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="feature-section anchor-section" id={processId}>
        <div className="section-heading">
          <span className="eyebrow">{copy.process.eyebrow}</span>
          <h2>{copy.process.title}</h2>
          <p className="section-summary">{copy.process.summary}</p>
        </div>
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

      <section className="feature-section anchor-section" id={teamId}>
        <div className="section-heading">
          <span className="eyebrow">{copy.team.eyebrow}</span>
          <h2>{copy.team.title}</h2>
          <p className="section-summary">{copy.team.summary}</p>
        </div>
        <div className="feature-grid">
          {copy.team.pillars.map((pillar) => (
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

      <section className="feature-section anchor-section" id={portfolioId}>
        <div className="section-heading">
          <span className="eyebrow">{copy.portfolio.eyebrow}</span>
          <h2>{copy.portfolio.title}</h2>
          <p className="section-summary">{copy.portfolio.summary}</p>
        </div>
        <div className="feature-grid">
          {copy.portfolio.items.map((item) => (
            <article className="feature-card" key={item.title}>
              <span className="micro-label">{item.stage}</span>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <div className="tag-row">
                {item.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="feature-section anchor-section" id={ecosystemId}>
        <div className="section-heading">
          <span className="eyebrow">{copy.ecosystem.eyebrow}</span>
          <h2>{copy.ecosystem.title}</h2>
          <p className="section-summary">{copy.ecosystem.summary}</p>
        </div>
        <div className="feature-grid three-up">
          {copy.ecosystem.items.map((item) => (
            <article className="feature-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="feature-section soft anchor-section" id={valuesId}>
        <div className="section-heading">
          <span className="eyebrow">{copy.values.eyebrow}</span>
          <h2>{copy.values.title}</h2>
        </div>
        <div className="feature-grid">
          {copy.values.values.map((value) => (
            <article className="feature-card" key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="feature-section application-panel anchor-section" id={applicationId}>
        <div className="section-heading">
          <span className="eyebrow">{copy.form.heading}</span>
          <h2>{copy.form.heading}</h2>
          <p className="section-summary">{copy.form.intro}</p>
        </div>
        <ApplicationForm copy={copy.form} locale={locale} />
      </section>
    </div>
  );
}
