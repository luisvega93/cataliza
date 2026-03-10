import type { PlaybookCopy } from "@/content/playbook";

export const playbookCopyEs: PlaybookCopy = {
  meta: {
    title: "Cataliza Capital | Playbook interno",
    description:
      "Playbook operativo de Cataliza: shared services, governance, incentivos, rituales y dashboard por proyecto.",
  },
  hero: {
    eyebrow: "Playbook interno",
    title: "Cómo ejecuta Cataliza con consistencia, calma y accountability.",
    summary:
      "Este playbook traduce la tesis en operación diaria. El objetivo no es solo ayudar al aliado, sino construir un sistema donde el hub y el core puedan aprender, medir y corregir rumbo juntos.",
    stats: [
      { label: "Shared services", value: "4 funciones" },
      { label: "Cadencias", value: "mensual / trimestral / anual" },
      { label: "Bono hub", value: "alineado a KPIs" },
    ],
  },
  operatingModel: {
    title: "Operating Model",
    summary:
      "Cataliza corre un modelo de servicios compartidos para liberar al aliado del trabajo administrativo crítico sin desconectarlo del cliente ni de la verdad operacional.",
    sharedServices: [
      {
        title: "Finanzas y planeación",
        summary: "Cashflow, presupuesto, unit economics, receivables/payables y estructura de fondeo.",
      },
      {
        title: "Operaciones y sistemas",
        summary: "ERP, procesos, automatizaciones, reporting y gobierno de información.",
      },
      {
        title: "Legal, fiscal y contable",
        summary: "Cumplimiento, regularización y diseño de controles mínimos viables.",
      },
      {
        title: "Marketing y design",
        summary: "Brand system, materiales comerciales, funnel y narrativa de ventas.",
      },
    ],
    governance: [
      {
        title: "Aliado",
        summary: "Define craft, lidera equipo core, escucha al cliente y empuja ventas o delivery.",
      },
      {
        title: "Manager Cataliza",
        summary: "Conduce el hub, sincroniza shared services y asegura ritmo de ejecución.",
      },
      {
        title: "Management table",
        summary: "Aterriza visión, cultura, business plan, prioridades y decisiones de capital.",
      },
    ],
  },
  cadence: {
    title: "Cadence",
    summary:
      "La cadencia existe para evitar improvisación crónica. Cada ritmo tiene un propósito específico y responsables claros.",
    rituals: [
      {
        cadence: "Mensual",
        focus: "Dashboard, cash review, ventas, prioridades de 30 días y coaching del aliado.",
        owner: "Aliado + manager Cataliza",
      },
      {
        cadence: "Trimestral",
        focus: "Reforecast, revisión de milestones, decisiones de crédito y salud del equipo.",
        owner: "Management table",
      },
      {
        cadence: "Anual",
        focus: "Business plan, budget, visión, objetivos culturales y mapa de ecosistema.",
        owner: "Aliado + Consejo",
      },
    ],
  },
  incentives: {
    title: "Incentives and bonuses",
    summary:
      "Los incentivos deben premiar resultado con disciplina, no volumen sin calidad. El hub gana cuando el aliado gana de forma saludable.",
    levers: [
      {
        title: "Bono por salud financiera",
        summary: "Se activa por margen bruto, disciplina de caja y mejora de runway.",
      },
      {
        title: "Bono por milestones",
        summary: "Premia el cumplimiento de roadmap comercial y operativo por trimestre.",
      },
      {
        title: "Bono por calidad de sistema",
        summary: "Reconoce reporting confiable, cierres a tiempo y adopción de herramientas críticas.",
      },
    ],
  },
  milestones: {
    title: "Milestones por proyecto",
    summary:
      "Cada proyecto aterriza una secuencia mínima para pasar de claridad inicial a repetibilidad operativa.",
    items: [
      { quarter: "Q1", target: "Setup financiero y marca base", signal: "Presupuesto operativo y mensajes comerciales listos" },
      { quarter: "Q2", target: "Oferta y funnel disciplinados", signal: "Embudo medido y pricing validado" },
      { quarter: "Q3", target: "Repetibilidad comercial", signal: "Ingresos recurrentes o pipeline confiable" },
      { quarter: "Q4", target: "Optimización y crédito decreciente", signal: "Mayor cobertura de nómina por operación propia" },
    ],
  },
  dashboard: {
    title: "Dashboard",
    summary:
      "Ejemplo de dashboard para un proyecto semilla de Cataliza. Debe poder leerse en 10 minutos y orientar decisiones, no solo reportar números.",
    sampleProject: "Aliado ejemplo 2026 — Casa Taller",
    budgetRows: [
      { label: "Ingresos", amount: 280000 },
      { label: "Costo directo", amount: -98000 },
      { label: "Nómina core", amount: -72000 },
      { label: "Marketing & design", amount: -24000 },
      { label: "Software y sistemas", amount: -12000 },
      { label: "Flujo operativo", amount: 74000 },
    ],
    metrics: [
      { label: "Burn mensual", value: "USD 9,500" },
      { label: "Runway", value: "14 meses" },
      { label: "Margen bruto", value: "65%" },
      { label: "Lead-to-close", value: "21%" },
    ],
  },
};
