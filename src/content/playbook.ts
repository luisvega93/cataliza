import type { Locale } from "@/lib/i18n";

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
    stats: Array<{
      label: string;
      value: string;
      details?: string[];
      note?: string;
    }>;
  };
  operatingModel: {
    title: string;
    summary: string;
    sharedServices: Array<{ title: string; summary: string }>;
    governance: Array<{ title: string; summary: string }>;
    structure: {
      title: string;
      intro: string;
      note: string;
      alt: string;
      imageSrc: string;
    };
  };
  values: {
    title: string;
    summary: string;
    items: string[];
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
    };
    rituals: Array<{ cadence: string; focus: string }>;
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
    executiveTitle: string;
    executive: Array<{ title: string; summary: string }>;
    principlesTitle: string;
    principles: string[];
    blueprintTitle: string;
    blueprint: Array<{
      title: string;
      owner: string;
      ai: string;
      deliverables: string;
      kpi: string;
    }>;
    operatingTitle: string;
    sequenceLabel: string;
    sequence: string;
    humanTitle: string;
    human: string[];
    aiTitle: string;
    ai: string[];
    reviewTitle: string;
    review: string[];
    standardizeTitle: string;
    standardize: string[];
    escalationTitle: string;
    escalation: string[];
    rhythmsTitle: string;
    rhythms: string;
    teamTitle: string;
    teamSummary: string;
    team: string[];
    avoidTitle: string;
    avoid: string[];
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
    snapshotTitle: string;
    definitionsTitle: string;
    metrics: Array<{ label: string; summary: string }>;
    annualCategoryTitle: string;
  };
};

export const playbookCopy: Record<Locale, PlaybookCopy> = {
  es: playbookCopyEs,
  en: playbookCopyEn,
};

export function getPlaybookCopy(locale: Locale) {
  return playbookCopy[locale];
}
