"use client";

import React, { memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="shadow-sm">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-1 flex justify-start">
            <Link href="/">
              <h1 className="font-garet-heavy cursor-pointer uppercase text-white font-extrabold text-2xl hover:text-orange-600 transition-colors duration-200">
                Kairo
              </h1>
            </Link>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-6">
            <Link
              href="/faq"
              className={`text-sm font-medium uppercase ${
                pathname === "/faq"
                  ? "text-orange-600"
                  : "text-white hover:text-orange-600"
              } transition-colors duration-200`}
            >
              FAQ
            </Link>
            <Link
              href="https://testnet.kairo.finance"
              className="group relative inline-flex items-center uppercase text-sm px-3 py-[5px] rounded-full font-semibold text-white overflow-hidden transition-all duration-300"
            >
              <span className="absolute inset-0 bg-white/10 group-hover:bg-orange-600/80 transition-all duration-300 ease-out"></span>
              <span className="absolute inset-0 scale-x-0 group-hover:scale-x-100 bg-gradient-to-r from-orange-600/80 to-orange-500/80 origin-left transition-transform duration-200 ease-out"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-200">
                Launch App
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default memo(Navbar);
