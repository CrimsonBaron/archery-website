export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Lukostřelba Dolní Bousov",
  description: "Unleash your inner archer at Lukostřelba Dolní Bousov, the premier archery club in Czechia. We offer expert instruction, a welcoming community, and exciting events for all skill levels. Join us and discover the thrill of archery!",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Contact",
      href: "/contact",
    }
  ],
  supportedLanguages:[
    {
      langName: "Čestina",
      langCode: "cz",
    },
    {
      langName: "English",
      langCode: "eng",
    }
  ],
  links:[
    {
      label: "facebook",
      href: ""
    },
    {
      label: "Instagram",
      href:""
    },
    {
      label: "Twitter",
      href:""
    }
  ]
};
