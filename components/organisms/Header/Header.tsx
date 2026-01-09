"use client";

import { Button } from "@/components/atoms";
import { Logo } from "@/components/atoms/logo";
import { motion } from "framer-motion";
import Link from "next/link";

const links = [
  { href: "/company", label: "Company" },
  { href: "/works", label: "Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/resources", label: "Resources" },
];

export function Header() {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="flex w-full max-w-6xl items-center gap-4 rounded-2xl border border-white/15 bg-white/10 px-5 py-3 font-heading font-semibold text-white shadow-[0_24px_120px_-80px_rgba(0,0,0,0.9)] backdrop-blur-2xl"
      >
        <Logo className="text-white" />

        <nav
          aria-label="Primary"
          className="hidden flex-1 items-center justify-center gap-7 text-gray-200 md:flex"
        >
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors duration-200 hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2  px-6 py-1 font-semibold text-white/80 sm:flex">
          {/* Use Green dot icon */}
            <span className="h-3 w-3 animate-pulse rounded-full bg-primary" aria-hidden="true" />
            Available
          </div>
          <Button
            size="sm"
            className="hidden rounded-full border border-white/10 bg-white px-4 py-2 font-bold text-black shadow-sm transition-colors duration-200 hover:bg-gray-100 sm:inline-flex"
          >
            Contact Now
          </Button>
        </div>
      </motion.div>
    </motion.header>
  );
}

