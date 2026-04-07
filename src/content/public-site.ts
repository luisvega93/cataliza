import type { Locale } from "@/lib/i18n";
import type { StructureMapCopy } from "@/content/structure-map";

import { publicCopyEn } from "@/content/public-site.en";
import { publicCopyEs } from "@/content/public-site.es";

export type SectionIntro = {
  eyebrow: string;
  summary?: string;
};

export type SearchGroup = {
  title: string;
  points: string[];
};

export type OfferCard = {
  title: string;
  summary?: string;
  bullets: string[];
};

export type ProcessStage = {
  title: string;
  timing: string;
  bullets: string[];
};

export type DefinitionItem = {
  term: string;
  definition: string;
};

export type CouncilPillar = {
  title: string;
  summary: string;
};

export type ValueItem = {
  title: string;
  summary: string;
};

export type FormCopy = {
  heading: string;
  intro: string;
  lead: string;
  primaryCta: string;
  externalCta: string;
  embedOpen: string;
  embedClose: string;
  embedTitle: string;
  embedSummary: string;
  checklistTitle: string;
  checklist: string[];
  fallbackEyebrow: string;
  fallbackTitle: string;
  fallbackSummary: string;
  fallbackNote: string;
  fallbackCta: string;
};

export type PublicCopy = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    summary: string;
    summaryBlocks?: Array<Array<{ text: string; emphasis?: boolean }>>;
    primaryCta: string;
    explainer?: Array<{ text: string; emphasis?: boolean }>;
  };
  thesis: {
    eyebrow: string;
    lines: string[];
    definitions: DefinitionItem[];
    maximLabel: string;
    maxim: string;
  };
  search: SectionIntro & {
    groups: SearchGroup[];
  };
  model: SectionIntro & {
    cards: OfferCard[];
  };
  work: SectionIntro & {
    cards: OfferCard[];
    structure: StructureMapCopy;
  };
  process: SectionIntro & {
    stages: ProcessStage[];
  };
  council: SectionIntro & {
    pillars: CouncilPillar[];
  };
  values: SectionIntro & {
    items: ValueItem[];
  };
  form: FormCopy;
};

export const publicCopy: Record<Locale, PublicCopy> = {
  es: publicCopyEs,
  en: publicCopyEn,
};

export function getPublicCopy(locale: Locale) {
  return publicCopy[locale];
}
