"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface HighlightPoint {
  x: number;
  y: number;
  type: "deposit" | "withdrawal" | "balance";
  amount: string;
  date: string;
}

const SleekVisual = () => {
  const [mounted, setMounted] = useState(false);
  const [highlightedPoint, setHighlightedPoint] =
    useState<HighlightPoint | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Define the path points for precise alignment
  const pathPoints = {
    deposits: [
      { x: 60, y: 300, amount: "+$5,000", date: "Month 1" },
      { x: 340, y: 290, amount: "+$5,000", date: "Month 2" },
      { x: 620, y: 280, amount: "+$5,000", date: "Month 3" },
    ],
    depositTops: [
      { x: 60, y: 250 }, // Peak after first deposit
      { x: 340, y: 240 }, // Peak after second deposit
      { x: 620, y: 230 }, // Peak after third deposit
    ],
    withdrawals: [
      { x: 160, y: 310, amount: "-$3,500", date: "Week 1" },
      { x: 220, y: 315, amount: "-$1,200", date: "Week 2" },
      { x: 460, y: 295, amount: "-$2,800", date: "Week 5" },
      { x: 520, y: 300, amount: "-$1,500", date: "Week 6" },
      { x: 740, y: 285, amount: "-$3,200", date: "Week 9" },
      { x: 800, y: 290, amount: "-$1,800", date: "Week 10" },
    ],
  };

  // Create the path string with continuous growth and sharp drops
  const balancePath = `
    M ${pathPoints.deposits[0].x} ${pathPoints.deposits[0].y}
    L ${pathPoints.deposits[0].x} ${pathPoints.depositTops[0].y}
    C ${pathPoints.deposits[0].x + 40} ${pathPoints.depositTops[0].y - 5},
      ${pathPoints.withdrawals[0].x - 40} ${pathPoints.depositTops[0].y - 10},
      ${pathPoints.withdrawals[0].x} ${pathPoints.depositTops[0].y - 15}
    L ${pathPoints.withdrawals[0].x} ${pathPoints.withdrawals[0].y}
    C ${pathPoints.withdrawals[0].x + 20} ${pathPoints.withdrawals[0].y - 5},
      ${pathPoints.withdrawals[1].x - 20} ${pathPoints.withdrawals[0].y - 10},
      ${pathPoints.withdrawals[1].x} ${pathPoints.withdrawals[0].y - 15}
    L ${pathPoints.withdrawals[1].x} ${pathPoints.withdrawals[1].y}
    
    L ${pathPoints.deposits[1].x} ${pathPoints.deposits[1].y}
    L ${pathPoints.deposits[1].x} ${pathPoints.depositTops[1].y}
    C ${pathPoints.deposits[1].x + 40} ${pathPoints.depositTops[1].y - 5},
      ${pathPoints.withdrawals[2].x - 40} ${pathPoints.depositTops[1].y - 10},
      ${pathPoints.withdrawals[2].x} ${pathPoints.depositTops[1].y - 15}
    L ${pathPoints.withdrawals[2].x} ${pathPoints.withdrawals[2].y}
    C ${pathPoints.withdrawals[2].x + 20} ${pathPoints.withdrawals[2].y - 5},
      ${pathPoints.withdrawals[3].x - 20} ${pathPoints.withdrawals[2].y - 10},
      ${pathPoints.withdrawals[3].x} ${pathPoints.withdrawals[2].y - 15}
    L ${pathPoints.withdrawals[3].x} ${pathPoints.withdrawals[3].y}
    
    L ${pathPoints.deposits[2].x} ${pathPoints.deposits[2].y}
    L ${pathPoints.deposits[2].x} ${pathPoints.depositTops[2].y}
    C ${pathPoints.deposits[2].x + 40} ${pathPoints.depositTops[2].y - 5},
      ${pathPoints.withdrawals[4].x - 40} ${pathPoints.depositTops[2].y - 10},
      ${pathPoints.withdrawals[4].x} ${pathPoints.depositTops[2].y - 15}
    L ${pathPoints.withdrawals[4].x} ${pathPoints.withdrawals[4].y}
    C ${pathPoints.withdrawals[4].x + 20} ${pathPoints.withdrawals[4].y - 5},
      ${pathPoints.withdrawals[5].x - 20} ${pathPoints.withdrawals[4].y - 10},
      ${pathPoints.withdrawals[5].x} ${pathPoints.withdrawals[4].y - 15}
    L ${pathPoints.withdrawals[5].x} ${pathPoints.withdrawals[5].y}
    C ${pathPoints.withdrawals[5].x + 40} ${pathPoints.withdrawals[5].y},
      900 ${pathPoints.withdrawals[5].y - 10},
      900 ${pathPoints.withdrawals[5].y - 20}
  `;

  return (
    <div className="w-full h-[400px] flex items-center justify-center bg-gray-50/50">
      <motion.div
        className="relative w-full max-w-[1000px] h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Grid Background */}
        <div className="absolute inset-0">
          <svg width="100%" height="100%" className="stroke-gray-200">
            <pattern
              id="grid"
              x="0"
              y="0"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path d="M 50 0 L 0 0 0 50" fill="none" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Y-axis Label */}
        <div className="absolute left-12 top-1/2 -translate-y-1/2 -rotate-90 text-sm text-gray-500">
          Total Balance + Yield
        </div>

        {/* X-axis Label */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-sm text-gray-500">
          Time (Months)
        </div>

        {/* Main Graph */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <svg
            viewBox="0 0 1000 400"
            className="w-full h-full"
            onMouseLeave={() => setHighlightedPoint(null)}
          >
            {/* Axes */}
            <motion.line
              x1="60"
              y1="350"
              x2="60"
              y2="50"
              stroke="rgb(107, 114, 128)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1 }}
            />

            <motion.line
              x1="60"
              y1="350"
              x2="950"
              y2="350"
              stroke="rgb(107, 114, 128)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1 }}
            />

            {/* Week Markers */}
            {[...Array(13)].map((_, i) => (
              <motion.g
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 + i * 0.1 }}
              >
                <line
                  x1={60 + i * 70}
                  y1="350"
                  x2={60 + i * 70}
                  y2="345"
                  stroke="rgb(107, 114, 128)"
                  strokeWidth="2"
                />
                {i % 4 === 0 && (
                  <text
                    x={60 + i * 70}
                    y="370"
                    textAnchor="middle"
                    className="text-[10px] fill-gray-400"
                  >
                    Month {i / 4 + 1}
                  </text>
                )}
              </motion.g>
            ))}

            {/* Simplified Potential Growth Line */}
            <motion.path
              d={`
                M ${pathPoints.deposits[0].x} ${pathPoints.deposits[0].y}
                L ${pathPoints.deposits[0].x} ${pathPoints.depositTops[0].y}
                C ${pathPoints.deposits[0].x + 100} ${
                pathPoints.depositTops[0].y - 10
              },
                  ${pathPoints.deposits[1].x - 100} ${
                pathPoints.depositTops[0].y - 20
              },
                  ${pathPoints.deposits[1].x} ${
                pathPoints.depositTops[0].y - 30
              }
                L ${pathPoints.deposits[1].x} ${
                pathPoints.depositTops[0].y - 50
              }
                C ${pathPoints.deposits[1].x + 100} ${
                pathPoints.depositTops[0].y - 60
              },
                  ${pathPoints.deposits[2].x - 100} ${
                pathPoints.depositTops[0].y - 70
              },
                  ${pathPoints.deposits[2].x} ${
                pathPoints.depositTops[0].y - 80
              }
                L ${pathPoints.deposits[2].x} ${
                pathPoints.depositTops[0].y - 100
              }
                C ${pathPoints.deposits[2].x + 100} ${
                pathPoints.depositTops[0].y - 110
              },
                  900 ${pathPoints.depositTops[0].y - 120},
                  900 ${pathPoints.depositTops[0].y - 130}
              `}
              fill="none"
              stroke="rgb(147, 51, 234)"
              strokeWidth="3"
              strokeDasharray="5,5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 3, ease: "easeInOut" }}
              className={highlightedPoint ? "opacity-20" : ""}
            />

            {/* Actual Balance Line with Continuous Growth and Sharp Drops */}
            <motion.path
              d={balancePath}
              fill="none"
              stroke="rgb(147, 51, 234)"
              strokeWidth="3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
              className={`transition-opacity duration-200 ${
                highlightedPoint ? "opacity-20" : ""
              }`}
            />

            {/* Deposit Points (both at bottom and top of jumps) */}
            {pathPoints.deposits.map((deposit, i) => (
              <g key={`deposit-${i}`}>
                <g
                  onMouseEnter={() =>
                    setHighlightedPoint({
                      ...deposit,
                      type: "deposit",
                    })
                  }
                  className="cursor-pointer"
                >
                  <circle
                    cx={deposit.x}
                    cy={deposit.y}
                    r="4"
                    className={`
                      fill-purple-600 transition-all duration-200
                      ${highlightedPoint?.x === deposit.x ? "r-6" : "hover:r-5"}
                      ${
                        highlightedPoint && highlightedPoint.x !== deposit.x
                          ? "opacity-20"
                          : ""
                      }
                    `}
                  />
                </g>
                <circle
                  cx={deposit.x}
                  cy={pathPoints.depositTops[i].y}
                  r="4"
                  className={`
                    fill-purple-600 transition-all duration-200
                    ${
                      highlightedPoint?.x === deposit.x
                        ? "opacity-100"
                        : "opacity-0"
                    }
                  `}
                />
              </g>
            ))}

            {/* Withdrawals */}
            {pathPoints.withdrawals.map((withdrawal, i) => (
              <g
                key={`withdrawal-${i}`}
                onMouseEnter={() =>
                  setHighlightedPoint({
                    ...withdrawal,
                    type: "withdrawal",
                  })
                }
                className="cursor-pointer"
              >
                <circle
                  cx={withdrawal.x}
                  cy={withdrawal.y}
                  r="4"
                  className={`
                    fill-red-500 transition-all duration-200
                    ${
                      highlightedPoint?.x === withdrawal.x ? "r-6" : "hover:r-5"
                    }
                    ${
                      highlightedPoint && highlightedPoint.x !== withdrawal.x
                        ? "opacity-20"
                        : ""
                    }
                  `}
                />
              </g>
            ))}

            {/* Highlight Info */}
            {highlightedPoint && (
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <rect
                  x={highlightedPoint.x - 45}
                  y={highlightedPoint.y - 40}
                  width="90"
                  height="30"
                  rx="4"
                  className={`
                    ${
                      highlightedPoint.type === "withdrawal"
                        ? "fill-red-50"
                        : "fill-purple-50"
                    }
                  `}
                />
                <text
                  x={highlightedPoint.x}
                  y={highlightedPoint.y - 20}
                  textAnchor="middle"
                  className={`text-xs font-medium ${
                    highlightedPoint.type === "withdrawal"
                      ? "fill-red-900"
                      : "fill-purple-900"
                  }`}
                >
                  {highlightedPoint.amount}
                </text>
              </motion.g>
            )}
          </svg>
        </motion.div>

        {/* Legend */}
        <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-lg p-3 text-sm space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-purple-600" />
            <span className="text-gray-600">Monthly Deposits</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-purple-600/30" />
            <span className="text-gray-600">Growth Without Withdrawals</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <span className="text-gray-600">Withdrawals</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SleekVisual;
