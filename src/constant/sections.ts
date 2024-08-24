import Broadcast from '~/images/broadcast.png'
import Campaign from '~/images/campaign.png'
import AutoReply from '~/images/auto-reply.png'
import { StaticImageData } from 'next/image'

interface SectionContent {
  id: string
  imageSrc: StaticImageData
  title: string
  description: string
}

export const sections: SectionContent[] = [
  {
    id: 'broadcast',
    imageSrc: Broadcast,
    title: 'Reach Further with Ease',
    description:
      'Fowardin memberikan Anda akses cepat untuk memperluas jangkauan komunikasi Anda. Dengan fitur Broadcast kami, Anda dapat mengirim pesan kepada banyak kontak dan grup sekaligus. Menjangkau audiens Anda tidak pernah semudah ini.',
  },
  {
    id: 'campaign',
    imageSrc: Campaign,
    title: 'Right Time, Effective Messages',
    description:
      'Fowardin memungkinkan Anda untuk merencanakan pengiriman iklan yang tepat sasaran. Manfaatkan fitur Campaign kami untuk mengoptimalkan pesan iklan Anda sehingga hasilnya lebih akurat dan sukses. Dengan Fowardin, setiap pesan iklan memiliki dampak yang lebih besar.',
  },
  {
    id: 'auto-reply',
    imageSrc: AutoReply,
    title: 'Respond Faster with the Convenience of Auto Reply',
    description:
      'Fowardin mempermudah Anda untuk memberikan respon cepat kepada pesan dari banyak kontak dan grup sekaligus. Dengan fitur Auto Reply kami, Anda dapat menjawab pertanyaan atau memberikan respon otomatis, menghemat waktu dan energi Anda. Tanggap lebih cepat dengan Fowardin.',
  },
]
