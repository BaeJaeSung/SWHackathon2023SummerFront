'use client'
import Image from 'next/image'
import UP from '@/public/up.png'
import DOWN from '@/public/down.png'
import { Dispatch, SetStateAction } from 'react'

interface GridCardProps {
  showFull: boolean
  setShowFull: Dispatch<SetStateAction<boolean>>
  nickname: string
  info: string
  study_career: string
  age:number
  careers: {
    company_name: string
    period: number
    experience: string
  }
  id:string
}

export default function GridCard({
  showFull,
  setShowFull,
  nickname,
  info,
  study_career,
  careers,
  id
}: GridCardProps) {

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
            {nickname} <span className="text-base text-[#8F00FF]">{26}</span>
          </span>
        </div>
      </div>
      <div
        className={` mb-5 font-semibold text-[#292929] ${
          showFull ? '' : 'truncate	'
        }`}
      >
        {info}
      </div>

      <div className="mb-1 font-semibold text-[#292929]">
        학력
        <span className="font-normal text-[#535353]">&nbsp;{study_career}</span>
      </div>
      <div className="mb-4 font-semibold text-[#292929]">
        아르바이트 근무 경험
        <span className="font-normal text-[#535353]">
          &nbsp;{careers ? '있음' : '없음'}
        </span>
      </div>
      {careers && (
        <div className="mb-5 w-full items-center justify-between">
          <div className="flex ">
            <div className="bg-gray mr-4 h-48 w-1 rounded-sm bg-[#00396E]">
              &nbsp;
            </div>
            <div className="w-full  rounded-lg bg-[#ECEFF4] p-5">
              <div className="mb-3 font-semibold text-[#00396E]">
                회사명
                <span className="font-normal text-[#535353]">
                  &nbsp;{careers.company_name}
                </span>
              </div>
              <div className="mb-3 font-semibold text-[#00396E]">
                근무기간
                <span className="font-normal text-[#535353]">
                  &nbsp;{careers.period}개월
                </span>
              </div>
              <div className="font-semibold text-[#00396E]">
                근무를 통한 나의 경험
                <p className="mt-1 font-normal text-[#535353]">
                  {careers.experience}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mb-3 font-semibold text-[#292929]">
        사진
        <div className="my-3 w-full overflow-x-auto whitespace-nowrap">
          <div className="flex gap-5">
            <div className=" h-[180px] w-[150px] flex-shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white">
              <Image
                src={`https://swhackathon.s3.ap-northeast-2.amazonaws.com/${id}_1.jpg`}
                alt="ex"
                width={150}
                height={180}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex h-[180px]  w-[150px] flex-shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white">
              <Image
                src={`https://swhackathon.s3.ap-northeast-2.amazonaws.com/${id}_2.jpg`}
                alt="ex"
                width={150}
                height={180}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex h-[180px] w-[150px] flex-shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white">
              <Image
                src={`https://swhackathon.s3.ap-northeast-2.amazonaws.com/${id}_3.jpg`}
                alt="ex"
                width={150}
                className="h-full w-full object-cover"
                height={180}
              />
            </div>
            <div className="flex h-[180px]  w-[150px] flex-shrink-0 items-center justify-center  overflow-hidden rounded-lg bg-white">
              <Image
                src={`https://swhackathon.s3.ap-northeast-2.amazonaws.com/${id}_4.jpg`}
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
