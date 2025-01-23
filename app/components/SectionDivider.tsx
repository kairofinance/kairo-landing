"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
  variant?: "dots" | "wave" | "lines";
}

export default function SectionDivider({
  variant = "dots",
}: SectionDividerProps) {
  if (variant === "wave") {
    return (
      <div className="relative h-24 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <svg
            viewBox="0 0 1024 100"
            className="w-full text-gray-50 fill-current"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C320,100 480,100 720,0 C960,-100 1120,-100 1440,0 L1440,100 L0,100 Z" />
          </svg>
        </motion.div>
      </div>
    );
  }

  if (variant === "lines") {
    return (
      <div className="relative h-24 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="h-px bg-gray-200 mx-1 flex-1"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            />
          ))}
        </motion.div>
      </div>
    );
  }

  // Default dots variant
  return (
    <div className="relative h-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <div className="flex items-center justify-center gap-4">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-gray-200"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.2,
                duration: 0.5,
                type: "spring",
                stiffness: 200,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
