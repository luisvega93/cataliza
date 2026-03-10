import type { Locale } from "@/lib/i18n";

export type FinanceScenario = "base" | "downside";

export type RoleKey = "leadership" | "operators" | "finance" | "creative";

export type FinanceLabels = {
  meta: {
    title: string;
    description: string;
  };
  eyebrow: string;
  title: string;
  summary: string;
  scenarios: Record<FinanceScenario, string>;
  sections: {
    inputs: string;
    headcount: string;
    opex: string;
    grants: string;
    loan: string;
    metrics: string;
    outlook: string;
  };
  fields: {
    openingCash: string;
    projectRevenueYearOne: string;
    grossMargin: string;
    revenueGrowth: string;
    cacRate: string;
    grantPerProject: string;
    loanPerProject: string;
    interestRate: string;
    repaymentYears: string;
    officeMonthly: string;
    softwareMonthly: string;
    launchesPerYear: string;
  };
  roles: Record<RoleKey, string>;
  cards: {
    revenue: string;
    burn: string;
    runway: string;
    dscr: string;
    grossMargin: string;
    cash: string;
  };
  table: {
    year: string;
    revenue: string;
    grossProfit: string;
    payroll: string;
    opex: string;
    grants: string;
    loanDeployments: string;
    repayments: string;
    debtService: string;
    cashBalance: string;
    burn: string;
    dscr: string;
  };
};

export type FinanceAssumptions = {
  startYear: number;
  openingCash: number;
  projectRevenueYearOne: number;
  grossMargin: number;
  revenueGrowth: number;
  cacRate: number;
  grantPerProject: number;
  loanPerProject: number;
  interestRate: number;
  repaymentYears: number;
  officeMonthly: number;
  officeGrowthRate: number;
  softwareMonthlyPerHead: number;
  launchesPerYear: number[];
  headcount: Record<RoleKey, number[]>;
  salaryByRole: Record<RoleKey, number>;
};

export const financeLabels: Record<Locale, FinanceLabels> = {
  es: {
    meta: {
      title: "Cataliza Capital | Modelo financiero a 10 años",
      description:
        "Modelo financiero interactivo con escenarios base y downside para headcount, opex, grants, crédito y métricas de salud.",
    },
    eyebrow: "10-year financial model",
    title: "Modelo operativo-financiero a 10 años",
    summary:
      "Este modelo asume una Cataliza pequeña, selectiva y disciplinada. Puedes ajustar drivers clave y ver cómo cambian burn, runway, margen y capacidad de servicio de deuda.",
    scenarios: {
      base: "Base",
      downside: "Downside: sin ventas los primeros 2 años",
    },
    sections: {
      inputs: "Inputs",
      headcount: "Headcount",
      opex: "Opex",
      grants: "Grants",
      loan: "Loan",
      metrics: "Metrics",
      outlook: "Consolidado a 10 años",
    },
    fields: {
      openingCash: "Caja inicial",
      projectRevenueYearOne: "Ingresos por proyecto en año 1",
      grossMargin: "Margen bruto",
      revenueGrowth: "Crecimiento anual de ingresos",
      cacRate: "CAC como % de ingresos",
      grantPerProject: "Grant por proyecto",
      loanPerProject: "Crédito por proyecto",
      interestRate: "Tasa de interés",
      repaymentYears: "Años de repago",
      officeMonthly: "Oficina mensual base",
      softwareMonthly: "Software mensual por persona",
      launchesPerYear: "Proyectos nuevos",
    },
    roles: {
      leadership: "Liderazgo",
      operators: "Operaciones",
      finance: "Finanzas / legal",
      creative: "Marketing / design",
    },
    cards: {
      revenue: "Ingresos año 10",
      burn: "Burn pico anual",
      runway: "Runway inicial",
      dscr: "DSCR año 10",
      grossMargin: "Margen bruto promedio",
      cash: "Caja final",
    },
    table: {
      year: "Año",
      revenue: "Ingresos",
      grossProfit: "Utilidad bruta",
      payroll: "Nómina",
      opex: "Opex",
      grants: "Grants",
      loanDeployments: "Crédito desplegado",
      repayments: "Repagos",
      debtService: "Servicio de deuda",
      cashBalance: "Caja",
      burn: "Burn",
      dscr: "DSCR",
    },
  },
  en: {
    meta: {
      title: "Cataliza Capital | 10-year financial model",
      description:
        "Interactive financial model with base and downside scenarios for headcount, opex, grants, credit, and health metrics.",
    },
    eyebrow: "10-year financial model",
    title: "A 10-year operating and financial model",
    summary:
      "This model assumes a small, selective, disciplined Cataliza. Adjust the core drivers and watch burn, runway, margin, and debt-service capacity change in real time.",
    scenarios: {
      base: "Base",
      downside: "Downside: no sales in the first 2 years",
    },
    sections: {
      inputs: "Inputs",
      headcount: "Headcount",
      opex: "Opex",
      grants: "Grants",
      loan: "Loan",
      metrics: "Metrics",
      outlook: "10-year outlook",
    },
    fields: {
      openingCash: "Opening cash",
      projectRevenueYearOne: "Year 1 revenue per project",
      grossMargin: "Gross margin",
      revenueGrowth: "Annual revenue growth",
      cacRate: "CAC as % of revenue",
      grantPerProject: "Grant per project",
      loanPerProject: "Loan per project",
      interestRate: "Interest rate",
      repaymentYears: "Repayment years",
      officeMonthly: "Base monthly office cost",
      softwareMonthly: "Monthly software per head",
      launchesPerYear: "New projects",
    },
    roles: {
      leadership: "Leadership",
      operators: "Operations",
      finance: "Finance / legal",
      creative: "Marketing / design",
    },
    cards: {
      revenue: "Year 10 revenue",
      burn: "Peak annual burn",
      runway: "Starting runway",
      dscr: "Year 10 DSCR",
      grossMargin: "Average gross margin",
      cash: "Ending cash",
    },
    table: {
      year: "Year",
      revenue: "Revenue",
      grossProfit: "Gross profit",
      payroll: "Payroll",
      opex: "Opex",
      grants: "Grants",
      loanDeployments: "Loan deployed",
      repayments: "Repayments",
      debtService: "Debt service",
      cashBalance: "Cash",
      burn: "Burn",
      dscr: "DSCR",
    },
  },
};

export const defaultFinanceAssumptions: FinanceAssumptions = {
  startYear: 2026,
  openingCash: 750000,
  projectRevenueYearOne: 180000,
  grossMargin: 0.66,
  revenueGrowth: 0.22,
  cacRate: 0.09,
  grantPerProject: 60000,
  loanPerProject: 80000,
  interestRate: 0.1,
  repaymentYears: 3,
  officeMonthly: 5500,
  officeGrowthRate: 0.06,
  softwareMonthlyPerHead: 210,
  launchesPerYear: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  headcount: {
    leadership: [2, 2, 2, 3, 3, 3, 4, 4, 4, 4],
    operators: [2, 3, 3, 4, 4, 5, 5, 6, 6, 7],
    finance: [1, 1, 2, 2, 2, 2, 3, 3, 3, 3],
    creative: [1, 1, 1, 2, 2, 2, 2, 3, 3, 3],
  },
  salaryByRole: {
    leadership: 68000,
    operators: 42000,
    finance: 47000,
    creative: 39000,
  },
};
