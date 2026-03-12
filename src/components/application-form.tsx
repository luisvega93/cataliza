import type { FormCopy } from "@/content/public-site";
import type { Locale } from "@/lib/i18n";
import { hasGoogleFormConfigured, staticSiteConfig } from "@/lib/site-config";

type ApplicationFormProps = {
  copy: FormCopy;
  locale: Locale;
};

export function ApplicationForm({ copy, locale }: ApplicationFormProps) {
  const isConfigured = hasGoogleFormConfigured();

  return (
    <div className="application-embed-shell">
      {isConfigured ? (
        <iframe
          className="embedded-form"
          src={staticSiteConfig.googleForm.embedUrl}
          title={locale === "es" ? "Formulario de aplicación de Cataliza" : "Cataliza application form"}
        >
          Loading...
        </iframe>
      ) : (
        <div className="feature-card placeholder-card">
          <h3>{locale === "es" ? "Google Form pendiente de configurar" : "Google Form still needs configuration"}</h3>
          <p>
            {locale === "es"
              ? "La experiencia ya está lista para GitHub Pages, pero falta pegar el URL real del Google Form en la configuración estática del sitio."
              : "The static-site experience is ready, but the real Google Form URL still needs to be added to the site's static configuration."}
          </p>
        </div>
      )}

      <div className="form-actions">
        {isConfigured ? (
          <a
            className="cta-button secondary"
            href={staticSiteConfig.googleForm.openUrl}
            rel="noreferrer"
            target="_blank"
          >
            {locale === "es" ? "Abrir formulario en una nueva ventana" : "Open form in a new tab"}
          </a>
        ) : (
          <p className="protected-note">
            {locale === "es"
              ? "Cuando tengas el Google Form, agrega las URLs de apertura y embed en src/lib/site-config.ts."
              : "Once your Google Form is ready, add the open and embed URLs in src/lib/site-config.ts."}
          </p>
        )}
        <p className="section-summary">{copy.intro}</p>
      </div>
    </div>
  );
}
