"use client";

import { motion } from "framer-motion";
import PrimaryButton from "./shared/ui/PrimaryButton";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const stats = [
  { value: "5-12%", label: "Potential Yield" },
  { value: "2-5s", label: "Settlement Speed" },
  { value: "$0.01", label: "Per Transaction" },
];

export default function Hero() {
  return (
    <section className="relative isolate py-12 sm:py-20 mt-10 sm:mt-14">
      <div className="max-w-[1100px] relative mx-auto px-4 sm:px-6">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        {/* Main Content */}
        <div className="space-y-8 sm:space-y-12">
          <div className="space-y-4">
            <motion.h1
              {...fadeIn}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl font-semibold text-gray-900 tracking-tight"
            >
              Unlock the future of financial operations.
            </motion.h1>

            <motion.p
              {...fadeIn}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-600 max-w-2xl"
            >
              Kairo is the world&apos;s first yield-generating payroll protocol.
              Seamlessly pay, earn yield, and manage your global workforce, all
              in one secure platform.
            </motion.p>

            <motion.div
              {...fadeIn}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex gap-4"
            >
              <PrimaryButton
                href="/waitlist"
                variant="primary"
                className="mt-4 text-white hover:bg-black/70 font-semibold px-5 text-base py-5 rounded-full"
              >
                Join Waitlist
                <ArrowRightCircleIcon className="w-5 ml-2" />
              </PrimaryButton>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <motion.div
            {...fadeIn}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="rounded-lg bg-white/30 backdrop-blur-sm px-4 py-6 ring-1 ring-gray-200"
              >
                <div className="font-semibold text-xl text-gray-900">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
