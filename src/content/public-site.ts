import type { Locale } from "@/lib/i18n";

import { publicCopyEn } from "@/content/public-site.en";
import { publicCopyEs } from "@/content/public-site.es";

export type PublicSection = {
  eyebrow: string;
  title: string;
  summary: string;
  points: string[];
};

export type OfferCard = {
  title: string;
  summary: string;
  bullets: string[];
};

export type ProcessStage = {
  title: string;
  timing: string;
  bullets: string[];
};

export type TeamPillar = {
  title: string;
  summary: string;
  members: string[];
};

export type PortfolioItem = {
  title: string;
  stage: string;
  summary: string;
  tags: string[];
};

export type EcosystemItem = {
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
    thesis: string[];
    primaryCta: string;
    secondaryCta: string;
    stats: Array<{ value: string; label: string }>;
  };
  search: PublicSection;
  offer: {
    eyebrow: string;
    title: string;
    summary: string;
    cards: OfferCard[];
  };
  work: {
    eyebrow: string;
    title: string;
    summary: string;
    model: string[];
    roles: Array<{ title: string; summary: string }>;
  };
  process: {
    eyebrow: string;
    title: string;
    summary: string;
    stages: ProcessStage[];
  };
  team: {
    eyebrow: string;
    title: string;
    summary: string;
    pillars: TeamPillar[];
  };
  portfolio: {
    eyebrow: string;
    title: string;
    summary: string;
    items: PortfolioItem[];
  };
  ecosystem: {
    eyebrow: string;
    title: string;
    summary: string;
    items: EcosystemItem[];
  };
  values: {
    eyebrow: string;
    title: string;
    values: Array<{ title: string; summary: string }>;
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
