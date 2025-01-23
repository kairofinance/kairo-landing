"use client";

import {
  BanknotesIcon,
  ClockIcon,
  DocumentCheckIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function BentoGrid() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1000px] px-6">
        <div className="max-w-2xl">
          <h2 className="text-base font-medium text-gray-900">
            Built for Modern Business
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
            Streamlined Payroll Management
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3">
          {/* Yield Generation Panel - Main Feature */}
          <motion.div
            className="relative lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-2xl bg-black p-8">
              <div className="flex flex-col">
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-white/10 p-2.5">
                    <ArrowTrendingUpIcon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    Earn While You Wait
                  </h3>
                </div>
                <p className="mt-4 text-sm text-gray-300">
                  Generate yield on idle payroll funds. Automatically earn
                  returns while maintaining instant access to your capital.
                </p>

                {/* Stats */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <motion.div
                    className="rounded-xl bg-white/5 p-4"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-2xl font-bold text-white">5-12%</div>
                    <div className="text-sm text-gray-400">Annual Yield</div>
                  </motion.div>
                  <motion.div
                    className="rounded-xl bg-white/5 p-4"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-2xl font-bold text-white">Instant</div>
                    <div className="text-sm text-gray-400">Withdrawals</div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Smaller Feature Panels */}
          {[
            {
              title: "Real-Time Payments",
              description:
                "Enable continuous payroll streams or instant transfers.",
              icon: ClockIcon,
              color: "bg-gray-900",
            },
            {
              title: "Automated Compliance",
              description:
                "Stay compliant with automated tax reporting and records.",
              icon: DocumentCheckIcon,
              color: "bg-gray-900",
            },
            {
              title: "Token Distribution",
              description:
                "Manage token-based compensation and vesting schedules.",
              icon: BanknotesIcon,
              color: "bg-gray-900",
            },
            {
              title: "Analytics Dashboard",
              description:
                "Track spending and monitor payment flows in real-time.",
              icon: ChartBarIcon,
              color: "bg-gray-900",
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-200 hover:shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-gray-100 p-2.5 group-hover:bg-gray-900 group-hover:text-white transition-colors duration-200">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
