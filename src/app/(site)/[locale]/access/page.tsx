import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { AccessPageClient } from "@/components/access-page-client";
import { isLocale } from "@/lib/i18n";
import { resolveParams } from "@/lib/route-params";
import { buildLocaleMetadata } from "@/lib/seo";

type AccessPageProps = {
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

  return buildLocaleMetadata({
    locale,
    title: locale === "es" ? "Cataliza Capital | Acceso protegido" : "Cataliza Capital | Protected access",
    description:
      locale === "es"
        ? "Desbloquea temporalmente el Playbook y el modelo financiero de Cataliza."
        : "Temporarily unlock the Cataliza Playbook and financial model.",
    path: `/${locale}/access`,
  });
}

export default async function AccessPage({ params }: AccessPageProps) {
  const { locale } = await resolveParams(params);

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <section className="access-panel">
      <div className="feature-card access-card access-page-card">
        <span className="eyebrow">{locale === "es" ? "Áreas internas" : "Internal areas"}</span>
        <h1>{locale === "es" ? "Entrar a Playbook y modelo financiero" : "Enter Playbook and financial model"}</h1>
        <p>
          {locale === "es"
            ? "Usa la contraseña compartida para desbloquear estas rutas durante la sesión actual del navegador."
            : "Use the shared password to unlock these routes for the current browser session."}
        </p>
        <Suspense fallback={<p>{locale === "es" ? "Cargando acceso..." : "Loading access..."}</p>}>
          <AccessPageClient locale={locale} />
        </Suspense>
      </div>
    </section>
  );
}
