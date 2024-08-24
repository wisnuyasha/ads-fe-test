import React from 'react'

export default function PlanContainer() {
  return (
    <div className="flex h-full max-h-64 w-8/12 flex-col rounded-md bg-white px-8 py-8 pb-2.5 pt-7">
      <div className="flex w-full justify-between gap-y-10">
        <div className="flex w-full max-w-80 gap-x-5">
          <div className="flex flex-col justify-between">
            <p className="max-w-12 font-inter text-xs font-medium">
              Paket saat ini
            </p>
            <div className="mb-3 flex flex-col gap-y-10">
              <p className="font-inter text-xs font-medium">Devices</p>
              <p className="font-inter text-xs font-medium">Contacts</p>
            </div>
          </div>
          <div className="flex w-full flex-col justify-between gap-y-10">
            <div className="flex w-fit items-center justify-center gap-x-2">
              <p className="font-lexend text-2xl font-bold">Starter</p>
              <div className="rounded-md bg-black px-2 py-0.5 font-inter text-[11px] text-white">
                Free
              </div>
            </div>
            <div className="flex w-full flex-col gap-y-4">
              <div className="flex w-full flex-col gap-y-1">
                <div className="relative w-full rounded-full bg-[#E6E8F0] py-2">
                  <div className="absolute top-0 w-[80%] rounded-full bg-[#D14343] py-2" />
                </div>
                <span className="text-[10px] text-[#777C88]">
                  8 dari 10 device yang tersedia
                </span>
              </div>
              <div className="flex w-full flex-col gap-y-2">
                <div className="relative w-full rounded-full bg-[#E6E8F0] py-2">
                  <div className="absolute top-0 w-[15%] rounded-full bg-[#4FBEAB] py-2" />
                </div>
                <span className="text-[10px] text-[#777C88]">
                  5 dari 100 kontak yang tersedia
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-[211px] flex-col justify-between">
          <div className="flex flex-col text-right font-inter">
            <span className="font-inter text-[11px] text-[#777C88]">
              Akftif sampai dengan
            </span>
            <span className="font-inter text-xs font-semibold text-black">
              Selasa, 29 Agustus 2023
            </span>
          </div>
          <span className="text-right font-inter text-xs font-medium">
            Upgrade paket untuk meningkatkan batasan fitur yang ada
          </span>
          <button className="w-full rounded-md border-[1px] border-[#3366FF] py-2 font-inter text-sm font-medium text-[#3366FF]">
            Upgrade Paket
          </button>
        </div>
      </div>
      <span className="mt-8 text-center font-inter text-sm text-[#B0B4C5]">
        Tampilkan kapasitas fitur lainnya
      </span>
    </div>
  )
}
