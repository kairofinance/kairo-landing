"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Suspense, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Spinner from "@/components/Spinner";

interface FAQ {
  question: string;
  answer: React.ReactNode;
}

const faqs: FAQ[] = [
  {
    question: "What is Kairo?",
    answer:
      "Kairo is an all-in-one finance platform for DAOs, freelancers, and web3-native businesses. We simplify on-chain financial management with features like smart invoicing, payroll streaming, and treasury management.",
  },
  {
    question: "How does the protocol generate revenue?",
    answer:
      "Kairo charges a 1% fee on token transactions processed through the platform. This fee structure ensures sustainable protocol development while maintaining competitive rates for users.",
  },
  {
    question: "Does Kairo have a token?",
    answer:
      "We are working on a protocol token to generate additional rewards for protocol users.",
  },
  {
    question: "When will Kairo launch on mainnet?",
    answer:
      "Kairo is scheduled to launch on mainnet in Q4 2024. We're currently in testnet phase to ensure a robust and secure platform for our users.",
  },
  {
    question: "Which chains will Kairo support?",
    answer: (
      <div>
        We are actively working on multi-chain support to provide our services
        across various networks. Follow us on{" "}
        <Link
          href="https://x.com/KairoFinance"
          target="_blank"
          className="text-orange-600 hover:text-orange-500 transition-colors"
        >
          X (Twitter)
        </Link>{" "}
        to stay updated on our latest chain integrations and announcements.
      </div>
    ),
  },
  {
    question: "Is Kairo secure?",
    answer: (
      <div>
        Kairo is currently in development and will be listed on Immunefi with a
        bug bounty program to encourage responsible security research and
        reporting.
      </div>
    ),
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

function FAQItem({ faq }: { faq: FAQ }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      variants={itemVariants}
      className="group border-b border-zinc-800 last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:opacity-80 transition-opacity"
      >
        <h3 className="text-lg font-garet font-extrabold text-white pr-8">
          {faq.question}
        </h3>
        <ChevronDownIcon
          className={`h-6 w-6 text-orange-600 transform transition-transform duration-150 ease-out flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: { duration: 0.15, ease: "easeOut" },
                opacity: { duration: 0.1, ease: "linear" },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.15, ease: "easeIn" },
                opacity: { duration: 0.1, ease: "linear" },
              },
            }}
            className="overflow-hidden"
          >
            <div className="text-base text-gray-300 pb-6">{faq.answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <Suspense fallback={<Spinner />}>
      <div className="min-h-screen py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-garet font-extrabold text-orange-600">
              Support
            </h2>
            <p className="mt-2 text-4xl font-garet font-extrabold tracking-tight text-white sm:text-5xl">
              Frequently Asked Questions
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Find answers to common questions about Kairo&apos;s features,
              roadmap, and security.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-3xl"
          >
            <div className="divide-y divide-zinc-800 rounded-2xl bg-zinc-900/30 px-8">
              {faqs.map((faq, index) => (
                <FAQItem key={index} faq={faq} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Suspense>
  );
}
