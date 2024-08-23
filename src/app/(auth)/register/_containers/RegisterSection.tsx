import React from 'react'
import RegisterForm from '../_components/RegisterForm'
import Link from 'next/link'

export default function RegisterSection() {
  return (
    <section className="relative flex h-full min-h-screen w-full flex-col items-center justify-center bg-white px-10 md:h-fit md:min-h-fit md:w-fit md:rounded-[10px] md:py-10 md:shadow-xl lg:w-[466px]">
      <h1 className="font-lexend text-2xl font-bold text-black">
        Welcome to Fowardin
      </h1>
      <h3 className="-mt-0.5 max-w-60 text-center text-sm font-medium tracking-tight">
        Revolutionize your communication journey with Fowardin today
      </h3>
      <RegisterForm />
      <div className="mt-6 flex gap-x-1 font-inter text-sm font-medium">
        <p className="text-black">Sudah punya akun?</p>
        <Link className="text-[#3366FF]" href={'/login'}>
          Masuk di sini
        </Link>
      </div>
    </section>
  )
}
