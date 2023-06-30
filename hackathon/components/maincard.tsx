"use client"
import {
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  SyntheticEvent,
} from 'react'
import Image from "next/image"
import Keyword from "./keyword"
import GridCard from "./gridcard"
import CANCEL from '@/public/cancel.svg'
import LIKE from '@/public/like.svg'
import GridCardOLD from "./gridcard_old"
import DUMMY from "@/public/dummy.png"
import { getData, matchChoice } from "@/lib/api"
import LOGO from "@/public/logo.png"


interface item{
  nickname?: string
  info?:string
  studycareer?: string
  careers?:{
    company_name:string
    period:string
    experience:string
  }

  name?: string
  intro?: string
  employee_count?: number
  representative?: string

}

interface MainCardProps {
  showFull: boolean
  setShowFull: Dispatch<SetStateAction<boolean>>

  // hiki
  nickname?: string
  info?: string
  studycareer?: string
  age?: number
  careers?: {
    company_name: string
    period: number
    experience: string
  }

  // common
  items: item[]
  id: string
  setItems: Dispatch<SetStateAction<item[]>>
  type: number

  // ceo
  name?: string
  intro?: string
  employee_count?: number
  representative?: string
  works?: {
    type: string
    salary: number
    region: string
    end_time: number
    start_time: number
  }
  phone_number?: string
  type_ceo?: string

  isPic:boolean
}

export default function MainCard({
  showFull,
  setShowFull,
  nickname,
  info,
  studycareer,
  careers,
  items,
  setItems,
  id,
  type,
  type_ceo,
  name,
  intro,
  employee_count,
  representative,
  phone_number,
  age,
  works,
}: MainCardProps) {
  
  const [isPic, setIsPic] = useState(true)
  const onClickCancel = () => {
    const id = localStorage.getItem('id')
    // type은 이미 o
    const receiver_id = id
    const choice = 1


    if (type == 0) setItems(items.filter((item) => item.nickname !== nickname))
    else setItems(items.filter((item) => item.name !== name))
  }
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  const handleImageLoad=()=>{
    setIsImageLoaded(true);
  }

  /*useEffect(() => {
    getData(
      `https://swhackathon.s3.ap-northeast-2.amazonaws.com/${id}_1.jpg`,
    ).then((res) => {
      console.log(res)
      setIsPic(res)
    })
  },[id])*/

  //console.log('isPic',isPic)

  const onClickLike = () => {
    const id = localStorage.getItem("id")
    // type은 이미 o
    const receiver_id = id
    const choice = -1
    matchChoice(id, type, receiver_id, choice).then((res) => {
      console.log(res)
      let is_matched = res.is_matched
    })
    if (type == 0) setItems(items.filter((item) => item.nickname !== nickname))
    else setItems(items.filter((item) => item.name !== name))
  }
  return (
    <div className="relative flex h-[90%] w-full shrink-0 justify-center">
      <div
        className={`relative w-full ${
          showFull && 'overflow-y-auto'
        } overflow-hidden rounded-xl`}
      >
        <div className="flex items-center justify-center rounded-lg p-0">
          <img
            src={`https://swhackathon.s3.ap-northeast-2.amazonaws.com/${id}_1.jpg`}
            width={100}
            height={100}
            alt="error"
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
            {careers && (
              <>
                <Keyword text={'😄 경력 ' + careers.period + '개월'} />
                <Keyword text={'👨‍🎓 ' + studycareer} />
              </>
            )}
            {works && (
              <>
                <Keyword text={'💸 시급 ' + works[0].salary + '원'} />
                <Keyword text={'🗓️ 07/06 마감'} />
              </>
            )}
          </div>
          {type == 0 ? (
            <GridCardOLD
              showfull={showFull}
              setShowFull={setShowFull}
              name={name}
              intro={intro}
              employee_count={employee_count}
              representative={representative}
              phone_number={phone_number}
              type_ceo={type_ceo}
              id={id}
              works={works}
            />
          ) : (
            <GridCard
              showFull={showFull}
              setShowFull={setShowFull}
              nickname={nickname}
              info={info}
              studycareer={studycareer}
              careers={careers}
              id={id}
              age={age}
            />
          )}
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
          onClick={onClickLike}
        />
      </div>
    </div>
  )
}