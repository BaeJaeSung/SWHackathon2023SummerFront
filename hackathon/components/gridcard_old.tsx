'use client'
import Image from 'next/image'
import UP from '@/public/up.png'
import DOWN from '@/public/down.png'
import { Dispatch, SetStateAction } from 'react'

interface GridCardProps {
  showFull: boolean
  setShowFull: Dispatch<SetStateAction<boolean>>
}

export default function GridCardNEW({ showFull, setShowFull }: GridCardProps) {
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
            카페라도{' '}
            <span className="text-base text-[#8F00FF]">02-999-9990</span>
          </span>
        </div>
      </div>

      <div className="mb-1 font-semibold text-[#00396E]">채용 정보</div>
      <div className="mb-5 rounded-lg bg-[#ECEFF4] p-2">
        <table className="table">
          <tr>
            <th>채용 분야</th>
            <td>카페, 베이커리</td>
          </tr>
          <tr>
            <th>업무 소개</th>
            <td>바리스타</td>
          </tr>
          <tr>
            <th>급여</th>
            <td>시급 10,000원</td>
          </tr>
          <tr>
            <th>근무 일시</th>
            <td>월수금 10:00 - 15:00</td>
          </tr>
          <tr>
            <th>근무 지역</th>
            <td>서울시 영등포구 여의도동</td>
          </tr>
          <tr>
            <th>마감 일시</th>
            <td>2023/07/06</td>
          </tr>
        </table>
      </div>

      <div className="mb-1 font-semibold text-[#00396E]">회사 정보</div>
      <div className="m-0">
        <table className="mb-0 table">
          <tr>
            <th>회사명</th>
            <td>카페, 베이커리</td>
          </tr>
          <tr>
            <th>회사 번호</th>
            <td>02-999-9990</td>
          </tr>
          <tr>
            <th>회사 소개</th>
            <td>커피와 베이커리를 판매하는 카페</td>
          </tr>
          <tr>
            <th>직원 수</th>
            <td>3명</td>
          </tr>
          <tr>
            <th>업종</th>
            <td>카페, 베이커리</td>
          </tr>
          <tr>
            <th>대표자명</th>
            <td>김광규</td>
          </tr>
          <tr>
            <th>사진</th>
            <td>
              <div className="w-full overflow-x-auto whitespace-nowrap">
                <div className="flex gap-5">
                  <div className="h-[150px] w-[100px] flex-shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white">
                    <Image
                      src={`https://swhackathon.s3.ap-northeast-2.amazonaws.com/name_1.jpg`}
                      alt="ex"
                      width={100}
                      height={150}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex h-[150px]  w-[100px] flex-shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white">
                    <Image
                      src={`https://swhackathon.s3.ap-northeast-2.amazonaws.com/name_2.jpg`}
                      alt="ex"
                      width={100}
                      height={150}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}
