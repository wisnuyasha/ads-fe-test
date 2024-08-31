'use client'

import React from 'react'
import { useDashboardAuth } from './_hooks/useDashboardAuth'
import Header from './_containers/Header'
import PlanContainer from './_containers/PlanContainer'
import MessageContainer from './_containers/MessageContainer'
import AnalyticsContainer from './_containers/AnalyticsContainer'

export default function DashboardPage() {
  const session = useDashboardAuth()

  if (!session) return null

  return (
    <div className="h-full min-h-screen w-full p-5">
      <div className="flex h-full max-h-[96vh] w-full flex-col overflow-y-auto rounded-[15px] bg-[#F3F5F8] px-7 pt-6">
        <Header session={session} />

        <div className="mb-10 flex h-full w-full gap-x-3.5">
          <PlanContainer />
          <MessageContainer />
        </div>

        <AnalyticsContainer />
      </div>
    </div>
  )
}
