import type { Metadata } from "next";

const siteName = "Storyn Studio";
const defaultTitle = "Storyn Studio | UI/UX Design, Brand Identity & Digital Product Studio";
const defaultDescription =
  "We craft digital experiences that turn ideas into signals. UI/UX design, brand identity, and product strategy for startups and enterprises.";
const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://storyn.studio";
const twitterHandle = "@storynstudio";

/** Meta description length recommended by search engines (e.g. Google ~155–160). */
const MAX_DESCRIPTION_LENGTH = 160;

export const seoConfig = {
  siteName,
  defaultTitle,
  defaultDescription,
  baseUrl,
  twitterHandle,
  ogImagePath: "/og.png",
};

function absoluteUrl(path: string): string {
  return path.startsWith("http") ? path : `${seoConfig.baseUrl}${path}`;
}

export function buildMetadata({
  title,
  description = seoConfig.defaultDescription,
  path = "",
  image,
  noIndex = false,
  openGraphType = "website",
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  /** Use "article" for blog/case study pages for richer snippets. */
  openGraphType?: "website" | "article";
} = {}): Metadata {
  const url = path ? absoluteUrl(path) : seoConfig.baseUrl;
  const ogImage = image ? absoluteUrl(image) : absoluteUrl(seoConfig.ogImagePath);
  const fullTitle = title
    ? `${title} | ${seoConfig.siteName}`
    : seoConfig.defaultTitle;
  const truncatedDescription =
    description.length > MAX_DESCRIPTION_LENGTH
      ? description.slice(0, MAX_DESCRIPTION_LENGTH - 3).trim() + "…"
      : description;

  return {
    title: fullTitle,
    description: truncatedDescription,
    metadataBase: new URL(seoConfig.baseUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: openGraphType,
      locale: "en_US",
      url,
      siteName: seoConfig.siteName,
      title: fullTitle,
      description: truncatedDescription,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: seoConfig.siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: seoConfig.twitterHandle,
      creator: seoConfig.twitterHandle,
      title: fullTitle,
      description: truncatedDescription,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
