import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import "react-loading-skeleton/dist/skeleton.css";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { Suspense } from "react";
import Spinner from "./components/Spinner";

export const metadata: Metadata = {
  title: "Kairo - Web3 Billing Platform",
  description:
    "Secure Web3 billing with real-time insights and seamless transactions. Streamline your crypto payments and invoicing.",
  keywords: [
    "Web3 billing",
    "crypto payments",
    "blockchain invoicing",
    "cryptocurrency",
    "payment solutions",
    "Web3 payments",
  ],
  authors: [{ name: "Kairo" }],
  creator: "Kairo",
  publisher: "Kairo",
  icons: {
    icon: "./favicon.ico",
  },
  openGraph: {
    title: "Kairo - Web3 Billing Platform",
    description:
      "Secure Web3 billing with real-time insights and seamless transactions. Streamline your crypto payments and invoicing",
    url: "https://kairo.finance", // Replace with your actual domain
    siteName: "Kairo",
    images: [
      {
        url: "https://kairo.finance/preview.png",
        width: 1200,
        height: 630,
        alt: "Kairo Web3 Billing Platform Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kairo - Web3 Billing Platform",
    description:
      "Secure Web3 billing with real-time insights and seamless transactions. Streamline your crypto payments and invoicing.",
    images: ["https://kairo.finance/preview.png"],
    creator: "@KairoFinance", // Replace with your Twitter handle
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#040404] text-white antialiased">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow ">
            <Suspense fallback={<Spinner />}>{children}</Suspense>
          </main>
        </div>
      </body>
      <Analytics />
    </html>
  );
}
