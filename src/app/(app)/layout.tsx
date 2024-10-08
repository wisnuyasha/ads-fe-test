import React from 'react'
import Navbar from './_containers/layout/Navbar'
import Sidebar from './_containers/layout/Sidebar'

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="max-w flex h-full min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      <Navbar />
      <Sidebar />
      {children}
    </main>
  )
}
