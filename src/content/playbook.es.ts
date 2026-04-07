import type { PlaybookCopy } from "@/content/playbook";

export const playbookCopyEs: PlaybookCopy = {
  meta: {
    title: "Cataliza Capital | Playbook interno",
    description:
      "Playbook operativo de Cataliza: modelo operativo, estrategia, benchmarks, operacion AI-native, ecosistema y dashboard por proyecto.",
  },
  hero: {
    title: "Playbook interno",
    summary: "Este playbook traduce la tesis en operacion diaria y estructura de decision.",
    stats: [
      { label: "Servicios compartidos", value: "5 funciones" },
      { label: "Cadencias", value: "mensual / trimestral / anual" },
      { label: "Operacion", value: "AI-native + humana" },
    ],
  },
  operatingModel: {
    title: "Modelo operativo",
    summary: "Modelo operativo: Aliado + Management + Hub, con shared services y estructura clara.",
    sharedServices: [
      {
        title: "Planeacion financiera",
        summary: "Fondeo, cashflow, receivables/payables, modelaje y controles.",
      },
      {
        title: "Operaciones y sistemas",
        summary: "ERP, procesos, flujo de informacion y herramientas tecnologicas.",
      },
      {
        title: "Legal, contable y fiscal",
        summary: "Regularizacion y cumplimiento con autoridades.",
      },
      {
        title: "Marketing y diseno",
        summary: "Branding, materiales de venta y digital media.",
      },
      {
        title: "Inclusion & Impact",
        summary:
          "Legitimidad institucional de Cataliza, estandares de impacto e igualdad, y prueba publica de valor del aliado del ano.",
      },
    ],
    governance: [
      {
        title: "Aliado",
        summary: "Persona lider del proyecto. Vive el oficio, esta cerca del cliente y lidera la operacion core.",
      },
      {
        title: "Management",
        summary: "Aliado + managers de Cataliza. Define vision, cultura, business plan y prioridades.",
      },
      {
        title: "Hub",
        summary: "Ejecuta shared services, seguimiento operativo y soporte continuo para el negocio.",
      },
    ],
    structure: {
      title: "Estructura operativa",
      intro: "Mapa operativo que conecta consejo, ecosistema, Cataliza, Management, aliado, Hub y equipos del aliado.",
      note: "El mapa vive aqui como referencia interna y tambien aparece en la landing publica para explicar el modelo.",
      alt: "Mapa operativo de Cataliza Capital que muestra consejo, ecosistema, Cataliza, Management, aliado, Hub y equipos liderados por el aliado.",
      layers: [
        { title: "Consejo / ecosistema", items: ["Consejo", "Ecosistema"] },
        { title: "Cataliza", items: ["Cataliza Capital"] },
        { title: "Management", items: ["Management"] },
        { title: "Aliado", items: ["Aliado"] },
        { title: "Hub", items: ["Hub"] },
        { title: "Equipos liderados por el aliado", items: ["Produccion / servicio", "Ventas", "Equipo core"] },
      ],
    },
  },
  values: {
    title: "Valores",
    summary: "Traducimos oficio en procesos, calidad, disciplina y juego largo.",
    transformTitle: "Transformar",
    transformSummary: "Elevar estandares sin perder identidad.",
    items: [
      { title: "Care", summary: "Cuidamos personas y estandares." },
      { title: "Calm", summary: "Claridad por encima del caos." },
      { title: "Craft", summary: "Excelencia en oficio." },
      { title: "Culture", summary: "Lo inspirador eleva el entorno." },
      { title: "Curiosity", summary: "Preguntar mejor, aprender rapido." },
      { title: "Continuity", summary: "Juego largo y consistencia." },
    ],
    behaviorsTitle: "Comportamientos del dia a dia",
    behaviors: [
      "Documentar.",
      "Profesionalizar.",
      "Cuidar calidad.",
      "Sostener identidad.",
      "Medir avance.",
      "Repartir valor.",
    ],
  },
  strategy: {
    title: "Estrategia",
    summary:
      "La estrategia parte de excelencia creativa con impacto territorial y busca abrir mercados de alto valor sin perdida de identidad.",
    chainTitle: "Cadena estrategica",
    chain: [
      "Aliado con excelencia creativa + impacto territorial.",
      "Cataliza entra para potenciar acceso a mercados de alto valor.",
      "El resultado aumenta orgullo y autoestima local.",
    ],
    riskTitle: "Riesgo explicito",
    riskSummary:
      "Cuando la cultura se vuelve marca o industria, existe riesgo de captura por elites o comercializacion vacia.",
    responseTitle: "Respuesta obligatoria",
    responseSummary: "Disenar mecanismos explicitos de inclusion y reparto de beneficios.",
    fieldsTitle: "Campos obligatorios por proyecto",
    fields: [
      {
        title: "Mecanismo de elevacion",
        summary: "Como sube estandares, visibilidad, profesionalizacion o legitimidad.",
      },
      {
        title: "Impacto en entorno",
        summary: "Que cambia en empleo, ingresos, mercado, alianzas o infraestructura social.",
      },
      {
        title: "Impacto en cultura",
        summary: "Que cambia en practicas, identidad, narrativa, memoria o transmision.",
      },
      {
        title: "Inclusion y reparto",
        summary: "Como evita captura, como reparte beneficios, y como protege coautoria y legitimidad.",
      },
      {
        title: "Ruta a mercados",
        summary: "Que mercados de mayor valor abre y sin que perdida de identidad.",
      },
    ],
  },
  cadence: {
    title: "Cadencia",
    summary: "Ritmos mensuales, trimestrales y anuales para revisar operacion, decisiones y seguimiento.",
    labels: {
      cadence: "Cadencia",
      focus: "Foco",
      owner: "Responsable",
    },
    rituals: [
      {
        cadence: "Mensual",
        focus: "Dashboard, cash review, ventas, prioridades de 30 dias y coaching del aliado.",
        owner: "Aliado + manager Cataliza",
      },
      {
        cadence: "Trimestral",
        focus: "Revision de milestones, decisiones de credito, reforecast y salud del equipo.",
        owner: "Management",
      },
      {
        cadence: "Anual",
        focus: "Business plan, budget, vision, objetivos culturales y mapa de ecosistema.",
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
    summary: "Roadmap de 12 meses con milestones claros para ordenar la ejecucion.",
    items: [
      { quarter: "Q1", target: "Setup financiero y marca base", signal: "Presupuesto operativo y mensajes comerciales listos" },
      { quarter: "Q2", target: "Oferta y funnel disciplinados", signal: "Embudo medido y pricing validado" },
      { quarter: "Q3", target: "Repetibilidad comercial", signal: "Ingresos recurrentes o pipeline confiable" },
      { quarter: "Q4", target: "Optimizacion y credito decreciente", signal: "Mayor cobertura de nomina por operacion propia" },
    ],
  },
  benchmarks: {
    title: "Benchmarks",
    summary: "Casos de referencia para codificar mecanismo, entorno, cultura y takeaway operativo.",
    labels: {
      mechanism: "Mecanismo",
      environment: "Entorno",
      culture: "Cultura",
      takeaway: "Takeaway",
    },
    cases: [
      {
        title: "Astrid y Gaston",
        mechanism: "Restaurante + escuela como institucionalizacion de excelencia.",
        environment: "Comercio justo y acceso a mercados de alto valor para productores.",
        culture: "Orgullo y autoestima nacional via cocina.",
        takeaway: "Excelencia + formacion + cadena justa.",
      },
      {
        title: "Olinda Silvano / Kene Kaya",
        mechanism: "Arte indigena con curaduria, conversacion publica y pago justo.",
        environment: "Liderazgo comunitario, visibilidad y sosten territorial.",
        culture: "Identidad viva, no artesania folclorizada.",
        takeaway: "Visibilidad global con autoria y comunidad.",
      },
      {
        title: "Colectivo 1050°",
        mechanism: "Diseno contemporaneo + tecnicas tradicionales + capacitacion.",
        environment: "Economia digna con gobernanza cooperativa.",
        culture: "Barro como identidad viva, no souvenir.",
        takeaway: "Coautoria real y voz/voto.",
      },
      {
        title: "Teatro a Mil",
        mechanism: "Fundacion + programacion sostenida + alianzas publicas y privadas.",
        environment: "Impacto urbano y territorial por acceso y circulacion.",
        culture: "Teatro de calidad como bien publico visible.",
        takeaway: "Continuidad requiere estructura.",
      },
      {
        title: "Cojolya",
        mechanism: "Pedagogia tecnica + control de calidad + mercado justo.",
        environment: "Educacion, salud, formacion productiva y segundo ingreso.",
        culture: "Preservacion del tejido como practica viva.",
        takeaway: "Comercio justo + programa social.",
      },
    ],
  },
  council: {
    title: "Consejo",
    summary: "Board of Advisors organizado en tres pilares.",
    pillars: [
      {
        title: "Vision / Estrategia",
        summary: "Consejo para vision, posicionamiento y decisiones de largo plazo.",
        members: ["Benjamin Beja", "Mauricio Fabre", "Javier Arrigunaga"],
      },
      {
        title: "Impacto / Cultura",
        summary: "Personas que entienden impacto real, cultura y oficio.",
        members: [
          "Ricardo Lopez C",
          "Barbara Sanchez-Kane",
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
  aiNative: {
    title: "Operacion AI-native",
    summary: "La IA prepara, ordena, documenta y acelera. El aliado, Management y el Hub deciden.",
    automateTitle: "Automatizar",
    automate: [
      "Resumenes.",
      "Follow-up.",
      "Cash notes.",
      "Checklists legales y operativos.",
      "Briefs.",
      "Memoria de proyecto.",
    ],
    humanTitle: "Humano-led",
    human: [
      "Vision.",
      "Cultura.",
      "Pricing.",
      "Credito.",
      "Relacion con cliente.",
      "Direccion creativa.",
      "Aprobacion legal.",
    ],
    ruleLabel: "Regla",
    rule: "Nada critico sale sin responsable humano.",
    ritualsTitle: "Rituales minimos",
    rituals: [
      "Review semanal de operacion.",
      "Review mensual de caja y milestones.",
      "Audit mensual de memoria del proyecto.",
    ],
  },
  ecosystem: {
    title: "Ecosistema",
    summary: "Certificaciones, ecosistemas, partnerships y speaker strategy como sistema operativo de legitimidad y visibilidad.",
    signalsTitle: "Senales que conviene buscar",
    signals: [
      {
        title: "Legitimidad plataforma",
        items: [
          "Distintivo ESR",
          "Empresa B",
          "Pacto Global Red Mexico",
          "NMX-R-025",
          "Impact Principles si Cataliza opera como vehiculo de inversion/impacto",
        ],
      },
      {
        title: "Prueba publica del aliado",
        items: [
          "Premio Eugenio Garza Sada",
          "LATAM Smart City Awards",
          "Premio CEMEX-TEC",
          "FLII",
          "INCmty",
          "Talent Land",
        ],
      },
    ],
    ecosystemsTitle: "Ecosistemas prioritarios",
    ecosystems: [
      {
        title: "Capital / estandares",
        items: ["AMIIX", "FLII", "New Ventures", "Promotora Social Mexico"],
      },
      {
        title: "Comunidad / legitimidad",
        items: ["Sistema B Mexico", "Impact Hub CDMX"],
      },
      {
        title: "Narrativa / visibilidad",
        items: ["Disruptivo", "INCmty", "Talent Land", "Smart City Expo LATAM"],
      },
    ],
    partnershipsTitle: "Triangulo de partnerships",
    partnershipsSummary:
      "Universidades = pipeline + legitimidad + laboratorios. Ecosistemas y eventos = visibilidad + speaking + deal-flow. Redes de capital/impacto = coinversion + estandares + conexiones internacionales.",
    partnerships: [
      {
        title: "Universidades",
        items: ["Tecnologico de Monterrey", "ITAM / EPIC Lab", "Ibero", "UDG", "UANL"],
      },
      {
        title: "Capital / impacto",
        items: ["AIIMX", "New Ventures", "Promotora Social Mexico", "Sistema B"],
      },
      {
        title: "Visibilidad / escenarios",
        items: ["Disruptivo", "INCmty", "Talent Network", "Smart City Expo LATAM"],
      },
    ],
    speakerTitle: "Speaker strategy",
    speakerTopicsTitle: "Temas ancla",
    speakerTopics: [
      "El oficio como motor economico.",
      "Grant + credito con milestones.",
      "Shared services como infraestructura de impacto.",
      "Impacto medible con negocio sano.",
      "Cultura operable: Care, Calm, Craft, Culture, Curiosity, Continuity en practicas concretas.",
    ],
    speakerCadence: "Cadencia: 6 piezas pilar por ano + 12 micro-piezas.",
    speakerKitTitle: "Speaker kit",
    speakerKit: [
      "Bio 80 / 160 / 320.",
      "Menu de 5 talks.",
      "One-slide Cataliza en 30 segundos.",
      "3 casos.",
    ],
    speakerKpisTitle: "KPIs trimestrales",
    speakerKpis: [
      "2 a 4 apariciones.",
      "5 conversaciones calificadas -> 2 pilotos.",
      "30 a 60 leads.",
      "1 colaboracion o mencion mensual.",
    ],
  },
  dashboard: {
    title: "Dashboard",
    summary: "Vista mensual de presupuesto, caja, conversion e impacto definido por proyecto.",
    sampleProject: "Ejemplo de dashboard de proyecto",
    snapshotTitle: "Snapshot operativo",
    budgetTitle: "Presupuesto",
    definitionsTitle: "Como leer las metricas",
    budgetRows: [
      { label: "Ingresos", amount: 280000 },
      { label: "Costo directo", amount: -98000 },
      { label: "Nomina core", amount: -72000 },
      { label: "Marketing y diseno", amount: -24000 },
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
        summary: "Ingresos menos costo directo, antes de nomina y gastos operativos.",
      },
      {
        label: "Lead-to-close",
        value: "21%",
        summary: "Porcentaje de leads que se convierten en ventas cerradas.",
      },
      {
        label: "KPI de impacto (definir por proyecto)",
        value: "Por definir",
        summary: "Se define segun el cambio que cada proyecto busca lograr y como lo mide.",
      },
    ],
  },
};
