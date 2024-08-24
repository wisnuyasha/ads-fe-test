import Image from 'next/image'
import React from 'react'
import TextLogo from '~/text_logo_white.svg'

export default function Footer() {
  return (
    <main className="z-0 flex min-h-[15vh] w-full items-center justify-center gap-x-4 bg-[#3366FF]">
      <span className="font-inter text-sm font-light text-white">
        Powered By
      </span>
      <Image src={TextLogo} alt="text logo" />
    </main>
  )
}
