'use client'

import React from 'react'
import { useDashboardAuth } from './_hooks/useDashboardAuth'
import Header from './_containers/Header'
import { FaUser } from 'react-icons/fa'
import PlanContainer from './_containers/PlanContainer'
import MessageContainer from './_containers/MessageContainer'
import { FaAngleDown } from 'react-icons/fa6'
import { Pie, PieChart } from 'recharts'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

export default function DashboardPage() {
  const session = useDashboardAuth()

  if (!session) return null

  const chartConfig = {
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

  const chartData = [
    { name: 'Total Pesan Keluar', value: 45, fill: '#3366FF' },
    { name: 'Total Pesan Gagal', value: 8, fill: '#F3F5F8' },
    { name: 'Total Pesan Masuk', value: 23, fill: '#4FBEAB' },
  ]

  return (
    <div className="h-full min-h-screen w-full p-5">
      <div className="flex h-full max-h-[785px] w-full flex-col overflow-y-auto rounded-[15px] bg-[#F3F5F8] px-7 pt-6">
        <Header session={session} />

        <div className="mb-10 flex h-full w-full gap-x-3.5">
          <PlanContainer />
          <MessageContainer />
        </div>

        <div className="flex h-full w-full flex-col gap-y-5 rounded-md bg-white py-8 pb-2.5 pl-8 pt-7">
          <h2 className="font-lexend text-2xl font-bold text-black">
            Analitik
          </h2>
          <div className="flex h-full w-full gap-x-2.5">
            <div className="flex h-52 w-[32%] flex-col gap-y-3 rounded-md border-[1px] border-[#B0B4C5] px-5 py-5">
              <span className="font-inter mb-2 text-base font-bold">
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
            <div className="flex h-52 w-[65%] justify-between rounded-md border-[1px] border-[#B0B4C5] px-5 py-5">
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
                config={chartConfig}
                className="aspect-square max-h-[250px] w-fit"
              >
                <PieChart>
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent />}
                  />
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
        </div>
      </div>
    </div>
  )
}
