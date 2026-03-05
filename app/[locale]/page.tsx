import { getDictionary } from "@/lib/getDictionary";
import type { Locale } from "@/lib/i18n";

import { getServicesBase } from "@/lib/routes";

import Link from "next/link";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const base = getServicesBase(locale);

  return (
    <main>
      {/* HERO */}
      <section className="container mx-auto py-20">
        <h1 className="text-4xl font-semibold mb-6">{dict.home.hero.title}</h1>

        <p className="text-lg mb-8 text-muted-foreground">
          {dict.home.hero.subtitle}
        </p>

        <div>
          <Link
            href={`/${locale}/${base}`}
            className="inline-block bg-black text-white px-6 py-3 rounded hover:opacity-90 transition"
          >
            Leistungen ansehen
          </Link>
        </div>
      </section>

      {/* VALUE */}
      <section>
        <h2>{dict.home.value.title}</h2>
        <p>{dict.home.value.description}</p>
      </section>

      {/* INDUSTRIES */}
      <section>
        <h2>{dict.home.industries.title}</h2>
        <ul>
          {dict.home.industries.list.map((industry) => (
            <li key={industry}>{industry}</li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>{dict.home.cta.title}</h2>
        <p>{dict.home.cta.description}</p>
      </section>
    </main>
  );
}
