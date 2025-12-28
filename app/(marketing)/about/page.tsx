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
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">About Markeva</h1>
          <Text variant="large" className="text-muted-foreground">
            Pioneering the future of digital marketing excellence
          </Text>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="mb-4 text-2xl font-semibold">Our Mission</h2>
            <Text className="text-muted-foreground">
              At Markeva, we're committed to transforming how businesses connect with their
              audiences. We combine innovative technology with creative excellence to deliver
              marketing solutions that don't just meet expectations—they exceed them. Our mission is
              to empower brands to tell their stories in ways that resonate, engage, and convert.
            </Text>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold">What We Offer</h2>
            <div className="space-y-4">
              {[
                "Data-driven marketing strategies",
                "Comprehensive SEO & content marketing",
                "Social media management & advertising",
                "Email marketing campaigns that convert",
                "Advanced analytics & reporting",
                "Brand development & creative services",
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
              Excellence, innovation, and integrity drive everything we do. We believe in
              transparent communication, measurable results, and building long-term partnerships
              with our clients. Your success is our success, and we're dedicated to delivering
              strategies that create real, sustainable growth for your business.
            </Text>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
