"use client";

import {
  BanknotesIcon,
  ClockIcon,
  DocumentCheckIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const features = [
  {
    name: "Real-Time Payments",
    description:
      "Enable continuous payroll streams with instant transfers. Employees choose when and how they want to get paid, with complete flexibility and control over their earnings.",
    icon: ClockIcon,
  },
  {
    name: "Automated Compliance",
    description:
      "Stay compliant with automated tax reporting and records. Our system handles regulatory requirements across jurisdictions, making global payroll management effortless.",
    icon: DocumentCheckIcon,
  },
  {
    name: "Token Distribution",
    description:
      "Manage token-based compensation with customizable vesting schedules. Automate distributions and track allocations all in one unified platform.",
    icon: BanknotesIcon,
  },
];

export default function BentoGrid() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[1100px] px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base font-medium text-purple-600">
            Built for Modern Business
          </h2>
          <p className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Streamlined Payroll Management
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            Generate yield on idle payroll funds while maintaining instant
            access to your capital. Our platform automates everything from
            compliance to distributions.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-purple-600">
                    <feature.icon
                      className="size-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a
                      href="#"
                      className="text-sm/6 font-semibold text-purple-600"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
