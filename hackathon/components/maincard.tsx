"use client"
import { useState, Dispatch, SetStateAction } from "react"
import Image from "next/image"
import Keyword from "./keyword"
import GridCard from "./gridcard"
import CANCEL from '@/public/cancel.svg'
import LIKE from '@/public/like.svg'

interface item{
  nickname: string
  info:string
  studycareer: string
  careers:{
    company_name:string
    period:string
    experience:string
  }
}

interface MainCardProps {
  showFull: boolean
  setShowFull: Dispatch<SetStateAction<boolean>>
  nickname: string
  info: string
  studycareer: string
  careers: {
    company_name: string
    period: number
    experience: string
  }
  items: item[]
  id: string
  setItems: Dispatch<SetStateAction<item[]>>
}

export default function MainCard({ showFull , setShowFull,nickname, info, studycareer, careers, items, setItems, id }:MainCardProps) {
  const onClickCancel = () => {
    setItems(items.filter(item=>item.nickname!==nickname))
  }
  
  return (
    <div className="relative flex h-[90%] w-full justify-center shrink-0">
      <div
        className={`relative w-full ${
          showFull && 'overflow-y-auto'
        } overflow-hidden rounded-xl`}
      >
        <div className="flex items-center justify-center rounded-lg p-0">
          <Image
            src={`https://swhackathon.s3.ap-northeast-2.amazonaws.com/${id}_1.jpg`}
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
            {careers && <Keyword text={'😄 경력 ' + careers.period + '개월'} />}
            <Keyword text={'👨‍🎓 ' + studycareer} />
          </div>
          <GridCard
            showFull={showFull}
            setShowFull={setShowFull}
            nickname={nickname}
            info={info}
            studycareer={studycareer}
            careers={careers}
            id={id}
          />
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
          onClick={onClickCancel}
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