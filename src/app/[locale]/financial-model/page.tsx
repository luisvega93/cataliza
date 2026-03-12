import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { FinancialModelView } from "@/components/financial-model-view";
import { ProtectedStaticSection } from "@/components/protected-static-section";
import { financeLabels } from "@/content/finance";
import { isLocale } from "@/lib/i18n";
import { resolveParams } from "@/lib/route-params";

type FinancialModelPageProps = {
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

  return financeLabels[locale].meta;
}

export default async function FinancialModelPage({ params }: FinancialModelPageProps) {
  const { locale } = await resolveParams(params);

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <ProtectedStaticSection
      locale={locale}
      nextPath={`/${locale}/financial-model`}
      title={locale === "es" ? "Entrar al modelo financiero" : "Enter the financial model"}
      summary={
        locale === "es"
          ? "El modelo financiero se desbloquea con la misma contrasena compartida usada para el playbook."
          : "The financial model unlocks with the same shared password used for the playbook."
      }
    >
      <FinancialModelView locale={locale} />
    </ProtectedStaticSection>
  );
}
