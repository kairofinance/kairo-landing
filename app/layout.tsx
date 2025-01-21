import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import "react-loading-skeleton/dist/skeleton.css";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { Suspense } from "react";
import Spinner from "./components/Spinner";

export const metadata: Metadata = {
  title: "Kairo - Modern Payroll Platform",
  description:
    "Streamline your payroll with seamless fiat-to-crypto flows, automated compliance, and low-cost transactions. Perfect for traditional businesses and Web3 projects.",
  keywords: [
    "crypto payroll",
    "fiat to crypto payroll",
    "automated payroll",
    "Web3 payroll",
    "compliance automation",
    "token vesting",
    "Polygon payments",
    "low-cost transactions",
    "global payroll",
    "real-time payments",
  ],
  authors: [{ name: "Kairo Finance" }],
  creator: "Kairo Finance",
  publisher: "Kairo Finance",
  icons: {
    icon: "./favicon.ico",
  },
  openGraph: {
    title: "Kairo - Modern Payroll Platform",
    description:
      "Modernize your payroll with built-in fiat conversion, compliance tools, and low-cost payment flows powered by Polygon.",
    url: "https://kairo.finance",
    siteName: "Kairo Finance",
    images: [
      {
        url: "https://kairo.finance/og.png",
        width: 1200,
        height: 630,
        alt: "Kairo Modern Payroll Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kairo - Modern Payroll Platform",
    description:
      "Modernize your payroll with built-in fiat conversion, compliance tools, and low-cost payment flows powered by Polygon.",
    creator: "@KairoFinance",
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
  metadataBase: new URL("https://kairo.finance"),
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "sCReyKuxA-64RTF-eRfo7P4GrVfqxpYMxP0L_gufxUQ",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0d0d0d] text-white antialiased">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow pt-20">
            <Suspense fallback={<Spinner />}>{children}</Suspense>
          </main>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
