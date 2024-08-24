import { Plan } from '@/types/Pricing'
import { FaStopwatch } from 'react-icons/fa'
import { PiScreencastFill } from 'react-icons/pi'
import { HiTrendingUp } from 'react-icons/hi'
import { MdContacts } from 'react-icons/md'
import { HiMiniDevicePhoneMobile } from 'react-icons/hi2'
import { BiSolidSpreadsheet } from 'react-icons/bi'
import { BsFillLaptopFill } from 'react-icons/bs'

export const pricingPlans: Plan[] = [
  {
    title: 'Starter',
    description:
      'Mulai perjalanan Anda dengan paket Starter selama 14 hari. Nikmati pesan otomatis, siaran pesan, dan manajemen kontak yang efisien. Dapatkan integrasi yang memudahkan dan sinkronisasi kontak WhatsApp.',
    monthlyPrice: 'Gratis',
    features: [
      { name: '100 Auto reply', icon: FaStopwatch },
      { name: '500 Broadcast', icon: PiScreencastFill },
      { name: '50 Campaign', icon: HiTrendingUp },
      { name: '500 Contact', icon: MdContacts },
      { name: '50 Device', icon: HiMiniDevicePhoneMobile },
      { name: 'Excel / CSV Contact Import', icon: BiSolidSpreadsheet },
      { name: 'Google Contact Sync', icon: BsFillLaptopFill },
    ],
  },
  {
    title: 'Basic',
    description:
      'Dapatkan akses selama 1 bulan dengan paket Basic. Manfaatkan fitur pesan otomatis, siaran pesan, dan manajemen kontak yang ditingkatkan. Rasakan kenyamanan integrasi yang luas dan sinkronisasi kontak Google dan WhatsApp.',
    monthlyPrice: 'Rp. 65.000',
    yearlyPrice: 'Rp. 650.000',
    features: [
      { name: '100 Auto reply', icon: FaStopwatch },
      { name: '500 Broadcast', icon: PiScreencastFill },
      { name: '50 Campaign', icon: HiTrendingUp },
      { name: '500 Contact', icon: MdContacts },
      { name: '50 Device', icon: HiMiniDevicePhoneMobile },
      { name: 'Excel / CSV Contact Import', icon: BiSolidSpreadsheet },
      { name: 'Google Contact Sync', icon: BsFillLaptopFill },
    ],
  },
  {
    title: 'Premium',
    description:
      'Perpanjang pengalaman Anda dengan paket Premium selama 1 bulan. Nikmati manfaat pesan otomatis, siaran pesan, dan manajemen kontak tanpa batas. Aktifkan integrasi yang luas dengan sinkronisasi kontak Google dan WhatsApp.',
    monthlyPrice: 'Rp. 76.000',
    yearlyPrice: 'Rp. 800.000',
    features: [
      { name: '100 Auto reply', icon: FaStopwatch },
      { name: '500 Broadcast', icon: PiScreencastFill },
      { name: '50 Campaign', icon: HiTrendingUp },
      { name: '500 Contact', icon: MdContacts },
      { name: '50 Device', icon: HiMiniDevicePhoneMobile },
      { name: 'Excel / CSV Contact Import', icon: BiSolidSpreadsheet },
      { name: 'Google Contact Sync', icon: BsFillLaptopFill },
    ],
  },
  {
    title: 'Pro',
    description:
      'Jelajahi seluruh fitur dengan paket Pro selama 1 bulan. Dapatkan keuntungan dari pesan otomatis, siaran pesan, serta manajemen kontak yang tidak terbatas. Aktifkan integrasi yang luas dengan sinkronisasi kontak Google dan WhatsApp.',
    monthlyPrice: 'Rp. 86.000',
    yearlyPrice: 'Rp. 900.000',
    features: [
      { name: '100 Auto reply', icon: FaStopwatch },
      { name: '500 Broadcast', icon: PiScreencastFill },
      { name: '50 Campaign', icon: HiTrendingUp },
      { name: '500 Contact', icon: MdContacts },
      { name: '50 Device', icon: HiMiniDevicePhoneMobile },
      { name: 'Excel / CSV Contact Import', icon: BiSolidSpreadsheet },
      { name: 'Google Contact Sync', icon: BsFillLaptopFill },
    ],
  },
]
