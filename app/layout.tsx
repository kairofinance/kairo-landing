import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import "react-loading-skeleton/dist/skeleton.css";
import Navbar from "@/components/Navbar";
import RouteTransition from "@/components/shared/ui/RouteTransition";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Kairo | Web3 Finance Platform",
  description:
    "The all-in-one finance platform for DAOs, freelancers, and web3-native businesses.",
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
            <RouteTransition />
            {children}
          </main>
        </div>
      </body>
      <Analytics />
    </html>
  );
}
