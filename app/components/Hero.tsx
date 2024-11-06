"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const textRevealVariants = {
    hidden: {
      y: "100%",
    },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        mass: 1,
      },
    },
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Simplified Grid Background with larger size */}
      <div className="absolute inset-0 -z-10">
        {/* Main grid layer */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "30px 30px",
          }}
          animate={{
            transform: `translate(${mousePosition.x * 0.02}px, ${
              mousePosition.y * 0.02
            }px)`,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 90 }}
        />

        {/* Simple spotlight effect - increased radius */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle 800px at ${mousePosition.x}% ${mousePosition.y}%, rgba(234,88,12,0.03), transparent)`,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 90 }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[90rem] mx-auto w-full py-32"
      >
        <div className="flex flex-col items-center text-center">
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse" />
            <span className="text-orange-600 font-garet font-extrabold text-sm tracking-wider uppercase">
              Now on Sepolia Testnet
            </span>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <h1 className="text-[clamp(3rem,12vw,10rem)] font-garet font-semibold tracking-tight leading-[0.9] mb-8">
              <div className="relative overflow-hidden">
                <motion.div variants={textRevealVariants} className="relative">
                  <span className="inline-block">
                    Web3
                    <span className="inline-block text-orange-600">.</span>
                  </span>{" "}
                  <span className="inline-block">Finance</span>
                </motion.div>
              </div>

              <div className="relative overflow-hidden">
                <motion.div variants={textRevealVariants} className="relative">
                  <span className="block text-gray-400">Simplified.</span>
                </motion.div>
              </div>
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-2xl mb-12"
          >
            The all-in-one platform for DAOs, freelancers, and web3-native
            businesses. Manage invoices, track funds, and streamline your
            financial operations.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-x-8"
          >
            <div className="flex items-center gap-x-4">
              <Link
                href="https://testnet.kairo.finance"
                className="group relative inline-flex items-center uppercase px-3 py-[5px] rounded-full font-semibold text-black overflow-hidden transition-all duration-300"
              >
                <span className="absolute inset-0 bg-white group-hover:bg-orange-600/80 transition-all duration-300 ease-out"></span>
                <span className="absolute inset-0 scale-x-0 group-hover:scale-x-100 bg-gradient-to-r from-orange-600/80 to-orange-500/80 origin-left transition-transform duration-200 ease-out"></span>
                <span className="relative z-10 group-hover:text-black transition-colors duration-200">
                  Launch App
                </span>
              </Link>
            </div>
            <Link
              href="#features"
              className="group text-base font-garet font-extrabold hover-underline"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Simple gradient overlay */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-50" />
      </div>
    </div>
  );
}
