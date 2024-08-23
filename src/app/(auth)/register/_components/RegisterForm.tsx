'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerFormSchema, RegisterFormValues } from '@/types/Register'
import { FaCheck } from 'react-icons/fa6'
import { IoMdArrowDropdown } from 'react-icons/io'
import { usePasswordValidation } from '../_hooks/usePasswordValidation'
import clsxm from '@/lib/clsxm'
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

export default function RegisterForm() {
  const { toast } = useToast()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerFormSchema),
  })

  const password = watch('password') || ''
  const {
    hasMinLength,
    hasLowercase,
    hasUppercase,
    hasNumber,
    hasSpecialChar,
  } = usePasswordValidation(password)

  async function onSubmit(data: RegisterFormValues) {
    const res = await signIn('register-provider', {
      redirect: false,
      username: data.username,
      email: data.email,
      phone: data.phone,
      password: data.password,
    })

    if (res?.error) {
      toast({
        description: `Register Failed: ${res.error}`,
      })
    } else if (res?.ok) {
      toast({
        description: 'Register Successfully',
      })
      router.push('/login')
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
          {...register('email')}
          className={clsxm(
            'font-inter w-full rounded-md border-[1px] px-5 py-3.5 text-xs font-medium sm:max-w-sm md:max-w-full',
            errors.email ? 'border-red-600' : 'border-[#B0B4C5]'
          )}
          placeholder="Email"
        />
        <p className="font-inter text-xs font-medium text-red-600">
          {errors.email?.message}
        </p>
      </div>
      <div className="flex h-full w-full flex-col gap-y-1">
        <input
          {...register('username')}
          className={clsxm(
            'font-inter w-full rounded-md border-[1px] px-5 py-3.5 text-xs font-medium sm:max-w-sm md:max-w-full',
            errors.username ? 'border-red-600' : 'border-[#B0B4C5]'
          )}
          placeholder="Username"
        />
        <p className="font-inter text-xs font-medium text-red-600">
          {errors.username?.message}
        </p>
      </div>
      <div className="flex h-full w-full flex-col gap-y-1">
        <div className="flex w-full gap-x-2.5">
          <div
            className={clsxm(
              'flex h-full min-w-24 items-center justify-between rounded-md border-[1px] border-[#B0B4C5] px-3 py-3.5',
              errors.phone ? 'border-red-600' : 'border-[#B0B4C5]'
            )}
          >
            <p className="font-inter text-xs font-medium text-black">
              (ID) +62
            </p>
            <IoMdArrowDropdown className="size-5 text-[#B0B4C5]" />
          </div>
          <input
            {...register('phone')}
            className={clsxm(
              'font-inter w-full rounded-md border-[1px] px-5 py-3.5 text-xs font-medium sm:max-w-sm md:max-w-full',
              errors.phone ? 'border-red-600' : 'border-[#B0B4C5]'
            )}
            placeholder="Whatsapp Phone Number"
          />
        </div>
        <p className="font-inter text-xs font-medium text-red-600">
          {errors.phone?.message}
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

      <div className="w-full rounded-md bg-[#F3F5F8] px-5 py-2.5 shadow-md">
        <div className="flex flex-col text-xs font-medium text-[#777C88]">
          <span className="flex text-[#777C88]">
            Password harus mengandung:
          </span>
          <span
            className={clsxm(
              'ml-2 flex items-center gap-x-1',
              hasMinLength && 'text-[#4FBEAB]'
            )}
          >
            <FaCheck
              className={clsxm('size-3.5', hasMinLength ? 'block' : 'hidden')}
            />
            Paling tidak 8 karakter
          </span>
          <span className="ml-2 flex">Paling tidak 3 dari syarat berikut:</span>
          <div className="ml-4 flex flex-col">
            <span
              className={clsxm(
                'ml-2 flex items-center gap-x-1',
                hasLowercase && 'text-[#4FBEAB]'
              )}
            >
              <FaCheck
                className={clsxm('size-3.5', hasLowercase ? 'block' : 'hidden')}
              />
              Huruf kecil (a-z)
            </span>
            <span
              className={clsxm(
                'ml-2 flex items-center gap-x-1',
                hasUppercase && 'text-[#4FBEAB]'
              )}
            >
              <FaCheck
                className={clsxm('size-3.5', hasUppercase ? 'block' : 'hidden')}
              />
              Huruf besar (A-Z)
            </span>
            <span
              className={clsxm(
                'ml-2 flex items-center gap-x-1',
                hasNumber && 'text-[#4FBEAB]'
              )}
            >
              <FaCheck
                className={clsxm('size-3.5', hasNumber ? 'block' : 'hidden')}
              />
              Angka
            </span>
            <span
              className={clsxm(
                'ml-2 flex items-center gap-x-1',
                hasSpecialChar && 'text-[#4FBEAB]'
              )}
            >
              <FaCheck
                className={clsxm(
                  'size-3.5',
                  hasSpecialChar ? 'block' : 'hidden'
                )}
              />
              Karakter Spesial (!@#$%^&*)
            </span>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="mt-3 w-full rounded-md bg-[#3366FF] py-3 sm:max-w-sm"
      >
        <span className="font-inter text-sm font-medium text-white">
          Sign Up
        </span>
      </button>
    </form>
  )
}
