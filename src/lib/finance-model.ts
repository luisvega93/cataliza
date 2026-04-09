import {
  financeCostTypeKeys,
  hubBranchKeys,
  hubPositions,
  type FinanceAssumptions,
  type FinanceCostTypeKey,
  type HubBranchKey,
} from "@/content/finance";

export type FinanceYear = {
  year: number;
  allies: number;
  coreHeadcount: number;
  categoryCosts: Record<HubBranchKey, number>;
  typeCosts: Record<FinanceCostTypeKey, number>;
  totalCost: number;
  monthlyBurn: number;
  cashBalance: number;
};

export type FinanceSummary = {
  years: FinanceYear[];
  endingCash: number;
  peakAnnualCost: number;
  startingRunwayMonths: number;
  yearTenTotalCost: number;
  yearOneMonthlyBurn: number;
  finalCoreHeadcount: number;
};

function zeroRecord<TKey extends string>(keys: readonly TKey[]) {
  return keys.reduce<Record<TKey, number>>((accumulator, key) => {
    accumulator[key] = 0;
    return accumulator;
  }, {} as Record<TKey, number>);
}

function getOfficeAnnualCost(assumptions: FinanceAssumptions, yearIndex: number) {
  return assumptions.officeMonthly * 12 * Math.pow(1 + assumptions.officeGrowthRate, yearIndex);
}

function getOtherAnnualCost(assumptions: FinanceAssumptions, yearIndex: number) {
  return assumptions.otherOperatingMonthly * 12 * Math.pow(1 + assumptions.otherOperatingGrowthRate, yearIndex);
}

export function calculateFinanceSummary(assumptions: FinanceAssumptions): FinanceSummary {
  const years: FinanceYear[] = [];
  let cashBalance = assumptions.openingCash;

  for (let yearIndex = 0; yearIndex < assumptions.horizonYears; yearIndex += 1) {
    const categoryCosts = zeroRecord(hubBranchKeys);
    const typeCosts = zeroRecord(financeCostTypeKeys);
    const activePositions = hubPositions.filter((position) => yearIndex >= position.startOffset);

    let coreHeadcount = 0;

    for (const position of activePositions) {
      const level = assumptions.levelsByPosition[position.id];
      const annualCost = assumptions.monthlyCostByLevel[level] * 12;

      categoryCosts[position.branch] += annualCost;

      if (level === "external") {
        typeCosts.externalOther += annualCost;
      } else {
        typeCosts.headcount += annualCost;
      }

      if (position.countsAsCore && level !== "external") {
        coreHeadcount += 1;
      }
    }

    typeCosts.software = assumptions.softwareMonthlyPerCoreHead * 12 * coreHeadcount;
    typeCosts.office = getOfficeAnnualCost(assumptions, yearIndex);
    typeCosts.externalOther += getOtherAnnualCost(assumptions, yearIndex);

    const totalCost = financeCostTypeKeys.reduce((sum, key) => sum + typeCosts[key], 0);
    const monthlyBurn = totalCost / 12;

    cashBalance -= totalCost;

    years.push({
      year: assumptions.startYear + yearIndex,
      allies: yearIndex + 1,
      coreHeadcount,
      categoryCosts,
      typeCosts,
      totalCost,
      monthlyBurn,
      cashBalance,
    });
  }

  const firstYear = years[0];
  const finalYear = years[years.length - 1];
  const startingRunwayMonths =
    firstYear && firstYear.monthlyBurn > 0 ? assumptions.openingCash / firstYear.monthlyBurn : Number.POSITIVE_INFINITY;

  return {
    years,
    endingCash: finalYear?.cashBalance ?? assumptions.openingCash,
    peakAnnualCost: Math.max(...years.map((year) => year.totalCost), 0),
    startingRunwayMonths,
    yearTenTotalCost: finalYear?.totalCost ?? 0,
    yearOneMonthlyBurn: firstYear?.monthlyBurn ?? 0,
    finalCoreHeadcount: finalYear?.coreHeadcount ?? 0,
  };
}
