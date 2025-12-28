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
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={toggleTheme} aria-label="Toggle theme">
            <Icon
              name={currentTheme === "dark" ? "mdi:white-balance-sunny" : "mdi:moon-waning-crescent"}
              size={20}
            />
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </div>
    </motion.header>
  );
}
