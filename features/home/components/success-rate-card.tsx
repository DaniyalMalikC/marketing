"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";

import { Card } from "@/components/molecules";
import { cn } from "@/lib/utils";

const ReactECharts = dynamic(() => import("echarts-for-react"), {
  ssr: false,
  loading: () => <div className="h-full w-full" aria-hidden />,
});

interface SuccessRateCardProps {
  className?: string;
}

export function SuccessRateCard({ className }: SuccessRateCardProps) {
  const option = useMemo(
    () => ({
      backgroundColor: "transparent",
      grid: { left: 0, right: 0, top: 0, bottom: 0, containLabel: false },
      xAxis: {
        type: "category",
        data: ["A", "B", "C", "D"],
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { show: false },
      },
      yAxis: {
        type: "value",
        max: 4,
        splitLine: { show: false },
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { show: false },
      },
      series: [
        {
          type: "bar",
          data: [2.4, 1.8, 4.2, 2.2],
          barWidth: 28,
          itemStyle: {
            color: (params: { dataIndex: number }) => {
              if (params.dataIndex === 2) {
                return {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    { offset: 0, color: "#d8ff74" },
                    { offset: 1, color: "#b2e94b" },
                  ],
                };
              }
              return "#404348";
            },
            opacity: (params: { dataIndex: number }) => (params.dataIndex === 3 ? 0.95 : 0.45),
            borderRadius: [1, 1, 1, 1],
          },
          emphasis: { disabled: true },
          animationDuration: 800,
          animationDelay: 200,
        },
      ],
    }),
    [],
  );

  return (
    <Card
      className={cn(
        "group relative flex h-[240px] w-full flex-col justify-between overflow-hidden rounded-[28px] border border-white/8 bg-gradient-to-b from-[#22262c] via-[#181b1f] to-[#0d0f12] p-6 text-white",
        "shadow-[0_26px_90px_-70px_rgba(0,0,0,0.85)]",
        className,
      )}
    >
      <div className="absolute inset-x-0 top-0 h-24 bg-white/8 blur-3xl" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white/6 via-transparent to-transparent blur-2xl" aria-hidden />

      <div className="relative z-10 flex flex-col gap-1">
        <h3 className="font-heading text-2xl font-bold leading-none">98.5%</h3>
        <p className="text-sm font-medium text-gray-300">
          Marketing campaigns have achieved 98% success
        </p>
      </div>

      <div className="relative z-10 -mb-2 mt-2 h-28 w-full">
        <ReactECharts
          option={option}
          style={{ height: "100%", width: "100%" }}
          notMerge
          lazyUpdate
          opts={{ renderer: "svg" }}
        />
      </div>
    </Card>
  );
}

export default SuccessRateCard;
