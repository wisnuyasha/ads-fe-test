import React from 'react'
import { Pie, PieChart } from 'recharts'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { FaAngleDown } from 'react-icons/fa6'
import {
  Line,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  AreaChart,
} from 'recharts'

export default function AnalyticsContainer() {
  const pieChartConfig = {
    keluar: {
      label: 'Total Pesan Keluar',
      color: '#3366FF',
    },
    gagal: {
      label: 'Total Pesan Gagal',
      color: '#F3F5F8',
    },
    masuk: {
      label: 'Total Pesan Masuk',
      color: '#4FBEAB',
    },
  }

  const areaChartConfig = {
    // color: '#3366FF', // Remove this line
    theme: {
      light: '#FFFFFF',
      dark: '#000000',
    },
  }
  const lineChartConfig = {
    color: '#3366FF',
    theme: {
      light: '#F0F0F0',
      dark: '#1A1A1A',
    },
  }

  const chartData = [
    { name: 'Total Pesan Keluar', value: 45, fill: '#3366FF' },
    { name: 'Total Pesan Gagal', value: 8, fill: '#F3F5F8' },
    { name: 'Total Pesan Masuk', value: 23, fill: '#4FBEAB' },
  ]

  const hourlyData = [
    { hour: '00:00', value: 0.55 },
    { hour: '01:00', value: 0.5 },
    { hour: '02:00', value: 0.6 },
    { hour: '03:00', value: 0.55 },
    { hour: '04:00', value: 0.55 },
    { hour: '05:00', value: 0.5 },
    { hour: '06:00', value: 0.7 },
    { hour: '07:00', value: 0.65 },
    { hour: '08:00', value: 0.75 },
    { hour: '09:00', value: 0.6 },
    { hour: '10:00', value: 0.55 },
    { hour: '11:00', value: 0.6 },
    { hour: '12:00', value: 0.55 },
    { hour: '13:00', value: 0.65 },
    { hour: '14:00', value: 0.6 },
    { hour: '15:00', value: 0.7 },
    { hour: '16:00', value: 0.65 },
    { hour: '17:00', value: 0.7 },
    { hour: '18:00', value: 0.55 },
    { hour: '19:00', value: 0.5 },
    { hour: '20:00', value: 0.55 },
    { hour: '21:00', value: 0.6 },
    { hour: '22:00', value: 0.65 },
    { hour: '23:00', value: 0.55 },
  ]

  const monthlyData = [
    { month: 'January', value1: 0.6, value2: 1.0 },
    { month: 'February', value1: 0.55, value2: 0.95 },
    { month: 'March', value1: 0.55, value2: 0.9 },
    { month: 'April', value1: 0.55, value2: 0.9 },
    { month: 'May', value1: 0.55, value2: 0.85 },
    { month: 'June', value1: 0.55, value2: 0.85 },
    { month: 'July', value1: 0.6, value2: 0.85 },
    { month: 'August', value1: 0.6, value2: 0.85 },
    { month: 'September', value1: 0.55, value2: 0.8 },
    { month: 'October', value1: 0.55, value2: 0.75 },
    { month: 'November', value1: 0.6, value2: 0.75 },
    { month: 'December', value1: 0.6, value2: 0.7 },
  ]

  return (
    <div className="flex h-full w-full flex-col gap-y-5 rounded-md bg-white py-8 pb-2.5 pl-8 pr-4 pt-7">
      <h2 className="font-lexend text-2xl font-bold text-black">Analitik</h2>
      <div className="flex h-full w-full gap-x-2.5">
        <div className="flex h-52 w-[32%] flex-col gap-y-3 rounded-md border-[1px] border-[#B0B4C5] px-5 py-5">
          <span className="mb-2 font-inter text-base font-bold">
            Ringkasan hari ini
          </span>
          <div className="flex gap-x-3.5">
            <div className="flex items-center justify-between gap-x-20 rounded-md bg-[#F3F5F8] px-5 py-3">
              <div className="flex flex-col">
                <span className="font inter text-[11px]">Device</span>
                <span className="font-inter text-sm font-semibold">
                  RMX3263
                </span>
              </div>
              <FaAngleDown className="size-5" />
            </div>
            <div className="flex flex-col rounded-md bg-[#F3F5F8] px-5 py-3">
              <span className="font inter text-[11px]">Aktif sejak</span>
              <span className="font-inter text-sm font-semibold">
                29.8.2023
              </span>
            </div>
          </div>
          <div className="mt-2 flex items-center justify-center gap-x-9">
            <div className="flex flex-col">
              <span className="font-inter text-[11px]">Pesan Keluar</span>
              <span className="font-inter text-sm font-semibold">24</span>
            </div>
            <div className="flex flex-col">
              <span className="font-inter text-[11px]">Pesan Masuk</span>
              <span className="font-inter text-sm font-semibold">7</span>
            </div>
            <div className="flex flex-col">
              <span className="font-inter text-[11px]">Pesan Gagal</span>
              <span className="font-inter text-sm font-semibold">0</span>
            </div>
          </div>
        </div>
        <div className="flex h-52 w-[68%] justify-between rounded-md border-[1px] border-[#B0B4C5] px-5 py-5">
          <div className="flex max-w-52 flex-col justify-between">
            <span className="font-inter text-base font-bold">
              Total statistik pesan
            </span>
            <div className="flex flex-wrap gap-3">
              <div className="flex flex-col">
                <span className="font-inter text-[11px]">
                  Total Pesan Keluar
                </span>
                <span className="font-inter text-sm font-semibold">45</span>
              </div>
              <div className="flex flex-col">
                <span className="font-inter text-[11px]">
                  Total Pesan Gagal
                </span>
                <span className="font-inter text-sm font-semibold">8</span>
              </div>
              <div className="flex flex-col">
                <span className="font-inter text-[11px]">
                  Total Pesan Masuk
                </span>
                <span className="font-inter text-sm font-semibold">23</span>
              </div>
            </div>
          </div>
          <ChartContainer
            config={pieChartConfig}
            className="aspect-square max-h-[250px] w-fit"
          >
            <PieChart>
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
              />
            </PieChart>
          </ChartContainer>
        </div>
      </div>
      <div className="flex h-full w-full flex-col gap-y-9 rounded-md border-[1px] border-[#B0B4C5] px-8 py-10">
        <div className="flex gap-x-3.5">
          <div className="flex min-w-[102px] flex-col rounded-md bg-[#F3F5F8] px-5 py-3">
            <span className="font-inter text-[11px]">Hari ini</span>
            <span className="font-inter text-sm font-semibold">24</span>
          </div>
          <div className="flex min-w-[102px] flex-col rounded-md bg-[#F3F5F8] px-5 py-3">
            <span className="font-inter text-[11px]">Rata-rata harian</span>
            <span className="font-inter text-sm font-semibold">7</span>
          </div>
          <div className="flex min-w-[102px] flex-col rounded-md bg-[#F3F5F8] px-5 py-3">
            <span className="font-inter text-[11px]">Bulan ini</span>
            <span className="font-inter text-sm font-semibold">23</span>
          </div>
          <div className="flex min-w-[102px] flex-col rounded-md bg-[#F3F5F8] px-5 py-3">
            <span className="font-inter text-[11px]">Rata-rata waktu</span>
            <span className="font-inter text-sm font-semibold">00:02:42</span>
          </div>
        </div>
        <div className="flex w-full flex-col gap-y-5">
          <span className="font-inter text-sm font-semibold">
            Grafik chart perjam
          </span>
          <ChartContainer className="max-w-4xl" config={areaChartConfig}>
            <AreaChart data={hourlyData} margin={{ left: 12, right: 12 }}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3366FF" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#3366FF" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis
                dataKey="hour"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <YAxis domain={[0.1, 1]} />
              <Tooltip
                content={<ChartTooltipContent indicator="dot" hideLabel />}
              />
              <Area
                type="linear"
                dataKey="value"
                stroke="#3366FF"
                fillOpacity={1}
                fill="url(#colorUv)"
                strokeWidth={2}
              />
            </AreaChart>
          </ChartContainer>
        </div>
        <div className="flex w-full flex-col gap-y-5">
          <span className="font-inter text-sm font-semibold">
            Trend Interaksi Pesan
          </span>
          <ChartContainer className="max-w-4xl" config={lineChartConfig}>
            <LineChart data={monthlyData} margin={{ left: 12, right: 12 }}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <YAxis domain={[0.1, 1]} />
              <Tooltip
                content={<ChartTooltipContent indicator="dot" hideLabel />}
              />
              <Line
                type="linear"
                dataKey="value1"
                stroke="#3366FF"
                strokeWidth={2}
              />
              <Line
                type="linear"
                dataKey="value2"
                stroke="#D1D5DB"
                strokeDasharray="3 3"
                strokeWidth={2}
              />
            </LineChart>
          </ChartContainer>
        </div>
      </div>
    </div>
  )
}
