import Image from 'next/image'
import React from 'react'
import Logo from '~/logo_blue_with_text.svg'
import { MdSpaceDashboard } from 'react-icons/md'
import { IoMdArrowDropdown } from 'react-icons/io'
import Link from 'next/link'

export default function Sidebar() {
  return (
    <nav className="flex min-h-screen min-w-[235px] flex-col items-center justify-center gap-y-1 px-[18px] pb-3 pt-10">
      <Link href={'/'}>
        <Image
          src={Logo}
          alt="forwardin logo"
          className="mb-8 h-fit w-[150x]"
        />
      </Link>
      <div className="flex w-full cursor-pointer items-center justify-start gap-x-2.5 rounded-xl bg-[#3366FF] px-6 py-3">
        <MdSpaceDashboard className="size-4 text-white" />
        <span className="font-inter text-sm font-medium text-white">
          Dashboard
        </span>
      </div>
      <div className="flex w-full cursor-pointer items-center justify-start gap-x-2.5 rounded-xl px-6 py-3 hover:bg-[#F3F5F8]">
        <MdSpaceDashboard className="size-4 text-black" />
        <span className="font-inter text-sm font-medium text-black">
          Device
        </span>
      </div>
      <div className="flex w-full cursor-pointer items-center justify-between rounded-xl py-3 pl-6 pr-3.5 hover:bg-[#F3F5F8]">
        <div className="flex items-center gap-x-2.5">
          <MdSpaceDashboard className="size-4 text-black" />
          <span className="font-inter text-sm font-medium text-black">
            Contacts
          </span>
        </div>
        <IoMdArrowDropdown className="size-5" />
      </div>
      <div className="-mt-2 flex flex-col">
        <div className="flex w-full cursor-pointer items-center justify-start gap-x-2.5 rounded-xl px-6 py-3 hover:bg-[#F3F5F8]">
          <MdSpaceDashboard className="size-4 text-black" />
          <span className="font-inter text-sm font-medium text-black">
            Contacts
          </span>
        </div>
        <div className="flex w-full cursor-pointer items-center justify-start gap-x-2.5 rounded-xl px-6 py-3 hover:bg-[#F3F5F8]">
          <MdSpaceDashboard className="size-4 text-black" />
          <span className="font-inter text-sm font-medium text-black">
            Groups
          </span>
        </div>
      </div>
      <div className="flex w-full cursor-pointer items-center justify-between rounded-xl py-3 pl-6 pr-3.5 hover:bg-[#F3F5F8]">
        <div className="flex items-center gap-x-2.5">
          <MdSpaceDashboard className="size-4 text-black" />
          <span className="font-inter text-sm font-medium text-black">
            Contacts
          </span>
        </div>
        <IoMdArrowDropdown className="size-5" />
      </div>
      <div className="-mt-2 flex flex-col">
        <div className="flex w-full cursor-pointer items-center justify-start gap-x-2.5 rounded-xl px-6 py-3 hover:bg-[#F3F5F8]">
          <MdSpaceDashboard className="size-4 text-black" />
          <span className="font-inter text-sm font-medium text-black">
            Device
          </span>
        </div>
        <div className="flex w-full cursor-pointer items-center justify-start gap-x-2.5 rounded-xl px-6 py-3 hover:bg-[#F3F5F8]">
          <MdSpaceDashboard className="size-4 text-black" />
          <span className="font-inter text-sm font-medium text-black">
            Incoming Chat
          </span>
        </div>
        <div className="flex w-full cursor-pointer items-center justify-start gap-x-2.5 rounded-xl px-6 py-3 hover:bg-[#F3F5F8]">
          <MdSpaceDashboard className="size-4 text-black" />
          <span className="font-inter text-sm font-medium text-black">
            Outgoing Chat
          </span>
        </div>
      </div>
      <p className="w-full text-left font-inter text-[11px]">Tools</p>
      <div className="flex w-full cursor-pointer items-center justify-start gap-x-2.5 rounded-xl px-6 py-3 hover:bg-[#F3F5F8]">
        <MdSpaceDashboard className="size-4 text-black" />
        <span className="font-inter text-sm font-medium text-black">
          Broadcast
        </span>
      </div>
      <div className="flex w-full cursor-pointer items-center justify-start gap-x-2.5 rounded-xl px-6 py-3 hover:bg-[#F3F5F8]">
        <MdSpaceDashboard className="size-4 text-black" />
        <span className="font-inter text-sm font-medium text-black">
          Campaign
        </span>
      </div>
      <div className="flex w-full cursor-pointer items-center justify-start gap-x-2.5 rounded-xl px-6 py-3 hover:bg-[#F3F5F8]">
        <MdSpaceDashboard className="size-4 text-black" />
        <span className="font-inter text-sm font-medium text-black">
          Auto Reply
        </span>
      </div>
      <div className="flex w-full cursor-pointer items-center justify-start gap-x-2.5 rounded-xl px-6 py-3 hover:bg-[#F3F5F8]">
        <MdSpaceDashboard className="size-4 text-black" />
        <span className="font-inter text-sm font-medium text-black">
          Customer Servic
        </span>
      </div>
      <div className="flex w-full cursor-pointer items-center justify-start gap-x-2.5 rounded-xl px-6 py-3 hover:bg-[#F3F5F8]">
        <MdSpaceDashboard className="size-4 text-black" />
        <span className="font-inter text-sm font-medium text-black">
          Analytics
        </span>
      </div>
      <div className="flex w-full cursor-pointer items-center justify-start gap-x-2.5 rounded-xl px-6 py-3 hover:bg-[#F3F5F8]">
        <MdSpaceDashboard className="size-4 text-black" />
        <span className="font-inter text-sm font-medium text-black">
          Forwardin API
        </span>
      </div>
      <p className="w-full text-left font-inter text-[11px]">Others</p>
      <div className="flex w-full cursor-pointer items-center justify-start gap-x-2.5 rounded-xl px-6 py-3 hover:bg-[#F3F5F8]">
        <MdSpaceDashboard className="size-4 text-black" />
        <span className="font-inter text-sm font-medium text-black">
          Settings
        </span>
      </div>
    </nav>
  )
}
