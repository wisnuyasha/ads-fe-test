'use client'

import clsxm from '@/lib/clsxm'
import React from 'react'
import { Link as ScrollLink } from 'react-scroll'

export default function Sidebar() {
  const [isBlueSection, setIsBlueSection] = React.useState<boolean>(false)

  return (
    <nav className="fixed left-14 top-[35vh] z-50 hidden drop-shadow-[0_21px_50px_rgba(0,0,0,0.08)] xl:flex">
      <div className="flex h-full items-stretch gap-x-4">
        <div
          className={clsxm(
            'w-[1.5px]',
            isBlueSection ? 'bg-white/40' : 'bg-black/40'
          )}
        />
        <div
          className={clsxm(
            'font-inter flex h-fit flex-col gap-y-2.5 text-sm font-medium',
            isBlueSection ? 'text-white/40' : 'text-black/40'
          )}
        >
          <ScrollLink
            to="get-started"
            spy={true}
            smooth={true}
            duration={500}
            activeClass={clsxm(isBlueSection ? 'text-white' : 'text-black')}
            className="cursor-pointer"
          >
            Get Started
          </ScrollLink>
          <ScrollLink
            to="broadcast"
            spy={true}
            smooth={true}
            duration={500}
            activeClass={clsxm(isBlueSection ? 'text-white' : 'text-black')}
            className="cursor-pointer"
          >
            Broadcast
          </ScrollLink>
          <ScrollLink
            to="campaign"
            spy={true}
            smooth={true}
            duration={500}
            activeClass={clsxm(isBlueSection ? 'text-white' : 'text-black')}
            className="cursor-pointer"
          >
            Campaign
          </ScrollLink>
          <ScrollLink
            to="auto-reply"
            spy={true}
            smooth={true}
            duration={500}
            activeClass={clsxm(isBlueSection ? 'text-white' : 'text-black')}
            className="cursor-pointer"
          >
            Auto Reply
          </ScrollLink>
          <ScrollLink
            to="opportunity"
            spy={true}
            smooth={true}
            duration={500}
            activeClass={clsxm(isBlueSection ? 'text-white' : 'text-black')}
            className="cursor-pointer"
          >
            Opportunity
          </ScrollLink>
          <ScrollLink
            to="pricing"
            spy={true}
            smooth={true}
            duration={500}
            activeClass={clsxm(isBlueSection ? 'text-white' : 'text-black')}
            className="cursor-pointer"
          >
            Pricing
          </ScrollLink>
          <ScrollLink
            to="faq"
            spy={true}
            smooth={true}
            duration={500}
            activeClass={clsxm(isBlueSection ? 'text-white' : 'text-black')}
            className="cursor-pointer"
            onSetActive={() => setIsBlueSection(true)}
            onSetInactive={() => setIsBlueSection(false)}
          >
            FAQ
          </ScrollLink>
          <ScrollLink
            to="contact-us"
            spy={true}
            smooth={true}
            duration={500}
            activeClass={clsxm(isBlueSection ? 'text-white' : 'text-black')}
            className="cursor-pointer"
            onSetActive={() => setIsBlueSection(true)}
          >
            Contact Us
          </ScrollLink>
        </div>
      </div>
    </nav>
  )
}
