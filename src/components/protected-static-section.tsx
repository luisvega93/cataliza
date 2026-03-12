"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

import { buildAccessHref, clearGrantedAccess, getAccessGrant, hasGrantedAccess } from "@/lib/auth";
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
  const [grantedAt, setGrantedAt] = useState<string | null>(null);

  useEffect(() => {
    const grant = getAccessGrant();
    setIsGranted(hasGrantedAccess());
    setGrantedAt(grant?.grantedAt ?? null);
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
          <span className="eyebrow">{locale === "es" ? "Acceso temporal" : "Session access"}</span>
          <h1>{title}</h1>
          <p>{summary}</p>
          <div className="cta-row">
            <Link className="cta-button primary" href={buildAccessHref(locale, nextPath)}>
              {locale === "es" ? "Ir a acceso" : "Go to access"}
            </Link>
            <Link className="cta-button secondary" href={`/${locale}`}>
              {locale === "es" ? "Volver al sitio" : "Back to site"}
            </Link>
          </div>
          <p className="protected-note">
            {locale === "es"
              ? "El contenido se desbloquea por sesi\u00f3n en este navegador."
              : "Content unlocks for this browser session."}
          </p>
        </div>
      </section>
    );
  }

  return (
    <div className="protected-layout">
      <section className="protected-toolbar">
        <div>
          <div className="access-status-pill success">
            {locale === "es" ? "Acceso activo" : "Access active"}
          </div>
          <p className="protected-note">
            {locale === "es"
              ? `Sesi\u00f3n desbloqueada${grantedAt ? ` el ${new Date(grantedAt).toLocaleString("es-MX")}` : ""}.`
              : `Session unlocked${grantedAt ? ` on ${new Date(grantedAt).toLocaleString("en-US")}` : ""}.`}
          </p>
        </div>
        <button
          className="cta-button secondary"
          onClick={() => {
            clearGrantedAccess();
            setIsGranted(false);
            setGrantedAt(null);
          }}
          type="button"
        >
          {locale === "es" ? "Cerrar acceso" : "Lock again"}
        </button>
      </section>
      {children}
    </div>
  );
}
