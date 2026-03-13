import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales } from "./lib/i18n";

const defaultLocale = "de";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const segments = pathname.split("/").filter(Boolean);

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

  if (segments.length >= 2) {
    const locale = segments[0];
    const section = segments[1];

    let mapped = null;

    if (locale === "de" && section === "leistungen") mapped = "services";
    if (locale === "en" && section === "services") mapped = "services";
    if (locale === "uk" && section === "poslugy") mapped = "services";
    if (locale === "ru" && section === "uslugi") mapped = "services";

    if (mapped) {
      const url = request.nextUrl.clone();

      url.pathname =
        `/${locale}/${mapped}/${segments.slice(2).join("/")}`;

      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};