"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const chartData = [
  { date: "2024-04-01", cpu: 222, ram: 150 },
  { date: "2024-04-02", cpu: 97, ram: 180 },
  { date: "2024-04-03", cpu: 167, ram: 120 },
  { date: "2024-04-04", cpu: 242, ram: 260 },
  { date: "2024-04-05", cpu: 373, ram: 290 },
  { date: "2024-04-06", cpu: 301, ram: 340 },
  { date: "2024-04-07", cpu: 245, ram: 180 },
  { date: "2024-04-08", cpu: 409, ram: 320 },
  { date: "2024-04-09", cpu: 59, ram: 110 },
  { date: "2024-04-10", cpu: 261, ram: 190 },
  { date: "2024-04-11", cpu: 327, ram: 350 },
  { date: "2024-04-12", cpu: 292, ram: 210 },
  { date: "2024-04-13", cpu: 342, ram: 380 },
  { date: "2024-04-14", cpu: 137, ram: 220 },
  { date: "2024-04-15", cpu: 120, ram: 170 },
  { date: "2024-04-16", cpu: 138, ram: 190 },
  { date: "2024-04-17", cpu: 446, ram: 360 },
  { date: "2024-04-18", cpu: 364, ram: 410 },
  { date: "2024-04-19", cpu: 243, ram: 180 },
  { date: "2024-04-20", cpu: 89, ram: 150 },
  { date: "2024-04-21", cpu: 137, ram: 200 },
  { date: "2024-04-22", cpu: 224, ram: 170 },
  { date: "2024-04-23", cpu: 138, ram: 230 },
  { date: "2024-04-24", cpu: 387, ram: 290 },
  { date: "2024-04-25", cpu: 215, ram: 250 },
  { date: "2024-04-26", cpu: 75, ram: 130 },
  { date: "2024-04-27", cpu: 383, ram: 420 },
  { date: "2024-04-28", cpu: 122, ram: 180 },
  { date: "2024-04-29", cpu: 315, ram: 240 },
  { date: "2024-04-30", cpu: 454, ram: 380 },
  { date: "2024-05-01", cpu: 165, ram: 220 },
  { date: "2024-05-02", cpu: 293, ram: 310 },
  { date: "2024-05-03", cpu: 247, ram: 190 },
  { date: "2024-05-04", cpu: 385, ram: 420 },
  { date: "2024-05-05", cpu: 481, ram: 390 },
  { date: "2024-05-06", cpu: 498, ram: 520 },
  { date: "2024-05-07", cpu: 388, ram: 300 },
  { date: "2024-05-08", cpu: 149, ram: 210 },
  { date: "2024-05-09", cpu: 227, ram: 180 },
  { date: "2024-05-10", cpu: 293, ram: 330 },
  { date: "2024-05-11", cpu: 335, ram: 270 },
  { date: "2024-05-12", cpu: 197, ram: 240 },
  { date: "2024-05-13", cpu: 197, ram: 160 },
  { date: "2024-05-14", cpu: 448, ram: 490 },
  { date: "2024-05-15", cpu: 473, ram: 380 },
  { date: "2024-05-16", cpu: 338, ram: 400 },
  { date: "2024-05-17", cpu: 499, ram: 420 },
  { date: "2024-05-18", cpu: 315, ram: 350 },
  { date: "2024-05-19", cpu: 235, ram: 180 },
  { date: "2024-05-20", cpu: 177, ram: 230 },
  { date: "2024-05-21", cpu: 82, ram: 140 },
  { date: "2024-05-22", cpu: 81, ram: 120 },
  { date: "2024-05-23", cpu: 252, ram: 290 },
  { date: "2024-05-24", cpu: 294, ram: 220 },
  { date: "2024-05-25", cpu: 201, ram: 250 },
  { date: "2024-05-26", cpu: 213, ram: 170 },
  { date: "2024-05-27", cpu: 420, ram: 460 },
  { date: "2024-05-28", cpu: 233, ram: 190 },
  { date: "2024-05-29", cpu: 78, ram: 130 },
  { date: "2024-05-30", cpu: 340, ram: 280 },
  { date: "2024-05-31", cpu: 178, ram: 230 },
  { date: "2024-06-01", cpu: 178, ram: 200 },
  { date: "2024-06-02", cpu: 470, ram: 410 },
  { date: "2024-06-03", cpu: 103, ram: 160 },
  { date: "2024-06-04", cpu: 439, ram: 380 },
  { date: "2024-06-05", cpu: 88, ram: 140 },
  { date: "2024-06-06", cpu: 294, ram: 250 },
  { date: "2024-06-07", cpu: 323, ram: 370 },
  { date: "2024-06-08", cpu: 385, ram: 320 },
  { date: "2024-06-09", cpu: 438, ram: 480 },
  { date: "2024-06-10", cpu: 155, ram: 200 },
  { date: "2024-06-11", cpu: 92, ram: 150 },
  { date: "2024-06-12", cpu: 492, ram: 420 },
  { date: "2024-06-13", cpu: 81, ram: 130 },
  { date: "2024-06-14", cpu: 426, ram: 380 },
  { date: "2024-06-15", cpu: 307, ram: 350 },
  { date: "2024-06-16", cpu: 371, ram: 310 },
  { date: "2024-06-17", cpu: 475, ram: 520 },
  { date: "2024-06-18", cpu: 107, ram: 170 },
  { date: "2024-06-19", cpu: 341, ram: 290 },
  { date: "2024-06-20", cpu: 408, ram: 450 },
  { date: "2024-06-21", cpu: 169, ram: 210 },
  { date: "2024-06-22", cpu: 317, ram: 270 },
  { date: "2024-06-23", cpu: 480, ram: 530 },
  { date: "2024-06-24", cpu: 132, ram: 180 },
  { date: "2024-06-25", cpu: 141, ram: 190 },
  { date: "2024-06-26", cpu: 434, ram: 380 },
  { date: "2024-06-27", cpu: 448, ram: 490 },
  { date: "2024-06-28", cpu: 149, ram: 200 },
  { date: "2024-06-29", cpu: 103, ram: 160 },
  { date: "2024-06-30", cpu: 446, ram: 400 },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  cpu: {
    label: "CPU",
    color: "var(--chart-1)",
  },
  ram: {
    label: "RAM",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function GraphPreviewCard() {
  const [timeRange, setTimeRange] = React.useState("90d")

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card className="pt-0 w-1/2">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Monitor VPS1</CardTitle>
          <CardDescription>
            Showing CPU and RAM usage for VPS1
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillCPU" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-cpu)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-cpu)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillRAM" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-ram)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-ram)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="cpu"
              type="natural"
              fill="url(#fillCPU)"
              stroke="var(--color-cpu)"
              stackId="a"
            />
            <Area
              dataKey="ram"
              type="natural"
              fill="url(#fillRAM)"
              stroke="var(--color-ram)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
