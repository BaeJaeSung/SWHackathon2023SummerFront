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
    const type = parseInt(localStorage.getItem('type') as string)
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
        {my
          ? applyList.map((item: any, index) => (
              <ListItem
                top={item.name}
                bottom={item.intro}
                date={item.type}
                key={index}
              />
            ))
          : receiveList.map((item: any, index) => (
              <ListItem
                top={item.name}
                bottom={item.intro}
                date={item.type}
                key={index}
              />
            ))}
        {/* {localStorage.getItem('type') == '0' ? (
          my ? (
            <>
              <ListItem
                top="사냥하기"
                bottom="시급 12,000원"
                date="07/06"
                img={Hunt}
              />
              <ListItem
                top="행사 매니저"
                bottom="시급 13,000원"
                date="08/09"
                img={Conf}
              />
              <ListItem
                top="야간 편의점"
                bottom="시급 11,000원"
                date="06/06"
                img={Conv}
              />
            </>
          ) : (
            <>
              <ListItem
                top="야간 편의점"
                bottom="시급 11,000원"
                date="06/06"
                img={Conv}
              />
              <ListItem
                top="프랜차이즈 마감"
                bottom="시급 13,000원"
                date="07/06"
                img={Chain}
              />
              <ListItem
                top="아파트 낙엽 청소"
                bottom="시급 10,000원"
                date="09/06"
                img={Leaf}
              />
              <ListItem
                top="행사 매니저"
                bottom="시급 13,000원"
                date="06/06"
                img={Conf}
              />
            </>
          )
        ) : (
          <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col justify-center text-center text-xl leading-relaxed">
            <p className="text-gray-400">현재 나의 지원 현황이 없어요!</p>
            <p className="text-gray-400">
              관심 있는 아르바이트에 Like를 눌러보세요
            </p>
          </div>
        )} */}
      </div>
    </>
  )
}
