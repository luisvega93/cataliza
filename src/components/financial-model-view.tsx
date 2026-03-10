"use client";

import { useState } from "react";

import {
  defaultFinanceAssumptions,
  financeLabels,
  type FinanceAssumptions,
  type FinanceScenario,
  type RoleKey,
} from "@/content/finance";
import { formatCurrency, formatPercent } from "@/lib/format";
import type { Locale } from "@/lib/i18n";
import { calculateFinanceSummary } from "@/lib/finance-model";

type FinancialModelViewProps = {
  locale: Locale;
};

const editableRoles: RoleKey[] = ["leadership", "operators", "finance", "creative"];

function cloneAssumptions() {
  return JSON.parse(JSON.stringify(defaultFinanceAssumptions)) as FinanceAssumptions;
}

function normalizeNumber(value: string) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

export function FinancialModelView({ locale }: FinancialModelViewProps) {
  const copy = financeLabels[locale];
  const [scenario, setScenario] = useState<FinanceScenario>("base");
  const [assumptions, setAssumptions] = useState<FinanceAssumptions>(() => cloneAssumptions());
  const summary = calculateFinanceSummary(assumptions, scenario);
  const finalYear = summary.years[summary.years.length - 1];
  const maxCash = Math.max(...summary.years.map((year) => Math.abs(year.cashBalance)), 1);

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
    setAssumptions((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const updatePercentField = (
    field: "grossMargin" | "revenueGrowth" | "cacRate" | "interestRate",
    percentValue: number,
  ) => {
    setAssumptions((current) => ({
      ...current,
      [field]: percentValue / 100,
    }));
  };

  const updateLaunches = (index: number, value: number) => {
    setAssumptions((current) => ({
      ...current,
      launchesPerYear: current.launchesPerYear.map((currentValue, currentIndex) =>
        currentIndex === index ? value : currentValue,
      ),
    }));
  };

  const updateHeadcount = (role: RoleKey, index: number, value: number) => {
    setAssumptions((current) => ({
      ...current,
      headcount: {
        ...current.headcount,
        [role]: current.headcount[role].map((currentValue, currentIndex) =>
          currentIndex === index ? value : currentValue,
        ),
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
      </section>

      <section className="finance-grid">
        <article className="feature-card">
          <span className="eyebrow">{copy.sections.inputs}</span>
          <div className="input-grid compact">
            <label className="field">
              <span>{copy.fields.openingCash}</span>
              <input
                type="number"
                value={assumptions.openingCash}
                onChange={(event) => updatePrimitiveField("openingCash", normalizeNumber(event.target.value))}
              />
            </label>
            <label className="field">
              <span>{copy.fields.projectRevenueYearOne}</span>
              <input
                type="number"
                value={assumptions.projectRevenueYearOne}
                onChange={(event) =>
                  updatePrimitiveField("projectRevenueYearOne", normalizeNumber(event.target.value))
                }
              />
            </label>
            <label className="field">
              <span>{copy.fields.grossMargin}</span>
              <input
                type="number"
                step="1"
                value={Math.round(assumptions.grossMargin * 100)}
                onChange={(event) => updatePercentField("grossMargin", normalizeNumber(event.target.value))}
              />
            </label>
            <label className="field">
              <span>{copy.fields.revenueGrowth}</span>
              <input
                type="number"
                step="1"
                value={Math.round(assumptions.revenueGrowth * 100)}
                onChange={(event) => updatePercentField("revenueGrowth", normalizeNumber(event.target.value))}
              />
            </label>
            <label className="field">
              <span>{copy.fields.cacRate}</span>
              <input
                type="number"
                step="1"
                value={Math.round(assumptions.cacRate * 100)}
                onChange={(event) => updatePercentField("cacRate", normalizeNumber(event.target.value))}
              />
            </label>
            <label className="field">
              <span>{copy.fields.interestRate}</span>
              <input
                type="number"
                step="1"
                value={Math.round(assumptions.interestRate * 100)}
                onChange={(event) => updatePercentField("interestRate", normalizeNumber(event.target.value))}
              />
            </label>
          </div>
        </article>

        <article className="feature-card">
          <span className="eyebrow">{copy.sections.grants}</span>
          <div className="input-grid compact">
            <label className="field">
              <span>{copy.fields.grantPerProject}</span>
              <input
                type="number"
                value={assumptions.grantPerProject}
                onChange={(event) => updatePrimitiveField("grantPerProject", normalizeNumber(event.target.value))}
              />
            </label>
            <label className="field">
              <span>{copy.fields.loanPerProject}</span>
              <input
                type="number"
                value={assumptions.loanPerProject}
                onChange={(event) => updatePrimitiveField("loanPerProject", normalizeNumber(event.target.value))}
              />
            </label>
            <label className="field">
              <span>{copy.fields.repaymentYears}</span>
              <input
                type="number"
                min="1"
                max="10"
                value={assumptions.repaymentYears}
                onChange={(event) => updatePrimitiveField("repaymentYears", normalizeNumber(event.target.value))}
              />
            </label>
          </div>

          <div className="launch-grid">
            {assumptions.launchesPerYear.map((launches, index) => (
              <label className="mini-field" key={assumptions.startYear + index}>
                <span>
                  {copy.fields.launchesPerYear} {assumptions.startYear + index}
                </span>
                <input
                  type="number"
                  min="0"
                  value={launches}
                  onChange={(event) => updateLaunches(index, normalizeNumber(event.target.value))}
                />
              </label>
            ))}
          </div>
        </article>

        <article className="feature-card">
          <span className="eyebrow">{copy.sections.opex}</span>
          <div className="input-grid compact">
            <label className="field">
              <span>{copy.fields.officeMonthly}</span>
              <input
                type="number"
                value={assumptions.officeMonthly}
                onChange={(event) => updatePrimitiveField("officeMonthly", normalizeNumber(event.target.value))}
              />
            </label>
            <label className="field">
              <span>{copy.fields.softwareMonthly}</span>
              <input
                type="number"
                value={assumptions.softwareMonthlyPerHead}
                onChange={(event) =>
                  updatePrimitiveField("softwareMonthlyPerHead", normalizeNumber(event.target.value))
                }
              />
            </label>
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
          </div>
        </article>
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
                        type="number"
                        min="0"
                        value={value}
                        onChange={(event) => updateHeadcount(role, index, normalizeNumber(event.target.value))}
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
            <strong>
              {Number.isFinite(summary.startingRunwayMonths)
                ? `${summary.startingRunwayMonths} ${locale === "es" ? "meses" : "months"}`
                : locale === "es"
                  ? "Sin límite"
                  : "Unlimited"}
            </strong>
          </div>
          <div className="metric-card">
            <span>{copy.cards.grossMargin}</span>
            <strong>{formatPercent(summary.averageGrossMargin, locale)}</strong>
          </div>
          <div className="metric-card">
            <span>{copy.cards.dscr}</span>
            <strong>{summary.yearTenDscr.toFixed(2)}x</strong>
          </div>
          <div className="metric-card">
            <span>{copy.cards.cash}</span>
            <strong>{formatCurrency(summary.endingCash, locale)}</strong>
          </div>
        </div>
      </section>

      <section className="feature-section">
        <div className="section-heading">
          <span className="eyebrow">{copy.sections.outlook}</span>
          <h2>{copy.sections.outlook}</h2>
        </div>

        <div className="cash-bars">
          {summary.years.map((year) => (
            <div className="cash-bar" key={year.year}>
              <span>{year.year}</span>
              <div className="cash-bar-track">
                <div
                  className={`cash-bar-fill${year.cashBalance < 0 ? " negative" : ""}`}
                  style={{ height: `${(Math.abs(year.cashBalance) / maxCash) * 100}%` }}
                />
              </div>
              <strong>{formatCurrency(year.cashBalance, locale)}</strong>
            </div>
          ))}
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
                  <td>{year.dscr.toFixed(2)}x</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
