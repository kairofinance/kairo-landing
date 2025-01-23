"use client";

import React, { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import PrimaryButton from "./shared/ui/PrimaryButton";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <Image
                src="/kairo_logo.png"
                alt="Kairo Logo"
                width={120}
                height={32}
                className="h-8 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-8 font-medium">
            <PrimaryButton
              href="/waitlist"
              className="bg-purple-600 hover:bg-purple-700"
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
