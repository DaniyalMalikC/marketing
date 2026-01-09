import { Icon } from "@/components/atoms";

export function BackgroundIllustration() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-1">
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,#0c0e11_0%,#050607_60%)]" /> */}
      <div className="absolute left-1/2 top-6 h-[840px] w-[840px] -translate-x-1/2 rounded-full border border-white/10 opacity-20" />
      <div className="absolute left-1/2 top-28 h-[680px] w-[680px] -translate-x-1/2 rounded-full border border-white/5 opacity-30" />
      <div className="absolute left-1/2 top-52 h-[540px] w-[540px] -translate-x-1/2 rounded-full border border-white/5 opacity-15" />
      <div className="absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-[#c6f45f]/20 blur-[130px]" />
      <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-[#c6f45f]/12 blur-[130px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,#c6f45f0a,transparent_45%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:36px_36px] opacity-60" />
      <div className="pointer-events-none absolute inset-x-0 -bottom-8 h-32 bg-gradient-to-r from-[#c6f45f]/22 via-transparent to-transparent blur-3xl" />
      {/* <div className="absolute inset-x-0 top-[46%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" /> */}
      <div className="absolute left-24 top-24 text-[#d5ff6a]/80">
        <Icon name="mdi:star-four-points" size={26} aria-hidden />
      </div>
      <div className="absolute right-24 bottom-16 text-[#d5ff6a]/60">
        <Icon name="mdi:star-four-points" size={26} aria-hidden />
      </div>
      <div className="absolute inset-x-12 bottom-[14%] h-64 rounded-[40%] bg-[radial-gradient(circle_at_50%_50%,#ffffff22,transparent_65%)] blur-3xl" />
    </div>
  );
}
