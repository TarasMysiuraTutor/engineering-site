import type { Dictionary } from "@/types/dictionary";

export const dictionary: Dictionary = {
  nav: {
    services: "Services",
    projects: "Projects",
    blog: "Blog",
    contact: "Contact",
  },

  home: {
    hero: {
      title: "Engineering Services for Industrial Projects",
      subtitle:
        "Independent technical consulting and structured support in planning and implementation.",
    },
    value: {
      title: "Technical Expertise and Clear Structures",
      description:
        "Support in planning, design, analysis, and coordination of technical projects.",
    },
    industries: {
      title: "Industries",
      list: [
        "Mechanical Engineering",
        "Energy",
        "Industrial Automation",
        "Infrastructure",
      ],
    },
    cta: {
      title: "Project Inquiry",
      description: "Contact me for an initial technical consultation.",
    },
  },

  seo: {
    title: "TechConsult Engineering",
    description:
      "Technical consulting and engineering services for industrial projects across Europe.",
    ogTitle: "TechConsult Engineering – Technical Expertise",
    ogDescription:
      "Planning, design, and engineering support for demanding projects.",
  },

  about: {
    hero: {
      title: "About Me",
      subtitle:
        "Engineer focused on structured planning and technical project execution.",
    },

    profile: {
      title: "Profile",
      text: "I support companies in the technical planning, analysis, and implementation of industrial projects. My focus lies on clear structures, transparent decisions, and practical solutions.",
    },

    expertise: {
      title: "Core Competencies",
      list: [
        "Technical project planning",
        "System and process analysis",
        "Design and technical documentation",
        "Coordination of external contractors",
        "Optimization of existing systems",
      ],
    },

    philosophy: {
      title: "Working Approach",
      text: "Technical projects require precise planning, transparent communication, and structured execution. My approach is based on analytical thinking, responsibility, and long-term stability of solutions.",
    },

    cta: {
      title: "Collaboration",
      text: "I am available for a non-binding initial consultation.",
    },
  },

  services: {
    title: "Services",
    list: [
      {
        id: "technische-planung",
        slug: "technical-planning",
        title: "Technical Planning",
        description: "Structured planning of technical systems and projects.",
        content: [
          "Analysis of requirements and technical conditions.",
          "Preparation of technical concepts and planning documentation.",
          "Coordination with involved disciplines.",
        ],
      },
      {
        id: "systemanalyse",
        slug: "system-analysis",
        title: "System and Process Analysis",
        description:
          "Analysis of existing systems to optimize performance and stability.",
        content: [
          "Evaluation of technical processes.",
          "Identification of weak points.",
          "Development of sustainable optimization solutions.",
        ],
      },
      {
        id: "projektunterstuetzung",
        slug: "project-support",
        title: "Project Support",
        description: "Technical support during the implementation phase.",
        content: [
          "Technical coordination with partners.",
          "Quality assurance.",
          "Documentation and reporting.",
        ],
      },
    ],
    nav: {
      services: "Leistungen",
      servicesSlug: "services",
    },
  },
};

export default dictionary;
