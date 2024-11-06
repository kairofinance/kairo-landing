import Hero from "./components/Hero";
import Features from "./components/Features";
import Stats from "./components/Stats";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import BentoGrid from "./components/BentoGrid";
import { type SVGProps } from "react";
import PartnersScroll from "./components/PartnersScroll";

type IconName =
  | "DocumentCheck"
  | "ChartBar"
  | "Banknotes"
  | "Document"
  | "Wallet"
  | "ArrowPath"
  | "UserGroup"
  | "Cog6Tooth"
  | "CloudArrowUp";

interface Feature {
  name: string;
  description: string;
  iconName: IconName;
  href?: string;
}

const primaryFeatures: Feature[] = [
  {
    name: "Instant Invoicing",
    description:
      "Generate and customize professional invoices with built-in PDF export. Track payments and manage your cash flow effortlessly.",
    href: "#",
    iconName: "DocumentCheck",
  },
  {
    name: "Fund Tracking",
    description:
      "Monitor transactions and balances across multiple wallets in real-time. Get a clear view of your financial position.",
    href: "#",
    iconName: "ChartBar",
  },
  {
    name: "Payment Management",
    description:
      "Streamline your payment processes with automated streaming payments and customizable vesting schedules.",
    href: "#",
    iconName: "Banknotes",
  },
];

const secondaryFeatures: Feature[] = [
  {
    name: "PDF Export",
    description:
      "Generate professional invoices with customizable templates and instant PDF export.",
    iconName: "Document",
  },
  {
    name: "Multi-Wallet Support",
    description:
      "Connect and manage multiple wallets for comprehensive financial tracking.",
    iconName: "Wallet",
  },
  {
    name: "Real-time Updates",
    description:
      "Track payments and transactions in real-time across all connected wallets.",
    iconName: "ArrowPath",
  },
  {
    name: "Contact Management",
    description:
      "Organize and manage your business contacts for streamlined invoicing.",
    iconName: "UserGroup",
  },
  {
    name: "Custom API Access",
    description:
      "Integrate Kairo with your existing tools through our developer-friendly API.",
    iconName: "Cog6Tooth",
  },
  {
    name: "Cloud Sync",
    description: "Access your financial data securely from anywhere, anytime.",
    iconName: "CloudArrowUp",
  },
];

const statsData = [
  { id: 1, name: "Active Users", value: "500+" },
  { id: 2, name: "Invoices Generated", value: "1,000+" },
  { id: 3, name: "Total Volume", value: "$100K+" },
  { id: 4, name: "Networks", value: "1" },
];

interface SocialIcon {
  name: string;
  href: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

const footerNavigation = {
  social: [
    {
      name: "Twitter",
      href: "https://twitter.com/kairolabs",
      icon: (props: SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/kairo-labs",
      icon: (props: SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ] as SocialIcon[],
};

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <PartnersScroll />
        <BentoGrid />
        <Features />
        {/* <Stats
          stats={[
            { id: 1, name: "Active Users", value: "2,000+" },
            { id: 2, name: "Total Volume", value: "$10M+" },
            { id: 3, name: "Transactions", value: "50,000+" },
            { id: 4, name: "Response Time", value: "<1s" },
          ]}
        /> */}
        <CallToAction />
      </main>
      <Footer social={footerNavigation.social} />
    </div>
  );
}
