"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { defaultLocale } from "@/lib/i18n";

export function RootRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/${defaultLocale}`);
  }, [router]);

  return (
    <section className="access-panel">
      <div className="feature-card access-card">
        <span className="eyebrow">Cataliza Capital</span>
        <h1>Choosing your default language...</h1>
        <p>
          If the automatic redirect does not happen, continue to the default Spanish experience or switch to
          English.
        </p>
        <div className="cta-row">
          <Link className="cta-button primary" href="/es">
            Ir a Espanol
          </Link>
          <Link className="cta-button secondary" href="/en">
            Go to English
          </Link>
        </div>
      </div>
    </section>
  );
}
