import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PlaybookPageClient } from "@/components/playbook-page-client";
import { getPlaybookCopy } from "@/content/playbook";
import { isLocale } from "@/lib/i18n";
import { resolveParams } from "@/lib/route-params";

type PlaybookPageProps = {
  params: Promise<{ locale: string }> | { locale: string };
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }> | { locale: string };
}): Promise<Metadata> {
  const { locale } = await resolveParams(params);

  if (!isLocale(locale)) {
    return {};
  }

  const copy = getPlaybookCopy(locale);
  return {
    title: copy.meta.title,
    description: copy.meta.description,
  };
}

export default async function PlaybookPage({ params }: PlaybookPageProps) {
  const { locale } = await resolveParams(params);

  if (!isLocale(locale)) {
    notFound();
  }

  const copy = getPlaybookCopy(locale);

  return <PlaybookPageClient locale={locale} copy={copy} />;
}
