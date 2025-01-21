"use client";

import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  DocumentTextIcon,
  DocumentCheckIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

export default function BentoGrid() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1300px] px-6">
        <h2 className="text-center text-base/7 font-medium text-purple-400">
          Built for Modern Business
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Streamlined Payroll Management
        </p>

        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          {/* Mobile-First Interface Panel */}
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-zinc-900/50 lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg font-bold tracking-tight text-white max-lg:text-center">
                  Access Anywhere
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-white/60 max-lg:text-center">
                  Manage payroll from any device. Process payments, track hours,
                  and handle approvals on the go.
                </p>
              </div>
              <div className="relative mt-auto min-h-[30rem] w-full [container-type:inline-size]">
                <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[4cqw] border-x-[3cqw] border-t-[3cqw] border-purple-900/20 bg-[#09090B] shadow-2xl">
                  <div className="relative w-full h-full bg-[#09090B] flex items-center justify-center p-8">
                    {/* Large centered phone icon with animated elements */}
                    <div className="relative flex flex-col items-center">
                      {/* Background glow effect */}
                      <div className="absolute inset-0 bg-purple-500/5 blur-3xl rounded-full" />

                      {/* Phone outline */}
                      <div className="relative w-48 h-96 border-4 border-purple-400/20 rounded-[3rem] p-4 flex flex-col items-center">
                        {/* Notch */}
                        <div className="w-24 h-6 bg-purple-400/20 rounded-full mb-4" />

                        {/* Screen content */}
                        <div className="space-y-6 w-full">
                          {/* App header */}
                          <div className="flex justify-between items-center">
                            <div className="w-8 h-8 rounded-full bg-purple-500/20" />
                            <div className="w-16 h-2 bg-purple-500/20 rounded-full" />
                          </div>

                          {/* Animated payment flows */}
                          <div className="relative h-40">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-20 h-20 rounded-full border-4 border-purple-400/20 flex items-center justify-center">
                                <div className="w-12 h-12 rounded-full bg-purple-500/20 animate-pulse" />
                              </div>
                            </div>
                            {/* Orbiting dots */}
                            <div className="absolute inset-0">
                              <div
                                className="absolute top-0 left-1/2 w-2 h-2 bg-purple-400/40 rounded-full animate-[spin_3s_linear_infinite]"
                                style={{ transformOrigin: "0 100%" }}
                              />
                              <div
                                className="absolute top-1/2 right-0 w-2 h-2 bg-purple-400/40 rounded-full animate-[spin_4s_linear_infinite]"
                                style={{ transformOrigin: "-100% 0" }}
                              />
                              <div
                                className="absolute bottom-0 left-1/2 w-2 h-2 bg-purple-400/40 rounded-full animate-[spin_5s_linear_infinite]"
                                style={{ transformOrigin: "0 -100%" }}
                              />
                            </div>
                          </div>

                          {/* Action buttons */}
                          <div className="space-y-3">
                            <div className="w-full h-3 bg-purple-500/20 rounded-full" />
                            <div className="w-3/4 h-3 bg-purple-500/20 rounded-full" />
                            <div className="w-1/2 h-3 bg-purple-500/20 rounded-full" />
                          </div>
                        </div>

                        {/* Home indicator */}
                        <div className="mt-auto w-16 h-1 bg-purple-400/20 rounded-full" />
                      </div>

                      {/* Floating elements */}
                      <div className="absolute -right-8 top-1/4 w-16 h-16 bg-purple-500/10 rounded-xl animate-float" />
                      <div className="absolute -left-12 bottom-1/4 w-20 h-20 bg-purple-500/10 rounded-xl animate-float-delayed" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-lg shadow-black/20 ring-1 ring-white/10 lg:rounded-l-[2rem]"></div>
          </div>

          {/* Payment Dashboard Panel */}
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-zinc-900/50 max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-bold tracking-tight text-white max-lg:text-center">
                  Smart Dashboard
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-white/60 max-lg:text-center">
                  Real-time overview of your payroll operations and expenses.
                </p>
              </div>
              <div className="flex flex-1 flex-col items-center justify-center p-8">
                <div className="flex flex-col items-center gap-6 w-full max-w-[300px]">
                  <div className="flex items-center justify-between w-full px-4 py-3 bg-purple-500/10 rounded-lg">
                    <div className="flex items-center gap-3">
                      <BanknotesIcon className="h-6 w-6 text-white" />
                      <div className="text-sm text-white/60">
                        Monthly Payroll
                      </div>
                    </div>
                    <div className="text-xl font-bold text-white">$125.4k</div>
                  </div>
                  <div className="flex items-center justify-between w-full px-4 py-3 bg-purple-500/10 rounded-lg">
                    <div className="flex items-center gap-3">
                      <UserGroupIcon className="h-6 w-6 text-white" />
                      <div className="text-sm text-white/60">Employees</div>
                    </div>
                    <div className="text-xl font-bold text-white">156</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-lg shadow-black/20 ring-1 ring-white/10 max-lg:rounded-t-[2rem]"></div>
          </div>

          {/* Employee Management Panel */}
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-zinc-900/50"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-bold tracking-tight text-white max-lg:text-center">
                  Employee Portal
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-white/60 max-lg:text-center">
                  Self-service access to pay stubs, tax documents, and benefits
                  information.
                </p>
              </div>
              <div className="flex flex-1 flex-col items-center justify-center p-8">
                <div className="flex flex-col items-center gap-6 w-full max-w-[300px]">
                  <div className="flex items-center justify-between w-full px-4 py-3 bg-purple-500/10 rounded-lg">
                    <div className="flex items-center gap-3">
                      <DocumentTextIcon className="h-6 w-6 text-white" />
                      <div className="text-sm text-white/60">Documents</div>
                    </div>
                    <div className="text-xl font-bold text-white">24</div>
                  </div>
                  <div className="flex items-center justify-between w-full px-4 py-3 bg-purple-500/10 rounded-lg">
                    <div className="flex items-center gap-3">
                      <ClockIcon className="h-6 w-6 text-white" />
                      <div className="text-sm text-white/60">Next Payday</div>
                    </div>
                    <div className="text-sm font-medium text-white">
                      In 3 Days
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-lg shadow-black/20 ring-1 ring-white/10"></div>
          </div>

          {/* Automated Compliance Panel */}
          <div className="relative lg:row-span-2 lg:col-start-3">
            <div className="absolute inset-px rounded-lg bg-zinc-900/50 lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg font-bold tracking-tight text-white max-lg:text-center">
                  Automated Compliance
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-white/60 max-lg:text-center">
                  Stay compliant with automated tax calculations, reporting, and
                  record-keeping.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow flex items-center justify-center p-8">
                <div className="relative w-full max-w-[300px] space-y-8">
                  {/* Compliance Dashboard */}
                  <div className="relative bg-purple-500/10 rounded-2xl p-6 border border-white/10">
                    {/* Content */}
                    <div className="relative space-y-6">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <DocumentCheckIcon className="h-6 w-6 text-white" />
                          <span className="text-sm font-medium text-white">
                            Compliance Status
                          </span>
                        </div>
                        <span className="text-sm font-medium text-white">
                          Up to Date
                        </span>
                      </div>

                      {/* Status Items */}
                      <div className="space-y-4">
                        {/* Tax Filings */}
                        <div className="bg-black/40 rounded-xl p-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <DocumentTextIcon className="h-5 w-5 text-purple-400" />
                              <span className="text-sm font-medium text-white">
                                Tax Filings
                              </span>
                            </div>
                            <span className="text-xs text-purple-400">
                              Complete
                            </span>
                          </div>
                          <div className="space-y-2">
                            <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                              <div className="h-full w-full bg-purple-500/20 rounded-full" />
                            </div>
                            <div className="flex justify-between text-xs">
                              <span className="text-white/60">Q4 2023</span>
                              <span className="text-white">
                                All Forms Filed
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Payroll Reports */}
                        <div className="bg-black/40 rounded-xl p-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <ChartBarIcon className="h-5 w-5 text-purple-400" />
                              <span className="text-sm font-medium text-white">
                                Reports Generated
                              </span>
                            </div>
                            <span className="text-xs text-purple-400">
                              Current
                            </span>
                          </div>
                          <div className="space-y-2">
                            <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                              <div className="h-full w-full bg-purple-500/20 rounded-full" />
                            </div>
                            <div className="flex justify-between text-xs">
                              <span className="text-white/60">Monthly</span>
                              <span className="text-white">12 Reports</span>
                            </div>
                          </div>
                        </div>

                        {/* Compliance Checks */}
                        <div className="bg-black/40 rounded-xl p-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <UserGroupIcon className="h-5 w-5 text-purple-400" />
                              <span className="text-sm font-medium text-white">
                                Employee Records
                              </span>
                            </div>
                            <span className="text-xs text-purple-400">
                              Verified
                            </span>
                          </div>
                          <div className="space-y-2">
                            <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                              <div className="h-full w-full bg-purple-500/20 rounded-full" />
                            </div>
                            <div className="flex justify-between text-xs">
                              <span className="text-white/60">Last Check</span>
                              <span className="text-white">Today</span>
                            </div>
                          </div>
                        </div>
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
