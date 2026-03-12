import { getDictionary } from "@/lib/getDictionary";
import { locales, type Locale } from "@/lib/i18n";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSectionSlug, buildUrl } from "@/lib/routes";

// export async function generateStaticParams() {
//   return locales.map((locale) => ({
//     locale,
//     section: getSectionSlug("services", locale),
//   }));
// }

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: Locale; section: string }>;
}) {
  const { locale, section } = await params;

  const dict = await getDictionary(locale);

  if (section !== getSectionSlug("services", locale)) {
    notFound();
  }

  const services = dict.services.list;

  return (
    <section className="container mx-auto py-16">
      <h1 className="text-3xl font-semibold mb-8">{dict.services.title}</h1>

      <div className="space-y-6">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/${locale}/${section}/${service.slug}`}
            className="block border p-6 hover:bg-gray-50"
          >
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p>{service.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; section: string }>;
}) {
  const { locale } = await params;

  const dict = await getDictionary(locale);

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  return {
    title: `${dict.services.title} | TechConsult Engineering`,
    description:
      "Ingenieurleistungen für industrielle Projekte: Planung, Analyse und Projektunterstützung.",
    alternates: {
      canonical: buildUrl(baseUrl, locale, "services"),
      languages: {
        de: buildUrl(baseUrl, "de", "services"),
        en: buildUrl(baseUrl, "en", "services"),
        uk: buildUrl(baseUrl, "uk", "services"),
        ru: buildUrl(baseUrl, "ru", "services"),
      },
    },
  };
}