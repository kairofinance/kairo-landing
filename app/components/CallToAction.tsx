import Link from "next/link";

export default function CallToAction() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[1100px] px-6 py-24 sm:py-32 lg:px-8">
        <h2 className="max-w-2xl text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Modernize your payroll without the complexity.
        </h2>
        <div className="mt-10 flex items-center gap-x-6">
          <Link
            href="/waitlist"
            className="rounded-full bg-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
          >
            Join Waitlist
          </Link>
          <Link
            href="#features"
            className="text-sm/6 font-semibold text-gray-900"
          >
            Learn more <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
