"use client";

import type { BaseProps } from "@/types";
import AOS from "aos";
import Lenis from "lenis";
import { useEffect } from "react";

import "aos/dist/aos.css";

export function AnimationProvider({ children }: BaseProps) {
  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 0,
    });
  }, []);

  // Refresh AOS on route change
  useEffect(() => {
    AOS.refresh();
  });

  return <>{children}</>;
}
