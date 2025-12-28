"use client";

import type { BaseProps } from "@/types";
import { AnimationProvider } from "./animation-provider";
import { ThemeProvider } from "./theme-provider";

export function Providers({ children }: BaseProps) {
  return (
    <ThemeProvider>
      <AnimationProvider>{children}</AnimationProvider>
    </ThemeProvider>
  );
}

export { ThemeProvider, AnimationProvider };
