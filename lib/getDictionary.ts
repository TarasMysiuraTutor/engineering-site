import type { Locale } from "./i18n"
import type { Dictionary } from "@/types/dictionary"

export async function getDictionary(locale: Locale) {
  switch (locale) {
    case "de":
      return (await import("@/dictionaries/de")).default
    case "en":
      return (await import("@/dictionaries/en")).default
    case "uk":
      return (await import("@/dictionaries/uk")).default
    case "ru":
      return (await import("@/dictionaries/ru")).default
    default:
      return (await import("@/dictionaries/de")).default
  }
}