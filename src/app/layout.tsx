import type { Metadata, Viewport } from "next";
import { Cormorant, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Invernada do Sol — Restaurante & Cabanas em Ouro, SC",
    template: "%s | Invernada do Sol",
  },
  description:
    "Uma experiência gastronômica única em plena Serra Catarinense. Sabores do inverno, aconchego das cabanas e a magia de Ouro-SC.",
  keywords: [
    "restaurante",
    "cabanas",
    "Ouro SC",
    "Serra Catarinense",
    "gastronomia",
    "inverno",
    "experiência",
  ],
  authors: [{ name: "Invernada do Sol" }],
  creator: "Invernada do Sol",
  metadataBase: new URL("https://invernadedosol.com.br"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://invernadedosol.com.br",
    siteName: "Invernada do Sol",
    title: "Invernada do Sol — Restaurante & Cabanas em Ouro, SC",
    description:
      "Uma experiência gastronômica única em plena Serra Catarinense.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Invernada do Sol",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Invernada do Sol",
    description:
      "Uma experiência gastronômica única em plena Serra Catarinense.",
    images: ["/og-image.jpg"],
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
      className={`${cormorant.variable} ${dmSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
