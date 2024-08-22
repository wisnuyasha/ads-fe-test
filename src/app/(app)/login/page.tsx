import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '~/logo_black_with_text.svg'
import LoginImage from '~/images/get-started.png'

export default function page() {
  return (
    <main className="flex h-full min-h-screen w-full flex-row-reverse items-center justify-center bg-[#ECF2FA] md:gap-x-10 xl:gap-x-20 xl:pl-8">
      <Image
        src={Logo}
        alt="Logo"
        className="absolute top-12 z-50 h-fit w-[129px] md:left-36 md:w-[177px]"
      />
      <div className="relative flex h-full min-h-screen w-full flex-col items-center justify-center bg-white px-10 md:h-fit md:min-h-fit md:w-fit md:rounded-[10px] md:py-10 md:shadow-xl lg:w-[466px]">
        <h1 className="font-lexend text-2xl font-bold text-black">
          Welcome Back
        </h1>
        <h3 className="-mt-0.5 text-sm font-medium tracking-tight">
          We’re so excited to see you again!
        </h3>
        <form className="mt-7 flex w-full flex-col items-start gap-y-3.5 sm:items-center md:items-start">
          <input
            className="w-full rounded-md border-[1px] border-[#B0B4C5] px-5 py-3.5 font-inter text-xs font-medium sm:max-w-sm md:max-w-full"
            placeholder="Username / Email"
          />
          <input
            className="w-full rounded-md border-[1px] border-[#B0B4C5] px-5 py-3.5 font-inter text-xs font-medium sm:max-w-sm md:max-w-full"
            placeholder="Password"
          />
          <span className="-mt-0.5 font-inter text-sm font-medium text-[#3366FF]">
            Lupa Password?
          </span>
          <button className="mt-3 w-full rounded-md bg-[#3366FF] py-3 sm:max-w-sm">
            <span className="font-inter text-sm font-medium text-white">
              Sign In
            </span>
          </button>
        </form>
        <div className="mt-6 flex gap-x-1 font-inter text-sm font-medium">
          <p className="text-black">Butuh buat akun ?</p>
          <Link className="text-[#3366FF]" href={'/register'}>
            Daftar di sini
          </Link>
        </div>
      </div>
      <div className="hidden max-w-[465px] flex-col gap-y-3 text-left md:flex">
        <Image src={LoginImage} className="w-full" alt="login image" />
        <h2 className="font-lexend text-2xl font-bold">
          Elevate Your Messaging Efficiency with Our Innovative Admin Tools
        </h2>
        <p className="font-inter text-sm font-medium tracking-tight">
          Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih mudah
          dengan Admin Tools kami. Tingkatkan komunikasi Anda dan pelanggan
          dengan fitur pesan otomatis. Menyimpan kontak menjadi lebih praktis
          dengan fitur sinkronasi Google Concact. Dapatkan kendali penuh pesan
          dengan manajemen konten yang praktis.
        </p>
      </div>
    </main>
  )
}
