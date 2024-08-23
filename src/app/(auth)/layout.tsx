import Image from 'next/image'
import React from 'react'
import Logo from '~/logo_black_with_text.svg'
import ElevateSection from './_containers/ElevateSection'

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="mt-6 flex h-full min-h-screen w-full flex-row-reverse items-center justify-center bg-[#ECF2FA] md:mt-0 md:gap-x-10 xl:gap-x-20 xl:pl-8">
      <Image
        src={Logo}
        alt="Logo"
        className="absolute top-12 z-50 h-fit w-[129px] md:left-36 md:w-[177px]"
      />
      {children}
      <ElevateSection />
    </main>
  )
}
