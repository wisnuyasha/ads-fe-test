import Image from 'next/image'
import React from 'react'
import LoginImage from '~/images/get-started.png'

export default function ElevateSection() {
  return (
    <div className="hidden max-w-[465px] flex-col gap-y-3 text-left md:flex">
      <Image src={LoginImage} className="w-full" alt="login image" />
      <h2 className="font-lexend text-2xl font-bold">
        Elevate Your Messaging Efficiency with Our Innovative Admin Tools
      </h2>
      <p className="font-inter text-sm font-medium tracking-tight">
        Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih mudah
        dengan Admin Tools kami. Tingkatkan komunikasi Anda dan pelanggan dengan
        fitur pesan otomatis. Menyimpan kontak menjadi lebih praktis dengan
        fitur sinkronasi Google Concact. Dapatkan kendali penuh pesan dengan
        manajemen konten yang praktis.
      </p>
    </div>
  )
}
