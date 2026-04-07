import type { Locale } from "@/lib/i18n";
import type { StructureMapCopy } from "@/content/structure-map";

import { playbookCopyEn } from "@/content/playbook.en";
import { playbookCopyEs } from "@/content/playbook.es";

export type PlaybookCopy = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    title: string;
    summary: string;
    stats: Array<{ label: string; value: string }>;
  };
  operatingModel: {
    title: string;
    summary: string;
    sharedServices: Array<{ title: string; summary: string }>;
    governance: Array<{ title: string; summary: string }>;
    structure: StructureMapCopy;
  };
  values: {
    title: string;
    summary: string;
    transformTitle: string;
    transformSummary: string;
    items: Array<{ title: string; summary: string }>;
    behaviorsTitle: string;
    behaviors: string[];
  };
  strategy: {
    title: string;
    summary: string;
    chainTitle: string;
    chain: string[];
    riskTitle: string;
    riskSummary: string;
    responseTitle: string;
    responseSummary: string;
    fieldsTitle: string;
    fields: Array<{ title: string; summary: string }>;
  };
  cadence: {
    title: string;
    summary: string;
    labels: {
      cadence: string;
      focus: string;
      owner: string;
    };
    rituals: Array<{ cadence: string; focus: string; owner: string }>;
  };
  incentives: {
    title: string;
    summary: string;
    levers: Array<{ title: string; summary: string }>;
  };
  milestones: {
    title: string;
    summary: string;
    items: Array<{ quarter: string; target: string; signal: string }>;
  };
  benchmarks: {
    title: string;
    summary: string;
    labels: {
      mechanism: string;
      environment: string;
      culture: string;
      takeaway: string;
    };
    cases: Array<{
      title: string;
      mechanism: string;
      environment: string;
      culture: string;
      takeaway: string;
    }>;
  };
  council: {
    title: string;
    summary: string;
    pillars: Array<{ title: string; summary: string; members: string[] }>;
  };
  aiNative: {
    title: string;
    summary: string;
    automateTitle: string;
    automate: string[];
    humanTitle: string;
    human: string[];
    ruleLabel: string;
    rule: string;
    ritualsTitle: string;
    rituals: string[];
  };
  ecosystem: {
    title: string;
    summary: string;
    signalsTitle: string;
    signals: Array<{ title: string; items: string[] }>;
    ecosystemsTitle: string;
    ecosystems: Array<{ title: string; items: string[] }>;
    partnershipsTitle: string;
    partnershipsSummary: string;
    partnerships: Array<{ title: string; items: string[] }>;
    speakerTitle: string;
    speakerTopicsTitle: string;
    speakerTopics: string[];
    speakerCadence: string;
    speakerKitTitle: string;
    speakerKit: string[];
    speakerKpisTitle: string;
    speakerKpis: string[];
  };
  dashboard: {
    title: string;
    summary: string;
    sampleProject: string;
    snapshotTitle: string;
    budgetTitle: string;
    definitionsTitle: string;
    budgetRows: Array<{ label: string; amount: number }>;
    metrics: Array<{ label: string; value: string; summary: string }>;
  };
};

export const playbookCopy: Record<Locale, PlaybookCopy> = {
  es: playbookCopyEs,
  en: playbookCopyEn,
};

export function getPlaybookCopy(locale: Locale) {
  return playbookCopy[locale];
}
