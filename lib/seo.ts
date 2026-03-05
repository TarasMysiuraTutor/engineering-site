import type { Locale } from "./i18n"

export const siteUrl = "https://example.com" // поки заглушка

export function getAlternateLanguages(path: string) {
  return {
    "de-DE": `${siteUrl}${path}`,
    en: `${siteUrl}/en${path}`,
    uk: `${siteUrl}/uk${path}`,
    ru: `${siteUrl}/ru${path}`,
  }
}