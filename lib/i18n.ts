export const locales = ["de", "en", "uk", "ru"] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "de"


