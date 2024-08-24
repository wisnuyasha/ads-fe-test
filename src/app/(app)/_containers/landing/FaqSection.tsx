import React from 'react'
import { FaSearch } from 'react-icons/fa'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function FaqSection() {
  return (
    <main
      id="faq"
      className="flex h-full min-h-screen w-full flex-col items-center justify-center gap-y-5 bg-[#3366FF] md:min-h-[80vh]"
    >
      <h1 className="font-lexend mb-10 max-w-xs text-center text-2xl font-bold text-white md:max-w-full">
        Frequently Asked Question
      </h1>
      <div className="flex w-full max-w-xs items-center gap-x-5 md:max-w-xl">
        <input className="w-full rounded-[5px] px-4 py-2" />
        <FaSearch className="size-6 w-fit cursor-pointer pr-3 text-white" />
      </div>
      <Accordion
        type="single"
        collapsible
        className="w-full max-w-xs flex-col md:max-w-xl"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-left">
            Apa itu Forwardin?
          </AccordionTrigger>
          <AccordionContent className="">
            Forwardin adalah sebuah platform alat pengelolaan pesan WhatsApp
            yang dirancang untuk membantu Anda mengirim pesan ke banyak nomor
            dan grup WhatsApp secara bersamaan. Forwardin juga menyediakan
            berbagai fitur canggih seperti auto-reply, fitur broadcast,
            manajemen kampanye, serta sinkronisasi kontak WhatsApp dan kontak
            Google.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-left">
            Apakah Forwardin cocok untuk saya?
          </AccordionTrigger>
          <AccordionContent>
            Forwardin adalah sebuah platform alat pengelolaan pesan WhatsApp
            yang dirancang untuk membantu Anda mengirim pesan ke banyak nomor
            dan grup WhatsApp secara bersamaan. Forwardin juga menyediakan
            berbagai fitur canggih seperti auto-reply, fitur broadcast,
            manajemen kampanye, serta sinkronisasi kontak WhatsApp dan kontak
            Google.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-left">
            Apakah Forwardin perlu di-install ke komputer?
          </AccordionTrigger>
          <AccordionContent>
            Forwardin adalah sebuah platform alat pengelolaan pesan WhatsApp
            yang dirancang untuk membantu Anda mengirim pesan ke banyak nomor
            dan grup WhatsApp secara bersamaan. Forwardin juga menyediakan
            berbagai fitur canggih seperti auto-reply, fitur broadcast,
            manajemen kampanye, serta sinkronisasi kontak WhatsApp dan kontak
            Google.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  )
}
