'use client'
import GridCard from '@/components/gridcard'
import Image from 'next/image'
import HIKI from '@/public/hiki.png'
import { useState, useEffect } from 'react'
import CANCEL from '@/public/cancel.svg'
import LIKE from '@/public/like.svg'
import Keyword from '@/components/keyword'

export default function MainPage() {
  const [showFull, setShowFull] = useState(false)

  return (
    <div className="relative flex h-[90%] w-full justify-center">
      <div
        className={`relative w-full ${
          showFull && 'overflow-y-auto'
        } overflow-hidden rounded-xl`}
      >
        <div className="flex items-center justify-center rounded-lg p-0">
          <Image
            src={HIKI}
            width={100}
            height={100}
            alt="hiki"
            className="h-full w-full object-cover"
          />
        </div>
        <div
          className={`absolute bottom-0 left-0 right-0 top-0 ${
            !showFull && 'translate-y-2/3'
          } transition-transform duration-500 ease-in-out`}
        >
          <div
            className={`absolute -top-14 left-5 flex gap-3 rounded-lg transition-all `}
          >
            <Keyword text="😄 경력 3개월" />
            <Keyword text="👨‍🎓 대졸" />
          </div>
          <GridCard showFull={showFull} setShowFull={setShowFull} />
        </div>
      </div>
      <div
        className={`absolute -bottom-10 right-0 z-50 flex ${
          showFull && 'hidden'
        }`}
      >
        <Image
          src={CANCEL}
          alt="cancel"
          width={100}
          height={100}
          className="m-[-10px] cursor-pointer"
        />
        <Image
          src={LIKE}
          alt="like"
          width={100}
          height={100}
          className="m-[-10px] cursor-pointer"
        />
      </div>
    </div>
  )
}
