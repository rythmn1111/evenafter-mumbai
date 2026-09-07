import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter",
  subsets: ["latin"],
});

// apex redirects to www, so www is the canonical host
export const SITE_URL = "https://www.evenafter.io";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "EVENAFTER — Conference & Hackathon in Mumbai | 8–9 Sept 2026",
    template: "%s | EVENAFTER MUMBAI",
  },
  description:
    "EVENAFTER MUMBAI is an Ethereum-focused conference and hackathon in Mumbai on 8–9 September 2026. Talks, panels, mentorship and a mini hackathon across DeFi, Privacy and AI.",
  applicationName: "EVENAFTER",
  keywords: [
    "EVENAFTER",
    "EVENAFTER MUMBAI",
    "EVENAFTER hackathon",
    "EVENAFTER events",
    "EVENAFTER conference",
    "Mumbai hackathon",
    "Mumbai Ethereum conference",
    "Ethereum hackathon India",
    "web3 conference Mumbai",
    "blockchain hackathon Mumbai 2026",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "EVENAFTER MUMBAI",
    title: "EVENAFTER MUMBAI — BEST Conference & Mini Hackathon",
    description:
      "An Ethereum-focused conference and hackathon in Mumbai, 8–9 September 2026. Talks, panels, mentorship and a mini hackathon across DeFi, Privacy and AI.",
    url: SITE_URL,
    locale: "en_IN",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "EVENAFTER MUMBAI — BEST Conference & Mini Hackathon, 8–9 September 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EVENAFTER MUMBAI — BEST Conference & Mini Hackathon",
    description:
      "Ethereum-focused conference and hackathon in Mumbai. 8–9 September 2026.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${interTight.variable}
      ${interTight.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
