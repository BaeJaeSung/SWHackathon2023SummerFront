'use client'
import Image from 'next/image'
import Logo from '@/public/logo.png'
import Dummy from '@/public/dummy.png'
import Green from '@/public/green.svg'
import Purple from '@/public/purple.svg'
import LeftIcon from '@/public/chevron_left_FILL0_wght400_GRAD0_opsz48.svg'
import { useState } from 'react'

export default function ChatPage() {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <h2 className="text-2xl font-bold">나와 매칭된 사장님</h2>
      <div className="mt-5 overflow-x-auto">
        <div className="flex w-full flex-nowrap gap-3 ">
          <div className="relative shrink-0 overflow-hidden rounded-lg">
            <div className="badge absolute right-3 top-3 border-none bg-[#83FFA6] p-3 text-[12px] text-black">
              07/06
            </div>
            <Image src={Dummy} width={160} height={160} alt="dummy"></Image>
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-b from-transparent to-black"></div>
            <div className="absolute bottom-3 left-3">
              <p className="text-xl font-bold text-white">한국카페</p>
              <p className="text-[#83FFA6]">시급 10,000원</p>
            </div>
          </div>

          <div className="relative shrink-0 overflow-hidden rounded-lg">
            <div className="badge absolute right-3 top-3 border-none bg-[#83FFA6] p-3 text-[12px] text-black">
              07/06
            </div>
            <Image src={Dummy} width={160} height={160} alt="dummy"></Image>
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-b from-transparent to-black"></div>
            <div className="absolute bottom-3 left-3">
              <p className="text-xl font-bold text-white">한국카페</p>
              <p className="text-[#83FFA6]">시급 10,000원</p>
            </div>
          </div>

          <div className="relative shrink-0 overflow-hidden rounded-lg">
            <div className="badge absolute right-3 top-3 border-none bg-[#83FFA6] p-3 text-[12px] text-black">
              07/06
            </div>
            <Image src={Dummy} width={160} height={160} alt="dummy"></Image>
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-b from-transparent to-black"></div>
            <div className="absolute bottom-3 left-3">
              <p className="text-xl font-bold text-white">한국카페</p>
              <p className="text-[#83FFA6]">시급 10,000원</p>
            </div>
          </div>

          <div className="relative shrink-0 overflow-hidden rounded-lg">
            <div className="badge absolute right-3 top-3 border-none bg-[#83FFA6] p-3 text-[12px] text-black">
              07/06
            </div>
            <Image src={Dummy} width={160} height={160} alt="dummy"></Image>
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-b from-transparent to-black"></div>
            <div className="absolute bottom-3 left-3">
              <p className="text-xl font-bold text-white">한국카페</p>
              <p className="text-[#83FFA6]">시급 10,000원</p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="mb-5 mt-10 text-2xl font-bold">채팅</h2>
      <div className="flex flex-col gap-5 overflow-y-auto">
        <div className="w-full rounded-lg bg-white p-5">
          <p className="text-lg font-semibold">미국카페</p>
          <p className="text-sm text-gray-400">
            미국카페와의 가장 최신 채팅이 들어갈 자리입니다.
          </p>
        </div>
        <div className="w-full rounded-lg bg-white p-5">
          <p className="text-lg font-semibold">미국카페</p>
          <p className="text-sm text-gray-400">
            미국카페와의 가장 최신 채팅이 들어갈 자리입니다.
          </p>
        </div>
        <div className="w-full rounded-lg bg-white p-5">
          <p className="text-lg font-semibold">미국카페</p>
          <p className="text-sm text-gray-400">
            미국카페와의 가장 최신 채팅이 들어갈 자리입니다.
          </p>
        </div>
        <div
          className="w-full rounded-lg bg-white p-5"
          onClick={() => setVisible(!visible)}
        >
          <p className="text-lg font-semibold">미국카페</p>
          <p className="text-sm text-gray-400">
            미국카페와의 가장 최신 채팅이 들어갈 자리입니다.
          </p>
        </div>
      </div>
      <div
        className={`absolute bottom-0 left-0 right-0 top-0 z-50 ${
          !visible && 'translate-x-full'
        } flex flex-col justify-between bg-[#00396E] transition-transform duration-500 ease-in-out`}
      >
        <nav className="relative flex h-24 w-full flex-col items-center justify-center gap-2">
          <Image src={Logo} width={35} height={35} alt="logo" />
          <p className="text-lg font-bold text-white">한국카페</p>

          <Image
            src={LeftIcon}
            width={40}
            height={40}
            alt="left"
            className="absolute left-5 cursor-pointer"
            onClick={() => {
              setVisible(!visible)
            }}
          />
        </nav>
        <div className="h-full overflow-y-auto p-5">
          <div className="chat chat-start">
            <div className="chat-bubble relative bg-white p-4 text-black">
              <Image
                src={Green}
                width={35}
                height={35}
                alt="green"
                className="absolute -top-4 left-2"
              />
              안녕하세요
            </div>
            <div className="chat-footer mt-2 text-xs text-white">12:41</div>
          </div>
          <div className="chat chat-end relative">
            <div className="chat-bubble relative bg-white p-4 text-black">
              <Image
                src={Purple}
                width={35}
                height={35}
                alt="green"
                className="absolute -top-4 right-2"
              />
              안녕하세요 이래영이라고 합니다.
            </div>
            <div className="chat-footer mt-2 text-xs text-white">12:45</div>
          </div>
        </div>
        <div className="flex h-24 items-center justify-between gap-3 rounded-t-2xl bg-[#ECEFF4] px-5">
          <input type="text" className="input grow rounded-full bg-white" />
          <button className="w-16 rounded-2xl bg-[#C467EF] px-3 py-2 text-white">
            전송
          </button>
        </div>
      </div>
    </>
  )
}
