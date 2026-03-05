import { getDictionary } from "@/lib/getDictionary";
import type { Locale } from "@/lib/i18n";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const about = dict.about;

  return (
    <section className="container mx-auto py-16">
      <h1 className="text-3xl font-semibold mb-6">{about.hero.title}</h1>

      <p className="mb-12 text-lg text-muted-foreground">
        {about.hero.subtitle}
      </p>

      <h2 className="text-2xl font-semibold mb-4">{about.profile.title}</h2>
      <p className="mb-10">{about.profile.text}</p>

      <h2 className="text-2xl font-semibold mb-4">{about.expertise.title}</h2>
      <ul className="list-disc pl-6 mb-10 space-y-2">
        {about.expertise.list.map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-4">{about.philosophy.title}</h2>
      <p className="mb-12">{about.philosophy.text}</p>

      <div className="border-t pt-8">
        <h3 className="text-xl font-semibold mb-2">{about.cta.title}</h3>
        <p>{about.cta.text}</p>
      </div>
    </section>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

   const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  return {
    title: `${dict.about.hero.title} | TechConsult Engineering`,
    description:
      "Ingenieurleistungen für industrielle Projekte: Planung, Analyse und Projektunterstützung.",
    alternates: {
      canonical: `${baseUrl}/${locale}/about`,
      languages: {
        de: `${baseUrl}/de/about`,
        en: `${baseUrl}/en/about`,
        uk: `${baseUrl}/uk/about`,
        ru: `${baseUrl}/ru/about`,
        "x-default": `${baseUrl}/de/about`,
      },
    },
  };
}


