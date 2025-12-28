import { generateSEO } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = generateSEO({
  title: "About Us",
  description:
    "Learn about Markeva's mission to transform digital marketing. We combine innovative technology with creative excellence to deliver exceptional results for modern businesses.",
  url: "/about",
});
