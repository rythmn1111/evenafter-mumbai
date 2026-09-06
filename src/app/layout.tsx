import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EVENAFTER MUMBAI 2026 | Conference & Hackathon",
  description:
    "EVENAFTER MUMBAI is an Ethereum-focused conference & hackathon happening in Mumbai from 8–9 September 2026.",
  openGraph: {
    title: "EVENAFTER MUMBAI 2026 | BEST Conference & Hackathon",
    description:
      "EVENAFTER MUMBAI is an Ethereum-focused conference & hackathon taking place on 8 - 9 September 2026 in Mumbai, India. It will host 50 speakers, 500 attendees, and 300 hackers.",
    url: "https://ethmumbai.in",
    siteName: "EVENAFTER MUMBAI",
    images: [
      {
        url: "https://ethmumbai.in/thumbnail.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EVENAFTER MUMBAI 2026",
    description:
      "BEST Conference & Hackathon in Mumbai. 8 – 9 September 2026 in Mumbai",
    images: [
      {
        url: "https://ethmumbai.in/thumbnail.png",
        width: 1200,
        height: 630,
      },
    ],
  },
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
