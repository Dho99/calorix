"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export default function StatisticChart({chartConfig, chartData}: {
  chartConfig: {
    data: {
        label: string;
        color: string;
    }
  };
  chartData: {
    date: string;
    data: number;
  }[];
}) {
  return (
    <ChartContainer config={chartConfig}>
    <BarChart accessibilityLayer data={chartData}>
      <CartesianGrid vertical={false} />
      <XAxis
        dataKey={"date"}
        tickLine={false}
        tickMargin={10}
        axisLine={false}
      />
      <ChartTooltip
        cursor={false}
        content={<ChartTooltipContent hideLabel />}
      />
      <Bar dataKey={"data"} fill={chartConfig?.data?.color} radius={8} />
    </BarChart>
  </ChartContainer>
  );

}