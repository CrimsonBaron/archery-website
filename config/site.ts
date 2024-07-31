import { BsChat } from "react-icons/bs";

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
  ],
  contactOptions: [
    {
      icon: "BsChat",
      title: "Chat with us!",
      description:  "We answer when posible.",
      callToAction: "open whatsapp",
      href: "",
      disabled: false
    },
    {
      icon: "CiMail",
      title: "Email us!",
      description: "We are here to help",
      callToAction: "support@lukostrelbadolnibousov.cz",
      href: "",
      disabled: true
    },
    {
      icon: "IoCallOutline",
      title: "Call us!",
      description: "Mon-fri 8:00 to 17:00",
      callToAction: "+420 607 528 761",
      href: "",
      disabled: true
    },
    {
      icon: "FiMapPin",
      title: "Visit us!",
      description: "visti our range",
      callToAction: "open google maps",
      href: "",
      disabled: false
    },
  ],
  pricingPlans: [
    {
      name: "Regular",
      plans: [
        {
          name: "First lesson",
          desciption: "Discover the thrill of archery with our free introductory lesson.",
          price: "FREE",
          introducturyLesson: true,
          flexibleScheduling: true,
          equipmentIncluded: true,
        },
        {
          name: "Per lesson",
          desciption: "Discover the thrill of archery with our free introductory lesson.",
          price: "200 Kč",
          introducturyLesson: false,
          flexibleScheduling: true,
          equipmentIncluded: true,

        },
        {
          name: "10 lessons",
          desciption: "Accelerate your archery skills with our comprehensive 10-lesson package. Benefit from structured learning and personalized guidance to improve your accuracy and technique.",
          price: "1000 Kč",
          introducturyLesson: false,
          flexibleScheduling: true,
          equipmentIncluded: true,

        },
      ]
    },
    {
      name: "Seasonal",
      plans: [
        {
          name: "Winter season",
          desciption: "from 15th of october to 15th of april, 2x per week",
          price: "1500 Kč",
          introducturyLesson: false,
          flexibleScheduling: true,
          equipmentIncluded: true,
        },
        {
          name: "Summer season",
          desciption: "from 16th of april to 14th of october, 2x per week",
          price: "2500 Kč",
          introducturyLesson: false,
          flexibleScheduling: true,
          equipmentIncluded: true,
        },
      ]
    }
  ]
};
