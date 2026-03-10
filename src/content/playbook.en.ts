import type { PlaybookCopy } from "@/content/playbook";

export const playbookCopyEn: PlaybookCopy = {
  meta: {
    title: "Cataliza Capital | Internal playbook",
    description:
      "Cataliza operating playbook covering shared services, governance, incentives, rituals, and project dashboards.",
  },
  hero: {
    eyebrow: "Internal playbook",
    title: "How Cataliza executes with consistency, calm, and accountability.",
    summary:
      "This playbook turns the thesis into day-to-day operating practice. The goal is not only to help the ally, but to build a system where the hub and the core can learn, measure, and correct together.",
    stats: [
      { label: "Shared services", value: "4 functions" },
      { label: "Cadences", value: "monthly / quarterly / yearly" },
      { label: "Hub bonus", value: "KPI-aligned" },
    ],
  },
  operatingModel: {
    title: "Operating Model",
    summary:
      "Cataliza runs a shared-services model that removes critical administrative load without disconnecting the ally from the customer or from operating truth.",
    sharedServices: [
      {
        title: "Finance and planning",
        summary: "Cashflow, budgeting, unit economics, receivables/payables, and funding structure.",
      },
      {
        title: "Operations and systems",
        summary: "ERP, processes, automations, reporting, and information governance.",
      },
      {
        title: "Legal, tax, and accounting",
        summary: "Compliance, regularization, and minimum viable controls.",
      },
      {
        title: "Marketing and design",
        summary: "Brand system, sales collateral, funnel, and market narrative.",
      },
    ],
    governance: [
      {
        title: "Ally",
        summary: "Owns the craft, leads the core team, stays close to the customer, and drives sales or delivery.",
      },
      {
        title: "Cataliza manager",
        summary: "Leads the hub, synchronizes shared services, and keeps execution rhythm.",
      },
      {
        title: "Management table",
        summary: "Translates vision, culture, business plan, priorities, and capital decisions.",
      },
    ],
  },
  cadence: {
    title: "Cadence",
    summary:
      "Cadence exists to prevent chronic improvisation. Each rhythm has a specific purpose and clear owners.",
    rituals: [
      {
        cadence: "Monthly",
        focus: "Dashboard, cash review, sales, 30-day priorities, and ally coaching.",
        owner: "Ally + Cataliza manager",
      },
      {
        cadence: "Quarterly",
        focus: "Reforecast, milestone review, credit decisions, and team health.",
        owner: "Management table",
      },
      {
        cadence: "Yearly",
        focus: "Business plan, budget, vision, cultural objectives, and ecosystem map.",
        owner: "Ally + Council",
      },
    ],
  },
  incentives: {
    title: "Incentives and bonuses",
    summary:
      "Incentives should reward disciplined outcomes, not volume without quality. The hub wins when the ally wins in a healthy way.",
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
        title: "Systems quality bonus",
        summary: "Recognizes reliable reporting, timely closes, and adoption of critical tools.",
      },
    ],
  },
  milestones: {
    title: "Milestones per project",
    summary:
      "Each project lands a minimum sequence that moves it from early clarity into operating repeatability.",
    items: [
      { quarter: "Q1", target: "Financial setup and base brand", signal: "Operating budget and commercial messaging ready" },
      { quarter: "Q2", target: "Disciplined offer and funnel", signal: "Measured pipeline and validated pricing" },
      { quarter: "Q3", target: "Commercial repeatability", signal: "Recurring revenue or trustworthy pipeline" },
      { quarter: "Q4", target: "Optimization and declining credit reliance", signal: "Greater payroll coverage from operations" },
    ],
  },
  dashboard: {
    title: "Dashboard",
    summary:
      "Sample dashboard for a Cataliza seed project. It should be readable in 10 minutes and drive decisions rather than merely report numbers.",
    sampleProject: "Sample ally 2026 — Casa Taller",
    budgetRows: [
      { label: "Revenue", amount: 280000 },
      { label: "Direct cost", amount: -98000 },
      { label: "Core payroll", amount: -72000 },
      { label: "Marketing & design", amount: -24000 },
      { label: "Software and systems", amount: -12000 },
      { label: "Operating cash flow", amount: 74000 },
    ],
    metrics: [
      { label: "Monthly burn", value: "USD 9,500" },
      { label: "Runway", value: "14 months" },
      { label: "Gross margin", value: "65%" },
      { label: "Lead-to-close", value: "21%" },
    ],
  },
};
