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
    <div
      style={{ width: size, height: size }}
      className="flex items-center justify-center rounded bg-primary"
    >
      <div className="h-1/2 w-1/2 bg-black/20" />
    </div>
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
