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

const iconVariants = {
  initial: { y: 0 },
  hover: {
    y: -3,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      type: "spring",
      stiffness: 300,
    },
  },
};

export default function Features() {
  return (
    <div className="w-full bg-white" id="features">
      <div className="mx-auto max-w-[1000px] px-6 py-32 sm:py-40">
        {/* Header Section */}
        <div className="w-full">
          <h2 className="text-base/7 font-medium text-purple-600">
            Comprehensive Platform
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for modern operations
          </p>
          <p className="mt-6 text-lg/8 text-gray-600 max-w-2xl">
            One platform to handle all your payment needs, from traditional
            transactions to crypto distributions. No expertise required.
          </p>
        </div>

        {/* Features List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 w-full max-w-4xl mx-auto"
        >
          <div className="space-y-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.name}
                  variants={itemVariants}
                  className={`group rounded-2xl ${
                    index % 2 === 0 ? "bg-white" : "bg-purple-50"
                  } p-6`}
                >
                  <div className="flex items-start">
                    {/* Left side - Icon and Title */}
                    <div className="w-72 shrink-0 flex items-center gap-4">
                      <motion.div
                        initial="initial"
                        whileHover="hover"
                        variants={iconVariants}
                        className="flex-shrink-0"
                      >
                        <Icon
                          className="h-6 w-6 text-purple-600"
                          aria-hidden="true"
                        />
                      </motion.div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {feature.name}
                      </h3>
                    </div>

                    {/* Separator line */}
                    <div className="mx-8 mt-5 w-8 border-t border-gray-200" />

                    {/* Right side - Description */}
                    <div className="flex-1 pt-1">
                      <p className="text-base text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* FAQ Section - removed background and adjusted spacing */}
        <div className="mt-32">
          <div className="mx-auto">
            <FAQ />
          </div>
        </div>
      </div>
    </div>
  );
}
