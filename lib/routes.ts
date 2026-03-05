import type { Locale } from "./i18n";

export function getLocalizedPath(locale: Locale, path: string) {
  return `/${locale}${path}`;
}

export function getServicesBase(locale: string) {
  return locale === "de" ? "leistungen" : "services";
}

export const serviceRoute: Record<Locale, string> = {
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
