import Image from 'next/image'
import React from 'react'
import OpportunityImage from '~/images/opportunity.png'
import { IoMdArrowDropdown } from 'react-icons/io'

export default function OpportunitySection() {
  return (
    <main
      id="opportunity"
      className="flex h-full min-h-[80vh] w-full flex-col items-center justify-center gap-y-6 px-7 py-20 md:gap-y-10 md:px-0 md:py-0 lg:pl-6"
    >
      <h1 className="font-lexend max-w-2xl text-center text-3xl font-bold text-[#3366FF]">
        &quot;One Step Closer to More Effective and Connected
        Communication!&quot;
      </h1>
      <div className="flex flex-col items-center md:flex-row md:gap-x-10">
        <Image
          src={OpportunityImage}
          alt="opportunity image"
          className="h-fit w-[215px] md:w-[255px]"
        />
        <div className="flex max-w-2xl flex-col gap-y-7">
          <div className="flex flex-col gap-y-3 md:flex-row md:gap-x-4">
            <div className="md: flex w-full items-center justify-center gap-x-2 rounded-[10px] bg-[#3366FF] py-2.5 text-white md:w-fit md:px-6">
              <span className="font-inter text-base font-medium md:text-sm">
                Bisnis dan Pemasaran
              </span>
              <IoMdArrowDropdown className="size-6 md:hidden" />
            </div>
            <div className="mx-3.5 flex justify-center rounded-md bg-[#F3F5F8] py-2 md:w-fit md:rounded-[10px] md:border-[1px] md:border-[#3366FF] md:bg-transparent md:px-6">
              <span className="font-inter text-sm font-medium text-[#3366FF]">
                Komersial dan Penjualan
              </span>
            </div>
            <span className="font-inter py-2 text-center text-sm font-medium text-[#3366FF] md:w-fit md:rounded-[10px] md:border-[1px] md:border-[#3366FF] md:bg-transparent md:px-6">
              Organisasi Sosial
            </span>
          </div>
          <p className="font-inter text-sm font-medium tracking-tight">
            Bidang ini dapat memanfaatkan fitur Broadcast untuk mengirim
            promosi, pengumuman, dan informasi produk kepada pelanggan dalam
            jumlah besar secara efisien. Selain itu, fitur Campaign dapat
            membantu merencanakan dan menyampaikan pesan iklan dengan waktu yang
            tepat kepada target audiens yang sesuai.
          </p>
        </div>
      </div>
    </main>
  )
}
