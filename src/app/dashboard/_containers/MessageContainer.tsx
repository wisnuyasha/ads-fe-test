import React from 'react'
import { FaUser } from 'react-icons/fa'

export default function MessageContainer() {
  return (
    <div className="flex h-full max-h-64 w-4/12 flex-col gap-y-3 rounded-md bg-white px-4 py-3">
      <span className="font-inter text-base font-semibold">Pesan Terakhir</span>
      <div className="flex flex-col gap-y-1.5">
        <div className="flex w-full flex-col rounded-md bg-[#F3F5F8] px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex gap-x-2.5">
              <div className="h-fit w-fit rounded-full bg-[#3366FF] p-2">
                <FaUser className="size-4 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-inter text-[11px] font-bold">Anda</span>
                <span className="font-inter text-[11px]">
                  Hai apa kabarmu hari ini? Semoga...
                </span>
              </div>
            </div>
            <span className="h-fit rounded-md bg-[#3366FF] px-2 py-0.5 text-[10px] text-white">
              Terkirim
            </span>
          </div>
        </div>
        <div className="flex w-full flex-col rounded-md bg-[#F3F5F8] px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex gap-x-2.5">
              <div className="h-fit w-fit rounded-full bg-[#3366FF] p-2">
                <FaUser className="size-4 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-inter text-[11px] font-bold">Anda</span>
                <span className="font-inter text-[11px]">
                  Hai apa kabarmu hari ini? Semoga...
                </span>
              </div>
            </div>
            <span className="h-fit rounded-md bg-[#3366FF] px-2 py-0.5 text-[10px] text-white">
              Terkirim
            </span>
          </div>
        </div>
        <div className="flex w-full flex-col rounded-md bg-[#F3F5F8] px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex gap-x-2.5">
              <div className="flex min-h-8 min-w-8 items-center justify-center rounded-full bg-[#4FBEAB]">
                <span className="font-inter text-sm font-medium text-white">
                  IA
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-inter text-[11px] font-bold">
                  Ihsanul Afkar
                </span>
                <span className="font-inter text-[11px]">
                  Hai apa kabarmu hari ini? Semoga...
                </span>
              </div>
            </div>
            <span className="h-fit rounded-md bg-[#4FBEAB] px-2 py-0.5 text-[10px] text-white">
              Diterima
            </span>
          </div>
        </div>
      </div>
      <span className="text-center font-inter text-sm font-medium text-[#3366FF]">
        Tampilkan lainnya
      </span>
    </div>
  )
}
