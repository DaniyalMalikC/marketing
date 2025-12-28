"use client";

import { Icon, Text } from "@/components/atoms";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="container py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl"
      >
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">About Us</h1>
          <Text variant="large" className="text-muted-foreground">
            Building the future of marketing websites
          </Text>
        </div>

        <div className="space-y-8" data-aos="fade-up">
          <div>
            <h2 className="mb-4 text-2xl font-semibold">Our Mission</h2>
            <Text className="text-muted-foreground">
              We are committed to providing developers with the best tools and boilerplates to build
              modern, scalable, and production-ready marketing websites. Our platform combines
              cutting-edge technologies with best practices to deliver exceptional results.
            </Text>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold">What We Offer</h2>
            <div className="space-y-4">
              {[
                "Production-ready Next.js boilerplate",
                "Clean architecture with atomic design",
                "Type-safe development with TypeScript",
                "Beautiful UI with Tailwind CSS",
                "Smooth animations and interactions",
                "SEO optimized and performance focused",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Icon name="mdi:check-circle" size={24} className="mt-0.5 text-primary" />
                  <Text className="text-muted-foreground">{item}</Text>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold">Our Values</h2>
            <Text className="text-muted-foreground">
              We believe in clean code, scalable architecture, and developer experience. Every
              decision we make is guided by these principles to ensure you get the best possible
              foundation for your projects.
            </Text>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
