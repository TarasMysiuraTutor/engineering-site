import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TechConsult Engineering",
    url: process.env.NEXT_PUBLIC_SITE_URL|| "http://localhost:3000",
    logo: "/logo-dark.svg",
    sameAs: [
      // якщо будуть LinkedIn, Xing тощо — сюди
    ],
  };

  return (
    <html>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        {children}
      </body>
    </html>
  );
}

export const metadata = {
  title: "TechConsult Engineering",
  description: "Engineering & Technical Consulting",
  metadataBase: new URL("http://localhost:3000"),
  icons: {
    icon: "/favicon.svg",
  },
};


