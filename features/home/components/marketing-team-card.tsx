import Image from "next/image";

import { Card } from "@/components/molecules";
import { cn } from "@/lib/utils";

interface MarketingTeamCardProps {
  className?: string;
}

export function MarketingTeamCard({ className }: MarketingTeamCardProps) {
  return (
    <Card
      className={cn(
        "group relative h-[300px] rounded-3xl border border-white/8 bg-[#0d0f12] p-0 shadow-[0_30px_120px_-88px_rgba(0,0,0,0.95)]",
        className,
      )}
    >
      <Image
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
        alt="Marketing team collaborating"
        fill
        className="rounded-3xl object-cover grayscale contrast-110 transition-transform duration-700 group-hover:scale-[1.04]"
        priority
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
      />
      <div className="absolute -right-14 top-4 z-20">
        <div className="font-sans inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-black shadow-[0_12px_30px_-16px_rgba(0,0,0,0.45)] ring-1 ring-black/5 backdrop-blur">
          <span className="h-2.5 w-2.5 rounded-full bg-black" />
          Marketing Team
        </div>
      </div>
    </Card>
  );
}

export default MarketingTeamCard;
