// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";

// import { locales, type Locale } from "@/lib/i18n";
// import { routeMap, detectRoute, type RouteKey } from "@/lib/routes";

// export default function LanguageSwitcher() {
//   const pathname = usePathname();

//   const segments = pathname.split("/").filter(Boolean);

//   const currentLocale = segments[0] as Locale | undefined;
//   const section = segments[1];
//   const slug = segments[2];

//   const route = section ? detectRoute(section) : null;

//   return (
//     <div className="flex gap-2 text-sm">
//       {locales.map((locale) => {
//         let path = `/${locale}`;

//         if (route) {
//           const translated = routeMap[route][locale];
//           path += `/${translated}`;

//           if (slug) {
//             path += `/${slug}`;
//           }
//         }

//         return (
//           <Link
//             key={locale}
//             href={path}
//             className={locale === currentLocale ? "font-bold" : ""}
//           >
//             {locale.toUpperCase()}
//           </Link>
//         );
//       })}
//     </div>
//   );
// }

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { locales, type Locale } from "@/lib/i18n";
import { routeMap, detectRoute } from "@/lib/routes";
import { getDictionary } from "@/lib/getDictionary";

import { dictionaries } from "@/lib/staticDictionaries";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const currentLocale = segments[0] as Locale | undefined;
  const section = segments[1];
  const slug = segments.slice(2).join("/");

  const route = section ? detectRoute(section) : null;

  return (
    <div className="flex gap-2 text-sm">
      {locales.map((locale) => {
        let path = `/${locale}`;

        if (route) {
          const translated = routeMap[route][locale];
          path += `/${translated}`;
        }

        if (slug && route === "services") {
          const currentDict = dictionaries[currentLocale as Locale];
          const targetDict = dictionaries[locale];

          const currentService = currentDict.services.list.find(
            (s: any) => s.slug === slug,
          );

          const targetService = targetDict.services.list.find(
            (s: any) => s.id === currentService?.id,
          );

          if (targetService) {
            path += `/${targetService.slug}`;
          }
        }

        return (
          <Link
            key={locale}
            href={path}
            className={locale === currentLocale ? "font-bold" : ""}
          >
            {locale.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
