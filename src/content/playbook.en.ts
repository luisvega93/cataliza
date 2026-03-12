import type { PlaybookCopy } from "@/content/playbook";

export const playbookCopyEn: PlaybookCopy = {
  meta: {
    title: "Cataliza Capital | Internal playbook",
    description:
      "Cataliza operating playbook covering the operating model, cadence, incentives, council, ecosystem planning, and project dashboard.",
  },
  hero: {
    title: "Internal playbook",
    summary:
      "This playbook translates the thesis into day-to-day operations.",
    stats: [
      { label: "Shared services", value: "4 functions" },
      { label: "Cadences", value: "monthly / quarterly / yearly" },
      { label: "Dashboard", value: "monthly tracking" },
    ],
  },
  operatingModel: {
    title: "Operating model",
    summary:
      "The ally leads the core operation and the Hub runs the business. Management defines vision, culture, and business plan.",
    sharedServices: [
      {
        title: "Financial planning",
        summary: "Funding, cashflow, receivables/payables, modeling, and controls.",
      },
      {
        title: "Operations and systems",
        summary: "ERP, processes, information flow, and technology tools.",
      },
      {
        title: "Legal, accounting, and tax",
        summary: "Regularization and compliance with authorities.",
      },
      {
        title: "Marketing and design",
        summary: "Branding, sales materials, and digital media.",
      },
    ],
    governance: [
      {
        title: "Ally",
        summary: "Leads the core operation: production/service and sales where applicable.",
      },
      {
        title: "Cataliza manager",
        summary: "Leads the Hub day to day and coordinates shared services.",
      },
      {
        title: "Management",
        summary: "Ally + Cataliza managers. Defines vision, culture, and business plan.",
      },
    ],
  },
  cadence: {
    title: "Cadence",
    summary:
      "Monthly, quarterly, and yearly rhythms to review operations, decisions, and follow-up.",
    labels: {
      cadence: "Cadence",
      focus: "Focus",
      owner: "Owner",
    },
    rituals: [
      {
        cadence: "Monthly",
        focus: "Dashboard, cash review, sales, 30-day priorities, and ally coaching.",
        owner: "Ally + Cataliza manager",
      },
      {
        cadence: "Quarterly",
        focus: "Reforecast, milestone review, credit decisions, and team health.",
        owner: "Management",
      },
      {
        cadence: "Yearly",
        focus: "Business plan, budget, vision, cultural goals, and ecosystem map.",
        owner: "Ally + Council",
      },
    ],
  },
  incentives: {
    title: "Incentives and bonuses",
    summary: "Incentives aligned to the results of the ally and the Hub.",
    levers: [
      {
        title: "Financial health bonus",
        summary: "Triggered by gross margin, cash discipline, and runway improvement.",
      },
      {
        title: "Milestone bonus",
        summary: "Rewards delivery against the quarterly commercial and operating roadmap.",
      },
      {
        title: "Impact generated bonus",
        summary: "Recognizes measurable progress toward the project's defined impact goal.",
      },
    ],
  },
  milestones: {
    title: "Milestones per project",
    summary: "12-month roadmap with clear milestones to keep execution ordered.",
    items: [
      { quarter: "Q1", target: "Financial setup and base brand", signal: "Operating budget and commercial messaging ready" },
      { quarter: "Q2", target: "Disciplined offer and funnel", signal: "Measured pipeline and validated pricing" },
      { quarter: "Q3", target: "Commercial repeatability", signal: "Recurring revenue or trustworthy pipeline" },
      { quarter: "Q4", target: "Optimization and declining credit", signal: "Greater payroll coverage from operations" },
    ],
  },
  council: {
    title: "Council",
    summary: "Board of Advisors organized across three pillars.",
    pillars: [
      {
        title: "Vision / Strategy",
        summary: "Guidance on vision, positioning, and long-term decisions.",
        members: ["Benjamin Beja", "Mauricio Fabre", "Javier Arrigunaga"],
      },
      {
        title: "Impact / Culture",
        summary: "People who understand real impact, culture, and craft.",
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
        title: "Reach / Global reach",
        summary: "Bridges into cohort, professors, and international networks.",
        members: ["EMBA cohort members & professors", "Aunnie Patton Power"],
      },
    ],
  },
  ecosystem: {
    title: "Ecosystem",
    summary: "Internal questions for research, positioning, and partnerships.",
    prompts: [
      "Which awards, certifications, or recognitions do we want to win, and why?",
      "Which impact ecosystem in Mexico maps best to our projects?",
      "How do we integrate each project into the ecosystem without bureaucracy?",
      "How do we make Cataliza projects leaders and speakers within the ecosystem?",
      "Which institutional partnerships accelerate reach (universities, fairs, clusters, etc.)?",
      "How do we connect the impact ecosystem in Mexico with Latin America, the US, and the wider world?",
    ],
  },
  dashboard: {
    title: "Dashboard",
    summary:
      "Monthly view of budget, cash, conversion, and impact defined per project.",
    sampleProject: "Example project dashboard",
    snapshotTitle: "Operating snapshot",
    budgetTitle: "Budget",
    definitionsTitle: "How to read the metrics",
    budgetRows: [
      { label: "Revenue", amount: 280000 },
      { label: "Direct cost", amount: -98000 },
      { label: "Core payroll", amount: -72000 },
      { label: "Marketing and design", amount: -24000 },
      { label: "Software and systems", amount: -12000 },
      { label: "Operating cash flow", amount: 74000 },
    ],
    metrics: [
      {
        label: "Monthly burn",
        value: "USD 9,500",
        summary: "Net cash the project consumes each month when outflows exceed inflows.",
      },
      {
        label: "Runway",
        value: "14 months",
        summary: "Months the project can operate with available cash at the current burn rate.",
      },
      {
        label: "Gross margin",
        value: "65%",
        summary: "Revenue minus direct cost, before payroll and operating expenses.",
      },
      {
        label: "Lead-to-close",
        value: "21%",
        summary: "Percentage of leads that convert into closed sales.",
      },
      {
        label: "Impact KPI (defined per project)",
        value: "To be defined",
        summary: "Set per project according to the change each project seeks to create and measure.",
      },
    ],
  },
};
