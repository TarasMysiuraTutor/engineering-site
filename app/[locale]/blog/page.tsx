import Link from "next/link";
import { getDictionary } from "@/lib/getDictionary";
import type { Locale } from "@/lib/i18n";

import { articles } from "@/data/articles";
import { Metadata } from "next";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const posts = [
    {
      slug: "externer-engineering-consultant",
      title: "Was macht ein externer Engineering Consultant?",
    },
    {
      slug: "engineering-beratung-industrieprojekte",
      title: "Engineering Beratung für Industrieprojekte",
    },
    {
      slug: "technische-projektleitung-mittelstand",
      title: "Technische Projektleitung im Mittelstand",
    },
    {
      slug: "risikomanagement-technische-projekte",
      title: "Risikomanagement in technischen Projekten",
    },
    {
      slug: "modernisierung-industrieanlagen",
      title: "Modernisierung von Industrieanlagen",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Engineering Beratung Blog",
    description: "Fachartikel zu Engineering Beratung und Industrieprojekten.",
  };

  return (
    <main className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-10">Engineering Beratung Blog</h1>

      <div className="space-y-8">
        {articles.map((article) => (
          <article key={article.slug} className="border-b pb-6">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href={`/${locale}/blog/${article.slug}`}>
                {article.title}
              </Link>
            </h2>

            <p className="text-gray-600">{article.description}</p>
          </article>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const { locale } = params;

  const isGerman = locale === "de";

  const title = isGerman
    ? "Engineering Beratung Blog"
    : "Engineering Consulting Blog";

  const description = isGerman
    ? "Fachartikel zu Engineering Beratung, Projektmanagement und Industrieoptimierung."
    : "Insights on engineering consulting, project management and industrial optimization.";

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${locale}/blog`,
      languages: {
        de: `${baseUrl}/de/blog`,
        en: `${baseUrl}/en/blog`,
        uk: `${baseUrl}/uk/blog`,
        ru: `${baseUrl}/ru/blog`,
        "x-default": `${baseUrl}/de/blog`,
      },
    },
    openGraph: {
      title,
      description,
      url: `https://yourdomain.com/${locale}/blog`,
      type: "website",
    },
  };
}
