import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  noIndex?: boolean;
}

/**
 * Generate metadata for SEO
 * @param props - SEO properties
 * @returns Metadata object for Next.js
 */
export function generateSEO(props: SEOProps = {}): Metadata {
  const {
    title,
    description = siteConfig.description,
    image = siteConfig.ogImage,
    url,
    type = "website",
    noIndex = false,
  } = props;

  const finalTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const finalUrl = url ? `${siteConfig.url}${url}` : siteConfig.url;

  return {
    title: finalTitle,
    description,
    applicationName: siteConfig.name,
    keywords: [...siteConfig.keywords],
    authors: [
      {
        name: siteConfig.creator.name,
        url: siteConfig.creator.url,
      },
    ],
    creator: siteConfig.creator.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: finalUrl,
    },
    openGraph: {
      type,
      locale: "en_US",
      url: finalUrl,
      title: finalTitle,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: finalTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: finalTitle,
      description,
      images: [image],
      creator: "@markeva",
      site: "@markeva",
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
  };
}
