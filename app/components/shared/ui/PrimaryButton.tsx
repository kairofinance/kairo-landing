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
    "inline-flex h-9 items-center justify-center rounded-full text-sm font-medium transition-all duration-300";

  const variants = {
    primary: "bg-white px-4 text-black hover:bg-zinc-200",
    secondary: "border border-white/10 px-4 text-white hover:bg-white/5",
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
