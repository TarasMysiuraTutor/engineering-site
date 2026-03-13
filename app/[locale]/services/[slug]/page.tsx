import { getDictionary } from "@/lib/getDictionary";
import { locales, type Locale } from "@/lib/i18n";

import { notFound } from "next/navigation";
import { getSectionSlug, buildUrl } from "@/lib/routes";

export async function generateStaticParams() {
  const params: { locale: Locale; slug: string }[] = [];

  for (const locale of locales) {
    const dict = await getDictionary(locale);

    for (const service of dict.services.list) {
      params.push({
        locale,
        slug: service.slug,
      });
    }
  }
  return params;
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const dict = await getDictionary(locale);

  const service = dict.services.list.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  console.log(dict.services.list);
  console.log("slug:", slug);

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "TechConsult Engineering",
      url: baseUrl,
    },
    areaServed: {
      "@type": "Place",
      name: "Europe",
    },
    url: `${baseUrl}/${locale}/leistungen/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <section className="container mx-auto py-16">
        <h1 className="text-3xl font-semibold mb-6">{service.title}</h1>

        <p className="mb-8">{service.description}</p>

        <div className="space-y-4">
          {service.content.map((block, index) => (
            <p key={index}>{block}</p>
          ))}
        </div>
      </section>
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const dict = await getDictionary(locale);

  const service = dict.services.list.find((s) => s.slug === slug);

  if (!service) return {};

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  return {
    title: `${service.title} | TechConsult Engineering`,
    description: service.description,
    alternates: {
      canonical: `${baseUrl}/${locale}/leistungen/${slug}`,
      languages: {
        de: `${baseUrl}/de/leistungen/${slug}`,
        en: `${baseUrl}/en/services/${slug}`,
        uk: `${baseUrl}/uk/leistungen/${slug}`,
        ru: `${baseUrl}/ru/leistungen/${slug}`,
        "x-default": `${baseUrl}/de/leistungen/${slug}`,
      },
    },
  };
}
