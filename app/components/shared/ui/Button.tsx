"use client";

import { ReactNode } from "react";
import { cn } from "@/utils/cn";
import { useIsClient } from "@/hooks/useIsClient";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  children: ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const isClient = useIsClient();

  const baseStyles =
    "rounded-full font-semibold transition-colors duration-200 flex items-center justify-center text-sm";

  const variants = {
    primary: "bg-black text-white hover:bg-gray-900 px-3",
    secondary: "border border-gray-200 text-gray-900 hover:bg-gray-50 px-3",
    outline: "border border-gray-900 text-gray-900 hover:bg-gray-50 px-3",
    ghost: "text-gray-900 hover:bg-gray-50 px-3",
  };

  const sizes = {
    sm: "h-7",
    md: "h-8",
    lg: "h-9",
  };

  const disabledStyles = "opacity-50 cursor-not-allowed";

  // Don't render anything until we're on the client
  if (!isClient) {
    return null;
  }

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        (disabled || isLoading) && disabledStyles,
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <span className="mr-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
          </span>
          Loading...
        </>
      ) : (
        <>
          {leftIcon && <span className="mr-2">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </>
      )}
    </button>
  );
}
