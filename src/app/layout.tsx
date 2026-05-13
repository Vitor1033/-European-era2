import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://european-era.eu"),
  title: {
    default: "European Era — Erasmus & Internships Across Europe",
    template: "%s — European Era"
  },
  description:
    "European Era helps students access Erasmus programs and internships across Europe, with end-to-end mobility support and trusted partner networks.",
  openGraph: {
    type: "website",
    siteName: "European Era",
    title: "European Era — Erasmus & Internships Across Europe",
    description:
      "Explore internships and Erasmus opportunities across Europe with mobility support, accommodation guidance, and partner matching.",
    url: "https://european-era.eu"
  },
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-slate-900 antialiased">{children}</body>
    </html>
  );
}

