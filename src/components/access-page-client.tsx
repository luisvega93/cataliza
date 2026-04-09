"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useMemo, useState } from "react";

import { AccessForm } from "@/components/access-form";
import { clearGrantedAccess, getAccessGrant, hasGrantedAccess, sanitizeNextPath } from "@/lib/auth";
import type { Locale } from "@/lib/i18n";

type AccessPageClientProps = {
  locale: Locale;
};

function getDestinationLabel(locale: Locale, nextPath: string) {
  if (nextPath.includes("financial-model")) {
    return locale === "es" ? "modelo financiero" : "financial model";
  }

  if (nextPath.includes("playbook")) {
    return "Playbook";
  }

  return locale === "es" ? "sitio principal" : "main site";
}

export function AccessPageClient({ locale }: AccessPageClientProps) {
  const searchParams = useSearchParams();
  const nextPath = useMemo(
    () => sanitizeNextPath(locale, searchParams.get("next")),
    [locale, searchParams],
  );
  const [isUnlocked, setIsUnlocked] = useState(hasGrantedAccess());
  const grantedAt = getAccessGrant()?.grantedAt;
  const destinationLabel = getDestinationLabel(locale, nextPath);

  if (isUnlocked) {
    return (
      <div className="access-state-card">
        <div className="access-status-pill success">
          {locale === "es" ? "Acceso desbloqueado" : "Access unlocked"}
        </div>
        <h2>{locale === "es" ? "Sesi\u00f3n activa en este navegador" : "Session active in this browser"}</h2>
        <p>
          {locale === "es"
            ? `Ya puedes entrar al ${destinationLabel} y a las dem\u00e1s \u00e1reas internas durante esta sesi\u00f3n.`
            : `You can now enter the ${destinationLabel} and the other internal areas during this session.`}
        </p>
        {grantedAt ? (
          <p className="protected-note">
            {locale === "es"
              ? `Desbloqueado el ${new Date(grantedAt).toLocaleString("es-MX")}.`
              : `Unlocked on ${new Date(grantedAt).toLocaleString("en-US")}.`}
          </p>
        ) : null}
        <div className="cta-row">
          <Link className="cta-button primary" href={nextPath}>
            {locale === "es" ? "Continuar" : "Continue"}
          </Link>
          <button
            className="cta-button secondary"
            onClick={() => {
              clearGrantedAccess();
              setIsUnlocked(false);
            }}
            type="button"
          >
            {locale === "es" ? "Cerrar acceso" : "Lock again"}
          </button>
        </div>
        <p className="protected-note">
          {locale === "es"
            ? "Este acceso mantiene el contenido fuera de la vista casual en este navegador, pero no sustituye seguridad con usuarios reales."
            : "This keeps the content out of casual view in this browser, but it is not a substitute for real user authentication."}
        </p>
      </div>
    );
  }

  return <AccessForm locale={locale} onSuccess={() => setIsUnlocked(true)} />;
}
