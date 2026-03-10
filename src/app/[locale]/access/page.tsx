import { notFound } from "next/navigation";

import { AccessForm } from "@/components/access-form";
import { isLocale } from "@/lib/i18n";
import { resolveParams } from "@/lib/route-params";

type AccessPageProps = {
  params: Promise<{ locale: string }> | { locale: string };
  searchParams:
    | Promise<{ next?: string | string[] }>
    | {
        next?: string | string[];
      };
};

export default async function AccessPage({ params, searchParams }: AccessPageProps) {
  const { locale } = await resolveParams(params);
  const { next } = await resolveParams(searchParams);

  if (!isLocale(locale)) {
    notFound();
  }

  const normalizedNext = Array.isArray(next) ? next[0] : next;
  const nextPath =
    normalizedNext && normalizedNext.startsWith(`/${locale}`) ? normalizedNext : `/${locale}/playbook`;

  return (
    <section className="access-panel">
      <div className="feature-card access-card">
        <span className="eyebrow">{locale === "es" ? "Acceso protegido" : "Protected access"}</span>
        <h1>{locale === "es" ? "Entrar a las áreas internas" : "Enter the internal areas"}</h1>
        <p>
          {locale === "es"
            ? "El playbook y el modelo financiero usan una contraseña compartida. Ingresa la clave para desbloquear las rutas protegidas."
            : "The playbook and financial model use a shared password. Enter it to unlock the protected routes."}
        </p>
        <AccessForm locale={locale} nextPath={nextPath} />
      </div>
    </section>
  );
}
