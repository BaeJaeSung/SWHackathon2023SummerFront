'use client'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import LOGO_FOOTER from '@/public/old.svg'
import HEART from '@/public/thumb.svg'
import MESSAGE from '@/public/mess.svg'
import MY from '@/public/my.svg'
import LOGO_FOOTER_AC from '@/public/old_ac.svg'
import HEART_AC from '@/public/thumb_ac.svg'
import MESSAGE_AC from '@/public/mess_ac.svg'
import MY_AC from '@/public/my_ac.svg'
import Link from 'next/link'

export default function Footer() {
  const path = usePathname()
  console.log(path)
  return (
    <nav className="flex h-16 w-full items-center justify-around p-5">
      <Link href="/">
        <Image
          width={45}
          height={45}
          src={path == '/' ? LOGO_FOOTER_AC : LOGO_FOOTER}
          alt={'logo'}
          className={`hover: cursor-pointer ${
            path == '/' || 'opacity-20 hover:opacity-50'
          }`}
        />
      </Link>
      <Link href="heart">
        <Image
          width={35}
          height={35}
          src={path == '/heart' ? HEART_AC : HEART}
          alt={'logo'}
          className={`hover: cursor-pointer ${
            path == '/heart' || 'opacity-20 hover:opacity-50'
          }`}
        />
      </Link>
      <Link href="chat">
        <Image
          width={35}
          height={35}
          src={path == '/chat' ? MESSAGE_AC : MESSAGE}
          alt={'chat'}
          className={`hover: cursor-pointer ${
            path == '/chat' || 'opacity-20 hover:opacity-50'
          }`}
        />
      </Link>
      <Link href="info">
        <Image
          width={35}
          height={35}
          src={path == '/info' ? MY_AC : MY}
          alt={'INFO'}
          className={`hover: cursor-pointer ${
            path == '/info' || 'opacity-20 hover:opacity-50'
          }`}
        />
      </Link>
    </nav>
  )
}
