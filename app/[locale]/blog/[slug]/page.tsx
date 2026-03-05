import { getDictionary } from "@/lib/getDictionary";

const articles: Record<string, any> = {
  "externer-engineering-consultant": {
    title: "Was macht ein externer Engineering Consultant?",
    description:
      "Aufgaben, Vorteile und Einsatzbereiche eines externen Engineering Consultants.",
  },
  "engineering-beratung-industrieprojekte": {
    title: "Engineering Beratung für Industrieprojekte",
    description:
      "Ablauf, Vorteile und strategische Bedeutung von Engineering Beratung.",
  },
  "technische-projektleitung-mittelstand": {
    title: "Technische Projektleitung im Mittelstand",
    description:
      "Wann externe Projektleitung sinnvoll ist und welche Vorteile sie bietet.",
  },
  "risikomanagement-technische-projekte": {
    title: "Risikomanagement in technischen Projekten",
    description: "Wie technische Risiken systematisch minimiert werden können.",
  },
  "modernisierung-industrieanlagen": {
    title: "Modernisierung von Industrieanlagen",
    description:
      "Planung, Umsetzung und strategische Vorteile moderner Industrieanlagen.",
  },
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  const article = articles[slug];

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://localhost:3000";

  if (!article) {
    return <div>Article not found</div>;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: articles.title,
    description: articles.description,
    author: {
      "@type": "Organization",
      name: "Ingenieurbüro",
    },
    publisher: {
      "@type": "Organization",
      name: "Ingenieurbüro",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/${locale}/blog/${slug}`,
    },
  };

  const breadcrumbsLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: locale === "de" ? "Startseite" : "Home",
        item: `${baseUrl}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${baseUrl}/${locale}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `${baseUrl}/${locale}/blog/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Was macht ein externer Engineering Consultant?",
            author: {
              "@type": "Organization",
              name: "TechConsult Engineering",
            },
            publisher: {
              "@type": "Organization",
              name: "TechConsult Engineering",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://localhost:3000/de/blog/externer-engineering-consultant",
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }}
      />

      <article className="container mx-auto py-16 max-w-3xl">
        <h1 className="text-3xl font-semibold mb-6">{article.title}</h1>

        <p className="mb-6">{article.description}</p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Typische Aufgaben eines Engineering Consultants
        </h2>

        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Technische Analyse bestehender Systeme</li>
          <li>Erstellung von technischen Konzepten und Planungen</li>
          <li>Projektkoordination zwischen Fachabteilungen</li>
          <li>Risikobewertung und Qualitätskontrolle</li>
          <li>Unterstützung bei Ausschreibungen und Lieferantenauswahl</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Wann lohnt sich externe Engineering Beratung?
        </h2>

        <p className="mb-6">
          Externe Unterstützung ist besonders sinnvoll, wenn internes Know-how
          temporär fehlt, Spezialwissen benötigt wird oder Projekte unabhängig
          bewertet werden sollen. Mittelständische Unternehmen profitieren
          häufig von der Flexibilität und objektiven Perspektive eines externen
          Engineering Consultants.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Vorteile für Industrieunternehmen
        </h2>

        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Unabhängige technische Bewertung</li>
          <li>Strukturierte Projektplanung</li>
          <li>Reduzierung technischer Risiken</li>
          <li>Effizientere Umsetzung komplexer Projekte</li>
        </ul>

        <p className="mt-8">
          Wenn Sie Unterstützung bei technischen Projekten benötigen, erfahren
          Sie mehr über unsere{" "}
          <a href="/de/leistungen" className="underline">
            Ingenieurleistungen
          </a>
          .
        </p>
      </article>
      <div className="mt-12 p-8 bg-gray-100 rounded-xl">
        <h3 className="text-2xl font-semibold mb-4">
          {locale === "de"
            ? "Benötigen Sie Unterstützung bei Ihrem Projekt?"
            : "Need support for your project?"}
        </h3>

        <p className="mb-6">
          {locale === "de"
            ? "Kontaktieren Sie mich für eine strukturierte technische Beratung."
            : "Contact me for structured technical consulting."}
        </p>

        <a
          href={`/${locale}/contact`}
          className="inline-block px-6 py-3 bg-black text-white rounded-lg"
        >
          {locale === "de" ? "Kontakt aufnehmen" : "Get in touch"}
        </a>
      </div>
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  return {
    title: articles.titles || "Blog",
    description: articles.descriptions || "Engineering Blog",
    alternates: {
      canonical: `${baseUrl}/${locale}/blog/${slug}`,
      languages: {
        de: `${baseUrl}/de/blog/${slug}`,
        en: `${baseUrl}/en/blog/${slug}`,
        uk: `${baseUrl}/uk/blog/${slug}`,
        ru: `${baseUrl}/ru/blog/${slug}`,
        "x-default": `${baseUrl}/de/blog/${slug}`,
      },
    },
    openGraph: {
      title: articles.titles || "Blog",
      description: articles.descriptions || "Engineering Blog",
      url: `${baseUrl}/${locale}/blog/${slug}`,
      siteName: "Your Company Name",
      locale: locale === "de" ? "de_DE" : "en_US",
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: articles.titles || "Blog",
      description: articles.descriptions || "Engineering Blog",
    },
  };
}
