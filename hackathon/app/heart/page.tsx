"use client"
import ListItem from '@/components/listItem'
import { useState } from "react"

export default function HeartPage() {
  const [my, setMy] = useState(true);
  const onClickMy = () => {
    setMy(true)
  }

  const onClickLike= () =>{
    setMy(false)
  }

  return (
    <div>
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
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    </div>
  )
}
