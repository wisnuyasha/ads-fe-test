import clsxm from '@/lib/clsxm'
import Image from 'next/image'
import React from 'react'
import Logo from '~/logo_white_with_text.svg'

export default function ContactUsSection() {
  return (
    <main
      id="contact-us"
      className="relative z-10 flex h-full min-h-[85vh] w-full items-center justify-center gap-y-5 bg-[#3366FF] px-9 pb-10 md:pb-0"
    >
      <div
        className={clsxm(
          'pointer-events-none absolute z-[1] rotate-45 bg-gradient-to-l from-white/[.08] to-white/0',
          '-left-[0vh] top-[5vh] size-[394px] rounded-[70px]',
          'md:-top-[10vh] md:left-[35vh] md:size-[650px] md:rounded-[100px]',
          'lg:-top-[15vh] lg:left-[30vh] lg:size-[1182px] lg:rounded-[160px]'
        )}
      />
      <div
        className={clsxm(
          'pointer-events-none absolute z-[2] rotate-45 bg-gradient-to-l from-white/[.08] to-white/0',
          '-left-[15vh] top-[5vh] size-[394px] rounded-[70px]',
          'md:-left-[10vh] md:-top-[10vh] md:size-[650px] md:rounded-[100px]',
          'lg:-left-[30vh] lg:-top-[15vh] lg:size-[1182px] lg:rounded-[160px]'
        )}
      />
      <div
        className={clsxm(
          'pointer-events-none absolute z-[3] rotate-45 bg-gradient-to-l from-white/[.08] to-white/0 md:drop-shadow-[0_21px_50px_rgba(0,0,0,0.08)]',
          '-left-[30vh] top-[5vh] size-[394px] rounded-[70px]',
          'md:-left-[60vh] md:-top-[10vh] md:size-[650px] md:rounded-[100px]',
          'lg:-left-[90vh] lg:-top-[15vh] lg:size-[1182px] lg:rounded-[160px]'
        )}
      />
      <div className="flex flex-col items-start gap-y-12 text-white md:max-w-5xl md:flex-row md:gap-x-24">
        <div className="flex flex-col gap-y-11">
          <Image src={Logo} alt="forwardin logo" />
          <span className="text-xs font-medium">
            Fowardin is your ultimate communication management solution. We
            empower businesses of all sizes with efficient message forwarding,
            streamlined contact management, and powerful campaign scheduling.
            Our mission is to simplify your communication processes, helping you
            engage with your audience effectively and effortlessly. Join us in
            transforming your communication game today!
          </span>
        </div>
        <div className="flex flex-col gap-y-5">
          <h2 className="font-inter font-bold">Contact Us</h2>
          <p className="font-inter text-xs font-medium">
            Join our mailing list to receive updates, exclusive content, and
            early access to upcoming events. By signing up, you become an
            integral part of our community, spreading the message of compassion
            and making a difference.
          </p>
          <div className="font-inter text-xs font-medium">
            <p>
              Email: <a href="mailto:info@fowardin.com">info@fowardin.com</a>
            </p>
            <p>
              Phone: <a href="tel:+11234567890">+1 (123) 456-7890</a>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-y-5">
          <h3 className="font-inter min-w-20 font-bold">Let&apos;s Talk</h3>
          <div className="font-inter text-xs">
            <p>
              <a
                href="https://facebook.com/forwardin"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </p>
            <p>
              <a
                href="https://instagram.com/forwardin"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </p>
            <p>
              <a
                href="https://twitter.com/forwardin"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
