'use client'

import React from 'react'
import { pricingPlans } from '@/constant/pricing'
import clsxm from '@/lib/clsxm'

export default function PricingSection() {
  const [isMonthly, setIsMonthly] = React.useState<boolean>(true)
  return (
    <main
      id="pricing"
      className="bg-custom-radial flex h-full min-h-screen w-full flex-col items-center justify-center gap-y-2 md:pl-10"
    >
      <h1 className="font-lexend text-xl font-bold text-black md:text-4xl">
        Our Pricing
      </h1>
      <h2 className="font-lexend mb-6 text-4xl font-bold text-black md:hidden">
        Subscription
      </h2>
      <div className="flex gap-x-2.5 rounded-full px-3 py-2 shadow-lg md:mt-3">
        <div
          onClick={() => {
            setIsMonthly(true)
          }}
          className={clsxm(
            'cursor-pointer rounded-full px-7 py-2.5',
            isMonthly && 'bg-[#3366FF]'
          )}
        >
          <span
            className={clsxm(
              'font-inter text-sm font-medium text-black',
              isMonthly ? 'text-white' : 'text-black'
            )}
          >
            Monthly
          </span>
        </div>
        <div
          onClick={() => {
            setIsMonthly(false)
          }}
          className={clsxm(
            'cursor-pointer rounded-full px-7 py-2.5',
            isMonthly === false && 'bg-[#3366FF]'
          )}
        >
          <span
            className={clsxm(
              'font-inter text-sm font-medium',
              isMonthly ? 'text-black' : 'text-white'
            )}
          >
            Yearly
          </span>
        </div>
      </div>
      <div className="mt-3 hidden rounded-[10px] bg-[#E6E8F0] px-2 pb-1 pt-0.5 md:block">
        <span className="font-inter text-xs font-medium text-[#3366FF]">
          Hemat hingga 25% dengan paket tahunan
        </span>
      </div>
      <div className="mt-16 flex h-fit w-full max-w-5xl flex-col items-center justify-center gap-1.5 px-16 md:ml-20 md:mt-5 md:flex-row md:px-0">
        {pricingPlans.map((plan, idx) => (
          <div
            key={idx}
            className={clsxm(
              'flex min-w-64 max-w-64 flex-col gap-y-1 rounded-lg px-[17px] pb-5 pt-4',
              plan.title == 'Basic' ? 'bg-white shadow-2xl' : ''
            )}
          >
            <h2 className="font-lexend text-xl font-bold text-black">
              {plan.title}
            </h2>
            <p className="font-inter text-[11px] font-medium">
              {plan.description}
            </p>
            <div
              className={clsxm(
                'mt-1.5 flex gap-y-1',
                isMonthly ? 'flex-col' : 'flex-col-reverse'
              )}
            >
              <div className="flex items-center gap-x-2">
                <span
                  className={clsxm(
                    isMonthly
                      ? 'font-lexend text-xl font-bold text-black'
                      : 'font-inter text-xs font-medium text-[#777C88]'
                  )}
                >
                  {plan.monthlyPrice}
                </span>
                <span
                  className={clsxm(
                    'font-inter text-xs font-medium',
                    isMonthly ? '' : 'text-[#777C88]'
                  )}
                >
                  {plan.monthlyPrice === 'Gratis' ? '' : '/bulan'}
                </span>
              </div>
              <div className="flex items-center gap-x-2">
                <span
                  className={clsxm(
                    isMonthly
                      ? 'text-xs font-semibold text-[#777C88]'
                      : 'font-lexend text-xl font-bold'
                  )}
                >
                  {plan.yearlyPrice ? `${plan.yearlyPrice}` : '-'}
                </span>
                <span
                  className={clsxm(
                    'font-inter text-xs font-medium',
                    isMonthly ? 'text-[#777C88]' : 'text-black'
                  )}
                >
                  {plan.monthlyPrice === 'Gratis' ? '' : '/tahun'}
                </span>
              </div>
            </div>
            <button
              className={clsxm(
                'mt-3.5 w-full rounded-[4px] bg-[#3366FF] py-2',
                plan.title === 'Basic' ? 'bg-[#FFB020]' : 'bg-[#3366FF]'
              )}
            >
              <span className="font-inter text-sm font-medium text-white">
                Get Started
              </span>
            </button>
            <div className="mt-3.5 flex flex-col gap-y-2.5">
              {plan.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-x-2">
                  <feature.icon className="size-3.5 text-[#3366FF]" />
                  <span className="font-inter text-xs font-medium">
                    {feature.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
