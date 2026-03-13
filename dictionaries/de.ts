import type { Dictionary } from "@/types/dictionary";

export const dictionary: Dictionary = {
  nav: {
    services: "Leistungen",
    projects: "Projekte",
    blog: "Blog",
    contact: "Kontakt",
  },
  home: {
    hero: {
      title: "Ingenieurleistungen für industrielle Projekte",
      subtitle:
        "Unabhängige technische Beratung und strukturierte Unterstützung bei Planung und Umsetzung.",
    },
    value: {
      title: "Technische Kompetenz und klare Strukturen",
      description:
        "Unterstützung bei Planung, Konstruktion, Analyse und Koordination technischer Projekte.",
    },
    industries: {
      title: "Branchen",
      list: ["Maschinenbau", "Energie", "Industrieautomation", "Infrastruktur"],
    },
    cta: {
      title: "Projektanfrage",
      description: "Kontaktieren Sie mich für eine technische Erstberatung.",
    },
  },
  seo: {
    title: "TechConsult Engineering",
    description:
      "Technische Beratung und Ingenieurdienstleistungen für Industrieprojekte in Europa.",
    ogTitle: "TechConsult Engineering – Technische Expertise",
    ogDescription:
      "Planung, Konstruktion und Engineering-Support für anspruchsvolle Projekte.",
  },
  about: {
    hero: {
      title: "Über mich",
      subtitle:
        "Ingenieur mit Fokus auf strukturierte Planung und technische Projektumsetzung.",
    },

    profile: {
      title: "Kurzprofil",
      text: "Ich unterstütze Unternehmen bei der technischen Planung, Analyse und Umsetzung industrieller Projekte. Mein Schwerpunkt liegt auf klaren Strukturen, nachvollziehbaren Entscheidungen und praktikablen Lösungen.",
    },

    expertise: {
      title: "Kompetenzbereiche",
      list: [
        "Technische Projektplanung",
        "System- und Prozessanalyse",
        "Konstruktion und technische Dokumentation",
        "Koordination externer Dienstleister",
        "Optimierung bestehender Systeme",
      ],
    },

    philosophy: {
      title: "Arbeitsweise",
      text: "Technische Projekte erfordern präzise Planung, transparente Kommunikation und strukturierte Umsetzung. Mein Ansatz basiert auf analytischem Denken, Verantwortung und langfristiger Stabilität der Lösungen.",
    },

    cta: {
      title: "Zusammenarbeit",
      text: "Für eine unverbindliche Erstberatung stehe ich Ihnen gerne zur Verfügung.",
    },
  },

  services: {
    title: "Leistungen",
    metaTitle: "Ingenieurleistungen",
    metaDescription:
      "Technische Planung, Systemanalyse und Projektunterstützung für industrielle Projekte.",
    list: [
      {
        id: "technische-planung",
        slug: "technische-planung",
        title: "Technische Planung",
        description: "Strukturierte Planung technischer Systeme und Projekte.",
        content: [
          "Analyse der Anforderungen und technischen Rahmenbedingungen.",
          "Erstellung technischer Konzepte und Planungsunterlagen.",
          "Koordination mit beteiligten Gewerken.",
        ],
      },
      {
        id: "systemanalyse",
        slug: "systemanalyse",
        title: "System- und Prozessanalyse",
        description:
          "Analyse bestehender Systeme zur Optimierung von Leistung und Stabilität.",
        content: [
          "Bewertung technischer Abläufe.",
          "Identifikation von Schwachstellen.",
          "Entwicklung nachhaltiger Optimierungslösungen.",
        ],
      },
      {
        id: "projektunterstuetzung",
        slug: "projektunterstuetzung",
        title: "Projektunterstützung",
        description: "Technische Begleitung während der Umsetzungsphase.",
        content: [
          "Technische Abstimmung mit Partnern.",
          "Qualitätssicherung.",
          "Dokumentation und Reporting.",
        ],
      },
    ],
    nav: {
      services: "Leistungen",
      servicesSlug: "leistungen",
    },
  },
};

export default dictionary;
