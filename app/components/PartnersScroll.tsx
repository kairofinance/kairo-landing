"use client";

import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

// Use bao.svg as placeholder for all logos
const LOGOS = Array(7).fill("/partners/bao.svg");

// Duplicate the array for smooth infinite scroll
const SCROLL_LOGOS = [...LOGOS, ...LOGOS];

export default function PartnersScroll() {
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({
      x: [0, -(LOGOS.length * 200)], // Increased distance for wider logos
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      },
    });
  }, [controls]);

  return (
    <div className="w-full border-y border-white/10 overflow-hidden py-12">
      <div className="max-w-[90rem] mx-auto">
        <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8 mb-12">
          <h2 className="text-base font-garet font-extrabold text-orange-600">
            Trusted By Leading Web3 Protocols
          </h2>
        </div>

        <div className="relative w-full">
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-16 items-center"
              initial={{ x: 0 }}
              animate={controls}
              style={{
                paddingLeft: "50%",
              }}
            >
              {SCROLL_LOGOS.map((logo, i) => (
                <div
                  key={i}
                  className="relative h-12 w-32 grayscale hover:grayscale-0 transition-all duration-200 flex-shrink-0"
                >
                  <Image
                    src={logo}
                    alt="Partner Logo"
                    fill
                    className="object-contain"
                    priority={i < LOGOS.length}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Improved gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />
        </div>
      </div>
    </div>
  );
}
