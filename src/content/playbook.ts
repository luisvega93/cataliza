import type { Locale } from "@/lib/i18n";

import { playbookCopyEn } from "@/content/playbook.en";
import { playbookCopyEs } from "@/content/playbook.es";

export type PlaybookCopy = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    summary: string;
    stats: Array<{ label: string; value: string }>;
  };
  operatingModel: {
    title: string;
    summary: string;
    sharedServices: Array<{ title: string; summary: string }>;
    governance: Array<{ title: string; summary: string }>;
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
  council: {
    title: string;
    summary: string;
    pillars: Array<{ title: string; summary: string; members: string[] }>;
  };
  ecosystem: {
    title: string;
    summary: string;
    prompts: string[];
  };
  dashboard: {
    title: string;
    summary: string;
    sampleProject: string;
    budgetRows: Array<{ label: string; amount: number }>;
    metrics: Array<{ label: string; value: string }>;
  };
};

export const playbookCopy: Record<Locale, PlaybookCopy> = {
  es: playbookCopyEs,
  en: playbookCopyEn,
};

export function getPlaybookCopy(locale: Locale) {
  return playbookCopy[locale];
}
