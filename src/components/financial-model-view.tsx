"use client";

import { useState } from "react";

import {
  defaultFinanceAssumptions,
  financeLabels,
  type FinanceAssumptions,
  type FinanceScenario,
  type RoleKey,
} from "@/content/finance";
import {
  formatCurrency,
  formatDscr,
  formatNumber,
  formatPercent,
  formatRunway,
  formatSignedCurrency,
} from "@/lib/format";
import type { Locale } from "@/lib/i18n";
import { calculateFinanceSummary, type FinanceSummary } from "@/lib/finance-model";

type FinancialModelViewProps = {
  locale: Locale;
};

const editableRoles: RoleKey[] = ["leadership", "operators", "finance", "creative"];

const numericConstraints = {
  openingCash: { min: 0, max: 10000000, step: 10000 },
  projectRevenueYearOne: { min: 0, max: 2000000, step: 5000 },
  grantPerProject: { min: 0, max: 250000, step: 5000 },
  loanPerProject: { min: 0, max: 250000, step: 5000 },
  repaymentYears: { min: 1, max: 10, step: 1 },
  officeMonthly: { min: 0, max: 250000, step: 250 },
  softwareMonthlyPerHead: { min: 0, max: 5000, step: 10 },
} as const;

const percentConstraints = {
  grossMargin: { min: 0, max: 100, step: 1 },
  revenueGrowth: { min: 0, max: 100, step: 1 },
  cacRate: { min: 0, max: 100, step: 1 },
  interestRate: { min: 0, max: 50, step: 0.5 },
} as const;

function cloneAssumptions() {
  return JSON.parse(JSON.stringify(defaultFinanceAssumptions)) as FinanceAssumptions;
}

function parseNumber(value: string) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function clampNumber(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function updateListValue(list: number[], index: number, value: number) {
  return list.map((currentValue, currentIndex) => (currentIndex === index ? value : currentValue));
}

function downloadCsv(locale: Locale, summary: FinanceSummary) {
  const rows = [
    [
      "year",
      "revenue",
      "grossProfit",
      "payroll",
      "opex",
      "grants",
      "loanDeployments",
      "repayments",
      "debtService",
      "cashBalance",
      "burn",
      "dscr",
    ],
    ...summary.years.map((year) => [
      year.year,
      year.revenue,
      year.grossProfit,
      year.payroll,
      year.opex,
      year.grants,
      year.loanDeployments,
      year.repayments,
      year.debtService,
      year.cashBalance,
      year.burn,
      year.dscr ?? "",
    ]),
  ];
  const csv = rows.map((row) => row.join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `cataliza-${locale}-financial-model.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

function TrendChartCard({
  title,
  locale,
  values,
  formatter,
}: {
  title: string;
  locale: Locale;
  values: number[];
  formatter: (value: number, locale: Locale) => string;
}) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const zeroPosition = max <= 0 ? 0 : min >= 0 ? 100 : ((max - 0) / range) * 100;
  const points = values
    .map((value, index) => {
      const x = values.length === 1 ? 50 : (index / (values.length - 1)) * 100;
      const y = 100 - ((value - min) / range) * 100;
      return `${x},${y}`;
    })
    .join(" ");
  const area = `0,100 ${points} 100,100`;

  return (
    <article className="feature-card chart-card">
      <span className="eyebrow">{title}</span>
      <strong>{formatter(values[values.length - 1] ?? 0, locale)}</strong>
      <div className="chart-shell" aria-hidden="true">
        <svg className="chart-svg" preserveAspectRatio="none" viewBox="0 0 100 100">
          <line className="chart-baseline" x1="0" x2="100" y1={zeroPosition} y2={zeroPosition} />
          <polygon className="chart-area" points={area} />
          <polyline className="chart-line" points={points} />
        </svg>
      </div>
      <div className="trend-meta">
        <span>{formatter(values[0] ?? 0, locale)}</span>
        <span>{formatter(values[values.length - 1] ?? 0, locale)}</span>
      </div>
    </article>
  );
}

function ComparisonCard({
  baseLabel,
  downsideLabel,
  label,
  baseValue,
  downsideValue,
  deltaValue,
}: {
  baseLabel: string;
  downsideLabel: string;
  label: string;
  baseValue: string;
  downsideValue: string;
  deltaValue: string;
}) {
  return (
    <article className="comparison-card">
      <span>{label}</span>
      <div className="comparison-values">
        <div>
          <small>{baseLabel}</small>
          <strong>{baseValue}</strong>
        </div>
        <div>
          <small>{downsideLabel}</small>
          <strong>{downsideValue}</strong>
        </div>
      </div>
      <p>{deltaValue}</p>
    </article>
  );
}

export function FinancialModelView({ locale }: FinancialModelViewProps) {
  const copy = financeLabels[locale];
  const [scenario, setScenario] = useState<FinanceScenario>("base");
  const [assumptions, setAssumptions] = useState<FinanceAssumptions>(() => cloneAssumptions());
  const baseSummary = calculateFinanceSummary(assumptions, "base");
  const downsideSummary = calculateFinanceSummary(assumptions, "downside");
  const summary = scenario === "base" ? baseSummary : downsideSummary;
  const finalYear = summary.years[summary.years.length - 1];

  const updatePrimitiveField = (
    field:
      | "openingCash"
      | "projectRevenueYearOne"
      | "grantPerProject"
      | "loanPerProject"
      | "repaymentYears"
      | "officeMonthly"
      | "softwareMonthlyPerHead",
    value: number,
  ) => {
    const constraints = numericConstraints[field];

    setAssumptions((current) => ({
      ...current,
      [field]: clampNumber(value, constraints.min, constraints.max),
    }));
  };

  const updatePercentField = (
    field: "grossMargin" | "revenueGrowth" | "cacRate" | "interestRate",
    percentValue: number,
  ) => {
    const constraints = percentConstraints[field];
    const normalized = clampNumber(percentValue, constraints.min, constraints.max);

    setAssumptions((current) => ({
      ...current,
      [field]: normalized / 100,
    }));
  };

  const updateLaunches = (index: number, value: number) => {
    setAssumptions((current) => ({
      ...current,
      launchesPerYear: updateListValue(current.launchesPerYear, index, clampNumber(value, 0, 5)),
    }));
  };

  const updateHeadcount = (role: RoleKey, index: number, value: number) => {
    setAssumptions((current) => ({
      ...current,
      headcount: {
        ...current.headcount,
        [role]: updateListValue(current.headcount[role], index, clampNumber(value, 0, 20)),
      },
    }));
  };

  const comparisonCards = [
    {
      label: copy.cards.cash,
      baseValue: formatCurrency(baseSummary.endingCash, locale),
      downsideValue: formatCurrency(downsideSummary.endingCash, locale),
      deltaValue: `${copy.comparison.delta}: ${formatSignedCurrency(
        baseSummary.endingCash - downsideSummary.endingCash,
        locale,
      )}`,
    },
    {
      label: copy.cards.revenue,
      baseValue: formatCurrency(baseSummary.yearTenRevenue, locale),
      downsideValue: formatCurrency(downsideSummary.yearTenRevenue, locale),
      deltaValue: `${copy.comparison.delta}: ${formatSignedCurrency(
        baseSummary.yearTenRevenue - downsideSummary.yearTenRevenue,
        locale,
      )}`,
    },
    {
      label: copy.cards.burn,
      baseValue: formatCurrency(baseSummary.peakBurn, locale),
      downsideValue: formatCurrency(downsideSummary.peakBurn, locale),
      deltaValue: `${copy.comparison.delta}: ${formatSignedCurrency(
        downsideSummary.peakBurn - baseSummary.peakBurn,
        locale,
      )}`,
    },
    {
      label: copy.cards.dscr,
      baseValue: formatDscr(baseSummary.yearTenDscr, locale, copy.states.notApplicable),
      downsideValue: formatDscr(downsideSummary.yearTenDscr, locale, copy.states.notApplicable),
      deltaValue:
        baseSummary.yearTenDscr !== null && downsideSummary.yearTenDscr !== null
          ? `${copy.comparison.delta}: ${formatNumber(baseSummary.yearTenDscr - downsideSummary.yearTenDscr, locale, 2)}x`
          : `${copy.comparison.delta}: ${copy.states.notApplicable}`,
    },
  ];

  return (
    <div className="finance-view">
      <section className="hero-panel tight">
        <div>
          <span className="eyebrow">{copy.eyebrow}</span>
          <h1>{copy.title}</h1>
          <p className="section-summary">{copy.summary}</p>
        </div>
        <div className="finance-actions">
          <div className="scenario-switch">
            {(["base", "downside"] as FinanceScenario[]).map((option) => (
              <button
                key={option}
                className={`pill-button${scenario === option ? " active" : ""}`}
                onClick={() => setScenario(option)}
                type="button"
              >
                {copy.scenarios[option]}
              </button>
            ))}
          </div>
          <div className="cta-row compact">
            <button className="cta-button secondary" onClick={() => setAssumptions(cloneAssumptions())} type="button">
              {copy.actions.reset}
            </button>
            <button className="cta-button primary" onClick={() => downloadCsv(locale, summary)} type="button">
              {copy.actions.exportCsv}
            </button>
          </div>
        </div>
      </section>

      <section className="finance-grid">
        <article className="feature-card">
          <span className="eyebrow">{copy.sections.inputs}</span>
          <div className="input-grid compact">
            {(
              [
                "openingCash",
                "projectRevenueYearOne",
                "grossMargin",
                "revenueGrowth",
                "cacRate",
                "interestRate",
              ] as const
            ).map((field) => {
              const isPercent = field in percentConstraints;

              return (
                <label className="field" key={field}>
                  <span>{copy.fields[field]}</span>
                  <input
                    inputMode="decimal"
                    max={isPercent ? percentConstraints[field as keyof typeof percentConstraints].max : undefined}
                    min={isPercent ? percentConstraints[field as keyof typeof percentConstraints].min : 0}
                    onChange={(event) => {
                      const value = parseNumber(event.target.value);

                      if (isPercent) {
                        updatePercentField(field as keyof typeof percentConstraints, value);
                        return;
                      }

                      updatePrimitiveField(field as keyof typeof numericConstraints, value);
                    }}
                    step={isPercent ? percentConstraints[field as keyof typeof percentConstraints].step : 1}
                    type="number"
                    value={
                      isPercent
                        ? Math.round(
                            assumptions[field as keyof typeof percentConstraints] * 100,
                          )
                        : assumptions[field as keyof typeof numericConstraints]
                    }
                  />
                </label>
              );
            })}
          </div>
        </article>

        <article className="feature-card">
          <span className="eyebrow">{copy.sections.grants}</span>
          <div className="input-grid compact">
            {(["grantPerProject", "loanPerProject", "repaymentYears"] as const).map((field) => (
              <label className="field" key={field}>
                <span>{copy.fields[field]}</span>
                <input
                  inputMode="numeric"
                  max={numericConstraints[field].max}
                  min={numericConstraints[field].min}
                  onChange={(event) => updatePrimitiveField(field, parseNumber(event.target.value))}
                  step={numericConstraints[field].step}
                  type="number"
                  value={assumptions[field]}
                />
              </label>
            ))}
          </div>

          <div className="launch-grid">
            {assumptions.launchesPerYear.map((launches, index) => (
              <label className="mini-field" key={assumptions.startYear + index}>
                <span>
                  {copy.fields.launchesPerYear} {assumptions.startYear + index}
                </span>
                <input
                  inputMode="numeric"
                  max={5}
                  min={0}
                  onChange={(event) => updateLaunches(index, parseNumber(event.target.value))}
                  type="number"
                  value={launches}
                />
              </label>
            ))}
          </div>
        </article>

        <article className="feature-card">
          <span className="eyebrow">{copy.sections.opex}</span>
          <div className="input-grid compact">
            {(["officeMonthly", "softwareMonthlyPerHead"] as const).map((field) => (
              <label className="field" key={field}>
                <span>{copy.fields[field]}</span>
                <input
                  inputMode="decimal"
                  max={numericConstraints[field].max}
                  min={numericConstraints[field].min}
                  onChange={(event) => updatePrimitiveField(field, parseNumber(event.target.value))}
                  step={numericConstraints[field].step}
                  type="number"
                  value={assumptions[field]}
                />
              </label>
            ))}
          </div>

          <div className="mini-kpi-grid">
            <div className="mini-kpi">
              <span>{copy.table.payroll}</span>
              <strong>{formatCurrency(finalYear?.payroll ?? 0, locale)}</strong>
            </div>
            <div className="mini-kpi">
              <span>{copy.table.opex}</span>
              <strong>{formatCurrency(finalYear?.opex ?? 0, locale)}</strong>
            </div>
            <div className="mini-kpi">
              <span>{copy.table.grants}</span>
              <strong>{formatCurrency(finalYear?.grants ?? 0, locale)}</strong>
            </div>
            <div className="mini-kpi">
              <span>{copy.table.debtService}</span>
              <strong>{formatCurrency(finalYear?.debtService ?? 0, locale)}</strong>
            </div>
          </div>
        </article>
      </section>

      <section className="feature-section">
        <div className="section-heading">
          <span className="eyebrow">{copy.sections.metrics}</span>
          <h2>{copy.sections.metrics}</h2>
        </div>
        <div className="mini-kpi-grid wide">
          <div className="metric-card">
            <span>{copy.cards.revenue}</span>
            <strong>{formatCurrency(summary.yearTenRevenue, locale)}</strong>
          </div>
          <div className="metric-card">
            <span>{copy.cards.burn}</span>
            <strong>{formatCurrency(summary.peakBurn, locale)}</strong>
          </div>
          <div className="metric-card">
            <span>{copy.cards.runway}</span>
            <strong>{formatRunway(summary.startingRunwayMonths, locale, copy.states.unlimited)}</strong>
          </div>
          <div className="metric-card">
            <span>{copy.cards.grossMargin}</span>
            <strong>{formatPercent(summary.averageGrossMargin, locale)}</strong>
          </div>
          <div className="metric-card">
            <span>{copy.cards.dscr}</span>
            <strong>{formatDscr(summary.yearTenDscr, locale, copy.states.notApplicable)}</strong>
          </div>
          <div className="metric-card">
            <span>{copy.cards.cash}</span>
            <strong>{formatCurrency(summary.endingCash, locale)}</strong>
          </div>
        </div>
      </section>

      <section className="feature-section">
        <div className="section-heading">
          <span className="eyebrow">{copy.sections.comparison}</span>
          <h2>{copy.comparison.title}</h2>
          <p className="section-summary">{copy.comparison.summary}</p>
        </div>
        <div className="comparison-grid">
          {comparisonCards.map((card) => (
            <ComparisonCard
              baseLabel={copy.comparison.base}
              key={card.label}
              baseValue={card.baseValue}
              deltaValue={card.deltaValue}
              downsideLabel={copy.comparison.downside}
              downsideValue={card.downsideValue}
              label={card.label}
            />
          ))}
        </div>
      </section>

      <section className="feature-section" id="headcount">
        <div className="section-heading">
          <span className="eyebrow">{copy.sections.headcount}</span>
          <h2>{copy.sections.headcount}</h2>
        </div>
        <div className="table-wrap">
          <table className="data-table compact-table">
            <thead>
              <tr>
                <th>{copy.sections.headcount}</th>
                {summary.years.map((year) => (
                  <th key={year.year}>{year.year}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {editableRoles.map((role) => (
                <tr key={role}>
                  <th>{copy.roles[role]}</th>
                  {assumptions.headcount[role].map((value, index) => (
                    <td key={`${role}-${assumptions.startYear + index}`}>
                      <input
                        className="table-input"
                        inputMode="numeric"
                        max={20}
                        min={0}
                        onChange={(event) => updateHeadcount(role, index, parseNumber(event.target.value))}
                        type="number"
                        value={value}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="feature-section">
        <div className="section-heading">
          <span className="eyebrow">{copy.sections.outlook}</span>
          <h2>{copy.sections.outlook}</h2>
        </div>

        <div className="chart-grid">
          <TrendChartCard
            formatter={formatCurrency}
            locale={locale}
            title={copy.charts.cash}
            values={summary.years.map((year) => year.cashBalance)}
          />
          <TrendChartCard
            formatter={formatCurrency}
            locale={locale}
            title={copy.charts.revenue}
            values={summary.years.map((year) => year.revenue)}
          />
          <TrendChartCard
            formatter={formatCurrency}
            locale={locale}
            title={copy.charts.burn}
            values={summary.years.map((year) => year.burn)}
          />
        </div>

        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>{copy.table.year}</th>
                <th>{copy.table.revenue}</th>
                <th>{copy.table.grossProfit}</th>
                <th>{copy.table.payroll}</th>
                <th>{copy.table.opex}</th>
                <th>{copy.table.grants}</th>
                <th>{copy.table.loanDeployments}</th>
                <th>{copy.table.repayments}</th>
                <th>{copy.table.debtService}</th>
                <th>{copy.table.cashBalance}</th>
                <th>{copy.table.burn}</th>
                <th>{copy.table.dscr}</th>
              </tr>
            </thead>
            <tbody>
              {summary.years.map((year) => (
                <tr key={year.year}>
                  <td>{year.year}</td>
                  <td>{formatCurrency(year.revenue, locale)}</td>
                  <td>{formatCurrency(year.grossProfit, locale)}</td>
                  <td>{formatCurrency(year.payroll, locale)}</td>
                  <td>{formatCurrency(year.opex, locale)}</td>
                  <td>{formatCurrency(year.grants, locale)}</td>
                  <td>{formatCurrency(year.loanDeployments, locale)}</td>
                  <td>{formatCurrency(year.repayments, locale)}</td>
                  <td>{formatCurrency(year.debtService, locale)}</td>
                  <td>{formatCurrency(year.cashBalance, locale)}</td>
                  <td>{formatCurrency(year.burn, locale)}</td>
                  <td>{formatDscr(year.dscr, locale, copy.states.notApplicable)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
