'use client'
import Image from 'next/image'
import Logo from '@/public/logo.png'
import Conf from '@/public/conf.png'
import Conv from '@/public/conv.png'
import LeftIcon from '@/public/chevron_left_FILL0_wght400_GRAD0_opsz48.svg'
import { useEffect, useState } from 'react'
import ChatStart from '@/components/chatStart'
import ChatEnd from '@/components/chatEnd'
import { chatList as getChatList, chatContents, chatSend } from '@/lib/api'
import ChatList from '@/components/chatList'

export default function ChatPage() {
  const [visible, setVisible] = useState(false)
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [cId, setCId] = useState(0)
  const [chatList, setChatList] = useState([])
  const [chats, setChats] = useState([])
  useEffect(() => {
    const id: string = localStorage.getItem('id') as string
    const type = parseInt(localStorage.getItem('type') as string)
    getChatList(id, type).then((res) => setChats(res))
  }, [])
  const chat = (e) => {
    e.preventDefault()
    chatSend(
      cId,
      localStorage.getItem('id'),
      text,
      parseInt(localStorage.getItem('type')),
    ).then(() => {
      chatContents(cId).then((res) => {
        setChatList(res.contents)
      })
    })
    setText('')
  }
  useEffect(() => {
    chatContents(cId).then((res) => {
      setChatList(res.contents)
    })
  }, [cId])
  return (
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
        {chats.map((item, index) => (
          <ChatList
            key={index}
            id={item.id}
            recent={item.recent}
            sender={item.sender}
            type={parseInt(localStorage.getItem('type'))}
            onClick={() => {
              setVisible(!visible)
              setTitle(item.sender)
              setCId(item.id)
            }}
          />
        ))}
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
          {chatList.map((item, index) => {
            return parseInt(localStorage.getItem('type')) == item.sender ? (
              <ChatEnd
                text={item.message}
                type={parseInt(localStorage.getItem('type'))}
                date={`${new Date(item.sendtime).getUTCHours()}:${new Date(
                  item.sendtime,
                ).getUTCMinutes()}`}
                key={index}
              />
            ) : (
              <ChatStart
                text={item.message}
                date={`${new Date(item.sendtime).getUTCHours()}:${new Date(
                  item.sendtime,
                ).getUTCMinutes()}`}
                type={item.sender}
                key={index}
              />
            )
          })}
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
  )
}
