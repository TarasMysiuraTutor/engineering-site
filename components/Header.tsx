"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { getLocalizedPath, routes } from "@/lib/routes";
import {} from "@/lib/routes";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";

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
  // const navItems = [
  //   { label: dict.nav.services, path: routes.services[locale] },
  //   { label: dict.nav.projects, path: routes.projects[locale] },
  //   { label: dict.nav.blog, path: routes.blog[locale] },
  //   { label: dict.nav.contact, path: routes.contact[locale] },
  // ];

  const navItems = [
    { label: dict.nav.services, route: "services" },
    { label: dict.nav.projects, route: "projects" },
    { label: dict.nav.blog, route: "blog" },
    { label: dict.nav.contact, route: "contact" },
  ] as const;

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
        <Link href={`/${locale}`} className="font-bold text-xl">
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
              key={item.route}
              href={getLocalizedPath(locale, item.route)}
              className="text-sm hover:underline"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <LanguageSwitcher />
        {/* <div className="flex gap-2 text-sm">
          {["de", "en", "uk", "ru"].map((lng) => (
            <Link
              key={lng}
              href={switchLocale(lng)}
              className={lng === locale ? "font-bold" : ""}
            >
              {lng.toUpperCase()}
            </Link>
          ))}
        </div> */}
      </div>
    </header>
  );
}
