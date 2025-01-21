"use client";

import React, { memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import PrimaryButton from "./shared/ui/PrimaryButton";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d0d0d]">
      <div className="max-w-[1300px] mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <Image
                src="/kairo_logo.png"
                alt="Kairo Logo"
                width={120}
                height={32}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-8">
            <Link
              href="/faq"
              className={`text-sm font-medium ${
                pathname === "/faq"
                  ? "text-purple-400"
                  : "text-white/90 hover:text-white"
              } transition-colors duration-200`}
            >
              FAQ
            </Link>
            <PrimaryButton
              href="/waitlist"
              className="bg-purple-500/10 hover:bg-purple-500/20 text-purple-400"
            >
              Join Waitlist
            </PrimaryButton>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default memo(Navbar);
