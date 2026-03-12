"use client";

import { useEffect, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { AccessForm } from "@/components/access-form";
import { hasGrantedAccess } from "@/lib/auth";
import type { Locale } from "@/lib/i18n";

type AccessPageClientProps = {
  locale: Locale;
};

export function AccessPageClient({ locale }: AccessPageClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const nextPath = useMemo(() => {
    const candidate = searchParams.get("next");
    return candidate && candidate.startsWith(`/${locale}`) ? candidate : `/${locale}/playbook`;
  }, [locale, searchParams]);

  useEffect(() => {
    if (hasGrantedAccess()) {
      router.replace(nextPath);
    }
  }, [nextPath, router]);

  return <AccessForm locale={locale} nextPath={nextPath} />;
}
