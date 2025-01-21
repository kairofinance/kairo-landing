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
    <div
      className="mx-auto mt-32 max-w-[1300px] px-6 sm:mt-40 lg:px-8"
      id="features"
    >
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base/7 font-medium text-purple-400">
          Comprehensive Platform
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Everything you need for modern payroll
        </p>
        <p className="mt-6 text-lg/8 text-white/60">
          One platform to handle all your payment needs, from traditional
          salaries to crypto token distributions. No crypto expertise required.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto mt-16 max-w-5xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.name}
                variants={itemVariants}
                className="relative group"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors duration-300">
                    <Icon
                      className="h-6 w-6 text-purple-400"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-base font-semibold text-white">
                    {feature.name}
                  </h3>
                </div>
                <p className="text-sm/6 text-white/60 ml-16">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
