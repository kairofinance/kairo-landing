"use client";

import { motion } from "framer-motion";

export default function SectionVisual() {
  return (
    <div className="w-full flex justify-center px-6 py-12">
      <div className="relative w-full max-w-[1000px] flex items-center justify-center">
        <div className="flex items-center gap-3">
          <motion.div
            className="w-12 h-[1px] bg-black/10"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          <motion.div
            className="w-2 h-2 rounded-full bg-black/10"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          />
          <motion.div
            className="w-12 h-[1px] bg-black/10"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
      </div>
    </div>
  );
}
