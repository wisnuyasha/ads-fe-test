import clsxm from '@/lib/clsxm'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

export default function TextImageSection({
  id,
  isImageRight = false,
  isBgWhite = false,
  imageSrc,
  title,
  description,
}: {
  id: string
  isImageRight: boolean
  isBgWhite: boolean
  imageSrc: StaticImageData
  title: string
  description: string
}) {
  return (
    <main
      id={id}
      className={clsxm(
        'flex h-full min-h-[80vh] w-full flex-col items-center justify-center md:gap-x-10 lg:pl-6 xl:gap-x-20',
        isBgWhite ? 'bg-white' : 'bg-[#ECF2FA]',
        isImageRight ? 'md:flex-row-reverse' : 'md:flex-row'
      )}
    >
      <Image
        src={imageSrc}
        className="h-fit w-full max-w-[370px] md:max-w-[500px]"
        alt={`${id} image`}
      />
      <div className="flex max-w-sm flex-col gap-y-6 px-7 text-left lg:px-0">
        <h2 className="font-lexend text-3xl font-bold lg:text-4xl">{title}</h2>
        <p className="font-inter text-sm font-medium tracking-tight">
          {description}
        </p>
      </div>
    </main>
  )
}
