"use client";

import { Button, Icon, Text } from "@/components/atoms";
import { motion, useReducedMotion } from "framer-motion";
import { EsteemedClientsCard } from "./esteemed-clients-card";
import { MarketingTeamCard } from "./marketing-team-card";
import { TrustedGrowthCard } from "./trusted-growth-card";
import { SuccessRateCard } from "./success-rate-card";
import { GlobalPresenceCard } from "./global-presence-card";

export function BackgroundIllustration() {
  return (
     <div className="pointer-events-none absolute inset-0 -z-1">
        {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,#0c0e11_0%,#050607_60%)]" /> */}
        <div className="absolute left-1/2 top-6 h-[840px] w-[840px] -translate-x-1/2 rounded-full border border-white/10 opacity-20" />
        <div className="absolute left-1/2 top-28 h-[680px] w-[680px] -translate-x-1/2 rounded-full border border-white/5 opacity-30" />
        <div className="absolute left-1/2 top-52 h-[540px] w-[540px] -translate-x-1/2 rounded-full border border-white/5 opacity-15" />
        <div className="absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-[#c6f45f]/20 blur-[130px]" />
        <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-[#c6f45f]/12 blur-[130px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,#c6f45f0a,transparent_45%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:36px_36px] opacity-60" />
        <div className="pointer-events-none absolute inset-x-0 -bottom-8 h-32 bg-gradient-to-r from-[#c6f45f]/22 via-transparent to-transparent blur-3xl" />
        {/* <div className="absolute inset-x-0 top-[46%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" /> */}
        <div className="absolute left-24 top-24 text-[#d5ff6a]/80">
          <Icon name="mdi:star-four-points" size={26} aria-hidden />
        </div>
        <div className="absolute right-24 bottom-16 text-[#d5ff6a]/60">
          <Icon name="mdi:star-four-points" size={26} aria-hidden />
        </div>
        <div className="absolute inset-x-12 bottom-[14%] h-64 rounded-[40%] bg-[radial-gradient(circle_at_50%_50%,#ffffff22,transparent_65%)] blur-3xl" />
      </div>
  );
}

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const easing = [0.22, 1, 0.36, 1];
  const baseMotion = prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-28 pb-16 text-white sm:pt-32">
      {/* Background */}
     <BackgroundIllustration />

      <div className="relative flex wx-auto w-full max-w-6xl flex-col items-center gap-12 text-center px-4">

        <motion.div
          initial={baseMotion}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easing }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white/80 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.7)] backdrop-blur"
        >
          <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-black text-black">New</span>
          <span className="text-sm font-semibold text-white">No Hidden Pricing</span>
          <Icon name="mdi:arrow-top-right" size={16} className="text-gray-300" aria-hidden />
        </motion.div>

        <div className="flex w-full max-w-5xl flex-col items-center gap-6">
          <motion.h1
            initial={baseMotion}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: easing }}
            className="flex flex-col text-balance font-heading text-5xl font-bold leading-[1.04] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <span className="font-sans font-extrabold text-white">Fueling the Next</span>
            <span className="font-heading font-semibold text-white">Generation of Brands</span>
          </motion.h1>

          <motion.div
            initial={baseMotion}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: easing }}
            className="max-w-2xl text-center"
          >
            <Text variant="large" className="text-lg text-gray-300 sm:text-xl">
              Powering bold ideas with strategy, creativity, and growth.
            </Text>
          </motion.div>

          <motion.div
            initial={baseMotion}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: easing }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="group h-12 rounded-full bg-[#c6f45f] px-8 font-semibold text-black shadow-[0_20px_50px_-30px_rgba(198,244,95,0.8)] transition-all duration-300 hover:bg-[#d4ff74] hover:shadow-[0_25px_80px_-40px_rgba(198,244,95,0.9)] focus-visible:ring-offset-0"
              aria-label="Get started with our services"
            >
              Get Started
              <Icon name="mdi:arrow-right" size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="group h-12 rounded-full border border-white/10 bg-white/5 px-8 text-white transition-all duration-300 hover:border-white/20 hover:bg-white/10 focus-visible:ring-offset-0"
              aria-label="Watch product demo"
            >
              <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:scale-110">
                <Icon name="mdi:play" size={14} />
              </span>
              Watch Demo
            </Button>
          </motion.div>
        </div>
      </div>

        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45, ease: easing }}
          className="relative grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[26%_15%_18%_15%_26%] max-w-7xl "
        >
          
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: easing }}
            className="lg:col-span-1"
          >
            <MarketingTeamCard />
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65, ease: easing }}
            className="lg:col-span-1 flex items-end justify-center"
          >
            <EsteemedClientsCard />
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75, ease: easing }}
            className="lg:col-span-1 flex items-end justify-center"
          >
            <TrustedGrowthCard />
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85, ease: easing }}
            className="lg:col-span-1 flex items-end justify-center"
          >
            <SuccessRateCard />
          </motion.div>
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85, ease: easing }}
            className="lg:col-span-1 flex items-end justify-center"
          >
            <GlobalPresenceCard />
          </motion.div>

        </motion.div>

    </section>
  );
}

export default Hero;
