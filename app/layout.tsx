import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { FixedBackground } from "@/components/fixed-background";
import { SiteHeader } from "@/components/site-header";

const siteUrl = "https://cbta-coaching.de";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Coaching Düsseldorf & Hilden | Ernährung & Training – Thomas Arndt",
    template: "%s | cbta – Coaching by Thomas Arndt",
  },
  description:
    "Professionelles Coaching für Ernährung, Training und nachhaltige Veränderung in Düsseldorf & Hilden. Persönliche Betreuung, klare Ergebnisse. Jetzt kostenloses Erstgespräch sichern.",
  keywords: [
    "Coaching Düsseldorf",
    "Coaching Hilden",
    "Personal Trainer Düsseldorf",
    "Ernährungsberatung Düsseldorf",
    "Fitness Coach Düsseldorf",
    "Online Coaching Deutschland",
    "Ernährung Training Coach",
    "Thomas Arndt Coach",
    "cbta Coaching",
    "Abnehmen Coaching Düsseldorf",
    "Lifestyle Coach Düsseldorf",
    "Muskelaufbau Coaching",
  ],
  authors: [{ name: "Thomas Arndt", url: siteUrl }],
  creator: "Thomas Arndt",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteUrl,
    siteName: "cbta – Coaching by Thomas Arndt",
    title: "Coaching Düsseldorf & Hilden | Ernährung & Training – Thomas Arndt",
    description:
      "Professionelles Coaching für Ernährung, Training und nachhaltige Veränderung in Düsseldorf & Hilden. Jetzt kostenloses Erstgespräch sichern.",
    images: [
      {
        url: "/Logo.png",
        width: 800,
        height: 800,
        alt: "cbta – Coaching by Thomas Arndt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coaching Düsseldorf & Hilden | Thomas Arndt",
    description:
      "Coaching für Ernährung, Training & nachhaltige Veränderung. Persönlich in Düsseldorf & Hilden oder online.",
    images: ["/Logo.png"],
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
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": siteUrl,
  name: "cbta – Coaching by Thomas Arndt",
  description:
    "Professionelles Coaching für Ernährung, Training und nachhaltige Veränderung in Düsseldorf & Hilden.",
  url: siteUrl,
  logo: `${siteUrl}/Logo.png`,
  image: `${siteUrl}/Logo.png`,
  founder: {
    "@type": "Person",
    name: "Thomas Arndt",
    jobTitle: "Coach für Ernährung und Training",
    sameAs: [
      "https://www.youtube.com/@ThomasArndt_cbta",
      "https://www.instagram.com/thomasarndt_cbta/",
    ],
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hilden",
    addressRegion: "Nordrhein-Westfalen",
    addressCountry: "DE",
  },
  areaServed: [
    { "@type": "City", name: "Düsseldorf" },
    { "@type": "City", name: "Hilden" },
    { "@type": "AdministrativeArea", name: "Nordrhein-Westfalen" },
    { "@type": "Country", name: "Deutschland" },
  ],
  sameAs: [
    "https://www.youtube.com/@ThomasArndt_cbta",
    "https://www.instagram.com/thomasarndt_cbta/",
    "https://open.spotify.com/show/4ZmKyh5I2lLhb1nUhRfCK0",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Coaching-Leistungen",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ernährungscoaching" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Trainingscoaching" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Online Coaching" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Persönliches Coaching" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
        style={{ backgroundColor: "transparent", position: "relative", zIndex: 1, paddingTop: "70px" }}
      >
        <FixedBackground />
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
