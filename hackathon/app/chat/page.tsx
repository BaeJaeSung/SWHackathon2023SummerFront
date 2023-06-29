'use client'
import Image from 'next/image'
import Logo from '@/public/logo.png'
import Conf from '@/public/conf.png'
import Conv from '@/public/conv.png'
import LeftIcon from '@/public/chevron_left_FILL0_wght400_GRAD0_opsz48.svg'
import { useState } from 'react'
import ChatStart from '@/components/chatStart'
import Green from '@/public/green.svg'
import Purple from '@/public/purple.svg'
import ChatEnd from '@/components/chatEnd'

export default function ChatPage() {
  const [visible, setVisible] = useState(false)
  const [title, setTitle] = useState('야간 편의점')
  const [text, setText] = useState('')
  const [chatList, setChatList] = useState({
    '야간 편의점': [
      { type: '0', text: '해당 일에 관심이 있습니다.', date: '12:41' },
      {
        type: '1',
        text: '언제부터 일을 시작하실 수 있나요?',
        date: '12:42',
      },
    ],
    '행사 매니저': [
      { type: '1', text: '시급 13,000원 어떤가요?', date: '11:43' },
      {
        type: '0',
        text: '좋습니다!',
        date: '11:45',
      },
    ],
  })
  const chat = (e) => {
    e.preventDefault()
    setChatList({
      ...chatList,
      [title]: [
        ...chatList[title],
        {
          text: text,
          type: localStorage.getItem('type'),
          date: `${new Date().getHours()}:${new Date().getMinutes()}`,
        },
      ],
    })
    setText('')
  }
  return localStorage.getItem('type') == '0' ? (
    <>
      <h2 className="text-2xl font-bold">나와 매칭된 사장님</h2>
      <div className="mt-5 overflow-x-auto">
        <div className="flex w-full flex-nowrap gap-3">
          <div className="relative shrink-0 cursor-pointer overflow-hidden  rounded-lg">
            <div className="badge absolute right-3 top-3 border-none bg-[#83FFA6] p-3 text-[12px] text-black">
              07/06
            </div>
            <Image src={Conv} width={160} height={160} alt="dummy"></Image>
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-b from-transparent to-black"></div>
            <div className="absolute bottom-3 left-3">
              <p className="text-xl font-bold text-white">야간 편의점</p>
              <p className="text-[#83FFA6]">시급 11,000원</p>
            </div>
          </div>

          <div className="relative shrink-0 cursor-pointer overflow-hidden  rounded-lg">
            <div className="badge absolute right-3 top-3 border-none bg-[#83FFA6] p-3 text-[12px] text-black">
              07/06
            </div>
            <Image src={Conf} width={160} height={160} alt="dummy"></Image>
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-b from-transparent to-black"></div>
            <div className="absolute bottom-3 left-3">
              <p className="text-xl font-bold text-white">행사 매니저</p>
              <p className="text-[#83FFA6]">시급 13,000원</p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="mb-5 mt-10 text-2xl font-bold">채팅</h2>
      <div className="flex w-full flex-wrap gap-5 overflow-y-auto">
        <div
          className="flex h-24 w-full shrink-0 cursor-pointer flex-nowrap items-center gap-3 rounded-lg bg-white p-5"
          onClick={() => {
            setVisible(!visible)
            setTitle('야간 편의점')
          }}
        >
          <div className="rounded-full  pr-1  text-white">
            <Image src={Green} alt="profile" width={50} height={50} />
          </div>
          <div>
            <p className="text-xl font-bold">야간 편의점</p>
            <p className="text-lg text-gray-400">
              언제부터 일을 시작하실 수 있나요?
            </p>
          </div>
        </div>
        <div
          className="flex h-24 w-full shrink-0 cursor-pointer flex-nowrap items-center gap-3 rounded-lg bg-white p-5"
          onClick={() => {
            setVisible(!visible)
            setTitle('행사 매니저')
          }}
        >
          <div className="rounded-full  pr-1  text-white">
            <Image src={Green} alt="profile" width={50} height={50} />
          </div>
          <div>
            <p className="text-xl font-bold">행사 매니저</p>
            <p className="text-lg text-gray-400">좋습니다!</p>
          </div>
        </div>
      </div>
      <div
        className={`absolute bottom-0 left-0 right-0 top-0 z-50 ${
          !visible && 'translate-x-full'
        } flex flex-col justify-between bg-[#00396E] transition-transform duration-500 ease-in-out`}
      >
        <nav className="relative flex h-24 w-full flex-col items-center justify-center gap-2 py-3">
          <Image src={Logo} width={35} height={35} alt="logo" />
          <p className="text-lg font-bold text-white">{title}</p>
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
          {chatList[title].map((item, index) =>
            localStorage.getItem('type') == item.type ? (
              <ChatEnd
                text={item.text}
                type={item.type}
                date={item.date}
                key={index}
              />
            ) : (
              <ChatStart
                text={item.text}
                type={item.type}
                date={item.date}
                key={index}
              />
            ),
          )}
        </div>
        <div className="flex h-24 items-center justify-between gap-3 rounded-t-2xl bg-[#ECEFF4] px-5">
          <input
            type="text"
            className="input grow rounded-full bg-white"
            value={text}
            onChange={(e) => {
              setText(e.target.value)
            }}
            onKeyDown={(e) => {
              e.key == 'Enter' && chat(e)
            }}
          />
          <button
            className="w-16 rounded-2xl bg-[#C467EF] px-3 py-2 text-white"
            onClick={chat}
          >
            전송
          </button>
        </div>
      </div>
    </>
  ) : (
    <></>
  )
}
