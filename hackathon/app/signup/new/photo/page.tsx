'use client'
import { useState } from 'react'
import Image from 'next/image'
import Icon from '@/public/add_circle_black_24dp.svg'
import SignUpLayout from '@/components/signUpLayout'

export default function SignUpPhotoPage() {
  const [photo1, setPhoto1] = useState()
  const [photo2, setPhoto2] = useState()
  const [photo3, setPhoto3] = useState()
  const [photo4, setPhoto4] = useState()
  const [photo1File, setPhoto1File] = useState('')
  const [photo2File, setPhoto2File] = useState('')
  const [photo3File, setPhoto3File] = useState('')
  const [photo4File, setPhoto4File] = useState('')

  return (
    <SignUpLayout
      textTop={'00님의'}
      textBottom="사진을 등록해주세요"
      btnText="다음"
    >
      <div className="grid grid-cols-2 grid-rows-2 gap-4 rounded-lg px-10">
        <div className="flex h-56 items-center justify-center rounded-lg border-2 border-dotted ">
          <Image
            width={48}
            height={48}
            src={Icon}
            alt={'add'}
            className="cursor-pointer opacity-50 hover:opacity-80"
          />
        </div>
        <div className="flex items-center justify-center rounded-lg border-2 border-dotted text-center">
          <Image
            width={48}
            height={48}
            src={Icon}
            alt={'add'}
            className="cursor-pointer opacity-50 hover:opacity-80"
          />
        </div>
        <div className="flex items-center justify-center rounded-lg border-2 border-dotted text-center">
          <Image
            width={48}
            height={48}
            src={Icon}
            alt={'add'}
            className="cursor-pointer opacity-50 hover:opacity-80"
          />
        </div>
        <div className="flex items-center justify-center rounded-lg border-2 border-dotted text-center">
          <Image
            width={48}
            height={48}
            src={Icon}
            alt={'add'}
            className="cursor-pointer opacity-50 hover:opacity-80"
          />
        </div>
      </div>
    </SignUpLayout>
  )
}
