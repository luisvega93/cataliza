"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { getLocaleLabel, resolvePreferredLocale } from "@/lib/i18n";

export function RootRedirect() {
  const router = useRouter();

  useEffect(() => {
    const nextLocale = resolvePreferredLocale();
    router.replace(`/${nextLocale}`);
  }, [router]);

  return (
    <section className="access-panel">
      <div className="feature-card access-card">
        <span className="eyebrow">Cataliza Capital</span>
        <h1>Choose language / Elige idioma</h1>
        <p>
          We remember your preferred language on this browser and default to Spanish when we do not have a
          clear signal yet.
        </p>
        <div className="cta-row">
          <Link className="cta-button primary" href="/es">
            {getLocaleLabel("es")}
          </Link>
          <Link className="cta-button secondary" href="/en">
            {getLocaleLabel("en")}
          </Link>
        </div>
      </div>
    </section>
  );
}
