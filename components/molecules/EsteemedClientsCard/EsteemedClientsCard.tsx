import { Card } from "@/components/molecules";
import { cn } from "@/lib/utils";

interface EsteemedClientsCardProps {
  className?: string;
}

export function EsteemedClientsCard({ className }: EsteemedClientsCardProps) {
  return (
    <Card
      className={cn(
        "relative flex h-[240px] w-full flex-col items-center justify-center overflow-hidden rounded-[28px] border border-black/5 bg-gradient-to-b from-white via-[#f9faf6] to-[#f3f5ee] text-center text-black",
        "shadow-[0_26px_80px_-64px_rgba(0,0,0,0.55)]",
        "before:absolute before:-top-10 before:left-4 before:h-24 before:w-24 before:rounded-full before:bg-black/5 before:blur-3xl",
        "after:absolute after:inset-0 after:rounded-[28px] after:ring-1 after:ring-black/5 after:ring-offset-0 after:opacity-5",
        className,
      )}
    >
      <h3 className="font-heading text-5xl font-bold tracking-tight text-black">100+</h3>
      <p className="mt-3 text-base font-medium leading-relaxed text-gray-500">
        Our Esteemed
        <br />
        Clients and Partners
      </p>
    </Card>
  );
}
