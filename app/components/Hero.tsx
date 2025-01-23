"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SleekVisual from "./SleekVisual";
import Link from "next/link";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const stats = [
  { value: "5-12%", label: "Annual Yield" },
  { value: "2-5s", label: "Settlement" },
  { value: "$0.01", label: "Per Transaction" },
];

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative py-8">
      {/* Interactive Background */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0,0,0,0.03), transparent 50%)`,
          }}
        />
      </motion.div>

      <div className="max-w-[1000px] mx-auto px-6">
        <div className="space-y-8">
          {/* Main Content */}
          <div className="space-y-4">
            <motion.h1
              {...fadeIn}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight max-w-3xl"
            >
              Unlock the future of financial operations.{" "}
              <span className="text-purple-600">Earn while you pay.</span>
            </motion.h1>
            <motion.p
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl"
            >
              Kairo is the world&apos;s first yield-generating payroll protocol.
              Pay, earn, automate, and scale your global operations.
            </motion.p>
          </div>

          {/* CTA Button */}
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.3 }}
            className="flex gap-4"
          >
            <Link
              href="/waitlist"
              className="inline-flex items-center rounded-full bg-purple-600 px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-purple-700"
            >
              Join Waitlist
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-3 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                {...fadeIn}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200"
              >
                <div className="text-xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Feature Carousel */}
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.5 }}
            className="relative h-[400px]"
          >
            <SleekVisual />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
