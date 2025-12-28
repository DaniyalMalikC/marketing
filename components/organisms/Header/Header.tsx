"use client";

import { Button, Icon } from "@/components/atoms";
import { Logo } from "@/components/atoms/logo";
import { useSetTheme, useTheme } from "@/store";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const theme = useTheme();
  const setTheme = useSetTheme();
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Determine the actual theme being applied
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      setCurrentTheme(systemTheme);
    } else {
      setCurrentTheme(theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 w-full border-b border-white/5 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60"
    >
      <div className="container flex h-16 items-center justify-between">
        <Logo className="text-white" />

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/company" className="text-sm font-medium text-gray-400 transition-colors hover:text-white">
            Company
          </Link>
          <Link href="/works" className="text-sm font-medium text-gray-400 transition-colors hover:text-white">
            Works
          </Link>
          <Link href="/pricing" className="text-sm font-medium text-gray-400 transition-colors hover:text-white">
            Pricing
          </Link>
          <Link href="/resources" className="text-sm font-medium text-gray-400 transition-colors hover:text-white">
            Resources
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 text-sm font-medium text-white md:flex">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#cff85d] opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#cff85d]"></span>
            </span>
            Available
          </div>
          
          <Button variant="ghost" size="sm" onClick={toggleTheme} aria-label="Toggle theme" className="hidden text-white hover:bg-white/10 hover:text-white sm:flex">
            <Icon
              name={currentTheme === "dark" ? "mdi:white-balance-sunny" : "mdi:moon-waning-crescent"}
              size={20}
            />
          </Button>
          <Button size="sm" className="bg-white font-semibold text-black hover:bg-gray-200">Contact Now</Button>
        </div>
      </div>
    </motion.header>
  );
}
