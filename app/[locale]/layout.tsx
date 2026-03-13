import { notFound } from "next/navigation";
import Header from "@/components/Header";
import { locales, type Locale } from "@/lib/i18n";
import type { Metadata } from "next";
import { getAlternateLanguages } from "@/lib/seo";
import { siteUrl } from "@/lib/seo";

import { getDictionary } from "@/lib/getDictionary";

import LanguageSwitcher from "@/components/LanguageSwitcher";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  const dict = await getDictionary(locale as any);

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return (
    <div>
      <Header locale={locale as any} dict={dict} />
      <header className="flex justify-end p-6">
        {/* <LanguageSwitcher /> */}
      </header>
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
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as any);

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
        de: `${baseUrl}/de`,
        en: `${baseUrl}/en`,
        uk: `${baseUrl}/uk`,
        ru: `${baseUrl}/ru`,
        "x-default": `${baseUrl}/de`,
      },
    },
  };
}
