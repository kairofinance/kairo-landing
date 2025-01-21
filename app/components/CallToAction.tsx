import Link from "next/link";

export default function CallToAction() {
  return (
    <div className="relative isolate mt-32 px-6 py-32 sm:mt-56 sm:py-40 lg:px-8">
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      >
        <defs>
          <pattern
            id="1d4240dd-898f-445f-932d-e2872fd12de3"
            width={200}
            height={200}
            x="50%"
            y={0}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={0} className="overflow-visible fill-zinc-800/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#1d4240dd-898f-445f-932d-e2872fd12de3)"
        />
      </svg>

      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-4xl font-garet font-extrabold tracking-tight text-white sm:text-5xl">
          Modernize Your Payroll Without the Complexity
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg/8 text-gray-300">
          Seamlessly manage traditional and crypto payroll with built-in fiat
          conversion, compliance tools, and low-cost payment flows powered by
          Polygon.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/waitlist"
            className="group relative inline-flex items-center uppercase text-base px-6 py-2 rounded-full font-semibold text-white overflow-hidden transition-all duration-300"
          >
            <span className="absolute inset-0 bg-white/10 group-hover:bg-purple-600/80 transition-all duration-300 ease-out"></span>
            <span className="absolute inset-0 scale-x-0 group-hover:scale-x-100 bg-gradient-to-r from-purple-600/80 to-purple-500/80 origin-left transition-transform duration-200 ease-out"></span>
            <span className="relative z-10 group-hover:text-white transition-colors duration-200">
              Join Early Access
            </span>
          </Link>
          <Link
            href="#features"
            className="group text-base font-garet font-extrabold text-white transition-colors duration-200"
          >
            <span className="bg-left-bottom bg-gradient-to-r from-purple-400 to-purple-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-200 ease-out">
              Learn More{" "}
              <span
                aria-hidden="true"
                className="group-hover:translate-x-1 inline-block transition-transform duration-200"
              >
                →
              </span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
