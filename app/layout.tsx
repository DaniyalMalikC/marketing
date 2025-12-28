import { ErrorBoundary } from "@/components/error-boundary";
import { Providers } from "@/components/providers";
import { generateSEO } from "@/lib/utils";
import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Serif_Display, Playfair_Display } from "next/font/google";
import "@/styles/base/globals.scss";
import "@/styles/base/animations.scss";

// Logo font - Using Playfair Display as Tanzif alternative (elegant serif)
const logoFont = Playfair_Display({
  variable: "--font-logo",
  subsets: ["latin"],
  weight: ["700", "900"],
  display: "swap",
});

// Heading font - Playfair Display
const headingFont = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

// Body/Text font - Cormorant Garamond
const bodyFont = Cormorant_Garamond({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Fallback font - DM Serif Display
const fallbackFont = DM_Serif_Display({
  variable: "--font-fallback",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = generateSEO();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${logoFont.variable} ${headingFont.variable} ${bodyFont.variable} ${fallbackFont.variable} flex min-h-screen flex-col font-body antialiased`}
      >
        <ErrorBoundary>
          <Providers>{children}</Providers>
        </ErrorBoundary>
      </body>
    </html>
  );
}
