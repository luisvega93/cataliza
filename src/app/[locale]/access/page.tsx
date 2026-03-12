import { Suspense } from "react";
import { notFound } from "next/navigation";

import { AccessPageClient } from "@/components/access-page-client";
import { isLocale } from "@/lib/i18n";
import { resolveParams } from "@/lib/route-params";

type AccessPageProps = {
  params: Promise<{ locale: string }> | { locale: string };
};

export default async function AccessPage({ params }: AccessPageProps) {
  const { locale } = await resolveParams(params);

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <section className="access-panel">
      <div className="feature-card access-card">
        <span className="eyebrow">{locale === "es" ? "Acceso protegido" : "Protected access"}</span>
        <h1>{locale === "es" ? "Entrar a las areas internas" : "Enter the internal areas"}</h1>
        <p>
          {locale === "es"
            ? "El playbook y el modelo financiero usan una contrasena compartida. Ingresa la clave para desbloquear las rutas protegidas."
            : "The playbook and financial model use a shared password. Enter it to unlock the protected routes."}
        </p>
        <Suspense fallback={<p>{locale === "es" ? "Cargando acceso..." : "Loading access..."}</p>}>
          <AccessPageClient locale={locale} />
        </Suspense>
      </div>
    </section>
  );
}
