import { Icon } from "@/components/atoms";
import { Card } from "@/components/molecules";
import { cn } from "@/lib/utils";

interface GlobalPresenceCardProps {
  className?: string;
}

export function GlobalPresenceCard({ className }: GlobalPresenceCardProps) {
  return (
    <Card
      className={cn(
        "relative flex h-[300px] w-full flex-col items-start justify-start overflow-hidden rounded-[28px] border border-black/5 bg-gradient-to-b from-white via-[#f8faf6] to-[#f1f4ec] px-6 text-black",
        "shadow-[0_26px_90px_-70px_rgba(0,0,0,0.5)]",
        className,
      )}
    >

      <div className="relative z-10 flex flex-col gap-1">
        <h3 className="font-heading text-5xl font-bold leading-tight text-black">20+</h3>
        <p className="text-sm font-medium text-gray-500">Global Enterprise drives innovation</p>
        <div className="mt-3 flex gap-3">
          <span className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-primary shadow-[0_10px_30px_-16px_rgba(0,0,0,0.35)]">
            Mexico
          </span>
          <span className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-primary shadow-[0_10px_30px_-16px_rgba(0,0,0,0.35)]">
            Australia
          </span>
        </div>
      </div>

        <Icon
          name="mdi:earth"
          size={300}
          className="pointer-events-none absolute -bottom-40 text-[#0c0f12] drop-shadow-[0_18px_30px_rgba(0,0,0,0.45)]"
          aria-hidden
        />
    </Card>
  );
}
