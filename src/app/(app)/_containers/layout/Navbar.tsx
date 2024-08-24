'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import Logo from '~/logo_black_with_text.svg'
import { Link as ScrollLink } from 'react-scroll'
import { IoMenu } from 'react-icons/io5'
import clsxm from '@/lib/clsxm'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  return (
    <>
      <nav className="z-40 flex w-full items-center justify-between bg-white px-10 py-5 shadow-md md:hidden">
        <Link href={'/'}>
          <Image src={Logo} alt="Logo" className="h-fit w-[137px]" />
        </Link>
        <IoMenu
          onClick={() => setMenuOpen(!menuOpen)}
          className="size-9 cursor-pointer text-[#3366FF]"
        />
      </nav>
      <nav
        className={clsxm(
          'z-50 flex w-full items-center justify-between bg-white px-10 py-4 pb-10 shadow-md md:hidden',
          menuOpen ? 'block' : 'hidden'
        )}
      >
        <div className="flex w-full flex-col gap-y-3 p-3">
          <Link
            href={'/'}
            className="font-inter flex cursor-pointer items-center justify-center gap-x-0.5 py-2 text-center text-sm font-medium text-black"
          >
            Features
            <IoMdArrowDropdown className="size-5" />
          </Link>
          <ScrollLink
            to="pricing"
            smooth={true}
            duration={500}
            className="font-inter cursor-pointer py-2.5 text-center text-sm font-medium text-black"
          >
            Pricing
          </ScrollLink>
          <Link
            href={'/'}
            className="font-inter cursor-pointer py-2.5 text-center text-sm font-medium"
          >
            Demo
          </Link>
          <div className="flex w-full cursor-pointer items-center justify-center gap-x-2 rounded-[10px] bg-[#3366FF] py-3 text-white">
            <span className="font-inter text-center text-sm font-medium">
              Sign In
            </span>
            <IoMdArrowDropdown className="size-5" />
          </div>
          <Link
            href={'/login'}
            className="font-inter cursor-pointer rounded-md bg-[#F3F5F8]/50 py-2.5 text-center text-sm font-medium text-black/50"
          >
            Sign In as Admin
          </Link>
          <Link
            href={'/login'}
            className="font-inter cursor-pointer py-2.5 text-center text-sm font-medium text-black/50"
          >
            Sign In as Customer Service
          </Link>
        </div>
      </nav>
      <nav className="fixed top-9 z-50 hidden w-fit flex-row items-center gap-x-14 rounded-lg bg-white/[.92] px-4 py-2.5 drop-shadow-[0_21px_50px_rgba(0,0,0,0.04)] backdrop-blur-sm md:flex">
        <Link href={'/'}>
          <Image src={Logo} alt="Logo" className="ml-2 h-fit w-[137px]" />
        </Link>
        <div className="flex gap-x-7">
          <span className="font-inter flex cursor-pointer gap-x-0.5 text-sm font-medium text-[#3366FF]">
            Features
            <IoMdArrowDropdown className="size-5" />
          </span>
          <ScrollLink
            to="pricing"
            smooth={true}
            duration={500}
            className="font-inter cursor-pointer text-sm font-medium"
          >
            Pricing
          </ScrollLink>
          <Link href={'/'} className="font-inter text-sm font-medium">
            Demo
          </Link>
          <Link href={'/'} className="font-inter text-sm font-medium">
            Blog
          </Link>
        </div>
        <Link href={'/login'}>
          <button className="rounded-md bg-[#3366FF] px-9 py-2">
            <span className="font-inter text-sm font-medium text-[#FAFBFF]">
              Sign In
            </span>
          </button>
        </Link>
      </nav>
    </>
  )
}
