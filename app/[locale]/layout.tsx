import { notFound } from "next/navigation";
import Header from "@/components/Header";
import { locales, type Locale } from "@/lib/i18n";
import type { Metadata } from "next";
import { getDictionary } from "@/lib/getDictionary";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: { locale: Locale };
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = params;

  if (!locales.includes(locale)) {
    notFound();
  }

  const dict = await getDictionary(locale);

  return (
    <div>
      <Header locale={locale} dict={dict} />
      {children}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "TechConsult Engineering",
            url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
            logo: "/logo-dark.svg",
            sameAs: [],
          }),
        }}
      />
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const { locale } = params;

  const dict = await getDictionary(locale);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const languages = Object.fromEntries(
    locales.map((loc) => [loc, `${baseUrl}/${loc}`]),
  );

  return {
    metadataBase: new URL(baseUrl),

    title: {
      default: dict.seo.title,
      template: `%s | ${dict.seo.title}`,
    },

    description: dict.seo.description,

    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        ...languages,
        "x-default": `${baseUrl}/de`,
      },
    },
  };
}