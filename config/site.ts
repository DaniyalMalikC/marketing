export const siteConfig = {
  name: process.env.NEXT_PUBLIC_APP_NAME || "Marketing",
  description: "A modern marketing website built with Next.js",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  ogImage: "/og-image.jpg",
  links: {
    twitter: "https://twitter.com",
    github: "https://github.com",
  },
  creator: {
    name: "Your Name",
    url: "https://yourwebsite.com",
  },
} as const;

export type SiteConfig = typeof siteConfig;
