import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { DM_Sans } from "next/font/google";
import { siteConfig, siteUrl } from "@/config/site";
import { JsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

const jedira = localFont({
  variable: "--font-jedira",
  display: "swap",
  src: [
    {
      path: "./fonts/Jedira-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Jedira-Italic.otf",
      weight: "400",
      style: "italic",
    },
  ],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: siteConfig.seo.title,
    template: "%s | Invernada do Sol",
  },
  description: siteConfig.seo.description,
  keywords: [...siteConfig.seo.keywords],
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteUrl() }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "restaurant",
  alternates: {
    canonical: siteUrl(),
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl(),
    siteName: siteConfig.name,
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.seo.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [siteConfig.seo.ogImage],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", sizes: "any" },
      { url: "/icon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-48.png", type: "image/png", sizes: "48x48" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/favicon-512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/icon.svg",
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Verificação de propriedade dos webmasters — preencher quando os tokens
  // forem emitidos pelo cliente (ver pendências no relatório da Fase 4):
  // verification: {
  //   google: "TOKEN_GOOGLE_SEARCH_CONSOLE",
  //   other: { "msvalidate.01": "TOKEN_BING_WEBMASTER" },
  // },
};

export const viewport: Viewport = {
  themeColor: "#160e08",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${jedira.variable} ${dmSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
