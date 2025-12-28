import { generateSEO } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = generateSEO({
  title: "Contact Us",
  description:
    "Get in touch with the Markeva team. We're here to help you transform your digital marketing strategy and drive real results for your business.",
  url: "/contact",
});
