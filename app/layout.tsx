import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import "react-loading-skeleton/dist/skeleton.css";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { Suspense } from "react";
import Spinner from "./components/Spinner";

export const metadata: Metadata = {
  title: "Kairo | Web3 Invoicing & Payments",
  description: "Streamline your Web3 business operations with Kairo",
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
