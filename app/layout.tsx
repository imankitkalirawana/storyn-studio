import type { Metadata, Viewport } from "next";
import { Inter, Tinos } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import { buildMetadata, seoConfig } from "@/lib/seo";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const tinos = Tinos({
  variable: "--font-tinos",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  ...buildMetadata(),
  title: seoConfig.defaultTitle,
  applicationName: seoConfig.siteName,
  keywords: [
    "UI/UX design studio",
    "digital product design",
    "product strategy",
    "user experience design",
    "brand identity design",
    "visual identity",
    "branding agency",
    "digital design studio",
    "web design",
    "webflow websites",
    "SaaS product design",
    "startup design partner",
    "conversion-focused design",
    "experience design consultancy",
  ],
  authors: [{ name: seoConfig.siteName, url: seoConfig.baseUrl }],
  creator: seoConfig.siteName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: seoConfig.siteName,
  url: seoConfig.baseUrl,
  description: seoConfig.defaultDescription,
  sameAs: ["https://www.instagram.com/storyn.studio/"],
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@storynstudio.in",
    contactType: "customer service",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${inter.variable} ${tinos.variable} antialiased`}>
        <SpeedInsights />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
