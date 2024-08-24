import React from 'react'
import Sidebar from './_containers/layout/Sidebar'

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="flex h-full min-h-screen w-full items-start justify-start bg-white">
      <Sidebar />
      {children}
    </main>
  )
}
