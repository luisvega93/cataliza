"use client";

import { useState } from "react";

import {
  defaultFinanceAssumptions,
  financeCostTypeKeys,
  financeCurrency,
  financeLabels,
  hubBranchKeys,
  hubCostLevels,
  hubPositions,
  type FinanceAssumptions,
  type HubCostLevel,
  type HubPositionId,
} from "@/content/finance";
import { formatCurrency, formatNumber, formatRunway } from "@/lib/format";
import type { Locale } from "@/lib/i18n";
import { calculateFinanceSummary, type FinanceSummary, type FinanceYear } from "@/lib/finance-model";

type FinancialModelViewProps = {
  locale: Locale;
};

const numericConstraints = {
  openingCash: { min: 0, max: 100000000, step: 50000 },
  officeMonthly: { min: 0, max: 5000000, step: 5000 },
  softwareMonthlyPerCoreHead: { min: 0, max: 250000, step: 500 },
  otherOperatingMonthly: { min: 0, max: 5000000, step: 5000 },
} as const;

const levelCostConstraints = {
  min: 0,
  max: 1000000,
  step: 1000,
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

function downloadCsv(locale: Locale, summary: FinanceSummary) {
  const headers = [
    "year",
    "allies",
    "coreHeadcount",
    "totalCost",
    ...hubBranchKeys,
    ...financeCostTypeKeys,
    "monthlyBurn",
    "cashBalance",
  ];
  const rows = [
    headers,
    ...summary.years.map((year) => [
      year.year,
      year.allies,
      year.coreHeadcount,
      year.totalCost,
      ...hubBranchKeys.map((branch) => year.categoryCosts[branch]),
      ...financeCostTypeKeys.map((type) => year.typeCosts[type]),
      year.monthlyBurn,
      year.cashBalance,
    ]),
  ];
  const csv = rows.map((row) => row.join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `cataliza-hub-financial-model-${locale}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

function TrendChartCard({
  title,
  locale,
  values,
}: {
  title: string;
  locale: Locale;
  values: number[];
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
      <strong>{formatCurrency(values[values.length - 1] ?? 0, locale, 0, financeCurrency)}</strong>
      <div className="chart-shell" aria-hidden="true">
        <svg className="chart-svg" preserveAspectRatio="none" viewBox="0 0 100 100">
          <line className="chart-baseline" x1="0" x2="100" y1={zeroPosition} y2={zeroPosition} />
          <polygon className="chart-area" points={area} />
          <polyline className="chart-line" points={points} />
        </svg>
      </div>
      <div className="trend-meta">
        <span>{formatCurrency(values[0] ?? 0, locale, 0, financeCurrency)}</span>
        <span>{formatCurrency(values[values.length - 1] ?? 0, locale, 0, financeCurrency)}</span>
      </div>
    </article>
  );
}

function StackedBarsCard({
  title,
  locale,
  bars,
}: {
  title: string;
  locale: Locale;
  bars: Array<{
    label: string;
    total: number;
    segments: Array<{ label: string; value: number }>;
  }>;
}) {
  const legend = bars[0]?.segments ?? [];

  return (
    <article className="feature-card chart-card">
      <span className="eyebrow">{title}</span>
      <div className="chart-legend">
        {legend.map((segment, index) => (
          <div className="legend-item" key={segment.label}>
            <span className={`legend-swatch tone-${index + 1}`} />
            <span>{segment.label}</span>
          </div>
        ))}
      </div>
      <div className="stacked-bars">
        {bars.map((bar) => (
          <div className="stacked-bar-row" key={bar.label}>
            <div className="stacked-bar-meta">
              <strong>{bar.label}</strong>
              <span>{formatCurrency(bar.total, locale, 0, financeCurrency)}</span>
            </div>
            <div className="stacked-bar-track" aria-hidden="true">
              {bar.total > 0
                ? bar.segments.map((segment, index) => (
                    <span
                      className={`stacked-segment tone-${index + 1}`}
                      key={`${bar.label}-${segment.label}`}
                      style={{ width: `${(segment.value / bar.total) * 100}%` }}
                    />
                  ))
                : null}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

function buildCategoryBars(locale: Locale, summary: FinanceSummary) {
  const copy = financeLabels[locale];

  return summary.years.map((year) => ({
    label: String(year.year),
    total: year.totalCost,
    segments: hubBranchKeys.map((branch) => ({
      label: copy.branches[branch],
      value: year.categoryCosts[branch],
    })),
  }));
}

function buildTypeBars(locale: Locale, summary: FinanceSummary) {
  const copy = financeLabels[locale];

  return summary.years.map((year) => ({
    label: String(year.year),
    total: year.totalCost,
    segments: financeCostTypeKeys.map((type) => ({
      label: copy.costTypes[type],
      value: year.typeCosts[type],
    })),
  }));
}

export function FinancialModelView({ locale }: FinancialModelViewProps) {
  const copy = financeLabels[locale];
  const [assumptions, setAssumptions] = useState<FinanceAssumptions>(() => cloneAssumptions());
  const summary = calculateFinanceSummary(assumptions);
  const finalYear = summary.years[summary.years.length - 1];

  const updatePrimitiveField = (
    field: keyof Pick<
      FinanceAssumptions,
      "openingCash" | "officeMonthly" | "softwareMonthlyPerCoreHead" | "otherOperatingMonthly"
    >,
    value: number,
  ) => {
    const constraints = numericConstraints[field];

    setAssumptions((current) => ({
      ...current,
      [field]: clampNumber(value, constraints.min, constraints.max),
    }));
  };

  const updateLevelCost = (level: HubCostLevel, value: number) => {
    setAssumptions((current) => ({
      ...current,
      monthlyCostByLevel: {
        ...current.monthlyCostByLevel,
        [level]: clampNumber(value, levelCostConstraints.min, levelCostConstraints.max),
      },
    }));
  };

  const updatePositionLevel = (positionId: HubPositionId, level: HubCostLevel) => {
    setAssumptions((current) => ({
      ...current,
      levelsByPosition: {
        ...current.levelsByPosition,
        [positionId]: level,
      },
    }));
  };

  return (
    <div className="finance-view">
      <section className="hero-panel tight">
        <div>
          <span className="eyebrow">{copy.eyebrow}</span>
          <h1>{copy.title}</h1>
          <p className="section-summary">{copy.summary}</p>
        </div>
        <div className="finance-actions">
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
          <span className="eyebrow">{copy.sections.assumptions}</span>
          <div className="input-grid compact">
            {(Object.keys(numericConstraints) as Array<keyof typeof numericConstraints>).map((field) => (
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
        </article>

        <article className="feature-card">
          <span className="eyebrow">{copy.notesTitle}</span>
          <ul className="card-list">
            {copy.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="feature-section">
        <div className="section-heading">
          <span className="eyebrow">{copy.sections.costLevels}</span>
          <h2>{copy.sections.costLevels}</h2>
        </div>
        <div className="split-grid">
          <article className="feature-card">
            <div className="table-wrap">
              <table className="data-table compact-table levels-table">
                <thead>
                  <tr>
                    <th>{copy.levelsTable.type}</th>
                    <th>{copy.levelsTable.monthlyCost}</th>
                  </tr>
                </thead>
                <tbody>
                  {hubCostLevels.map((level) => (
                    <tr key={level}>
                      <th>{copy.levels[level]}</th>
                      <td>
                        <input
                          className="table-input"
                          inputMode="decimal"
                          max={levelCostConstraints.max}
                          min={levelCostConstraints.min}
                          onChange={(event) => updateLevelCost(level, parseNumber(event.target.value))}
                          step={levelCostConstraints.step}
                          type="number"
                          value={assumptions.monthlyCostByLevel[level]}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>
          <article className="feature-card">
            <span className="eyebrow">{copy.sections.metrics}</span>
            <div className="mini-kpi-grid finance-kpi-grid">
              <div className="mini-kpi">
                <span>{copy.cards.monthlyBurnYearOne}</span>
                <strong>{formatCurrency(summary.yearOneMonthlyBurn, locale, 0, financeCurrency)}</strong>
              </div>
              <div className="mini-kpi">
                <span>{copy.cards.totalCostYearOne}</span>
                <strong>{formatCurrency(summary.years[0]?.totalCost ?? 0, locale, 0, financeCurrency)}</strong>
              </div>
              <div className="mini-kpi">
                <span>{copy.cards.monthlyBurnYearTen}</span>
                <strong>{formatCurrency(finalYear?.monthlyBurn ?? 0, locale, 0, financeCurrency)}</strong>
              </div>
              <div className="mini-kpi">
                <span>{copy.cards.totalCostYearTen}</span>
                <strong>{formatCurrency(summary.yearTenTotalCost, locale, 0, financeCurrency)}</strong>
              </div>
              <div className="mini-kpi">
                <span>{copy.cards.runway}</span>
                <strong>{formatRunway(summary.startingRunwayMonths, locale, copy.states.unlimited)}</strong>
              </div>
              <div className="mini-kpi">
                <span>{copy.cards.cash}</span>
                <strong>{formatCurrency(summary.endingCash, locale, 0, financeCurrency)}</strong>
              </div>
              <div className="mini-kpi">
                <span>{copy.cards.coreHeadcount}</span>
                <strong>{formatNumber(summary.finalCoreHeadcount, locale)}</strong>
              </div>
              <div className="mini-kpi">
                <span>{copy.categoryTable.allies}</span>
                <strong>{formatNumber(finalYear?.allies ?? 0, locale)}</strong>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="feature-section">
        <div className="section-heading">
          <span className="eyebrow">{copy.sections.headcount}</span>
          <h2>{copy.sections.headcount}</h2>
        </div>
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>{copy.positionsTable.role}</th>
                <th>{copy.positionsTable.branch}</th>
                <th>{copy.positionsTable.startYear}</th>
                <th>{copy.positionsTable.level}</th>
              </tr>
            </thead>
            <tbody>
              {hubPositions.map((position) => (
                <tr key={position.id}>
                  <th>{position.label[locale]}</th>
                  <td>{copy.branches[position.branch]}</td>
                  <td>{assumptions.startYear + position.startOffset}</td>
                  <td>
                    <select
                      className="table-input table-select"
                      onChange={(event) => updatePositionLevel(position.id, event.target.value as HubCostLevel)}
                      value={assumptions.levelsByPosition[position.id]}
                    >
                      {hubCostLevels.map((level) => (
                        <option key={level} value={level}>
                          {copy.levels[level]}
                        </option>
                      ))}
                    </select>
                  </td>
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
          <TrendChartCard locale={locale} title={copy.charts.cash} values={summary.years.map((year) => year.cashBalance)} />
          <StackedBarsCard bars={buildCategoryBars(locale, summary)} locale={locale} title={copy.charts.categories} />
          <StackedBarsCard bars={buildTypeBars(locale, summary)} locale={locale} title={copy.charts.types} />
        </div>

        <article className="feature-card">
          <h3>{copy.sections.categories}</h3>
          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>{copy.categoryTable.year}</th>
                  <th>{copy.categoryTable.allies}</th>
                  <th>{copy.categoryTable.coreHeadcount}</th>
                  <th>{copy.categoryTable.totalCost}</th>
                  {hubBranchKeys.map((branch) => (
                    <th key={branch}>{copy.branches[branch]}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {summary.years.map((year) => (
                  <CategoryRow key={year.year} locale={locale} year={year} />
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <article className="feature-card">
          <h3>{copy.sections.types}</h3>
          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>{copy.typeTable.year}</th>
                  <th>{copy.typeTable.headcount}</th>
                  <th>{copy.typeTable.software}</th>
                  <th>{copy.typeTable.office}</th>
                  <th>{copy.typeTable.externalOther}</th>
                  <th>{copy.typeTable.monthlyBurn}</th>
                  <th>{copy.typeTable.cashBalance}</th>
                </tr>
              </thead>
              <tbody>
                {summary.years.map((year) => (
                  <TypeRow key={`${year.year}-types`} locale={locale} year={year} />
                ))}
              </tbody>
            </table>
          </div>
        </article>
      </section>
    </div>
  );
}

function CategoryRow({ locale, year }: { locale: Locale; year: FinanceYear }) {
  return (
    <tr>
      <td>{year.year}</td>
      <td>{year.allies}</td>
      <td>{year.coreHeadcount}</td>
      <td>{formatCurrency(year.totalCost, locale, 0, financeCurrency)}</td>
      {hubBranchKeys.map((branch) => (
        <td key={`${year.year}-${branch}`}>{formatCurrency(year.categoryCosts[branch], locale, 0, financeCurrency)}</td>
      ))}
    </tr>
  );
}

function TypeRow({ locale, year }: { locale: Locale; year: FinanceYear }) {
  return (
    <tr>
      <td>{year.year}</td>
      <td>{formatCurrency(year.typeCosts.headcount, locale, 0, financeCurrency)}</td>
      <td>{formatCurrency(year.typeCosts.software, locale, 0, financeCurrency)}</td>
      <td>{formatCurrency(year.typeCosts.office, locale, 0, financeCurrency)}</td>
      <td>{formatCurrency(year.typeCosts.externalOther, locale, 0, financeCurrency)}</td>
      <td>{formatCurrency(year.monthlyBurn, locale, 0, financeCurrency)}</td>
      <td>{formatCurrency(year.cashBalance, locale, 0, financeCurrency)}</td>
    </tr>
  );
}
