'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import clsxm from '@/lib/clsxm'
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { loginFormSchema, LoginFormValues } from '@/types/Login'
import { signIn, useSession } from 'next-auth/react'
import { useLoginAuth } from '../_hooks/useLoginAuth'

export default function LoginForm() {
  const { toast } = useToast()
  useLoginAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
  })

  async function onSubmit(data: LoginFormValues) {
    const res = await signIn('login-provider', {
      redirect: false,
      usernameOrEmail: data.usernameOrEmail,
      password: data.password,
    })

    if (res?.error) {
      toast({
        description: `Login Failed: ${res.error}`,
      })
    } else if (res?.ok) {
      toast({
        description: 'Login Successfully',
      })
    } else {
      toast({
        description: 'An unexpected error occurred',
      })
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-7 flex w-full flex-col items-start gap-y-3.5 sm:items-center md:items-start"
    >
      <div className="flex h-full w-full flex-col gap-y-1">
        <input
          {...register('usernameOrEmail')}
          className={clsxm(
            'font-inter w-full rounded-md border-[1px] px-5 py-3.5 text-xs font-medium sm:max-w-sm md:max-w-full',
            errors.usernameOrEmail ? 'border-red-600' : 'border-[#B0B4C5]'
          )}
          placeholder="Username / email"
        />
        <p className="font-inter text-xs font-medium text-red-600">
          {errors.usernameOrEmail?.message}
        </p>
      </div>
      <div className="flex h-full w-full flex-col gap-y-1">
        <input
          {...register('password')}
          className={clsxm(
            'font-inter w-full rounded-md border-[1px] px-5 py-3.5 text-xs font-medium sm:max-w-sm md:max-w-full',
            errors.password ? 'border-red-600' : 'border-[#B0B4C5]'
          )}
          type="password"
          placeholder="Password"
        />
        <p className="font-inter text-xs font-medium text-red-600">
          {errors.password?.message}
        </p>
      </div>
      <Link
        href={'/register'}
        className="font-inter -mt-0.5 text-sm font-medium text-[#3366FF]"
      >
        Lupa Password?
      </Link>
      <button
        type="submit"
        className="mt-3 w-full rounded-md bg-[#3366FF] py-3 sm:max-w-sm"
      >
        <span className="font-inter text-sm font-medium text-white">
          Sign In
        </span>
      </button>
    </form>
  )
}
