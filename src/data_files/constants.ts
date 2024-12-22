import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "CodeStreetHive",
  tagline: "Creative Digital Agency",
  description: "Discover creative branding, app development & digital marketing at Code Street Hive. Trust our custom approach. Schedule a consultation today!",
  description_short: "Discover creative branding, app development & digital marketing at Code Street Hive. Trust our custom approach. Schedule a consultation today!",
  url: "https://www.codestreethive.com",
  author: "Anish S",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Innovative Branding & App Development Agency`,
  description: "Discover creative branding, app development & digital marketing at Code Street Hive. Trust our custom approach. Schedule a consultation today!",
  image: ogImageSrc,
};
