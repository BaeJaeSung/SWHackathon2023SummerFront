"use client"
import Image from 'next/image'
import UP from "@/public/up.png"
import DOWN from "@/public/down.png"
import { Dispatch, SetStateAction } from 'react'

interface GridCardProps{
  showFull: boolean
  setShowFull:Dispatch<SetStateAction<boolean>>
}

export default function GridCard({ showFull, setShowFull }: GridCardProps) {
  const onClickDown = () => {
    setShowFull(!showFull)
  }

  const onClickUp = () => {
    setShowFull(!showFull)
  }

  return (
    <div className="rounded-lg bg-white pb-8 pl-8 pr-8 text-[#292929]">
      <div className="items-cent}er mb-3 flex justify-center pt-5">
        {showFull === true ? (
          <Image
            src={DOWN}
            width={15}
            height={25}
            alt="화살표"
            onClick={onClickDown}
            className="cursor-pointer "
          />
        ) : (
          <Image
            src={UP}
            width={15}
            height={25}
            alt="화살표"
            onClick={onClickUp}
            className="cursor-pointer "
          />
        )}
      </div>
      <div className="mb-5 flex items-center justify-between">
        <div>
          <span className="text-2xl font-semibold text-[#292929]">
            이래영 <span className="text-base text-[#8F00FF]">26</span>
          </span>
        </div>
      </div>
      <div className={` mb-5 text-[#292929] font-semibold ${showFull ? '' : 'truncate	'}`}>
        안녕하세요, 카페 아르바이트를 구하고 있는 22살 이래영입니다. 저는
        바리스타 자격증 1급이 있으며, 책임감이 강합니다. 최근 1년간 집에서
        무기력하게 지내다 빛나는 연결을 접한 후 다시 바리스타의 꿈을 꾸기
        시작했어요!
      </div>

      <div className="mb-1 font-semibold text-[#292929]">
        학력<span className="font-normal text-[#535353]">&nbsp;대졸</span>
      </div>
      <div className="mb-4 font-semibold text-[#292929]">
        아르바이트 근무 경험
        <span className="font-normal text-[#535353]">&nbsp;있음</span>
      </div>

      <div className="mb-5 grid items-center justify-between">
        <div className="flex">
          <div className="bg-gray mr-4 h-48 w-1 rounded-sm bg-[#00396E]">
            &nbsp;
          </div>
          <div className="w-full  rounded-lg bg-[#ECEFF4] p-5">
            <div className="mb-3 font-semibold text-[#00396E]">
              회사명
              <span className="font-normal text-[#535353]">&nbsp;우리카페</span>
            </div>
            <div className="mb-3 font-semibold text-[#00396E]">
              근무기간
              <span className="font-normal text-[#535353]">&nbsp;3개월</span>
            </div>
            <div className="font-semibold text-[#00396E]">
              근무를 통한 나의 경험
              <p className="mt-1 font-normal text-[#535353]">
                커피 만드는 것이 즐거웠고, 근무하면서
                커피커피커피커피커피커피커피
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-3 font-semibold text-[#292929]">
        사진
        <div className="my-3 w-full overflow-x-auto whitespace-nowrap">
          <div className="flex gap-5">
            <div className=" h-[180px] w-[150px] flex-shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white">
              <Image
                src={`https://swhackathon.s3.ap-northeast-2.amazonaws.com/name_1.jpg`}
                alt="ex"
                width={150}
                height={180}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex h-[180px]  w-[150px] flex-shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white">
              <Image
                src={`https://swhackathon.s3.ap-northeast-2.amazonaws.com/name_2.jpg`}
                alt="ex"
                width={150}
                height={180}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex h-[180px] w-[150px] flex-shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white">
              <Image
                src={`https://swhackathon.s3.ap-northeast-2.amazonaws.com/name_3.jpg`}
                alt="ex"
                width={150}
                className="h-full w-full object-cover"
                height={180}
              />
            </div>
            <div className="flex h-[180px]  w-[150px] flex-shrink-0 items-center justify-center  overflow-hidden rounded-lg bg-white">
              <Image
                src={`https://swhackathon.s3.ap-northeast-2.amazonaws.com/name_4.jpg`}
                alt="ex"
                className="h-full w-full object-cover"
                width={150}
                height={180}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}