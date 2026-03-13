import { MetadataRoute } from "next";

import en from "@/dictionaries/en";
import de from "@/dictionaries/de";
import uk from "@/dictionaries/uk";
import ru from "@/dictionaries/ru";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!;

const dictionaries = {
  en,
  de,
  uk,
  ru,
};

const locales = Object.keys(dictionaries) as (keyof typeof dictionaries)[];

const articles = [
  "externer-engineering-consultant",
  "engineering-beratung-industrieprojekte",
  "technische-projektleitung-mittelstand",
  "risikomanagement-technische-projekte",
  "modernisierung-industrieanlagen",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    const dict = dictionaries[locale];

    // home
    urls.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    });

    // services page
    urls.push({
      url: `${baseUrl}/${locale}/${dict.services.nav.servicesSlug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });

    // service pages
    for (const service of dict.services.list) {
      urls.push({
        url: `${baseUrl}/${locale}/${dict.services.nav.servicesSlug}/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }

    // blog
    urls.push({
      url: `${baseUrl}/${locale}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });

    for (const slug of articles) {
      urls.push({
        url: `${baseUrl}/${locale}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return urls;
}