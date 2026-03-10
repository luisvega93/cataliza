import { NextRequest, NextResponse } from "next/server";

import { accessCookieName, isProtectedPath } from "@/lib/auth";
import { defaultLocale, isLocale } from "@/lib/i18n";

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }

  const [maybeLocale, maybeSection] = segments;

  if (!isLocale(maybeLocale)) {
    return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, request.url));
  }

  if (
    maybeSection &&
    isProtectedPath(maybeSection) &&
    request.cookies.get(accessCookieName)?.value !== "granted"
  ) {
    const accessUrl = new URL(`/${maybeLocale}/access`, request.url);
    accessUrl.searchParams.set("next", `${pathname}${search}`);
    return NextResponse.redirect(accessUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
