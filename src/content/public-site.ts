import type { Locale } from "@/lib/i18n";

import { publicCopyEn } from "@/content/public-site.en";
import { publicCopyEs } from "@/content/public-site.es";

export type RichTextPart = {
  text: string;
  emphasis?: boolean;
};

export type RichText = string | RichTextPart[];

export type SectionIntro = {
  eyebrow: string;
  summary?: RichText;
};

export type SearchGroup = {
  title: string;
  points: RichText[];
};

export type OfferCard = {
  title: string;
  summary?: RichText;
  bullets: RichText[];
};

export type ProcessStage = {
  title: string;
  timing: string;
  bullets: string[];
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
    lines: RichText[];
  };
  search: SectionIntro & {
    groups: SearchGroup[];
  };
  model: SectionIntro & {
    cards: OfferCard[];
  };
  process: SectionIntro & {
    stages: ProcessStage[];
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
