'use client'
import Image from 'next/image'
import UP from '@/public/up.png'
import DOWN from '@/public/down.png'
import { Dispatch, SetStateAction } from 'react'
import { getData } from '@/lib/api'

interface GridCardOLDProps {
  showFull: boolean
  setShowFull: Dispatch<SetStateAction<boolean>>
  name: string
  intro: string
  employee_count: number
  representative: string
  phone_number: string
  type_ceo: string // 업종
  id: string
  works: {
    type: string
    salary: number
    region: string
    end_time: number
    start_time: number
  }
}

export default function GridCardOLD({
  showFull,
  setShowFull,
  name,
  intro,
  employee_count,
  representative,
  type_ceo,
  phone_number,
  works,
  id,
}: GridCardOLDProps) {
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
            {name}{' '}
            <span className="text-base text-[#8F00FF]">{phone_number}</span>
          </span>
        </div>
      </div>

      <div className="mb-1 font-semibold text-[#00396E]">채용 정보</div>
      {works &&
        works.map((work: any, index) => (
          <div className="mb-5 rounded-lg bg-[#ECEFF4] p-2">
            <table className="table">
              <tr>
                <th>채용 분야</th>
                <td>{work.type}</td>
              </tr>
              <tr>
                <th>업무 소개</th>
                <td>{work.type}</td>
              </tr>
              <tr>
                <th>급여</th>
                <td>시급 {work.salary}원</td>
              </tr>
              <tr>
                <th>근무 일시</th>
                <td>
                  월~금 {work.start_time}시 - {work.end_time}시
                </td>
              </tr>
              <tr>
                <th>근무 지역</th>
                <td>{work.region}</td>
              </tr>
              <tr>
                <th>마감 일시</th>
                <td>2023/07/06</td>
              </tr>
            </table>
          </div>
        ))}

      <div className="mb-1 font-semibold text-[#00396E]">회사 정보</div>
      <div className="m-0">
        <table className="mb-0 table p-0">
          <tr>
            <th>회사명</th>
            <td>{name}</td>
          </tr>
          <tr>
            <th>회사 번호</th>
            <td>{phone_number}</td>
          </tr>
          <tr>
            <th>회사 소개</th>
            <td>{intro}</td>
          </tr>
          <tr>
            <th>직원 수</th>
            <td>{employee_count}</td>
          </tr>
          <tr>
            <th>업종</th>
            <td>{type_ceo}</td>
          </tr>
          <tr>
            <th>대표자명</th>
            <td>{representative}</td>
          </tr>
          <tr>
            <th>사진</th>
            <td>
              <div className="w-full overflow-x-auto whitespace-nowrap">
                <div className="flex gap-5">
                    <div className="h-[150px] w-[100px] flex-shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white">
                      <Image
                        src={`https://swhackathon.s3.ap-northeast-2.amazonaws.com/${id}_1.jpg`}
                        alt="ex"
                        width={100}
                        height={150}
                        className="h-full w-full object-cover"
                      />       
                  </div> 
                  {/*
                    <div className="flex h-[150px]  w-[100px] flex-shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white">
                      <Image
                        src={`https://swhackathon.s3.ap-northeast-2.amazonaws.com/${id}_2.jpg`}
                        alt="ex"
                        width={100}
                        height={150}
                        className="h-full w-full object-cover"
                      />
                  </div>
                  */}
                </div>
                </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}
