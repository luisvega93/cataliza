import type { FinanceAssumptions, FinanceScenario, RoleKey } from "@/content/finance";

export type FinanceYear = {
  year: number;
  launches: number;
  activeProjects: number;
  headcountTotal: number;
  revenue: number;
  grossProfit: number;
  payroll: number;
  office: number;
  software: number;
  cac: number;
  opex: number;
  grants: number;
  loanDeployments: number;
  repayments: number;
  debtService: number;
  burn: number;
  cashBalance: number;
  dscr: number | null;
};

export type FinanceSummary = {
  years: FinanceYear[];
  endingCash: number;
  peakBurn: number;
  startingRunwayMonths: number;
  averageGrossMargin: number;
  yearTenRevenue: number;
  yearTenDscr: number | null;
};

const roleKeys: RoleKey[] = ["leadership", "operators", "finance", "creative"];

function getHeadcountTotal(assumptions: FinanceAssumptions, yearIndex: number) {
  return roleKeys.reduce((sum, role) => sum + (assumptions.headcount[role][yearIndex] ?? 0), 0);
}

function getPayroll(assumptions: FinanceAssumptions, yearIndex: number) {
  return roleKeys.reduce((sum, role) => {
    return sum + (assumptions.headcount[role][yearIndex] ?? 0) * assumptions.salaryByRole[role];
  }, 0);
}

function getRevenue(assumptions: FinanceAssumptions, yearIndex: number, scenario: FinanceScenario) {
  const salesDelay = scenario === "downside" ? 2 : 0;
  let revenue = 0;

  for (let cohortIndex = 0; cohortIndex <= yearIndex; cohortIndex += 1) {
    const launches = assumptions.launchesPerYear[cohortIndex] ?? 0;
    const commercialAge = yearIndex - cohortIndex - salesDelay;

    if (commercialAge < 0) {
      continue;
    }

    const firstYearRevenue = assumptions.projectRevenueYearOne ?? 180000;
    const cohortRevenue =
      launches * firstYearRevenue * Math.pow(1 + assumptions.revenueGrowth, commercialAge);

    revenue += cohortRevenue;
  }

  return revenue;
}

function getLoanFlows(assumptions: FinanceAssumptions, yearIndex: number) {
  let repayments = 0;
  let debtService = 0;

  for (let cohortIndex = 0; cohortIndex < yearIndex; cohortIndex += 1) {
    const launches = assumptions.launchesPerYear[cohortIndex] ?? 0;
    const deployment = launches * assumptions.loanPerProject;
    const yearsSinceLaunch = yearIndex - cohortIndex;

    if (yearsSinceLaunch <= 0 || yearsSinceLaunch > assumptions.repaymentYears) {
      continue;
    }

    const principalPayment = deployment / assumptions.repaymentYears;
    const outstandingPrincipal = deployment - principalPayment * (yearsSinceLaunch - 1);
    const interestPayment = outstandingPrincipal * assumptions.interestRate;

    repayments += principalPayment;
    debtService += principalPayment + interestPayment;
  }

  return { repayments, debtService };
}

export function calculateFinanceSummary(
  assumptions: FinanceAssumptions,
  scenario: FinanceScenario,
): FinanceSummary {
  const years: FinanceYear[] = [];
  let cashBalance = assumptions.openingCash;

  for (let yearIndex = 0; yearIndex < assumptions.launchesPerYear.length; yearIndex += 1) {
    const launches = assumptions.launchesPerYear[yearIndex] ?? 0;
    const activeProjects = assumptions.launchesPerYear
      .slice(0, yearIndex + 1)
      .reduce((sum, count) => sum + count, 0);
    const headcountTotal = getHeadcountTotal(assumptions, yearIndex);
    const payroll = getPayroll(assumptions, yearIndex);
    const office =
      assumptions.officeMonthly * 12 * Math.pow(1 + assumptions.officeGrowthRate, yearIndex);
    const software = assumptions.softwareMonthlyPerHead * 12 * headcountTotal;
    const revenue = getRevenue(assumptions, yearIndex, scenario);
    const grossProfit = revenue * assumptions.grossMargin;
    const cac = revenue * assumptions.cacRate;
    const opex = payroll + office + software + cac;
    const grants = launches * assumptions.grantPerProject;
    const loanDeployments = launches * assumptions.loanPerProject;
    const { repayments, debtService } = getLoanFlows(assumptions, yearIndex);
    const netCashFlow = grossProfit - opex - grants - loanDeployments + repayments - debtService;
    const burn = Math.max(-netCashFlow, 0);

    cashBalance += netCashFlow;

    const ebitdaLike = grossProfit - opex;
    const dscr = debtService > 0 ? ebitdaLike / debtService : null;

    years.push({
      year: assumptions.startYear + yearIndex,
      launches,
      activeProjects,
      headcountTotal,
      revenue,
      grossProfit,
      payroll,
      office,
      software,
      cac,
      opex,
      grants,
      loanDeployments,
      repayments,
      debtService,
      burn,
      cashBalance,
      dscr,
    });
  }

  const firstYearBurn = years[0]?.burn ?? 0;
  const startingRunwayMonths =
    firstYearBurn > 0 ? Math.round((assumptions.openingCash / (firstYearBurn / 12)) * 10) / 10 : Infinity;
  const finalYear = years[years.length - 1];
  const averageGrossMargin =
    years.reduce(
      (sum, year) => sum + (year.revenue > 0 ? year.grossProfit / year.revenue : assumptions.grossMargin),
      0,
    ) / years.length;

  return {
    years,
    endingCash: finalYear?.cashBalance ?? assumptions.openingCash,
    peakBurn: Math.max(...years.map((year) => year.burn), 0),
    startingRunwayMonths,
    averageGrossMargin,
    yearTenRevenue: finalYear?.revenue ?? 0,
    yearTenDscr: finalYear?.dscr ?? null,
  };
}
