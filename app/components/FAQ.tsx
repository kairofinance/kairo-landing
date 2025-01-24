"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "How does yield generation work?",
    answer:
      "When payroll funds are deposited, they're automatically allocated to various DeFi protocols to generate yield. This happens without locking your funds - you maintain instant access for payroll needs while earning returns on idle capital.",
  },
  {
    question: "Is my payroll data secure?",
    answer:
      "Yes, we implement enterprise-grade security measures. All sensitive data is encrypted, and smart contracts are regularly audited. We maintain the highest standards of data protection and financial security.",
  },
  {
    question: "How quickly can I withdraw funds?",
    answer:
      "Withdrawals are instant and available 24/7. Our smart contract architecture ensures your funds are always liquid and accessible, regardless of how they're currently being used to generate yield.",
  },
  {
    question: "What currencies do you support?",
    answer:
      "We support 150+ fiat currencies and major cryptocurrencies. You can deposit in one currency and pay out in another, with real-time conversion at market rates.",
  },
  {
    question: "How do you handle tax compliance?",
    answer:
      "Our platform automatically generates compliant tax documents and payment records across jurisdictions. We stay up-to-date with regulatory requirements and adjust reporting accordingly.",
  },
  {
    question: "What are the transaction fees?",
    answer:
      "Each transaction costs $0.01, regardless of size. This includes currency conversion, yield generation, and payment processing.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full">
      <div className="max-w-2xl">
        <h2 className="text-base/7 font-medium text-gray-900">
          Common Questions
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          FAQ
        </p>
        <p className="mt-6 text-lg/8 text-gray-600">
          Everything you need to know about Kairo&apos;s platform. Can&apos;t
          find what you&apos;re looking for? Reach out to our team.
        </p>
      </div>

      <div className="mt-16 space-y-0 rounded-xl overflow-hidden border border-gray-200">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`${
              index % 2 === 0 ? "bg-white" : "bg-gray-50"
            } border-b border-gray-200 last:border-0`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex w-full items-center justify-between py-6 px-6 text-left"
            >
              <span className="text-lg font-semibold text-gray-900">
                {faq.question}
              </span>
              <motion.div
                initial={false}
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <ChevronDownIcon className="h-5 w-5 text-gray-500 flex-shrink-0" />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                    transition: {
                      height: {
                        duration: 0.3,
                        ease: "easeOut",
                      },
                      opacity: {
                        duration: 0.2,
                        delay: 0.1,
                      },
                    },
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: {
                        duration: 0.3,
                        ease: "easeIn",
                      },
                      opacity: {
                        duration: 0.2,
                      },
                    },
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="text-base text-gray-600">{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
