import de from "@/dictionaries/de"
import en from "@/dictionaries/en"
import uk from "@/dictionaries/uk"
import ru from "@/dictionaries/ru"

import type { Dictionary } from "@/types/dictionary"
import type { Locale } from "./i18n"

export const dictionaries: Record<Locale, Dictionary> = {
  de,
  en,
  uk,
  ru
}
