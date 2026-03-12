import type { Locale } from "@/lib/i18n";
import { staticSiteConfig } from "@/lib/site-config";

const protectedPaths = ["playbook", "financial-model"] as const;

export function isProtectedPath(segment: string) {
  return protectedPaths.includes(segment as (typeof protectedPaths)[number]);
}

export function buildAccessHref(locale: Locale, nextPath: string) {
  return `/${locale}/access?next=${encodeURIComponent(nextPath)}`;
}

export function hasGrantedAccess() {
  if (typeof window === "undefined") {
    return false;
  }

  return window.sessionStorage.getItem(staticSiteConfig.accessStorageKey) === "granted";
}

export function grantAccess() {
  if (typeof window === "undefined") {
    return;
  }

  window.sessionStorage.setItem(staticSiteConfig.accessStorageKey, "granted");
}

export async function validateSharedPassword(value: string) {
  if (typeof window === "undefined" || !window.crypto?.subtle) {
    return false;
  }

  const normalized = value.trim();

  if (!normalized) {
    return false;
  }

  const encoded = new TextEncoder().encode(normalized);
  const digest = await window.crypto.subtle.digest("SHA-256", encoded);
  const hashed = Array.from(new Uint8Array(digest))
    .map((chunk) => chunk.toString(16).padStart(2, "0"))
    .join("");

  return hashed === staticSiteConfig.accessPasswordHash;
}
