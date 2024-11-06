"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

interface AnimatedButtonProps {
  href: string;
  children: ReactNode;
  primary?: boolean;
  secondary?: boolean;
}

export default function AnimatedButton({
  href,
  children,
  primary,
  secondary,
}: AnimatedButtonProps) {
  const baseClasses =
    "px-6 py-3 rounded-lg font-semibold transition-colors duration-200 inline-block";
  const primaryClasses = "bg-orange-600 hover:bg-orange-700 text-white";
  const secondaryClasses =
    "bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800";

  const buttonClasses = `${baseClasses} ${primary ? primaryClasses : ""} ${
    secondary ? secondaryClasses : ""
  }`;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    </motion.div>
  );
}
