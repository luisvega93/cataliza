import type { PlaybookCopy } from "@/content/playbook";

export const playbookCopyEs: PlaybookCopy = {
  meta: {
    title: "Cataliza Capital | Playbook interno",
    description:
      "Playbook operativo de Cataliza: modelo operativo, cadencias, incentivos, consejo, ecosistema y dashboard por proyecto.",
  },
  hero: {
    title: "Playbook interno",
    summary:
      "Este playbook traduce la tesis en operaci\u00f3n diaria.",
    stats: [
      { label: "Servicios compartidos", value: "4 funciones" },
      { label: "Cadencias", value: "mensual / trimestral / anual" },
      { label: "Dashboard", value: "seguimiento mensual" },
    ],
  },
  operatingModel: {
    title: "Modelo operativo",
    summary:
      "El aliado lidera la operaci\u00f3n core y el Hub opera el negocio. Management define visi\u00f3n, cultura y business plan.",
    sharedServices: [
      {
        title: "Planeaci\u00f3n financiera",
        summary: "Fondeo, cashflow, receivables/payables, modelaje y controles.",
      },
      {
        title: "Operaciones y sistemas",
        summary: "ERP, procesos, flujo de info y herramientas tecnol\u00f3gicas.",
      },
      {
        title: "Legal, contable y fiscal",
        summary: "Regularizaci\u00f3n y cumplimiento con autoridades.",
      },
      {
        title: "Marketing y dise\u00f1o",
        summary: "Branding, materiales de venta y digital media.",
      },
    ],
    governance: [
      {
        title: "Aliado",
        summary: "Lidera la operaci\u00f3n core: producci\u00f3n/servicio y ventas cuando aplica.",
      },
      {
        title: "Manager Cataliza",
        summary: "Lidera el Hub en el d\u00eda a d\u00eda y coordina los servicios compartidos.",
      },
      {
        title: "Management",
        summary: "Aliado + managers de Cataliza. Define visi\u00f3n, cultura y business plan.",
      },
    ],
  },
  cadence: {
    title: "Cadencia",
    summary:
      "Ritmos mensuales, trimestrales y anuales para revisar operaci\u00f3n, decisiones y seguimiento.",
    labels: {
      cadence: "Cadencia",
      focus: "Foco",
      owner: "Responsable",
    },
    rituals: [
      {
        cadence: "Mensual",
        focus: "Dashboard, cash review, ventas, prioridades de 30 d\u00edas y coaching del aliado.",
        owner: "Aliado + manager Cataliza",
      },
      {
        cadence: "Trimestral",
        focus: "Reforecast, revisi\u00f3n de milestones, decisiones de cr\u00e9dito y salud del equipo.",
        owner: "Management",
      },
      {
        cadence: "Anual",
        focus: "Business plan, budget, visi\u00f3n, objetivos culturales y mapa de ecosistema.",
        owner: "Aliado + Consejo",
      },
    ],
  },
  incentives: {
    title: "Incentivos y bonos",
    summary: "Incentivos alineados entre resultados del aliado y del Hub.",
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
        title: "Bono por impacto generado",
        summary: "Reconoce avance medible en el objetivo de impacto definido para el proyecto.",
      },
    ],
  },
  milestones: {
    title: "Hitos por proyecto",
    summary: "Roadmap de 12 meses con milestones claros para ordenar la ejecuci\u00f3n.",
    items: [
      { quarter: "Q1", target: "Setup financiero y marca base", signal: "Presupuesto operativo y mensajes comerciales listos" },
      { quarter: "Q2", target: "Oferta y funnel disciplinados", signal: "Embudo medido y pricing validado" },
      { quarter: "Q3", target: "Repetibilidad comercial", signal: "Ingresos recurrentes o pipeline confiable" },
      { quarter: "Q4", target: "Optimizaci\u00f3n y cr\u00e9dito decreciente", signal: "Mayor cobertura de n\u00f3mina por operaci\u00f3n propia" },
    ],
  },
  council: {
    title: "Consejo",
    summary: "Board of Advisors organizado en tres pilares.",
    pillars: [
      {
        title: "Visi\u00f3n / Estrategia",
        summary: "Consejo para visi\u00f3n, posicionamiento y decisiones de largo plazo.",
        members: ["Benjamin Beja", "Mauricio Fabre", "Javier Arrigunaga"],
      },
      {
        title: "Impacto / Cultura",
        summary: "Personas que entienden impacto real, cultura y oficio.",
        members: [
          "Ricardo L\u00f3pez C",
          "B\u00e1rbara S\u00e1nchez-Kane",
          "Elena Reygadas",
          "Natalia Lafourcade",
          "Regina Sara Ryan",
          "Julio Amezcua",
        ],
      },
      {
        title: "Reach / Alcance global",
        summary: "Puentes a cohort, profesores y redes internacionales.",
        members: ["EMBA cohort members & professors", "Aunnie Patton Power"],
      },
    ],
  },
  ecosystem: {
    title: "Ecosistema",
    summary: "Preguntas internas para research, posicionamiento y alianzas.",
    prompts: [
      "\u00bfQu\u00e9 premios, certificaciones o reconocimientos queremos ganar y por qu\u00e9?",
      "\u00bfQu\u00e9 impact ecosystem en M\u00e9xico mapea mejor a nuestros proyectos?",
      "\u00bfC\u00f3mo integramos cada proyecto al ecosistema sin burocracia?",
      "\u00bfC\u00f3mo hacemos que los proyectos Cataliza sean l\u00edderes y speakers del ecosistema?",
      "\u00bfQu\u00e9 alianzas institucionales aceleran reach (universidades, ferias, clusters, etc.)?",
      "\u00bfC\u00f3mo conectamos el impact ecosystem en M\u00e9xico con Latinoam\u00e9rica, US y el mundo?",
    ],
  },
  dashboard: {
    title: "Dashboard",
    summary:
      "Vista mensual de presupuesto, caja, conversi\u00f3n e impacto definido por proyecto.",
    sampleProject: "Ejemplo de dashboard de proyecto",
    snapshotTitle: "Snapshot operativo",
    budgetTitle: "Presupuesto",
    definitionsTitle: "C\u00f3mo leer las m\u00e9tricas",
    budgetRows: [
      { label: "Ingresos", amount: 280000 },
      { label: "Costo directo", amount: -98000 },
      { label: "N\u00f3mina core", amount: -72000 },
      { label: "Marketing y dise\u00f1o", amount: -24000 },
      { label: "Software y sistemas", amount: -12000 },
      { label: "Flujo operativo", amount: 74000 },
    ],
    metrics: [
      {
        label: "Burn mensual",
        value: "USD 9,500",
        summary: "Caja neta que consume el proyecto cada mes cuando los egresos superan los ingresos.",
      },
      {
        label: "Runway",
        value: "14 meses",
        summary: "Meses que puede operar con la caja disponible al burn actual.",
      },
      {
        label: "Margen bruto",
        value: "65%",
        summary: "Ingresos menos costo directo, antes de n\u00f3mina y gastos operativos.",
      },
      {
        label: "Lead-to-close",
        value: "21%",
        summary: "Porcentaje de leads que se convierten en ventas cerradas.",
      },
      {
        label: "KPI de impacto (definir por proyecto)",
        value: "Por definir",
        summary: "Se define seg\u00fan el cambio que cada proyecto busca lograr y c\u00f3mo lo mide.",
      },
    ],
  },
};
