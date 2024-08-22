import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '~/logo_black_with_text.svg'
import LoginImage from '~/images/get-started.png'
import { FaCheck } from 'react-icons/fa6'

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
          Welcome to Fowardin
        </h1>
        <h3 className="-mt-0.5 max-w-60 text-center text-sm font-medium tracking-tight">
          Revolutionize your communication journey with Fowardin today
        </h3>
        <form className="mt-7 flex w-full flex-col items-start gap-y-3.5 sm:items-center md:items-start">
          <input
            className="w-full rounded-md border-[1px] border-[#B0B4C5] px-5 py-3.5 font-inter text-xs font-medium sm:max-w-sm md:max-w-full"
            placeholder="Email"
          />
          <input
            className="w-full rounded-md border-[1px] border-[#B0B4C5] px-5 py-3.5 font-inter text-xs font-medium sm:max-w-sm md:max-w-full"
            placeholder="Username"
          />
          <div className="flex w-full gap-x-2.5">
            <div className="flex h-full min-w-24 items-center justify-between rounded-md border-[1px] border-[#B0B4C5] px-3 py-3.5">
              <p className="font-inter text-xs font-medium text-black">
                (ID) +62
              </p>
              <div className="size-3.5 bg-slate-500" />
            </div>
            <input
              className="w-full rounded-md border-[1px] border-[#B0B4C5] px-5 py-3.5 font-inter text-xs font-medium sm:max-w-sm md:max-w-full"
              placeholder="Whatsapp Phone Number"
            />
          </div>
          <input
            className="w-full rounded-md border-[1px] border-[#B0B4C5] px-5 py-3.5 font-inter text-xs font-medium sm:max-w-sm md:max-w-full"
            type="password"
            placeholder="Password"
          />
          <div className="w-full rounded-md bg-[#F3F5F8] px-5 py-2.5 shadow-md">
            <div className="flex flex-col text-xs font-medium text-[#777C88]">
              <span className="flex text-[#777C88]">
                Password harus mengandung:
              </span>
              <span className="ml-2 flex items-center gap-x-1 text-[#4FBEAB]">
                <FaCheck className="size-3.5" /> Paling tidak 8 karakter
              </span>
              <span className="ml-2 flex text-[#777C88]">
                Paling tidak 3 dari syarat berikut:
              </span>
              <div className="ml-4 flex flex-col">
                <span className="ml-2 flex items-center gap-x-1 text-[#4FBEAB]">
                  <FaCheck className="size-3.5" /> Huruf kecil (a-z)
                </span>
                <span className="ml-2 flex items-center gap-x-1 text-[#4FBEAB]">
                  {/* <FaCheck className="size-3.5" />  */}
                  Huruf besar (A-Z)
                </span>
                <span className="ml-2 flex items-center gap-x-1 text-[#4FBEAB]">
                  {/* <FaCheck className="size-3.5" />  */}
                  Angka
                </span>
                <span className="ml-2 flex items-center gap-x-1 text-[#4FBEAB]">
                  {/* <FaCheck className="size-3.5" />  */}
                  Karakter Spesial (!@#$%^&*)
                </span>
              </div>
            </div>
          </div>
          <button className="mt-3 w-full rounded-md bg-[#3366FF] py-3 sm:max-w-sm">
            <span className="font-inter text-sm font-medium text-white">
              Sign Up
            </span>
          </button>
        </form>
        <div className="mt-6 flex gap-x-1 font-inter text-sm font-medium">
          <p className="text-black">Sudah punya akun?</p>
          <Link className="text-[#3366FF]" href={'/login'}>
            Masuk di sini
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
