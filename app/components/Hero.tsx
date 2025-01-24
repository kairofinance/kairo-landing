"use client";

import { motion } from "framer-motion";
import FlowChart from "./FlowChart";
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
    <section className="relative py-12 sm:py-20 mt-8 sm:mt-12">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 -z-10" />

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
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

          {/* Flow Chart */}
          <motion.div
            {...fadeIn}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative w-full aspect-[16/9] sm:aspect-[2/1] max-h-[500px] rounded-lg overflow-hidden bg-white/30 backdrop-blur-sm ring-1 ring-gray-200"
          >
            <FlowChart />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
