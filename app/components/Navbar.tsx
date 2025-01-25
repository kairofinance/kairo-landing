"use client";

import Link from "next/link";
import Image from "next/image";
import PrimaryButton from "./shared/ui/PrimaryButton";

export default function Navbar() {
  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50 max-w-[1100px] mx-auto">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Kairo</span>
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

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <PrimaryButton href="/waitlist" className="text-sm/6 font-semibold">
              Join Waitlist <span aria-hidden="true">→</span>
            </PrimaryButton>
          </div>
        </nav>
      </header>
    </div>
  );
}
