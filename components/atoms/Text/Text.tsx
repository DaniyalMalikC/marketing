import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?: "body" | "small" | "large" | "muted";
  as?: "p" | "span" | "div";
}

export function Text({
  className,
  variant = "body",
  as: Component = "p",
  children,
  ...props
}: TextProps) {
  const variants = {
    body: "text-base text-foreground",
    small: "text-sm text-foreground",
    large: "text-lg text-foreground",
    muted: "text-sm text-muted-foreground",
  };

  return (
    <Component className={cn(variants[variant], className)} {...props}>
      {children}
    </Component>
  );
}
