"use client";

import { Button, Icon, Text } from "@/components/atoms";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/molecules";
import { motion } from "framer-motion";

export default function ContactPage() {
  const contactMethods = [
    {
      icon: "mdi:email",
      title: "Email",
      description: "contact@example.com",
      action: "mailto:contact@example.com",
    },
    {
      icon: "mdi:twitter",
      title: "Twitter",
      description: "@example",
      action: "https://twitter.com",
    },
    {
      icon: "mdi:github",
      title: "GitHub",
      description: "github.com/example",
      action: "https://github.com",
    },
  ];

  return (
    <div className="container py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl"
      >
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Contact Us</h1>
          <Text variant="large" className="text-muted-foreground">
            Get in touch with our team
          </Text>
        </div>

        <div className="mb-12 grid gap-6 md:grid-cols-3" data-aos="fade-up">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full text-center transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon name={method.icon} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href={method.action}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {method.description}
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <Card data-aos="fade-up" data-aos-delay="200">
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-md border bg-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-md border bg-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Your message"
                  className="w-full rounded-md border bg-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Send Message
                <Icon name="mdi:send" size={20} />
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
