import type { PlaybookCopy } from "@/content/playbook";

export const playbookCopyEs: PlaybookCopy = {
  meta: {
    title: "Cataliza Capital | Playbook",
    description:
      "Playbook operativo de Cataliza: modelo operativo, estrategia, benchmarks, Hub AI Native, ecosistema y dashboard de costos del Hub.",
  },
  hero: {
    title: "Playbook",
    summary: "Este playbook traduce la tesis en operación diaria y estructura de decisión.",
    stats: [
      {
        value: "5 funciones",
        label: "Servicios compartidos",
        details: [
          "Finanzas / planeación",
          "Legal / fiscal / contable",
          "Operaciones y sistemas",
          "Marketing / diseño",
          "Impact & Inclusion",
        ],
      },
      {
        value: "Doble impacto",
        label: "Utilidades e impacto social",
        note: "El modelo busca alinear utilidades sanas con impacto social verificable en el entorno del aliado.",
      },
      {
        value: "AI Native + humana",
        label: "Operación",
        note: "La IA prepara, ordena y reduce fricción; el humano decide, valida y cuida el criterio.",
      },
    ],
  },
  operatingModel: {
    title: "Modelo operativo",
    summary: "Modelo operativo: Aliado + Management + Hub, con shared services y una estructura clara.",
    sharedServices: [
      {
        title: "Finanzas / planeación",
        summary: "Caja, planeación financiera, control y visibilidad operativa para sostener disciplina de negocio.",
      },
      {
        title: "Legal / fiscal / contable",
        summary: "Cumplimiento, regularización y soporte para decisiones con trazabilidad.",
      },
      {
        title: "Operaciones y sistemas",
        summary: "Procesos, automatización, información estructurada y herramientas base del negocio.",
      },
      {
        title: "Marketing / diseño",
        summary: "Materiales comerciales, identidad y activos mínimos para comunicar y vender mejor.",
      },
      {
        title: "Impact & Inclusion",
        summary: "Infraestructura de impacto, evidencia, legitimidad y cuidado de los estándares de inclusión.",
      },
    ],
    governance: [
      {
        title: "Aliado",
        summary: "Persona líder del proyecto. Vive el oficio, está cerca del cliente y lidera la operación core.",
      },
      {
        title: "Management",
        summary: "Aliado + manager de Cataliza. Define visión, cultura, business plan y prioridades.",
      },
      {
        title: "Hub",
        summary: "Ejecuta shared services, seguimiento operativo y soporte continuo para el negocio.",
      },
    ],
    structure: {
      title: "Estructura operativa",
      intro: "Referencia visual del modelo operativo actual de Cataliza.",
      note: "Esta imagen reemplaza el mapa anterior y se mantiene como guía interna del flujo entre consejo, management, fondeo y Hub.",
      alt: "Estructura operativa de Cataliza Capital con Board of Advisors, management, fondeo híbrido y shared services modern hub.",
      imageSrc: "/playbook-estructura-operativa.png",
    },
  },
  values: {
    title: "Valores",
    summary: "Principios que guían la operación diaria del Hub y la relación con cada aliado.",
    items: [
      "Cuidamos personas y estándares de calidad.",
      "Afrontamos lo desconocido con curiosidad y esfuerzo.",
      "Claridad por encima del caos.",
      "Lo que inspira causa orgullo y eleva nuestro entorno.",
      "Es nuestra responsabilidad elevar las oportunidades de los que nos rodean.",
    ],
  },
  strategy: {
    title: "Estrategia",
    summary:
      "La estrategia parte de excelencia creativa con impacto territorial y busca abrir mercados de alto valor sin pérdida de identidad.",
    chainTitle: "Cadena estratégica",
    chain: [
      "Aliado con excelencia creativa + impacto territorial.",
      "Cataliza entra para potenciar acceso a mercados de alto valor.",
      "El resultado aumenta orgullo y autoestima local.",
    ],
    riskTitle: "Riesgo explícito",
    riskSummary:
      "Cuando la cultura se vuelve marca o industria, existe riesgo de captura por élites o comercialización vacía.",
    responseTitle: "Respuesta obligatoria",
    responseSummary: "Diseñar mecanismos explícitos de inclusión y reparto de beneficios.",
    fieldsTitle: "Campos obligatorios por proyecto",
    fields: [
      {
        title: "Mecanismo de elevación",
        summary: "Cómo sube estándares, visibilidad, profesionalización o legitimidad.",
      },
      {
        title: "Impacto en entorno",
        summary: "Qué cambia en empleo, ingresos, mercado, alianzas o infraestructura social.",
      },
      {
        title: "Impacto en cultura",
        summary: "Qué cambia en prácticas, identidad, narrativa, memoria o transmisión.",
      },
      {
        title: "Inclusión y reparto",
        summary: "Cómo evita captura, cómo reparte beneficios y cómo protege coautoría y legitimidad.",
      },
      {
        title: "Ruta a mercados",
        summary: "Qué mercados de mayor valor abre y sin pérdida de identidad.",
      },
    ],
  },
  cadence: {
    title: "Cadencia",
    summary: "Ritmos operativos para revisar, decidir y dar seguimiento con trazabilidad.",
    labels: {
      cadence: "Cadencia",
      focus: "Qué revisar y decidir",
    },
    rituals: [
      {
        cadence: "Diaria (si aplica)",
        focus:
          "Check-in asíncrono de 10 min dentro del Hub. Revisar bloqueos, vencimientos, cobros y pendientes rojos. Decidir reasignación de tareas y escalamiento de incidentes.",
      },
      {
        cadence: "Semanal",
        focus:
          "Revisión operativa aliado + Hub, revisión comercial y revisión de caja/cobranza. Revisar pipeline, entregables, riesgos y próximos 14 días. Decidir prioridades de la semana, follow-up comercial y acciones de caja.",
      },
      {
        cadence: "Mensual",
        focus:
          "Cierre + dashboard + business review. Revisar P&L, cashflow, cumplimiento, impacto y avances de milestones. Decidir ajustes de presupuesto, foco mensual y liberación o no de hitos.",
      },
      {
        cadence: "Trimestral",
        focus:
          "Reset estratégico + comité + advisors/ecosistema. Revisar tesis, cultura, growth, riesgo y alianzas. Decidir repriorización, uso de capital y cambios mayores.",
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
    summary: "Roadmap de 12 meses con milestones claros para ordenar la ejecución.",
    items: [
      {
        quarter: "Q1",
        target: "Setup financiero y marca base",
        signal: "Presupuesto operativo y mensajes comerciales listos",
      },
      {
        quarter: "Q2",
        target: "Oferta y funnel disciplinados",
        signal: "Embudo medido y pricing validado",
      },
      {
        quarter: "Q3",
        target: "Repetibilidad comercial",
        signal: "Ingresos recurrentes o pipeline confiable",
      },
      {
        quarter: "Q4",
        target: "Optimización y crédito decreciente",
        signal: "Mayor cobertura de nómina por operación propia",
      },
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
        title: "Astrid y Gastón",
        mechanism: "Restaurante + escuela como institucionalización de excelencia.",
        environment: "Comercio justo y acceso a mercados de alto valor para productores.",
        culture: "Orgullo y autoestima nacional vía cocina.",
        takeaway: "Excelencia + formación + cadena justa.",
      },
      {
        title: "Olinda Silvano / Kene Kaya",
        mechanism: "Arte indígena con curaduría, conversación pública y pago justo.",
        environment: "Liderazgo comunitario, visibilidad y sostén territorial.",
        culture: "Identidad viva, no artesanía folclorizada.",
        takeaway: "Visibilidad global con autoría y comunidad.",
      },
      {
        title: "Colectivo 1050°",
        mechanism: "Diseño contemporáneo + técnicas tradicionales + capacitación.",
        environment: "Economía digna con gobernanza cooperativa.",
        culture: "Barro como identidad viva, no souvenir.",
        takeaway: "Coautoría real y voz/voto.",
      },
      {
        title: "Teatro a Mil",
        mechanism: "Fundación + programación sostenida + alianzas públicas y privadas.",
        environment: "Impacto urbano y territorial por acceso y circulación.",
        culture: "Teatro de calidad como bien público visible.",
        takeaway: "Continuidad requiere estructura.",
      },
      {
        title: "Cojolya",
        mechanism: "Pedagogía técnica + control de calidad + mercado justo.",
        environment: "Educación, salud, formación productiva y segundo ingreso.",
        culture: "Preservación del tejido como práctica viva.",
        takeaway: "Comercio justo + programa social.",
      },
    ],
  },
  council: {
    title: "Consejo",
    summary: "Board of Advisors organizado en tres pilares.",
    pillars: [
      {
        title: "Visión / Estrategia",
        summary: "Consejo para visión, posicionamiento y decisiones de largo plazo.",
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
    title: "Operación AI Native",
    summary: "La IA quita fricción; el humano conserva criterio.",
    executiveTitle: "Resumen ejecutivo",
    executive: [
      {
        title: "Qué es el Hub",
        summary:
          "El Hub de Servicios Compartidos AI Native de Cataliza debe ser una pequeña máquina operativa que toma la carga de negocio que más distrae al aliado: finanzas, sistemas, cumplimiento, reporting, materiales comerciales e infraestructura de impacto.",
      },
      {
        title: "Para qué existe",
        summary:
          "Existe para que un aliado con oficio y talento no se ahogue en administración, y pueda dedicar su mejor energía a producir, vender, servir y fortalecer su entorno.",
      },
      {
        title: "Qué problema resuelve",
        summary:
          "Resuelve el hueco entre “hay una buena tesis” y “hay una empresa sana”. Ese hueco suele comerse al fundador: caja confusa, procesos informales, información dispersa, cumplimiento reactivo, marketing improvisado y decisiones sin trazabilidad.",
      },
    ],
    principlesTitle: "Principios de diseño del Hub AI Native",
    principles: [
      "Centralizar lo repetible, no el oficio.",
      "Un dueño humano por flujo.",
      "IA primero para preparar; humano para decidir.",
      "Pocos sistemas, una sola verdad.",
      "Captura estructurada desde el día 1.",
      "Governance por umbrales, no por burocracia.",
      "Diseñar simple hoy, escalable mañana.",
    ],
    blueprintTitle: "Blueprint del Hub",
    blueprint: [
      {
        title: "Finanzas y capital",
        owner: "Owner: Finance & Compliance Manager.",
        ai: "IA: forecast asistido, alertas de desvío, borradores de cobranza.",
        deliverables: "Entregables: cashflow 13 semanas, P&L mensual, aging AR/AP, milestone tracker.",
        kpi: "KPI: precisión del cash forecast.",
      },
      {
        title: "Operaciones y sistemas",
        owner: "Owner: Systems & AI Ops Manager.",
        ai: "IA: formularios, ruteo de tareas, sync de datos, resúmenes operativos.",
        deliverables: "Entregables: mapa de procesos, base operativa, permisos, automatizaciones core.",
        kpi: "KPI: % de flujos críticos estandarizados.",
      },
      {
        title: "Legal-contable-fiscal",
        owner: "Owner: Finance Manager + despacho externo.",
        ai: "IA: checklists, extracción de cláusulas, recordatorios.",
        deliverables: "Entregables: calendario de cumplimiento, carpeta legal, estatus de obligaciones.",
        kpi: "KPI: % de obligaciones a tiempo.",
      },
      {
        title: "Comercial / CRM",
        owner: "Owner: Growth Manager + líder del aliado.",
        ai: "IA: resumen de reuniones, siguientes pasos, higiene de pipeline.",
        deliverables: "Entregables: pipeline, etapas, forecast semanal, historial comercial.",
        kpi: "KPI: cobertura de pipeline a 90 días.",
      },
      {
        title: "Marketing-Design",
        owner: "Owner: Growth Manager.",
        ai: "IA: primeros borradores de copy, adaptación de piezas, versionado.",
        deliverables: "Entregables: one-pager, deck, sitio/copy base, casos.",
        kpi: "KPI: tiempo de publicación de activos críticos.",
      },
      {
        title: "Impact & Inclusion",
        owner: "Owner: Growth / Impact Lead.",
        ai: "IA: síntesis de evidencia, drafts de reportes, mapeo de aliados.",
        deliverables: "Entregables: tesis de impacto, north star metric, log de evidencia, mapa de alianzas.",
        kpi: "KPI: % de evidencia de impacto al día.",
      },
      {
        title: "Onboarding y dashboard",
        owner: "Owner: Hub Lead / Operating Partner.",
        ai: "IA: resúmenes mensuales, risk flags, draft de comité.",
        deliverables: "Entregables: plan 30-60, dashboard mensual, decision log.",
        kpi: "KPI: días de onboarding a dashboard-live.",
      },
    ],
    operatingTitle: "Modelo operativo AI Native",
    sequenceLabel: "Secuencia operativa obligatoria",
    sequence: "captura estructurada → IA prepara → humano decide → automatización ejecuta → sistema registra",
    humanTitle: "Qué hace el humano",
    human: [
      "Define criterio.",
      "Decide prioridades.",
      "Negocia.",
      "Aprueba gasto.",
      "Valida contratos.",
      "Cuida reputación.",
      "Corrige excepciones.",
      "Sostiene la relación con el aliado.",
    ],
    aiTitle: "Qué hace la IA",
    ai: [
      "Resume reuniones.",
      "Arma minutas.",
      "Propone siguientes pasos.",
      "Redacta borradores.",
      "Ordena evidencia.",
      "Detecta desviaciones de caja / pipeline.",
      "Convierte texto en tareas.",
      "Prepara reportes mensuales.",
    ],
    reviewTitle: "Revisión humana obligatoria",
    review: [
      "Presupuesto.",
      "Pricing.",
      "Drawdowns.",
      "Liberación de milestones.",
      "Contratos.",
      "Temas fiscales.",
      "Claims públicos de impacto.",
      "Comunicaciones sensibles.",
      "Contrataciones clave.",
      "Excepciones a política.",
    ],
    standardizeTitle: "Estandarizar desde el día 1",
    standardize: [
      "Nombres de archivos.",
      "Estructura de carpetas.",
      "Master data.",
      "Onboarding template.",
      "Plantilla de reunión.",
      "Checklist de cierre mensual.",
      "Matriz de aprobación.",
      "Decision log.",
      "Formato de dashboard.",
    ],
    escalationTitle: "Escalamiento",
    escalation: [
      "Operativo rutinario → owner funcional.",
      "Cambio relevante de presupuesto o compromiso comercial → aliado + Hub Lead.",
      "Riesgo legal, fiscal, reputacional, financiamiento o cambio de tesis → comité.",
    ],
    rhythmsTitle: "Ritmos operativos",
    rhythms:
      "Evitar reuniones diarias síncronas con el aliado salvo que la operación lo exija. Mejor pocas reuniones buenas y mucha trazabilidad.",
    teamTitle: "Equipo inicial",
    teamSummary: "Arrancar con 4 roles núcleo y especialistas fraccionales.",
    team: [
      "Hub Lead / Operating Partner",
      "Finance & Compliance Manager",
      "Systems & AI Ops Manager",
      "Growth & Impact Manager",
      "Despacho contable-fiscal + asesor legal (fraccional)",
    ],
    avoidTitle: "No crear al inicio",
    avoid: [
      "CFO full-time",
      "Abogado interno",
      "Equipo de diseño",
      "Data engineer",
      "Head of AI",
      "RH completo",
      "PMO separado",
    ],
  },
  ecosystem: {
    title: "Ecosistema",
    summary: "Certificaciones, ecosistemas, partnerships y speaker strategy como sistema operativo de legitimidad y visibilidad.",
    signalsTitle: "Señales que conviene buscar",
    signals: [
      {
        title: "Legitimidad plataforma",
        items: [
          "Distintivo ESR",
          "Empresa B",
          "Pacto Global Red México",
          "NMX-R-025",
          "Impact Principles si Cataliza opera como vehículo de inversión / impacto",
        ],
      },
      {
        title: "Prueba pública del aliado",
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
        title: "Capital / estándares",
        items: ["AMIIX", "FLII", "New Ventures", "Promotora Social México"],
      },
      {
        title: "Comunidad / legitimidad",
        items: ["Sistema B México", "Impact Hub CDMX"],
      },
      {
        title: "Narrativa / visibilidad",
        items: ["Disruptivo", "INCmty", "Talent Land", "Smart City Expo LATAM"],
      },
    ],
    partnershipsTitle: "Triángulo de partnerships",
    partnershipsSummary:
      "Universidades = pipeline + legitimidad + laboratorios. Ecosistemas y eventos = visibilidad + speaking + deal-flow. Redes de capital / impacto = coinversión + estándares + conexiones internacionales.",
    partnerships: [
      {
        title: "Universidades",
        items: ["Tecnológico de Monterrey", "ITAM / EPIC Lab", "Ibero", "UDG", "UANL"],
      },
      {
        title: "Capital / impacto",
        items: ["AIIMX", "New Ventures", "Promotora Social México", "Sistema B"],
      },
      {
        title: "Visibilidad / escenarios",
        items: ["Disruptivo", "INCmty", "Talent Network", "Smart City Expo LATAM"],
      },
    ],
    speakerTitle: "Speaker strategy",
    speakerTopicsTitle: "Temas ancla",
    speakerTopics: [
      "El oficio como motor económico.",
      "Grant + crédito con milestones.",
      "Shared services como infraestructura de impacto.",
      "Impacto medible con negocio sano.",
      "Cultura operable: Care, Calm, Craft, Culture, Curiosity, Continuity en prácticas concretas.",
    ],
    speakerCadence: "Cadencia: 6 piezas pilar por año + 12 micro-piezas.",
    speakerKitTitle: "Speaker kit",
    speakerKit: [
      "Bio 80 / 160 / 320.",
      "Menú de 5 talks.",
      "One-slide Cataliza en 30 segundos.",
      "3 casos.",
    ],
    speakerKpisTitle: "KPIs trimestrales",
    speakerKpis: [
      "2 a 4 apariciones.",
      "5 conversaciones calificadas -> 2 pilotos.",
      "30 a 60 leads.",
      "1 colaboración o mención mensual.",
    ],
  },
  dashboard: {
    title: "Dashboard",
    summary: "Vista anual de costos de operación del Hub alineada al modelo financiero base.",
    snapshotTitle: "Snapshot del Hub",
    definitionsTitle: "Cómo leer el dashboard",
    metrics: [
      {
        label: "Costo total del Hub",
        summary: "Costo anual total de operar el Hub, incluyendo estructura interna, oficina, software y red externa / otros.",
      },
      {
        label: "Burn mensual",
        summary: "Costo mensual promedio necesario para sostener la operación del Hub ese año.",
      },
      {
        label: "Runway",
        summary: "Meses que puede operar el Hub con la caja disponible al burn del primer año.",
      },
      {
        label: "FTE núcleo",
        summary: "Headcount interno activo por año, sin contar la red externa fraccional.",
      },
    ],
    annualCategoryTitle: "Costos del Hub por año",
  },
};
