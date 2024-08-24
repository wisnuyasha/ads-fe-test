import React from 'react'
import GetStartedSection from './_containers/landing/GetStartedSection'
import TextImageSection from './_containers/landing/TextImageSection'
import OpportunitySection from './_containers/landing/OpportunitySection'
import PricingSection from './_containers/landing/PricingSection'
import { sections } from '@/constant/sections'
import FaqSection from './_containers/landing/FaqSection'

export default function LandingPage() {
  return (
    <main className="flex h-full min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      <GetStartedSection />
      {sections.map((section) => (
        <TextImageSection
          key={section.id}
          id={section.id}
          isImageRight={section.id === 'campaign'}
          isBgWhite={section.id !== 'broadcast'}
          imageSrc={section.imageSrc}
          title={section.title}
          description={section.description}
        />
      ))}
      <OpportunitySection />
      <PricingSection />
      <FaqSection />
    </main>
  )
}
