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
      "Kairo is a modern payroll platform that bridges traditional and crypto payments. We make it easy for businesses to manage salaries, handle compliance, and streamline payments—whether in fiat or crypto—all while keeping costs low through Polygon's Layer 2 technology.",
  },
  {
    question: "How does Kairo handle traditional payroll?",
    answer:
      "Kairo integrates seamlessly with existing banking systems, allowing employers to deposit funds in their local currency. Our platform automatically handles tax calculations, compliance requirements, and can distribute payments to employee bank accounts. We also provide detailed reporting and documentation for accounting purposes.",
  },
  {
    question: "Can employees choose how they receive their pay?",
    answer:
      "Yes! Employees can choose to receive their salary in fiat currency, cryptocurrency, or a combination of both. They can also adjust their preferences at any time through their dashboard. Our platform handles all the necessary conversions automatically.",
  },
  {
    question: "How does Kairo ensure compliance?",
    answer: (
      <div>
        Our platform includes built-in compliance tools that:
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Automatically calculate and withhold appropriate taxes</li>
          <li>Generate and store required tax documents</li>
          <li>Track payment history and maintain audit trails</li>
          <li>Adapt to different jurisdictional requirements</li>
        </ul>
      </div>
    ),
  },
  {
    question: "What makes Kairo's payment flows more efficient?",
    answer:
      "By leveraging Polygon's Layer 2 technology, we can process transactions with near-zero fees and instant settlement times. This means no more waiting for traditional bank transfers or paying high wire fees. Plus, our smart contract architecture enables features like real-time payment streams and automated vesting schedules.",
  },
  {
    question: "Is Kairo secure?",
    answer: (
      <div>
        Security is our top priority. Kairo employs multiple layers of
        protection:
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Regular smart contract audits</li>
          <li>Multi-signature wallet requirements for large transfers</li>
          <li>Bank-grade encryption for sensitive data</li>
          <li>Optional multi-factor authentication</li>
        </ul>
        We also maintain significant insurance coverage and follow industry best
        practices for both traditional and crypto security measures.
      </div>
    ),
  },
  {
    question: "When will Kairo launch on mainnet?",
    answer: (
      <div>
        Kairo is currently in testnet phase, with mainnet launch scheduled for
        Q4 2024. Follow us on{" "}
        <Link
          href="https://twitter.com/KairoFinance"
          target="_blank"
          className="text-purple-400 hover:text-purple-300 transition-colors"
        >
          Twitter
        </Link>{" "}
        for the latest updates and announcements.
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
      className="group border-b border-white/10 last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:opacity-80 transition-opacity"
      >
        <h3 className="text-lg font-semibold text-white pr-8">
          {faq.question}
        </h3>
        <ChevronDownIcon
          className={`h-6 w-6 text-purple-400 transform transition-transform duration-150 ease-out flex-shrink-0 ${
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
            <div className="text-base text-white/60 pb-6">{faq.answer}</div>
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
            <h2 className="text-base font-medium text-purple-400">
              Support Center
            </h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Frequently Asked Questions
            </p>
            <p className="mt-6 text-lg leading-8 text-white/60">
              Learn more about how Kairo is modernizing payroll with efficient
              payment flows, built-in compliance, and seamless fiat-crypto
              integration.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-3xl"
          >
            <div className="divide-y divide-white/10 rounded-2xl bg-white/5 px-8">
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
