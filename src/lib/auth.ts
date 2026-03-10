export const accessCookieName = "cataliza_access";

const protectedPaths = ["playbook", "financial-model"] as const;

export function isProtectedPath(segment: string) {
  return protectedPaths.includes(segment as (typeof protectedPaths)[number]);
}

export function getSharedPassword() {
  return process.env.CATALIZA_SHARED_PASSWORD ?? (process.env.NODE_ENV !== "production" ? "cataliza-demo" : "");
}
