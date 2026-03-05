import { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!;

const locales = ["de", "en", "uk", "ru"] as const

const defaultLocale = "de"

const articles = [
  "externer-engineering-consultant",
  "engineering-beratung-industrieprojekte",
  "technische-projektleitung-mittelstand",
  "risikomanagement-technische-projekte",
  "modernisierung-industrieanlagen",
];

const routes = [
  "",
  "/services",
  "/blog",
]
// export default function sitemap(): MetadataRoute.Sitemap {
//   const blogUrls = articles.flatMap((slug) =>
//     locales.map((locale) => ({
//       url: `${baseUrl}/${locale}/blog/${slug}`,
//       lastModified: new Date(),
//       changeFrequency: "monthly" as const,
//       priority: 0.7,
//     }))
//   );

//   const staticUrls = locales.map((locale) => ({
//     url: `${baseUrl}/${locale}`,
//     lastModified: new Date(),
//     changeFrequency: "weekly" as const,
//     priority: 1,
//   }));

//   return [...staticUrls, ...blogUrls];
// }






export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://example.com"

  const urls: MetadataRoute.Sitemap = []

  for (const route of routes) {
    for (const locale of locales) {
      const url =
        locale === defaultLocale
          ? `${baseUrl}/${locale}${route}`
          : `${baseUrl}/${locale}${route}`

      urls.push({
        url,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: route === "" ? 1 : 0.8,
      })
    }
  }

  return urls
}