export type Dictionary = {
  nav: {
    services: string;
    projects: string;
    blog: string;
    contact: string;
  };
  home: {
    hero: {
      title: string;
      subtitle: string;
    };
    value: {
      title: string;
      description: string;
    };
    industries: {
      title: string;
      list: string[];
    };
    cta: {
      title: string;
      description: string;
    };
  };
  seo: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  about: {
    hero: {
      title: string;
      subtitle: string;
    };

    profile: {
      title: string;
      text: string;
    };

    expertise: {
      title: string;
      list: string[];
    };

    philosophy: {
      title: string;
      text: string;
    };

    cta: {
      title: string;
      text: string;
    };
  };
  services: {
    title: string;
    metaTitle: string;
    metaDescription: string;
    list: [
      {
        id: string;
        slug: string;
        title: string;
        description: string;
        content: string[];
      },
      {
        id: string;
        slug: string;
        title: string;
        description: string;
        content: string[];
      },
      {
        id: string;
        slug: string;
        title: string;
        description: string;
        content: string[];
      },
    ];
    nav: {
      services: string;
      servicesSlug: string;
    };
  };
};
