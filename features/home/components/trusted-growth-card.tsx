import { Icon } from "@/components/atoms";
import { Card } from "@/components/molecules";
import { cn } from "@/lib/utils";

interface TrustedGrowthCardProps {
  className?: string;
}

export function TrustedGrowthCard({ className }: TrustedGrowthCardProps) {
  return (
    <Card
      className={cn(
        "relative flex h-[200px] w-full flex-col justify-between overflow-hidden rounded-[28px] border border-white/6 bg-gradient-to-b from-[#2a2e33] via-[#1c1f24] to-[#0f1215] p-6 text-white",
        "shadow-[0_26px_90px_-70px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      <div className="absolute inset-x-0 -top-6 h-24 bg-white/10 blur-3xl" aria-hidden />

      <div className="relative z-10 max-w-[70%]">
        <h3 className="text-xl font-semibold leading-tight">Trusted &amp; Transparent Growth</h3>
      </div>

      <Icon
        name="mdi:shield-lock"
        size={180}
        className="pointer-events-none absolute -bottom-15 -right-8 text-gray-300/70 drop-shadow-[0_18px_30px_rgba(0,0,0,0.45)]"
        aria-hidden
      />
    </Card>
  );
}

export default TrustedGrowthCard;
