import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales } from "./lib/i18n";

const defaultLocale = "de";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1️⃣ ignore static files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.match(/\.[^/]+$/)
  ) {
    return NextResponse.next();
  }

  // 2️⃣ redirect /ua → /uk
  if (pathname.startsWith("/ua")) {
    const newPath = pathname.replace(/^\/ua/, "/uk");
    return NextResponse.redirect(new URL(newPath, request.url), 301);
  }

  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];

  const hasLocale = locales.includes(firstSegment as any);

  // 3️⃣ if no locale → redirect to default
  if (!hasLocale) {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};