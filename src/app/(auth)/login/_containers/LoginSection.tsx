import Link from 'next/link'
import React from 'react'
import LoginForm from '../_components/LoginForm'

export default function LoginSection() {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col items-center justify-center bg-white px-10 md:h-fit md:min-h-fit md:w-fit md:rounded-[10px] md:py-10 md:shadow-xl lg:w-[466px]">
      <h1 className="font-lexend text-2xl font-bold text-black">
        Welcome Back
      </h1>
      <h3 className="-mt-0.5 text-sm font-medium tracking-tight">
        We’re so excited to see you again!
      </h3>
      <LoginForm />
      <div className="font-inter mt-6 flex gap-x-1 text-sm font-medium">
        <p className="text-black">Butuh buat akun ?</p>
        <Link className="text-[#3366FF]" href={'/register'}>
          Daftar di sini
        </Link>
      </div>
    </div>
  )
}
