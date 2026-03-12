import type { Locale } from "@/lib/i18n";
import { staticSiteConfig } from "@/lib/site-config";

const protectedPaths = ["playbook", "financial-model"] as const;

type AccessGrant = {
  grantedAt: string;
};

export function isProtectedPath(segment: string) {
  return protectedPaths.includes(segment as (typeof protectedPaths)[number]);
}

export function sanitizeNextPath(locale: Locale, candidate: string | null | undefined) {
  if (!candidate) {
    return `/${locale}/playbook`;
  }

  const normalized = candidate.split("?")[0] || candidate;

  if (normalized === `/${locale}`) {
    return normalized;
  }

  const parts = normalized.split("/").filter(Boolean);

  if (parts[0] !== locale) {
    return `/${locale}/playbook`;
  }

  if (parts.length === 2 && isProtectedPath(parts[1])) {
    return `/${locale}/${parts[1]}`;
  }

  return `/${locale}/playbook`;
}

export function buildAccessHref(locale: Locale, nextPath: string) {
  return `/${locale}/access?next=${encodeURIComponent(sanitizeNextPath(locale, nextPath))}`;
}

function readAccessGrant() {
  if (typeof window === "undefined") {
    return null;
  }

  const rawValue = window.sessionStorage.getItem(staticSiteConfig.accessStorageKey);

  if (!rawValue) {
    return null;
  }

  try {
    const parsed = JSON.parse(rawValue) as AccessGrant;
    return parsed?.grantedAt ? parsed : null;
  } catch {
    return null;
  }
}

export function hasGrantedAccess() {
  return Boolean(readAccessGrant());
}

export function getAccessGrant() {
  return readAccessGrant();
}

export function grantAccess() {
  if (typeof window === "undefined") {
    return null;
  }

  const grant = {
    grantedAt: new Date().toISOString(),
  };

  window.sessionStorage.setItem(staticSiteConfig.accessStorageKey, JSON.stringify(grant));

  return grant;
}

export function clearGrantedAccess() {
  if (typeof window === "undefined") {
    return;
  }

  window.sessionStorage.removeItem(staticSiteConfig.accessStorageKey);
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
