"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { locales } from "@/lib/i18n"

export default function LanguageSwitcher() {
  const pathname = usePathname()
  const currentLocale = pathname.split("/")[1]

  const redirectedPathName = (locale: string) => {
    const segments = pathname.split("/")
    segments[1] = locale
    return segments.join("/")
  }

  const handleClick = (locale: string) => {
    document.cookie = `locale=${locale}; path=/; max-age=31536000`
  }

  return (
    <div className="flex gap-3">
      {locales.map((locale) => {
        const isActive = locale === currentLocale

        return (
          <Link
            key={locale}
            href={redirectedPathName(locale)}
            onClick={() => handleClick(locale)}
            className={`px-3 py-1 rounded-md text-sm transition ${
              isActive
                ? "bg-black text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {locale.toUpperCase()}
          </Link>
        )
      })}
    </div>
  )
}