"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

import { buildAccessHref, hasGrantedAccess } from "@/lib/auth";
import type { Locale } from "@/lib/i18n";

type ProtectedStaticSectionProps = {
  locale: Locale;
  nextPath: string;
  title: string;
  summary: string;
  children: ReactNode;
};

export function ProtectedStaticSection({
  locale,
  nextPath,
  title,
  summary,
  children,
}: ProtectedStaticSectionProps) {
  const [isReady, setIsReady] = useState(false);
  const [isGranted, setIsGranted] = useState(false);

  useEffect(() => {
    setIsGranted(hasGrantedAccess());
    setIsReady(true);
  }, []);

  if (!isReady) {
    return (
      <section className="access-panel">
        <div className="feature-card access-card">
          <span className="eyebrow">{locale === "es" ? "Acceso protegido" : "Protected access"}</span>
          <h1>{locale === "es" ? "Verificando acceso..." : "Checking access..."}</h1>
          <p>{summary}</p>
        </div>
      </section>
    );
  }

  if (!isGranted) {
    return (
      <section className="access-panel">
        <div className="feature-card access-card">
          <span className="eyebrow">{locale === "es" ? "Acceso protegido" : "Protected access"}</span>
          <h1>{title}</h1>
          <p>{summary}</p>
          <div className="cta-row">
            <Link className="cta-button primary" href={buildAccessHref(locale, nextPath)}>
              {locale === "es" ? "Desbloquear" : "Unlock"}
            </Link>
            <Link className="cta-button secondary" href={`/${locale}`}>
              {locale === "es" ? "Volver al sitio publico" : "Back to public site"}
            </Link>
          </div>
          <p className="protected-note">
            {locale === "es"
              ? "En GitHub Pages esta proteccion solo oculta contenido en el navegador; no es seguridad real."
              : "On GitHub Pages this protection only obscures content in the browser; it is not real security."}
          </p>
        </div>
      </section>
    );
  }

  return <>{children}</>;
}
