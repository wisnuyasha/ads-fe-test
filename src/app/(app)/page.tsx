import React from 'react'
import GetStartedSection from './_containers/landing/GetStartedSection'

export default function LandingPage() {
  return (
    <main className="flex h-full min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      <GetStartedSection />
      <div id="broadcast" className="min-h-screen w-full bg-slate-500">
        section
      </div>
    </main>
  )
}
