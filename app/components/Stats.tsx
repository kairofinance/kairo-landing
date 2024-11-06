"use client";

interface Stat {
  id: number;
  name: string;
  value: string;
}

interface StatsProps {
  stats: Stat[];
}

export default function Stats({ stats }: StatsProps) {
  return (
    <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
        <h2 className="text-base/8 font-garet font-extrabold text-orange-600">
          Our Progress
        </h2>
        <p className="mt-2 text-pretty text-4xl font-garet font-extrabold tracking-tight text-white sm:text-5xl">
          Growing with the Web3 Community
        </p>
        <p className="mt-6 text-lg/8 text-gray-300">
          Join thousands of users who trust Kairo for their web3 financial
          management needs.
        </p>
      </div>
      <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="flex flex-col gap-y-3 border-l border-white/10 pl-6"
          >
            <dt className="text-sm/6 text-gray-400">{stat.name}</dt>
            <dd className="order-first text-3xl font-garet font-extrabold tracking-tight">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
