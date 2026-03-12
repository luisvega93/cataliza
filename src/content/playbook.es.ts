import type { PlaybookCopy } from "@/content/playbook";

export const playbookCopyEs: PlaybookCopy = {
  meta: {
    title: "Cataliza Capital | Playbook interno",
    description:
      "Playbook operativo de Cataliza: servicios compartidos, cadencias, incentivos, consejo y ecosistema interno.",
  },
  hero: {
    eyebrow: "Playbook interno",
    title: "C\u00f3mo ejecuta Cataliza con consistencia, calma y accountability.",
    summary:
      "Este playbook traduce la tesis en operaci\u00f3n diaria. El objetivo no es solo ayudar al aliado, sino construir un sistema donde el Hub y el core puedan aprender, medir y corregir rumbo juntos.",
    stats: [
      { label: "Servicios compartidos", value: "4 funciones" },
      { label: "Cadencias", value: "mensual / trimestral / anual" },
      { label: "Bono Hub", value: "alineado a KPIs" },
    ],
  },
  operatingModel: {
    title: "Modelo operativo",
    summary:
      "Cataliza corre un modelo de servicios compartidos para liberar al aliado del trabajo administrativo cr\u00edtico sin desconectarlo del cliente ni de la verdad operacional.",
    sharedServices: [
      {
        title: "Finanzas y planeaci\u00f3n",
        summary: "Cashflow, presupuesto, unit economics, receivables/payables y estructura de fondeo.",
      },
      {
        title: "Operaciones y sistemas",
        summary: "ERP, procesos, automatizaciones, reporting y gobierno de informaci\u00f3n.",
      },
      {
        title: "Legal, fiscal y contable",
        summary: "Cumplimiento, regularizaci\u00f3n y dise\u00f1o de controles m\u00ednimos viables.",
      },
      {
        title: "Marketing y dise\u00f1o",
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
        summary: "Conduce el Hub, sincroniza shared services y asegura ritmo de ejecuci\u00f3n.",
      },
      {
        title: "Management table",
        summary: "Aterriza visi\u00f3n, cultura, business plan, prioridades y decisiones de capital.",
      },
    ],
  },
  cadence: {
    title: "Cadencia",
    summary:
      "La cadencia existe para evitar improvisaci\u00f3n cr\u00f3nica. Cada ritmo tiene un prop\u00f3sito espec\u00edfico y responsables claros.",
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
        owner: "Management table",
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
    summary:
      "Los incentivos deben premiar resultado con disciplina, no volumen sin calidad. El Hub gana cuando el aliado gana de forma saludable.",
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
        summary: "Reconoce reporting confiable, cierres a tiempo y adopci\u00f3n de herramientas cr\u00edticas.",
      },
    ],
  },
  milestones: {
    title: "Hitos por proyecto",
    summary:
      "Cada proyecto aterriza una secuencia m\u00ednima para pasar de claridad inicial a repetibilidad operativa.",
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
      "Ejemplo de dashboard para un proyecto semilla de Cataliza. Debe poder leerse en 10 minutos y orientar decisiones, no solo reportar n\u00fameros.",
    sampleProject: "Aliado ejemplo 2026 - Casa Taller",
    budgetRows: [
      { label: "Ingresos", amount: 280000 },
      { label: "Costo directo", amount: -98000 },
      { label: "N\u00f3mina core", amount: -72000 },
      { label: "Marketing y dise\u00f1o", amount: -24000 },
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
