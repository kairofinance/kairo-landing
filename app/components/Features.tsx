"use client";

import {
  DocumentIcon,
  WalletIcon,
  UserGroupIcon,
} from "@heroicons/react/20/solid";
import {
  BanknotesIcon,
  ChartBarIcon,
  DocumentCheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import ComingSoonTag from "./ComingSoonTag";

const iconMap = {
  Document: DocumentIcon,
  Wallet: WalletIcon,
  UserGroup: UserGroupIcon,
  Banknotes: BanknotesIcon,
  ChartBar: ChartBarIcon,
  DocumentCheck: DocumentCheckIcon,
  Clock: ClockIcon,
  CurrencyDollar: CurrencyDollarIcon,
};

interface Feature {
  name: string;
  description: string;
  iconName: keyof typeof iconMap;
  comingSoon?: boolean;
}

const features: Feature[] = [
  {
    name: "PDF Export & Customization",
    description:
      "Generate professional invoices with custom branding, logos, and instant PDF export capabilities.",
    iconName: "Document",
  },
  {
    name: "Token Vesting",
    description:
      "Implement flexible vesting schedules for team incentives and automated token distribution.",
    iconName: "DocumentCheck",
    comingSoon: true,
  },
  {
    name: "Multi-Wallet Support",
    description:
      "Manage payments and track balances across multiple wallets with a consolidated dashboard view.",
    iconName: "Wallet",
  },
  {
    name: "Cash Flow Analytics",
    description:
      "Visualize financial trends with detailed charts and real-time token value conversions.",
    iconName: "ChartBar",
  },
  {
    name: "DAO Treasury Management",
    description:
      "Set budget limits, approval workflows, and community governance for treasury operations.",
    iconName: "Banknotes",
    comingSoon: true,
  },
  {
    name: "Real-Time Monitoring",
    description:
      "Track transactions, receive threshold alerts, and monitor payment deadlines automatically.",
    iconName: "Clock",
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
    <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base/7 font-garet font-extrabold text-orange-600">
          Powerful Features
        </h2>
        <p className="mt-2 text-pretty text-4xl font-garet font-extrabold tracking-tight text-white sm:text-5xl lg:text-balance">
          Simplifying Web3 Finance
        </p>
        <p className="mt-6 text-lg/8 text-gray-300">
          Kairo streamlines financial operations with comprehensive tools
          designed specifically for DAOs, freelancers, and web3-native
          businesses.
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
            const Icon = iconMap[feature.iconName];
            return (
              <motion.div
                key={feature.name}
                variants={itemVariants}
                className="group relative"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-600/10 group-hover:bg-orange-600/20 transition-colors duration-300">
                    <Icon
                      className="h-6 w-6 text-orange-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-garet font-extrabold text-white">
                      {feature.name}
                    </h3>
                    {feature.comingSoon && <ComingSoonTag />}
                  </div>
                </div>
                <p className="text-sm/6 text-gray-300 ml-16">
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
