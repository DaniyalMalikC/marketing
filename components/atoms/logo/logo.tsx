"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ComponentProps } from "react";

interface LogoProps extends Omit<ComponentProps<typeof Link>, "href"> {
  showIcon?: boolean;
  showText?: boolean;
  iconSize?: number;
}

export function Logo({
  showIcon = true,
  showText = true,
  iconSize = 32,
  className,
  ...props
}: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2 transition-opacity hover:opacity-80", className)}
      {...props}
    >
      {showIcon && <LogoIcon size={iconSize} />}
      {showText && <LogoText />}
    </Link>
  );
}

function LogoIcon({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden="true"
    >
      {/* M shape with modern design */}
      <path
        d="M20 75V25L35 45L50 25L65 45L80 25V75H70V45L50 65L30 45V75H20Z"
        className="fill-primary"
      />
      {/* Accent dot */}
      <circle cx="50" cy="20" r="8" className="fill-primary animate-pulse-slow" />
    </svg>
  );
}

function LogoText() {
  return (
    <span className="font-logo text-2xl font-bold tracking-tight">
      Mar<span className="text-primary">k</span>eva
    </span>
  );
}

// Export icon and text separately for flexibility
export { LogoIcon, LogoText };
