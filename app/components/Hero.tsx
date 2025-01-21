"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import PrimaryButton from "./shared/ui/PrimaryButton";
import {
  BanknotesIcon,
  CurrencyDollarIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

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
    <div className="relative flex flex-col justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0d0d0d]" />

        {/* Animated gradient orbs */}
        <div
          className="absolute blur-[100px] opacity-50"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.1), transparent 35%)`,
            transform: `translate(${mousePosition.x * 0.1}px, ${
              mousePosition.y * 0.1
            }px)`,
            transition: "transform 0.2s ease-out",
          }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-[1300px] mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start"
          >
            <div className="flex items-center gap-2 mb-6 bg-purple-500/10 rounded-full px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              <span className="text-purple-400 text-sm font-medium">
                Powered by Polygon
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                Modern Payroll
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white/90 to-white/40">
                Made Simple.
              </span>
            </h1>

            <p className="text-lg text-white/60 max-w-xl mb-8">
              Streamline your payroll with seamless fiat-to-crypto flows,
              automated compliance, and low-cost transactions. Perfect for
              traditional businesses and Web3 projects alike.
            </p>

            <div className="flex items-center gap-6">
              <PrimaryButton
                href="/waitlist"
                className="h-12 px-8 text-base bg-purple-500/10 hover:bg-purple-500/20 text-purple-400"
              >
                Join Waitlist
              </PrimaryButton>
              <PrimaryButton
                href="#features"
                variant="secondary"
                className="h-12 px-8 text-base border-purple-500/20 hover:bg-purple-500/10"
              >
                Learn More
              </PrimaryButton>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-8">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">$0.01</span>
                <span className="text-sm text-white/60">Transaction Cost</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">2-5s</span>
                <span className="text-sm text-white/60">Settlement Time</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">150+</span>
                <span className="text-sm text-white/60">Currencies</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent rounded-3xl backdrop-blur-3xl border border-white/5">
              {/* Central visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Main circle with pulse effect */}
                <div className="relative">
                  {/* Outer rings */}
                  <div className="absolute inset-0 -m-8">
                    <div className="absolute inset-0 animate-[spin_10s_linear_infinite] opacity-20">
                      <div className="absolute top-0 left-1/2 h-full w-[1px] bg-gradient-to-b from-purple-500/0 via-purple-500/50 to-purple-500/0" />
                      <div className="absolute top-1/2 left-0 h-[1px] w-full bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0" />
                    </div>
                  </div>

                  {/* Main circle */}
                  <div className="relative w-32 h-32 rounded-full border border-purple-500/20 bg-purple-500/5 flex items-center justify-center">
                    <div className="absolute inset-0 animate-ping rounded-full bg-purple-500/20 opacity-75" />
                    <div className="w-20 h-20 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-purple-500/30" />
                    </div>
                  </div>

                  {/* Orbiting elements */}
                  <div className="absolute inset-[-100px]">
                    {/* Payment nodes */}
                    <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8">
                        <div className="w-full h-full rounded-lg bg-purple-500/10 backdrop-blur-sm flex items-center justify-center">
                          <BanknotesIcon className="w-4 h-4 text-purple-400" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 animate-[spin_25s_linear_infinite_reverse]">
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-8">
                        <div className="w-full h-full rounded-lg bg-purple-500/10 backdrop-blur-sm flex items-center justify-center">
                          <CurrencyDollarIcon className="w-4 h-4 text-purple-400" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 animate-[spin_30s_linear_infinite]">
                      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-8 h-8">
                        <div className="w-full h-full rounded-lg bg-purple-500/10 backdrop-blur-sm flex items-center justify-center">
                          <ClockIcon className="w-4 h-4 text-purple-400" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating metrics */}
                  <div className="absolute top-[-80px] left-[-160px] bg-purple-500/5 backdrop-blur-sm rounded-lg p-3 border border-purple-500/10">
                    <div className="text-sm text-white/60">Settlement Time</div>
                    <div className="text-xl font-bold text-white">Instant</div>
                  </div>
                  <div className="absolute bottom-[-60px] right-[-140px] bg-purple-500/5 backdrop-blur-sm rounded-lg p-3 border border-purple-500/10">
                    <div className="text-sm text-white/60">
                      Transaction Cost
                    </div>
                    <div className="text-xl font-bold text-white">
                      Near Zero
                    </div>
                  </div>
                </div>
              </div>

              {/* Background grid */}
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgb(168 85 247 / 0.5) 1px, transparent 1px),
                    linear-gradient(to bottom, rgb(168 85 247 / 0.5) 1px, transparent 1px)
                  `,
                  backgroundSize: "24px 24px",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
