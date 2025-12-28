import { Header } from "@/components/organisms";
import { Footer } from "@/components/organisms";
import type { LayoutProps } from "@/types";

export default function MarketingLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
