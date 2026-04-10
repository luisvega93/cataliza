import type { Locale } from "@/lib/i18n";

export const financeCurrency = "MXN" as const;

export const hubCostLevels = ["sr", "jr", "external"] as const;
export type HubCostLevel = (typeof hubCostLevels)[number];

export const hubBranchKeys = [
  "hubDirection",
  "financeComplianceCapital",
  "systemsDataAi",
  "growthBrandImpact",
  "externalNetwork",
] as const;
export type HubBranchKey = (typeof hubBranchKeys)[number];

export const financeCostTypeKeys = ["headcount", "software", "office", "externalOther"] as const;
export type FinanceCostTypeKey = (typeof financeCostTypeKeys)[number];

export const hubPositionIds = [
  "hubLead",
  "financeComplianceManager",
  "systemsAiOpsManager",
  "growthImpactManager",
  "portfolioOpsCoordinator",
  "portfolioLeadA",
  "financeOpsAnalyst",
  "automationKnowledgeOpsAnalyst",
  "portfolioLeadB",
  "alliancesImpactManager",
  "portfolioLeadC",
  "externalSpecialists",
] as const;
export type HubPositionId = (typeof hubPositionIds)[number];

export type HubPositionDefinition = {
  id: HubPositionId;
  label: Record<Locale, string>;
  branch: HubBranchKey;
  startOffset: number;
  defaultLevel: HubCostLevel;
  countsAsCore: boolean;
};

export const hubPositions: HubPositionDefinition[] = [
  {
    id: "hubLead",
    label: {
      es: "Hub Lead / Operating Partner",
      en: "Hub Lead / Operating Partner",
    },
    branch: "hubDirection",
    startOffset: 0,
    defaultLevel: "sr",
    countsAsCore: true,
  },
  {
    id: "financeComplianceManager",
    label: {
      es: "Finance & Compliance Manager",
      en: "Finance & Compliance Manager",
    },
    branch: "financeComplianceCapital",
    startOffset: 0,
    defaultLevel: "sr",
    countsAsCore: true,
  },
  {
    id: "systemsAiOpsManager",
    label: {
      es: "Systems & AI Ops Manager",
      en: "Systems & AI Ops Manager",
    },
    branch: "systemsDataAi",
    startOffset: 0,
    defaultLevel: "sr",
    countsAsCore: true,
  },
  {
    id: "growthImpactManager",
    label: {
      es: "Growth & Impact Manager",
      en: "Growth & Impact Manager",
    },
    branch: "growthBrandImpact",
    startOffset: 0,
    defaultLevel: "sr",
    countsAsCore: true,
  },
  {
    id: "portfolioOpsCoordinator",
    label: {
      es: "Coordinación de Portafolio / Ops",
      en: "Portfolio / Ops Coordination",
    },
    branch: "hubDirection",
    startOffset: 1,
    defaultLevel: "jr",
    countsAsCore: true,
  },
  {
    id: "portfolioLeadA",
    label: {
      es: "Líder de Portafolio A",
      en: "Portfolio Lead A",
    },
    branch: "hubDirection",
    startOffset: 2,
    defaultLevel: "sr",
    countsAsCore: true,
  },
  {
    id: "financeOpsAnalyst",
    label: {
      es: "Analista de Finanzas Ops",
      en: "Finance Ops Analyst",
    },
    branch: "financeComplianceCapital",
    startOffset: 3,
    defaultLevel: "jr",
    countsAsCore: true,
  },
  {
    id: "automationKnowledgeOpsAnalyst",
    label: {
      es: "Analista de Automatización / Knowledge Ops",
      en: "Automation / Knowledge Ops Analyst",
    },
    branch: "systemsDataAi",
    startOffset: 4,
    defaultLevel: "jr",
    countsAsCore: true,
  },
  {
    id: "portfolioLeadB",
    label: {
      es: "Líder de Portafolio B",
      en: "Portfolio Lead B",
    },
    branch: "hubDirection",
    startOffset: 5,
    defaultLevel: "sr",
    countsAsCore: true,
  },
  {
    id: "alliancesImpactManager",
    label: {
      es: "Manager de Alianzas e Impacto",
      en: "Alliances & Impact Manager",
    },
    branch: "growthBrandImpact",
    startOffset: 6,
    defaultLevel: "sr",
    countsAsCore: true,
  },
  {
    id: "portfolioLeadC",
    label: {
      es: "Líder de Portafolio C",
      en: "Portfolio Lead C",
    },
    branch: "hubDirection",
    startOffset: 8,
    defaultLevel: "sr",
    countsAsCore: true,
  },
  {
    id: "externalSpecialists",
    label: {
      es: "Despacho contable-fiscal, asesoría legal, diseño / PR y especialistas",
      en: "Accounting-tax firm, legal counsel, design / PR, and specialists",
    },
    branch: "externalNetwork",
    startOffset: 0,
    defaultLevel: "external",
    countsAsCore: false,
  },
];

export type FinanceLabels = {
  meta: {
    title: string;
    description: string;
  };
  eyebrow: string;
  title: string;
  summary: string;
  notesTitle: string;
  notes: string[];
  sections: {
    assumptions: string;
    costLevels: string;
    headcount: string;
    metrics: string;
    outlook: string;
    categories: string;
    types: string;
  };
  actions: {
    reset: string;
    exportCsv: string;
  };
  fields: {
    openingCash: string;
    officeMonthly: string;
    softwareMonthlyPerCoreHead: string;
    otherOperatingMonthly: string;
  };
  levels: Record<HubCostLevel, string>;
  branches: Record<HubBranchKey, string>;
  costTypes: Record<FinanceCostTypeKey, string>;
  cards: {
    totalCostYearOne: string;
    totalCostYearTen: string;
    monthlyBurnYearOne: string;
    monthlyBurnYearTen: string;
    runway: string;
    cash: string;
    coreHeadcount: string;
  };
  charts: {
    cash: string;
    categories: string;
    types: string;
  };
  states: {
    unlimited: string;
  };
  levelsTable: {
    type: string;
    monthlyCost: string;
  };
  positionsTable: {
    role: string;
    branch: string;
    startYear: string;
    level: string;
  };
  categoryTable: {
    year: string;
    allies: string;
    coreHeadcount: string;
    totalCost: string;
  };
  typeTable: {
    year: string;
    headcount: string;
    software: string;
    office: string;
    externalOther: string;
    monthlyBurn: string;
    cashBalance: string;
  };
};

export type FinanceAssumptions = {
  startYear: number;
  horizonYears: number;
  openingCash: number;
  officeMonthly: number;
  officeGrowthRate: number;
  softwareMonthlyPerCoreHead: number;
  otherOperatingMonthly: number;
  otherOperatingGrowthRate: number;
  monthlyCostByLevel: Record<HubCostLevel, number>;
  levelsByPosition: Record<HubPositionId, HubCostLevel>;
};

export const financeLabels: Record<Locale, FinanceLabels> = {
  es: {
    meta: {
      title: "Cataliza Capital | Modelo financiero del Hub a 10 años",
      description:
        "Modelo financiero del Hub de Cataliza: costos de operación, headcount y evolución anual de la estructura de servicios compartidos.",
    },
    eyebrow: "Modelo financiero del Hub",
    title: "Modelo financiero del Hub a 10 años",
    summary:
      "Este modelo muestra únicamente los costos de operación del Hub de servicios compartidos. Parte de 1 aliado nuevo por año y de una estructura base de 4 roles núcleo más una red externa fraccional.",
    notesTitle: "Supuestos base",
    notes: [
      "Entra 1 aliado nuevo por año.",
      "La intensidad del Hub cambia con la madurez del aliado: 0-18 meses = alta; 18-36 meses = media; 36+ meses = ligera.",
      "El Hub no sustituye al equipo del aliado; le da infraestructura de negocio y disciplina.",
      "La IA es transversal; no se modela como un departamento separado.",
      "El escenario base arranca con 4 roles núcleo + red externa fraccional.",
    ],
    sections: {
      assumptions: "Supuestos",
      costLevels: "Costo mensual por tipo",
      headcount: "Estructura del Hub",
      metrics: "KPIs",
      outlook: "Tablas anuales",
      categories: "Desglose por categoría",
      types: "Desglose por tipo de costo",
    },
    actions: {
      reset: "Restablecer base",
      exportCsv: "Exportar CSV",
    },
    fields: {
      openingCash: "Caja inicial",
      officeMonthly: "Oficina mensual",
      softwareMonthlyPerCoreHead: "Software mensual por persona",
      otherOperatingMonthly: "Otros gastos operativos mensuales",
    },
    levels: {
      sr: "Sr",
      jr: "Jr",
      external: "Externo",
    },
    branches: {
      hubDirection: "Dirección del Hub / Portafolio",
      financeComplianceCapital: "Finanzas, Cumplimiento y Capital Ops",
      systemsDataAi: "Sistemas, Datos e IA",
      growthBrandImpact: "Crecimiento, Marca e Impacto",
      externalNetwork: "Red externa fraccional",
    },
    costTypes: {
      headcount: "Headcount",
      software: "Software",
      office: "Oficina",
      externalOther: "Externos / otros",
    },
    cards: {
      totalCostYearOne: "Costo total año 1",
      totalCostYearTen: "Costo total año 10",
      monthlyBurnYearOne: "Burn mensual año 1",
      monthlyBurnYearTen: "Burn mensual año 10",
      runway: "Runway inicial",
      cash: "Caja final",
      coreHeadcount: "FTE núcleo año 10",
    },
    charts: {
      cash: "Caja",
      categories: "Costos por categoría",
      types: "Costos por tipo",
    },
    states: {
      unlimited: "Sin límite",
    },
    levelsTable: {
      type: "Tipo",
      monthlyCost: "Costo mensual",
    },
    positionsTable: {
      role: "Rol / servicio",
      branch: "Rama",
      startYear: "Año de entrada",
      level: "Tipo",
    },
    categoryTable: {
      year: "Año",
      allies: "Aliados",
      coreHeadcount: "FTE núcleo",
      totalCost: "Costo total",
    },
    typeTable: {
      year: "Año",
      headcount: "Headcount",
      software: "Software",
      office: "Oficina",
      externalOther: "Externos / otros",
      monthlyBurn: "Burn mensual",
      cashBalance: "Caja",
    },
  },
  en: {
    meta: {
      title: "Cataliza Capital | 10-year Hub financial model",
      description:
        "Cataliza Hub financial model: operating costs, headcount, and yearly evolution of the shared-services structure.",
    },
    eyebrow: "Hub financial model",
    title: "A 10-year Hub financial model",
    summary:
      "This model shows only the operating costs of the shared-services Hub. It starts from 1 new ally per year and a base structure of 4 core roles plus a fractional external network.",
    notesTitle: "Base assumptions",
    notes: [
      "1 new ally enters per year.",
      "Hub intensity changes with ally maturity: 0-18 months = high; 18-36 months = medium; 36+ months = light.",
      "The Hub does not replace the ally's team; it provides business infrastructure and discipline.",
      "AI is transversal; it is not modeled as a separate department.",
      "The base scenario starts with 4 core roles + a fractional external network.",
    ],
    sections: {
      assumptions: "Assumptions",
      costLevels: "Monthly cost by type",
      headcount: "Hub structure",
      metrics: "KPIs",
      outlook: "Yearly tables",
      categories: "Breakdown by category",
      types: "Breakdown by cost type",
    },
    actions: {
      reset: "Reset base",
      exportCsv: "Export CSV",
    },
    fields: {
      openingCash: "Opening cash",
      officeMonthly: "Monthly office",
      softwareMonthlyPerCoreHead: "Monthly software per person",
      otherOperatingMonthly: "Other monthly operating costs",
    },
    levels: {
      sr: "Sr",
      jr: "Jr",
      external: "External",
    },
    branches: {
      hubDirection: "Hub / Portfolio leadership",
      financeComplianceCapital: "Finance, Compliance & Capital Ops",
      systemsDataAi: "Systems, Data & AI",
      growthBrandImpact: "Growth, Brand & Impact",
      externalNetwork: "Fractional external network",
    },
    costTypes: {
      headcount: "Headcount",
      software: "Software",
      office: "Office",
      externalOther: "External / other",
    },
    cards: {
      totalCostYearOne: "Year 1 total cost",
      totalCostYearTen: "Year 10 total cost",
      monthlyBurnYearOne: "Year 1 monthly burn",
      monthlyBurnYearTen: "Year 10 monthly burn",
      runway: "Starting runway",
      cash: "Ending cash",
      coreHeadcount: "Year 10 core FTE",
    },
    charts: {
      cash: "Cash balance",
      categories: "Costs by category",
      types: "Costs by cost type",
    },
    states: {
      unlimited: "Unlimited",
    },
    levelsTable: {
      type: "Type",
      monthlyCost: "Monthly cost",
    },
    positionsTable: {
      role: "Role / service",
      branch: "Branch",
      startYear: "Start year",
      level: "Type",
    },
    categoryTable: {
      year: "Year",
      allies: "Allies",
      coreHeadcount: "Core FTE",
      totalCost: "Total cost",
    },
    typeTable: {
      year: "Year",
      headcount: "Headcount",
      software: "Software",
      office: "Office",
      externalOther: "External / other",
      monthlyBurn: "Monthly burn",
      cashBalance: "Cash",
    },
  },
};

const defaultLevelsByPosition = hubPositions.reduce<Record<HubPositionId, HubCostLevel>>((accumulator, position) => {
  accumulator[position.id] = position.defaultLevel;
  return accumulator;
}, {} as Record<HubPositionId, HubCostLevel>);

export const defaultFinanceAssumptions: FinanceAssumptions = {
  startYear: 2026,
  horizonYears: 10,
  openingCash: 10000000,
  officeMonthly: 60000,
  officeGrowthRate: 0.05,
  softwareMonthlyPerCoreHead: 3500,
  otherOperatingMonthly: 85000,
  otherOperatingGrowthRate: 0.04,
  monthlyCostByLevel: {
    sr: 68000,
    jr: 42000,
    external: 30000,
  },
  levelsByPosition: defaultLevelsByPosition,
};
