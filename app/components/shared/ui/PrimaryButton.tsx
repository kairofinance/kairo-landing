"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface PrimaryButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function PrimaryButton({
  href,
  onClick,
  children,
  className,
  variant = "primary",
}: PrimaryButtonProps) {
  const baseStyles =
    "inline-flex h-8 items-center justify-center rounded-full text-sm transition-all duration-300 px-3";

  const variants = {
    primary: "bg-black text-white hover:bg-gray-900",
    secondary: "border border-gray-200 text-gray-900 hover:bg-gray-50",
  };

  const buttonStyles = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={buttonStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonStyles}>
      {children}
    </button>
  );
}
