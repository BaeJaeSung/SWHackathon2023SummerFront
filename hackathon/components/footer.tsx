'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import LOGO_FOOTER from '@/public/old.svg'
import HEART from '@/public/heart.svg'
import MESSAGE from '@/public/mess.svg'
import MY from '@/public/my.svg'
import LOGO_FOOTER_AC from '@/public/old_ac.svg'
import HEART_AC from '@/public/heart_ac.svg'
import MESSAGE_AC from '@/public/mess_ac.svg'
import MY_AC from '@/public/my_ac.svg'
import Link from 'next/link'

export default function Header() {
  return (
    <nav className="flex h-16 w-full items-center justify-around p-5">
      <Link href="/">
        <Image
          width={45}
          height={45}
          src={LOGO_FOOTER}
          alt={'logo'}
          className={`hover: cursor-pointer opacity-20 hover:opacity-50`}
        />
      </Link>
      <Link href="heart">
        <Image
          width={35}
          height={35}
          src={HEART}
          alt={'heart'}
          className="cursor-pointer
          opacity-20 hover:opacity-50"
        />
      </Link>
      <Link href="chat">
        <Image
          width={35}
          height={35}
          src={MESSAGE}
          alt={'message'}
          className="cursor-pointer opacity-20  hover:opacity-50"
        />
      </Link>
      <Link href="info">
        <Image
          width={45}
          height={45}
          src={MY}
          alt={'info'}
          className="cursor-pointer opacity-20  hover:opacity-50"
        />
      </Link>
    </nav>
  )
}
