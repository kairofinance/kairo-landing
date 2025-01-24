"use client";

import {
  BanknotesIcon,
  ClockIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  ArrowsRightLeftIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import FAQ from "./FAQ";
import SectionVisual from "./SectionVisual";

const features = [
  {
    name: "Fiat & Crypto Support",
    description:
      "Deposit in dollars, pay in crypto, or vice versa. Built-in fiat on/off ramps make currency conversion seamless.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Automated Compliance",
    description:
      "Stay compliant with automated tax reporting, payment records, and regulatory requirements across jurisdictions.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Real-Time Payments",
    description:
      "Enable continuous payroll streams or instant transfers. Employees choose when and how they want to get paid.",
    icon: ClockIcon,
  },
  {
    name: "Token Vesting & Distribution",
    description:
      "Easily manage token-based compensation with customizable vesting schedules and automated distributions.",
    icon: BanknotesIcon,
  },
  {
    name: "Low-Cost Transactions",
    description:
      "Leverage Polygon's Layer 2 technology for near-zero transaction fees and instant settlement times.",
    icon: ArrowsRightLeftIcon,
  },
  {
    name: "Payroll Analytics",
    description:
      "Track spending, monitor payment flows, and gain insights into your payroll operations with detailed analytics.",
    icon: ChartBarIcon,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Features() {
  return (
    <>
      <div className="relative mx-auto max-w-[1100px] px-6 py-12">
        <div className="w-full">
          <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
            {/* Header Section */}
            <div className="max-w-2xl text-center sm:text-left">
              <h2 className="text-base font-medium text-purple-600">
                Comprehensive Platform
              </h2>
              <p className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
                Everything you need for modern operations
              </p>
              <p className="mt-6 text-base text-gray-600 max-w-2xl">
                One platform to handle all your payment needs, from traditional
                transactions to crypto distributions. No expertise required.
              </p>
            </div>

            {/* Features List */}
            <motion.div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  variants={itemVariants}
                  className="group relative"
                >
                  <div className="rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-200 hover:shadow-lg">
                    <div className="flex items-center gap-4">
                      <div
                        className={`rounded-xl bg-gray-100 p-2.5 ${
                          index === 0 || index === 3 ? "text-purple-600" : ""
                        }`}
                      >
                        <feature.icon className="h-6 w-6" />
                      </div>
                      <h3
                        className={`text-base font-semibold ${
                          index === 0 || index === 3
                            ? "text-purple-600"
                            : "text-gray-900"
                        }`}
                      >
                        {feature.name}
                      </h3>
                    </div>
                    <p className="mt-4 text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-12" />
            <SectionVisual />

            {/* FAQ Section */}
            <div className="mt-12">
              <div className="mx-auto">
                <FAQ />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
