"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  BanknotesIcon,
  ClockIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon,
  GlobeAltIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    Icon: ArrowTrendingUpIcon,
    title: "Earn Yield",
    description: "Generate 5-12% APY on idle payroll funds",
    gradient: "bg-gradient-to-br from-purple-500/10 to-indigo-500/10",
  },
  {
    Icon: ClockIcon,
    title: "Instant Settlement",
    description: "Process payments in 2-5 seconds globally",
    gradient: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10",
  },
  {
    Icon: BanknotesIcon,
    title: "Low Cost",
    description: "Pay just $0.01 per transaction",
    gradient: "bg-gradient-to-br from-emerald-500/10 to-teal-500/10",
  },
  {
    Icon: GlobeAltIcon,
    title: "Global Coverage",
    description: "Support for 150+ currencies worldwide",
    gradient: "bg-gradient-to-br from-orange-500/10 to-amber-500/10",
  },
  {
    Icon: ChartBarIcon,
    title: "Real-time Analytics",
    description: "Track and optimize your payroll flows",
    gradient: "bg-gradient-to-br from-pink-500/10 to-rose-500/10",
  },
];

export default function FeatureCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((current) => (current + 1) % features.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((current) => {
      const nextIndex = current + newDirection;
      if (nextIndex < 0) return features.length - 1;
      if (nextIndex >= features.length) return 0;
      return nextIndex;
    });
  };

  const CurrentIcon = features[currentIndex].Icon;

  return (
    <div className="relative w-full h-full">
      {/* Navigation Arrows - Now truly outside the content */}
      <div className="absolute -left-16 -right-16 inset-y-0 flex items-center justify-between pointer-events-none">
        <button
          onClick={() => paginate(-1)}
          className="pointer-events-auto p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
          aria-label="Previous feature"
        >
          <ChevronLeftIcon className="w-6 h-6 text-gray-400 hover:text-gray-600" />
        </button>
        <button
          onClick={() => paginate(1)}
          className="pointer-events-auto p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
          aria-label="Next feature"
        >
          <ChevronRightIcon className="w-6 h-6 text-gray-400 hover:text-gray-600" />
        </button>
      </div>

      {/* Main Content */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className={`absolute inset-0 rounded-2xl ${features[currentIndex].gradient}`}
        >
          <div className="h-full flex items-center justify-center">
            <div className="max-w-xl mx-auto px-8">
              <div className="flex flex-col items-center text-center space-y-6">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="p-4 rounded-full bg-white shadow-md"
                >
                  <CurrentIcon className="w-8 h-8 text-gray-900" />
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl font-bold text-gray-900"
                >
                  {features[currentIndex].title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-gray-600"
                >
                  {features[currentIndex].description}
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {features.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-gray-800 w-4" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
