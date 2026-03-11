import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { FixedBackground } from "@/components/fixed-background";
import { SiteHeader } from "@/components/site-header";
import { CustomCursor } from "@/components/custom-cursor";

const siteUrl = "https://cbta-coaching.de";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
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
    default: "cbta – Coaching by Thomas Arndt | Ernährung & Training Düsseldorf",
    template: "%s | cbta – Coaching by Thomas Arndt",
  },
  description:
    "cbta – Coaching by Thomas Arndt. Persönliches Coaching für Ernährung, Training & nachhaltige Ergebnisse in Düsseldorf & Hilden. Kein Schema F. Kostenloses Erstgespräch sichern.",
  keywords: [
    "cbta",
    "cbta Coaching",
    "cbta Thomas Arndt",
    "Coaching Düsseldorf",
    "Coaching Hilden",
    "Personal Trainer Düsseldorf",
    "Ernährungsberatung Düsseldorf",
    "Fitness Coach Düsseldorf",
    "Online Coaching Deutschland",
    "Ernährung Training Coach",
    "Thomas Arndt Coach",
    "Abnehmen Coaching Düsseldorf",
    "Muskelaufbau Coaching",
  ],
  authors: [{ name: "Thomas Arndt", url: siteUrl }],
  creator: "Thomas Arndt",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteUrl,
    siteName: "cbta – Coaching by Thomas Arndt",
    title: "cbta – Coaching by Thomas Arndt | Ernährung & Training Düsseldorf",
    description:
      "cbta – Persönliches Coaching für Ernährung, Training & nachhaltige Veränderung in Düsseldorf & Hilden. Kein Schema F. Jetzt kostenloses Erstgespräch sichern.",
    images: [
      {
        url: "/Foto6.jpg",
        width: 1080,
        height: 1578,
        alt: "Thomas Arndt – cbta Coach für Ernährung und Training",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "cbta – Coaching by Thomas Arndt",
    description:
      "Persönliches Coaching für Ernährung, Training & nachhaltige Veränderung. Kein Schema F. In Düsseldorf & Hilden oder online.",
    images: ["/Foto6.jpg"],
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

const jsonLdBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": siteUrl,
  name: "cbta – Coaching by Thomas Arndt",
  alternateName: "cbta",
  description:
    "cbta ist das persönliche Coaching von Thomas Arndt: Ernährung, Training und nachhaltige Veränderung ohne Schema F – in Düsseldorf, Hilden und online.",
  url: siteUrl,
  logo: `${siteUrl}/Logo.png`,
  image: `${siteUrl}/Foto6.jpg`,
  founder: {
    "@type": "Person",
    name: "Thomas Arndt",
    jobTitle: "Coach für Ernährung und Training",
    image: `${siteUrl}/Foto6.jpg`,
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
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Persönliches Coaching Düsseldorf" } },
    ],
  },
};

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Thomas Arndt",
  alternateName: "cbta",
  jobTitle: "Fitness- und Ernährungscoach",
  description: "Thomas Arndt ist Gründer von cbta – Coaching by Thomas Arndt. Seit 2013 hilft er Menschen mit individuellem Ernährungs- und Trainingscoaching in Düsseldorf, Hilden und online.",
  url: siteUrl,
  image: `${siteUrl}/Foto6.jpg`,
  sameAs: [
    "https://www.youtube.com/@ThomasArndt_cbta",
    "https://www.instagram.com/thomasarndt_cbta/",
    "https://open.spotify.com/show/4ZmKyh5I2lLhb1nUhRfCK0",
  ],
  worksFor: {
    "@type": "Organization",
    name: "cbta – Coaching by Thomas Arndt",
    url: siteUrl,
  },
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was ist cbta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "cbta steht für 'Coaching by Thomas Arndt'. Ich biete individuelles Coaching für Ernährung, Training und Lifestyle – kein Schema F, sondern Pläne, die zu deinem echten Leben passen.",
      },
    },
    {
      "@type": "Question",
      name: "Wie viel kostet das Coaching bei cbta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Das Coaching bei cbta kostet: 1 Monat 250€, 3 Monate 200€ pro Monat, 12 Monate 150€ pro Monat. Alle Pakete beinhalten individuelle Pläne, wöchentliche Check-Ins und 24/7 Erreichbarkeit.",
      },
    },
    {
      "@type": "Question",
      name: "Bietet cbta Online Coaching an?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, cbta bietet vollständiges Online Coaching an. Das Coaching funktioniert deutschlandweit – alles läuft digital über eine App, mit wöchentlichen Check-Ins und direktem Kontakt zu Thomas Arndt.",
      },
    },
    {
      "@type": "Question",
      name: "Wo ist cbta ansässig?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "cbta ist in Hilden ansässig, betreut Klienten in Düsseldorf, Hilden und im gesamten deutschsprachigen Raum. Online Coaching ist überall möglich.",
      },
    },
  ],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBusiness) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
      </head>
      <body
        className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable} antialiased`}
        style={{ backgroundColor: "transparent", position: "relative", zIndex: 1, paddingTop: "70px" }}
      >
        <FixedBackground />
        {/* Film grain overlay */}
        <div
          aria-hidden="true"
          className="grain-overlay"
        />
        <CustomCursor />
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
