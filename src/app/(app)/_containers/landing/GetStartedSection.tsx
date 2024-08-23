import clsxm from '@/lib/clsxm'
import Image from 'next/image'
import React from 'react'
import LoginImage from '~/images/get-started.png'
import { GrFormNextLink } from 'react-icons/gr'
import Link from 'next/link'

export default function GetStartedSection() {
  return (
    <section
      id="get-started"
      className="relative z-10 flex h-full min-h-screen w-full min-w-full flex-col items-center justify-center overflow-x-hidden bg-[#ECF2FA] md:flex-row-reverse md:gap-x-3 lg:gap-x-16"
    >
      <div
        className={clsxm(
          'absolute z-[1] rotate-45 bg-gradient-to-l from-white/[.88] to-white/0',
          '-left-[0vh] top-[5vh] size-[394px] rounded-[70px]',
          'md:-top-[10vh] md:left-[35vh] md:size-[650px] md:rounded-[100px]',
          'lg:-top-[75vh] lg:left-[0vh] lg:size-[1182px] lg:rounded-[160px]'
        )}
      />
      <div
        className={clsxm(
          'absolute z-[2] rotate-45 bg-gradient-to-l from-white/[.88] to-white/0',
          '-left-[15vh] top-[5vh] size-[394px] rounded-[70px]',
          'md:-left-[10vh] md:-top-[10vh] md:size-[650px] md:rounded-[100px]',
          'lg:-left-[60vh] lg:-top-[75vh] lg:size-[1182px] lg:rounded-[160px]'
        )}
      />
      <div
        className={clsxm(
          'absolute z-[3] rotate-45 bg-gradient-to-l from-white/[.88] to-white/0 md:drop-shadow-[0_21px_50px_rgba(0,0,0,0.08)]',
          '-left-[30vh] top-[5vh] size-[394px] rounded-[70px]',
          'md:-left-[60vh] md:-top-[10vh] md:size-[650px] md:rounded-[100px]',
          'lg:-left-[120vh] lg:-top-[75vh] lg:size-[1182px] lg:rounded-[160px]'
        )}
      />
      <Image
        src={LoginImage}
        alt="get started"
        className="z-10 h-fit max-w-xs md:max-w-xl lg:-mr-[15vh] lg:max-w-2xl xl:-mr-[25vh]"
      />
      <div className="z-10 flex max-w-sm flex-col gap-y-6 px-5 md:gap-y-7 md:px-0">
        <h2 className="font-lexend text-2xl font-bold md:text-3xl lg:text-4xl">
          Elevate Your Messaging Efficiency with Our Innovative Admin Tools
        </h2>
        <p className="font-inter text-sm font-medium tracking-tight">
          Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih mudah
          dengan Admin Tools kami. Tingkatkan komunikasi Anda dan pelanggan
          dengan fitur pesan otomatis. Menyimpan kontak menjadi lebih praktis
          dengan fitur sinkronasi Google Concact. Dapatkan kendali penuh pesan
          dengan manajemen konten yang praktis.
        </p>
        <Link
          href={'/register'}
          className="flex h-fit items-center gap-x-[0.5px]"
        >
          <div className="rounded-l-md bg-black px-9 py-3">
            <span className="font-inter text-sm font-medium text-[#FAFBFF]">
              Daftar Sekarang
            </span>
          </div>
          <div className="h-full rounded-r-md bg-black px-3 py-3">
            <GrFormNextLink className="size-6 text-[#FAFBFF]" />
          </div>
        </Link>
      </div>
    </section>
  )
}
