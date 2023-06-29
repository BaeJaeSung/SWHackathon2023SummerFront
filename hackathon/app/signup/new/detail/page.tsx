'use client'
import SignUpLayout from '@/components/signUpLayout'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function SignUpDetailPage() {
  const router = useRouter()
  const onClick = () => {
    router.push('/')
  }

  const [detail, setDetail] = useState()
  const [edu, setEdu] = useState('대졸')
  const [company, setCompany] = useState()
  const [period, setPeriod] = useState()
  const [exp, setExp] = useState()

  return (
    <SignUpLayout
      textTop="00님의"
      textBottom="자기소개가 궁금해요!"
      btnText="다음"
      btnEvent={onClick}
    >
      <div className="flex flex-col gap-5">
        <div>
          <label
            htmlFor="detail"
            className="label cursor-pointer font-semibold"
          >
            나의 정보
          </label>
          <textarea
            id="detail"
            className="textarea mb-3 w-full resize-none bg-white"
          ></textarea>
          <div>
            <label htmlFor="edu" className="label cursor-pointer font-semibold">
              학력
            </label>
            <select id="edu" className="select mb-3  w-40 bg-white">
              <option value="대졸" defaultValue={edu}>
                대졸
              </option>
              <option value="초졸">초졸</option>
              <option value="중졸">중졸</option>
              <option value="고졸">고졸</option>
            </select>
          </div>
          <div>
            <div className="my-3 font-semibold">
              아르바이트 근무 경험이 있다면?
            </div>
            <div>
              <label
                htmlFor="company"
                className="label cursor-pointer font-semibold"
              >
                회사명
              </label>
              <input
                id="company"
                type="text"
                className="input mb-3 w-full bg-white"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="period"
              className="label cursor-pointer font-semibold"
            >
              근무 기간
            </label>
            <select id="period" className="select mb-3 w-40 bg-white">
              <option value="3일 이하" defaultValue={period}>
                3일 이하
              </option>
              <option>1주일</option>
              <option>1개월</option>
              <option>3개월</option>
              <option>6개월</option>
              <option>1년</option>
              <option>1년 이상</option>
            </select>
          </div>
          <div>
            <div>
              <label
                htmlFor="exp"
                className="label cursor-pointer font-semibold"
              >
                근무를 통한 나의 경험
              </label>
              <textarea
                id="detail"
                className="textarea w-full resize-none bg-white"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </SignUpLayout>
  )
}
