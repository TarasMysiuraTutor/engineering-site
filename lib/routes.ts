import type { Locale } from "./i18n"

export function getServicesBase(locale: string) {
  return locale === "de" ? "leistungen" : "services";
}

export const routes = {
  services: {
    de: "/leistungen",
    en: "/services",
    uk: "/poslugy",
    ru: "/uslugi",
  },
  projects: {
    de: "/projekte",
    en: "/projects",
    uk: "/proekty",
    ru: "/proekty",
  },
  blog: {
    de: "/blog",
    en: "/blog",
    uk: "/blog",
    ru: "/blog",
  },
  contact: {
    de: "/kontakt",
    en: "/contact",
    uk: "/kontakt",
    ru: "/kontakt",
  },
};

export const serviceRoute: Record<Locale, string> = {
  de: "leistungen",
  en: "services",
  uk: "poslugy",
  ru: "uslugi",
};

export const serviceSlug = {
  de: "leistungen",
  en: "services",
  uk: "poslugy",
  ru: "uslugi",
};

export const routeConfig = {
  services: {
    de: "leistungen",
    en: "services",
    uk: "poslugy",
    ru: "uslugi",
  },
} as const;

export function getSectionSlug(
  section: keyof typeof routeConfig,
  locale: Locale,
) {
  return routeConfig[section][locale];
}

export function buildUrl(
  baseUrl: string,
  locale: Locale,
  section: keyof typeof routeConfig,
  slug?: string,
) {
  const sectionSlug = getSectionSlug(section, locale);
  return slug
    ? `${baseUrl}/${locale}/${sectionSlug}/${slug}`
    : `${baseUrl}/${locale}/${sectionSlug}`;
}

export const routeMap = {
  services: {
    de: "leistungen",
    en: "services",
    uk: "poslugy",
    ru: "uslugi",
  },

  projects: {
    de: "projekte",
    en: "projects",
    uk: "proekty",
    ru: "proekty",
  },

  blog: {
    de: "blog",
    en: "blog",
    uk: "blog",
    ru: "blog",
  },

  contact: {
    de: "kontakt",
    en: "contact",
    uk: "kontakt",
    ru: "kontakt",
  },
} as const;

// export type Locale = "de" | "en" | "uk" | "ru";

export type RouteKey = keyof typeof routeMap;

export function detectRoute(segment: string): RouteKey | null {
  const entries = Object.entries(routeMap) as [
    RouteKey,
    Record<Locale, string>
  ][];

  for (const [route, locales] of entries) {
    if (Object.values(locales).includes(segment)) {
      return route;
    }
  }

  return null;
}

export function getLocalizedPath(
  locale: Locale,
  route: RouteKey,
  slug?: string
) {
  const map = routeMap[route];

  if (!map) {
    return `/${locale}`;
  }

  const base = map[locale];

  if (slug) {
    return `/${locale}/${base}/${slug}`;
  }

  return `/${locale}/${base}`;
}