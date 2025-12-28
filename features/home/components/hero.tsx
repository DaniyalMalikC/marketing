"use client";

import { Button, Icon, Text } from "@/components/atoms";
import { Card } from "@/components/molecules";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black pt-24 pb-12 text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px]" />
      <div className="absolute right-0 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-secondary/5 blur-[100px]" />

      <div className="container flex flex-col items-center gap-12">
        {/* Hero Content */}
        <div className="flex max-w-4xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm transition-colors hover:bg-white/10">
              <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-black">
                New
              </span>
              <Text variant="small" className="font-medium text-white">
                No Hidden Pricing
              </Text>
              <Icon name="mdi:arrow-right" size={16} className="text-gray-400" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 font-bold leading-[1.1] tracking-tight"
          >
            <span className="block text-5xl font-sans font-bold sm:text-6xl md:text-7xl lg:text-8xl">Fueling the Next</span>
            <span className="block text-5xl font-heading font-normal sm:text-6xl md:text-7xl lg:text-8xl">Generation of Brands</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-10 max-w-2xl text-lg text-gray-400 sm:text-xl"
          >
            Powering bold ideas with strategy, creativity, and growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button size="lg" className="h-12 rounded-full bg-[#cff85d] px-8 text-black hover:bg-[#cff85d]/90">
              Get Started
              <Icon name="mdi:arrow-right" size={20} className="ml-2" />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="h-12 rounded-full bg-transparent px-8 text-white hover:bg-white/10"
            >
              <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-black">
                <Icon name="mdi:play" size={14} />
              </div>
              Watch Demo
            </Button>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid w-full max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-6"
        >
          {/* Card 1: Marketing Team */}
          <Card className="relative col-span-1 h-[280px] overflow-hidden rounded-3xl border-0 bg-muted/50 p-0 sm:col-span-2 sm:h-[320px] lg:h-[300px]">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
              alt="Marketing Team"
              fill
              className="object-cover grayscale transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute left-4 top-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-black shadow-lg">
                <span className="h-2 w-2 rounded-full bg-black" />
                Marketing Team
              </div>
            </div>
          </Card>

          {/* Card 2: 100+ Clients */}
          <Card className="group relative flex h-[280px] flex-col justify-between overflow-hidden rounded-3xl border-0 bg-white p-6 text-black shadow-lg transition-all hover:shadow-xl sm:h-[320px] lg:h-[300px]">
            <div className="mb-auto">
              <h3 className="font-heading text-6xl font-bold tracking-tight">100+</h3>
            </div>
            <p className="text-sm font-medium leading-relaxed text-gray-500">
              Our Esteemed
              <br />
              Clients and Partners
            </p>
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[#cff85d]/20 blur-2xl transition-all group-hover:bg-[#cff85d]/30" />
          </Card>

          {/* Card 3: Trusted Growth */}
          <Card className="group relative flex h-[280px] flex-col justify-between overflow-hidden rounded-3xl border-0 bg-[#1a1a1a] p-6 text-white shadow-lg transition-all hover:shadow-xl sm:h-[320px] lg:h-[300px]">
            <div className="relative z-10">
              <h3 className="mb-2 text-xl font-semibold leading-tight">
                Trusted &
                <br />
                Transparent
                <br />
                Growth
              </h3>
            </div>
            <div className="absolute bottom-0 right-0 opacity-40 transition-opacity group-hover:opacity-60">
               <Icon name="mdi:lock-outline" size={120} className="translate-x-8 translate-y-8 text-gray-700" />
            </div>
             <div className="absolute bottom-6 right-6 z-10">
               <Icon name="mdi:lock" size={28} className="text-gray-500" />
            </div>
          </Card>

          {/* Card 4: 98.5% Success */}
          <Card className="group relative flex h-[280px] flex-col justify-between overflow-hidden rounded-3xl border-0 bg-[#1a1a1a] p-6 text-white shadow-lg transition-all hover:shadow-xl sm:h-[320px] lg:h-[300px]">
            <div className="mb-auto">
              <h3 className="font-heading text-6xl font-bold tracking-tight">98.5%</h3>
            </div>
            <div className="flex items-end justify-between">
              <p className="text-sm font-medium leading-relaxed text-gray-400">
                Marketing campaigns have
                <br />
                achieved 98% success
              </p>
              <div className="flex items-end gap-1">
                <div className="h-5 w-2.5 rounded-t-sm bg-gray-600" />
                <div className="h-7 w-2.5 rounded-t-sm bg-gray-500" />
                <div className="h-10 w-2.5 rounded-t-sm bg-gray-400" />
                <div className="h-16 w-4 rounded-t-md bg-[#cff85d]" />
                <div className="h-7 w-2.5 rounded-t-sm bg-gray-500" />
              </div>
            </div>
          </Card>

          {/* Card 5: Global Enterprise */}
          <Card className="group relative flex h-[280px] flex-col justify-between overflow-hidden rounded-3xl border-0 bg-white p-6 text-black shadow-lg transition-all hover:shadow-xl sm:h-[320px] lg:h-[300px]">
            <div className="mb-auto flex items-start justify-between">
              <h3 className="font-heading text-6xl font-bold tracking-tight">20+</h3>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-black shadow-sm">
                  Mexico
                </span>
                <span className="rounded-full bg-[#1a1a1a] px-3 py-1 text-[11px] font-semibold text-white shadow-sm">
                  Australia
                </span>
              </div>
            </div>
            <p className="text-sm font-medium leading-relaxed text-gray-500">
              Global Enterprise drives innovation
            </p>
            <div className="absolute -bottom-12 -right-4 h-40 w-40 rounded-full bg-gradient-to-br from-black to-gray-800 opacity-10 blur-lg" />
             <div className="absolute bottom-0 right-0 h-32 w-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png')] bg-cover bg-center opacity-10 mix-blend-multiply" />
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
