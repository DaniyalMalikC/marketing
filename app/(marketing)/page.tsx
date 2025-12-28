"use client";

import { Button, Icon, Text } from "@/components/atoms";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/molecules";
import { motion } from "framer-motion";

export default function HomePage() {
  const features = [
    {
      icon: "mdi:chart-line",
      title: "Data-Driven Insights",
      description: "Harness the power of analytics to make informed marketing decisions",
    },
    {
      icon: "mdi:target",
      title: "Precision Targeting",
      description: "Reach your ideal audience with laser-focused campaign strategies",
    },
    {
      icon: "mdi:lightbulb",
      title: "Creative Excellence",
      description: "Stand out with compelling content that resonates with your audience",
    },
    {
      icon: "mdi:trending-up",
      title: "Growth Optimization",
      description: "Scale your business with proven strategies that deliver results",
    },
    {
      icon: "mdi:email",
      title: "Email Marketing",
      description: "Engage customers with personalized email campaigns that convert",
    },
    {
      icon: "mdi:share-variant",
      title: "Social Media Mastery",
      description: "Build meaningful connections across all social platforms",
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
            <Text variant="small">Transform Your Marketing</Text>
          </div>
          <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            Elevate Your Brand
            <br />
            <span className="bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent">
              Drive Real Results
            </span>
          </h1>
          <Text variant="large" className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            Where innovation meets excellence. Markeva delivers cutting-edge digital marketing
            solutions that transform your vision into measurable success.
          </Text>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg">
              Start Growing Today
              <Icon name="mdi:arrow-right" size={20} />
            </Button>
            <Button variant="outline" size="lg">
              <Icon name="mdi:play-circle" size={20} />
              Watch Demo
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
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Comprehensive Marketing Solutions</h2>
          <Text variant="large" className="mx-auto max-w-2xl text-muted-foreground">
            Everything you need to succeed in today's digital landscape
          </Text>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Ready to Transform Your Marketing?
            </h2>
            <Text variant="large" className="mx-auto mb-8 max-w-2xl text-muted-foreground">
              Join thousands of businesses that trust Markeva to elevate their digital presence
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
