"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { getLocalizedPath, routes } from "@/lib/routes";
import {  } from "@/lib/routes";
import Image from "next/image";

type HeaderProps = {
  locale: Locale;
  dict: any;
};

type NavItem = {
  label: string;
  path: string;
};

export default function Header({ locale, dict }: HeaderProps) {
  const pathname = usePathname();
 const navItems = [
  { label: dict.nav.services, path: routes.services[locale] },
  { label: dict.nav.projects, path: routes.projects[locale] },
  { label: dict.nav.blog, path: routes.blog[locale] },
  { label: dict.nav.contact, path: routes.contact[locale] },
];
  function switchLocale(targetLocale: string) {
    if (!pathname) return `/${targetLocale}`;

    const segments = pathname.split("/").filter(Boolean);

    // прибираємо старий locale
    segments.shift();

    const cleanPath = "/" + segments.join("/");

    return `/${targetLocale}${cleanPath}`;
  }

  return (
    <header className="border-b">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href={getLocalizedPath(locale, "/")}
          className="font-bold text-xl"
        >
          <Image
            src="/logo-dark.svg"
            alt="Logo"
            width={140}
            height={40}
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </Link>

        <nav className="flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={getLocalizedPath(locale, item.path)}
              className="text-sm hover:underline"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex gap-2 text-sm">
          {["de", "en", "uk", "ru"].map((lng) => (
            <Link
              key={lng}
              href={switchLocale(lng)}
              className={lng === locale ? "font-bold" : ""}
            >
              {lng.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
