"use client";

import ComingSoonTag from "./ComingSoonTag";
import {
  WalletIcon,
  UserGroupIcon,
  ClockIcon,
  DocumentTextIcon,
  DocumentCheckIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

export default function BentoGrid() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-garet font-extrabold text-orange-600">
          Built for Web3
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-garet font-extrabold tracking-tight text-white sm:text-5xl">
          Powerful Features for Modern Finance
        </p>

        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          {/* Mobile-Friendly Invoicing Panel */}
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-zinc-900/50 lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg font-garet font-extrabold tracking-tight text-white max-lg:text-center">
                  Mobile Ready
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                  Access your finances on any device. Create invoices, track
                  payments, and manage contacts seamlessly from your phone or
                  desktop.
                </p>
              </div>
              <div className="relative mt-auto min-h-[30rem] w-full [container-type:inline-size] max-lg:mx-auto">
                <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[4cqw] border-x-[3cqw] border-t-[3cqw] border-zinc-800 bg-[#09090B] shadow-2xl">
                  <div className="relative w-full h-full bg-[#09090B]">
                    <Image
                      src="/mobile.png"
                      alt="Kairo Mobile Interface"
                      fill
                      className="object-cover w-full bg-[#09090B]"
                      style={{ objectPosition: "top" }}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-lg shadow-black/20 ring-1 ring-white/10 lg:rounded-l-[2rem]"></div>
          </div>

          {/* Fund Tracking Panel */}
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-zinc-900/50 max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-garet font-extrabold tracking-tight text-white max-lg:text-center">
                  Fund Tracking
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                  Monitor your wallet balance and transaction history in
                  real-time.
                </p>
              </div>
              <div className="flex flex-1 flex-col items-center justify-center p-8">
                <div className="flex flex-col items-center gap-6 w-full max-w-[300px]">
                  <div className="flex items-center justify-between w-full px-4 py-3 bg-zinc-900/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <WalletIcon className="h-6 w-6 text-orange-600" />
                      <div className="text-sm text-gray-400">
                        Wallet Balance
                      </div>
                    </div>
                    <div className="text-xl font-garet font-bold text-white">
                      $25.4k
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full px-4 py-3 bg-zinc-900/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <DocumentTextIcon className="h-6 w-6 text-orange-600" />
                      <div className="text-sm text-gray-400">Transactions</div>
                    </div>
                    <div className="text-xl font-garet font-bold text-white">
                      156
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-lg shadow-black/20 ring-1 ring-white/10 max-lg:rounded-t-[2rem]"></div>
          </div>

          {/* Contact Management Panel */}
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-zinc-900/50"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-garet font-extrabold tracking-tight text-white max-lg:text-center">
                  Contact Management
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                  Save and organize your frequent contacts for quick access
                  during invoice creation.
                </p>
              </div>
              <div className="flex flex-1 flex-col items-center justify-center p-8">
                <div className="flex flex-col items-center gap-6 w-full max-w-[300px]">
                  <div className="flex items-center justify-between w-full px-4 py-3 bg-zinc-900/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <UserGroupIcon className="h-6 w-6 text-orange-600" />
                      <div className="text-sm text-gray-400">
                        Total Contacts
                      </div>
                    </div>
                    <div className="text-xl font-garet font-bold text-white">
                      24
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full px-4 py-3 bg-zinc-900/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <ClockIcon className="h-6 w-6 text-orange-600" />
                      <div className="text-sm text-gray-400">
                        Recent Activity
                      </div>
                    </div>
                    <div className="text-xl font-garet font-bold text-white">
                      3
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-lg shadow-black/20 ring-1 ring-white/10"></div>
          </div>

          {/* Payroll Streaming Panel */}
          <div className="relative lg:row-span-2 lg:col-start-3">
            <div className="absolute inset-px rounded-lg bg-zinc-900/50 lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <div className="flex items-center gap-2">
                  <p className="mt-2 text-lg font-garet font-extrabold tracking-tight text-white max-lg:text-center">
                    Payroll Streaming
                  </p>
                  <ComingSoonTag />
                </div>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                  Set up automated salary streams, vesting schedules, and token
                  rewards for your team or DAO members.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow flex items-center justify-center p-8">
                <div className="relative w-full max-w-[300px] space-y-8">
                  {/* Streaming Visualization */}
                  <div className="relative bg-zinc-900/50 rounded-2xl p-6 border border-orange-600/10">
                    {/* Animated Gradient Background */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-transparent to-transparent animate-pulse" />
                    </div>

                    {/* Content */}
                    <div className="relative space-y-6">
                      {/* Stream Header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <WalletIcon className="h-6 w-6 text-orange-600" />
                          <span className="text-sm font-medium text-white">
                            Active Streams
                          </span>
                        </div>
                        <span className="text-sm font-medium text-orange-600">
                          3 Total
                        </span>
                      </div>

                      {/* Stream Items */}
                      <div className="space-y-4">
                        {/* Stream Item 1 */}
                        <div className="bg-black/40 rounded-xl p-4 backdrop-blur-sm">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <UserGroupIcon className="h-5 w-5 text-orange-600" />
                              <span className="text-sm font-medium text-white">
                                Core Team
                              </span>
                            </div>
                            <span className="text-xs text-orange-600">
                              Live
                            </span>
                          </div>
                          <div className="space-y-2">
                            <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                              <div className="h-full w-1/2 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full" />
                            </div>
                            <div className="flex justify-between text-xs">
                              <span className="text-gray-400">50% Vested</span>
                              <span className="text-white">25,000 USDC</span>
                            </div>
                          </div>
                        </div>

                        {/* Stream Item 2 */}
                        <div className="bg-black/40 rounded-xl p-4 backdrop-blur-sm">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <DocumentCheckIcon className="h-5 w-5 text-orange-600" />
                              <span className="text-sm font-medium text-white">
                                Contributors
                              </span>
                            </div>
                            <span className="text-xs text-orange-600">
                              Live
                            </span>
                          </div>
                          <div className="space-y-2">
                            <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                              <div className="h-full w-3/4 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full" />
                            </div>
                            <div className="flex justify-between text-xs">
                              <span className="text-gray-400">75% Vested</span>
                              <span className="text-white">15,000 USDC</span>
                            </div>
                          </div>
                        </div>

                        {/* Stream Item 3 */}
                        <div className="bg-black/40 rounded-xl p-4 backdrop-blur-sm">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <ClockIcon className="h-5 w-5 text-orange-600" />
                              <span className="text-sm font-medium text-white">
                                Token Vesting
                              </span>
                            </div>
                            <span className="text-xs text-orange-600">
                              Live
                            </span>
                          </div>
                          <div className="space-y-2">
                            <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                              <div className="h-full w-1/4 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full" />
                            </div>
                            <div className="flex justify-between text-xs">
                              <span className="text-gray-400">25% Vested</span>
                              <span className="text-white">100,000 KRO</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Summary Card */}
                  <div className="bg-zinc-900/50 rounded-xl p-4 border border-orange-600/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <ClockIcon className="h-5 w-5 text-orange-600" />
                        <span className="text-sm text-gray-400">
                          Next Distribution
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="block text-sm font-medium text-white">
                          12h 24m
                        </span>
                        <span className="text-xs text-gray-400">
                          ~$15,000 USDC
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-lg shadow-black/20 ring-1 ring-white/10 lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
