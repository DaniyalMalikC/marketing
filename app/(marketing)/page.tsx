"use client";

import { Button, Icon, Text } from "@/components/atoms";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/molecules";
import { motion } from "framer-motion";

export default function HomePage() {
  const features = [
    {
      icon: "mdi:rocket-launch",
      title: "Fast Performance",
      description: "Optimized for speed with Next.js 15 and React 19",
    },
    {
      icon: "mdi:palette",
      title: "Beautiful Design",
      description: "Crafted with Tailwind CSS and modern design principles",
    },
    {
      icon: "mdi:animation",
      title: "Smooth Animations",
      description: "Powered by Framer Motion, GSAP, and Lenis",
    },
    {
      icon: "mdi:cog",
      title: "Type Safe",
      description: "Built with TypeScript for reliability and scalability",
    },
    {
      icon: "mdi:cloud",
      title: "Zustand State",
      description: "Simple and efficient state management",
    },
    {
      icon: "mdi:code-braces",
      title: "Clean Code",
      description: "Atomic design with strict separation of concerns",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="container flex min-h-[80vh] flex-col items-center justify-center py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-muted px-4 py-2">
            <Icon name="mdi:sparkles" size={20} className="text-primary" />
            <Text variant="small">Production Ready</Text>
          </div>
          <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            Build Amazing
            <br />
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Marketing Sites
            </span>
          </h1>
          <Text variant="large" className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            A modern, scalable, and production-ready marketing website boilerplate built with
            Next.js, TypeScript, Tailwind CSS, and more.
          </Text>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg">
              Get Started
              <Icon name="mdi:arrow-right" size={20} />
            </Button>
            <Button variant="outline" size="lg">
              <Icon name="mdi:github" size={20} />
              View on GitHub
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="container py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Everything You Need</h2>
          <Text variant="large" className="mx-auto max-w-2xl text-muted-foreground">
            Built with the latest technologies and best practices
          </Text>
        </motion.div>

        <div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon name={feature.icon} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-muted/50 py-20">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Ready to Get Started?</h2>
            <Text variant="large" className="mx-auto mb-8 max-w-2xl text-muted-foreground">
              Start building your next marketing site with this production-ready boilerplate
            </Text>
            <Button size="lg">
              Get Started Now
              <Icon name="mdi:arrow-right" size={20} />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
