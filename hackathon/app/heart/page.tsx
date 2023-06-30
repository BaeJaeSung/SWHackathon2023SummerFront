'use client'
import ListItem from '@/components/listItem'
import { useEffect, useState } from 'react'
import Hunt from '@/public/hunt.png'
import Conf from '@/public/conf.png'
import Conv from '@/public/conv.png'
import Leaf from '@/public/leaf.png'
import Chain from '@/public/chain.png'
import { matchMyApply, matchReceived } from '@/lib/api'

export default function HeartPage() {
  const [my, setMy] = useState(true)
  const [receiveList, setReceiveList] = useState([])
  const [applyList, setApplyList] = useState([])
  const onClickMy = () => {
    setMy(true)
  }

  const onClickLike = () => {
    setMy(false)
  }
  useEffect(() => {
    const id = localStorage.getItem('id')
    const type = parseInt(localStorage.getItem('type'))
    matchReceived(id, type).then((res) => setReceiveList([...res]))
    matchMyApply(id, type).then((res) => setApplyList([...res]))
  }, [])

  return (
    <>
      <div className="grid grid-cols-2 gap-5">
        <div
          className={`cursor-pointer rounded-full ${
            my ? 'bg-[#C467EF] text-white' : 'text-[#292929] hover:bg-gray-200'
          } px-5 py-2 text-center font-bold `}
          onClick={onClickMy}
        >
          나의 지원현황
        </div>
        <div
          className={`${
            !my ? 'bg-[#C467EF] text-white' : 'text-[#292929] hover:bg-gray-200'
          } cursor-pointer rounded-full px-5 py-2 text-center font-bold `}
          onClick={onClickLike}
        >
          내가 받은 Like
        </div>
      </div>
      <div className="relative mt-5 grid w-full grid-cols-2 gap-5">
        {localStorage.getItem('type') == '0' ? (
          my ? (
            applyList.length == 0 ? (
              <div className="absolute left-0 right-0 top-1/2 flex flex-col justify-center text-center text-xl leading-relaxed">
                <p className="text-gray-400">현재 나의 지원 현황이 없어요!</p>
                <p className="text-gray-400">
                  관심 있는 아르바이트에 Like를 눌러보세요
                </p>
              </div>
            ) : (
              applyList.map((item: any, index) => (
                <ListItem
                  top={item.name}
                  bottom={item.intro}
                  date={item.type}
                  key={index}
                />
              ))
            )
          ) : receiveList.length == 0 ? (
            <div className="absolute left-0 right-0 top-1/2 flex flex-col justify-center text-center text-xl leading-relaxed">
              <p className="text-gray-400">현재 나의 지원 현황이 없어요!</p>
              <p className="text-gray-400">
                관심 있는 아르바이트에 Like를 눌러보세요
              </p>
            </div>
          ) : (
            receiveList.map((item: any, index) => (
              <ListItem
                top={item.name}
                bottom={item.intro}
                date={item.type}
                key={index}
              />
            ))
          )
        ) : my ? (
          applyList.length == 0 ? (
            <div className="absolute left-0 right-0 top-1/2 flex flex-col justify-center text-center text-xl leading-relaxed">
              <p className="text-gray-400">현재 나의 지원 현황이 없어요!</p>
              <p className="text-gray-400">
                관심 있는 아르바이트에 Like를 눌러보세요
              </p>
            </div>
          ) : (
            applyList.map((item: any, index) => (
              <ListItem
                top={item.nickname}
                bottom={item.info}
                date={item.study_career}
                key={index}
              />
            ))
          )
        ) : receiveList.length == 0 ? (
          <div className="absolute left-0 right-0 top-1/2 flex flex-col justify-center text-center text-xl leading-relaxed">
            <p className="text-gray-400">현재 나의 지원 현황이 없어요!</p>
            <p className="text-gray-400">
              관심 있는 아르바이트에 Like를 눌러보세요
            </p>
          </div>
        ) : (
          receiveList.map((item: any, index) => (
            <ListItem
              top={item.nickname}
              bottom={item.info}
              date={item.study_career}
              key={index}
            />
          ))
        )}
      </div>
    </>
  )
}
