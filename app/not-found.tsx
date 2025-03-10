"use client";

import Link from "next/link";
import { Suspense } from "react";
import Spinner from "./components/Spinner";

export default function NotFound() {
  return (
    <Suspense fallback={<Spinner />}>
      <main className="grid min-h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-purple-400">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-kairo-white sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-400">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-full bg-purple-500/10 px-3.5 py-2.5 text-sm font-semibold text-purple-400 hover:bg-purple-500/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400"
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
    </Suspense>
  );
}
