// import { getDictionary } from "@/lib/getDictionary";
// import { locales, type Locale } from "@/lib/i18n";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import { buildUrl, serviceSlug, routeMap } from "@/lib/routes";

// export default async function ServicesPage({
//   params,
// }: {
//   params: Promise<{ locale: Locale }>;
// }) {
//   const { locale } = await params;

//   const dict = await getDictionary(locale);

//   const services = dict.services.list;

//   return (
//     <section className="container mx-auto py-16">
//       <h1 className="text-3xl font-semibold mb-8">{dict.services.title}</h1>

//       <div className="space-y-6">
//         {services.map((service) => (
//           <Link
//             key={service.slug}
//             href={`/${locale}/${routeMap.services[locale]}/${service.slug}`}
//             className="block border p-6 hover:bg-gray-50"
//           >
//             <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
//             <p>{service.description}</p>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// }

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ locale: Locale }>;
// }) {
//   const { locale } = await params;

//   const dict = await getDictionary(locale);

//   const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

//   return {
//     title: `${dict.services.title} | TechConsult Engineering`,
//     description:
//       "Ingenieurleistungen für industrielle Projekte: Planung, Analyse und Projektunterstützung.",
//     alternates: {
//       canonical: buildUrl(baseUrl, locale, "services"),
//       languages: {
//         de: buildUrl(baseUrl, "de", "services"),
//         en: buildUrl(baseUrl, "en", "services"),
//         uk: buildUrl(baseUrl, "uk", "services"),
//         ru: buildUrl(baseUrl, "ru", "services"),
//       },
//     },
//   };
// }

// import { getAllServices } from "@/lib/services"

import Link from "next/link";
import { getAllServices } from "@/lib/services";
import { getDictionary } from "@/lib/getDictionary";
import { locales, type Locale } from "@/lib/i18n";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;

  const dict = await getDictionary(locale);
  const services = await getAllServices(locale);

  // const basePath =
  //   locale === "de"
  //     ? "leistungen"
  //     : locale === "en"
  //       ? "services"
  //       : locale === "uk"
  //         ? "poslugy"
  //         : "uslugi";

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">{dict.services.title}</h1>

      <div className="grid gap-6">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/${locale}/services/${service.slug}`}
            className="block border rounded-xl p-6 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{service.title}</h2>

            <p className="text-gray-600 mt-2">{service.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const dict = await getDictionary(locale);

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  return {
    title: dict.services.title + " | TechConsult Engineering",
    description: dict.services.metaDescription,

    alternates: {
      canonical: `${baseUrl}/${locale}/services`,
      languages: {
        de: `${baseUrl}/de/leistungen`,
        en: `${baseUrl}/en/services`,
        uk: `${baseUrl}/uk/poslugy`,
        ru: `${baseUrl}/ru/uslugi`,
        "x-default": `${baseUrl}/de/leistungen`,
      },
    },
  };
}
