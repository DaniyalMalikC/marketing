export const siteConfig = {
  name: process.env.NEXT_PUBLIC_APP_NAME || "Markeva",
  description:
    "Transform your marketing vision into reality with Markeva - where innovation meets excellence in digital marketing solutions.",
  tagline: "Elevate Your Marketing",
  shortDescription: "Innovative digital marketing solutions for modern businesses",
  longDescription:
    "Markeva is your premier partner in digital marketing excellence. We combine cutting-edge technology with creative strategies to deliver measurable results that drive growth and exceed expectations.",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  ogImage: "/og-image.jpg",
  links: {
    twitter: "https://twitter.com/markeva",
    github: "https://github.com/markeva",
    linkedin: "https://linkedin.com/company/markeva",
    instagram: "https://instagram.com/markeva",
  },
  creator: {
    name: "Markeva Team",
    url: "https://markeva.com",
  },
  keywords: [
    "digital marketing",
    "marketing solutions",
    "SEO",
    "content marketing",
    "social media marketing",
    "email marketing",
    "marketing automation",
    "analytics",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
