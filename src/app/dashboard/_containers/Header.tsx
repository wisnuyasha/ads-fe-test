import { Session } from 'next-auth'
import React from 'react'
import { FaRegCalendar } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'
import { IoIosNotifications } from 'react-icons/io'
import { FaUser } from 'react-icons/fa6'
import { signOut } from 'next-auth/react'

export default function Header({ session }: { session: Session }) {
  const today = new Date().toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  return (
    <div className="mb-8 flex w-full items-end justify-between">
      <h2 className="font-lexend text-2xl font-bold">
        Selamat siang, {session.user?.email}
      </h2>
      <div className="flex flex-col justify-between gap-y-7">
        <div className="flex gap-x-3.5">
          <div className="cursor-pointer rounded-full bg-white p-2.5">
            <IoIosNotifications className="size-5" />
          </div>
          <div className="flex items-center rounded-full bg-white py-1 pl-3.5 pr-1.5">
            <span className="px-8 font-inter text-sm font-medium">
              {session.user?.email}
            </span>
            <div className="cursor-pointer rounded-full bg-[#3366FF] p-2">
              <FaUser className="size-3.5 text-white" />
            </div>
          </div>
          <div className="cursor-pointer rounded-full bg-white p-2.5">
            <IoMdSettings onClick={() => signOut()} className="size-5" />
          </div>
        </div>
        <div className="flex items-center justify-end gap-x-3">
          <div className="flex flex-col items-end">
            <p className="font-inter text-xs font-medium text-[#B0B4C5]">
              Tanggal hari ini
            </p>
            <p className="font-inter text-xs font-medium text-[#777C88]">
              {today}
            </p>
          </div>
          <FaRegCalendar className="size-4" />
        </div>
      </div>
    </div>
  )
}
