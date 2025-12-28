"use client";

import { Button } from "@/components/atoms";
import { Icon } from "@/components/atoms";
import { useSetTheme, useTheme } from "@/store";
import { motion } from "framer-motion";
import Link from "next/link";

export function Header() {
  const theme = useTheme();
  const setTheme = useSetTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Icon name="mdi:rocket-launch" size={32} className="text-primary" />
          <span className="text-xl font-bold">Marketing</span>
        </Link>

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
              name={theme === "dark" ? "mdi:white-balance-sunny" : "mdi:moon-waning-crescent"}
              size={20}
            />
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </div>
    </motion.header>
  );
}
