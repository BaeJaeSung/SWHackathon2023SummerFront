'use client'
import SignUpLayout from '@/components/signUpLayout'
import { chatgptCreate } from '@/lib/api'
import axios from 'axios'
import { signIn } from 'next-auth/react'
import { useState } from 'react'

export default function SignUpDetailPage() {
  const onClick = () => {
    localStorage.setItem('detail', detail)
    localStorage.setItem('edu', edu)
    localStorage.setItem('company', company)
    localStorage.setItem('period', period)
    localStorage.setItem('exp', exp)
    Promise.all([
      axios.post('http://3.39.72.59:3000/user/join', {
        id: localStorage.getItem('id'),
        pw: localStorage.getItem('pw'),
        nickname: localStorage.getItem('name'),
        type: localStorage.getItem('type'),
        age: localStorage.getItem('age'),
      }),
      axios.post('http://3.39.72.59:3000/user/register_career', {
        id: localStorage.getItem('id'),
        company_name: localStorage.getItem('company'),
        period: localStorage.getItem('period'),
        experience: localStorage.getItem('exp'),
      }),
      axios.post('http://3.39.72.59:3000/user/register_profile_study_career', {
        id: localStorage.getItem('id'),
        study_career: edu,
      }),
      axios.post('http://3.39.72.59:3000/user/register_profile_text', {
        id: localStorage.getItem('id'),
        info: localStorage.getItem('detail'),
      }),
    ]).then(() => {
      signIn('custom', {
        id: localStorage.getItem('id'),
        password: localStorage.getItem('pw'),
        callbackUrl: '/',
      })
    })
  }

  const [detail, setDetail] = useState('')
  const [edu, setEdu] = useState('대졸')
  const [company, setCompany] = useState('')
  const [period, setPeriod] = useState('3일 이하')
  const [exp, setExp] = useState('')
  const [loading, setLoading] = useState(false)

  return (
    <SignUpLayout
      textTop={`${localStorage.getItem('name')}님의`}
      textBottom="자기소개가 궁금해요!"
      btnText="가입 완료"
      btnEvent={onClick}
    >
      {loading && (
        <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-black bg-opacity-30">
          <div className="flex h-1/3 w-2/3 flex-col items-center justify-center gap-1 rounded-3xl bg-[#00396E]">
            <div className="mb-8 flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-white">
                잠시만 기다려주세요
              </p>
              <p className="text-[#83FFA6]">
                AI가 열심히 자기 소개서를 생성중이예요!
              </p>
            </div>

            <span className="loading loading-spinner loading-lg text-secondary"></span>
          </div>
        </div>
      )}
      <div className="flex flex-col gap-5 overflow-y-auto">
        <div>
          <div className="my-3 mb-5 text-lg font-semibold">
            <h2 className="mb-3 text-2xl font-bold text-[#00396E]">
              AI 자동 생성 자기소개서
            </h2>
            <p className="text-[#9B9B9B]">회사 근무 정보를 입력하면</p>
            <p className="text-[#9B9B9B]">
              AI가 나의 정보를 자동으로 작성해줘요!
            </p>
          </div>
          <div className="rounded-xl bg-white p-5">
            <div>
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
                  className="input mb-3 w-full bg-[#ECEFF4]"
                  value={company}
                  onChange={(e) => {
                    setCompany(e.target.value)
                  }}
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
              <select
                id="period"
                className="select mb-3 w-40 bg-[#ECEFF4]"
                defaultValue={period}
                onChange={(e) => {
                  setPeriod(e.target.value)
                }}
              >
                <option value="3일 이하">3일 이하</option>
                <option value="1주일">1주일</option>
                <option value="1개월">1개월</option>
                <option value="3개월">3개월</option>
                <option value="6개월">6개월</option>
                <option value="1년">1년</option>
                <option value="1년 이상">1년 이상</option>
              </select>
            </div>
            <div>
              <div>
                <label htmlFor="exp" className="label font-semibold">
                  근무를 통한 나의 경험
                </label>
                <textarea
                  id="detail"
                  className="textarea w-full resize-none bg-[#ECEFF4]"
                  value={exp}
                  onChange={(e) => {
                    setExp(e.target.value)
                  }}
                ></textarea>
              </div>
            </div>
            <div>
              <label htmlFor="edu" className="label font-semibold">
                학력
              </label>
              <select
                id="edu"
                className="select mb-3  w-40 bg-[#ECEFF4] "
                defaultValue={edu}
                onChange={(e) => {
                  setEdu(e.target.value)
                }}
              >
                <option value="대졸">대졸</option>
                <option value="초졸">초졸</option>
                <option value="중졸">중졸</option>
                <option value="고졸">고졸</option>
              </select>
            </div>
            <button
              className="btn mt-5 h-16 w-full border-none bg-[#C467EF] text-lg font-bold text-white"
              onClick={(e) => {
                e.preventDefault()
                setLoading(true)
                chatgptCreate(
                  localStorage.getItem('id'),
                  localStorage.getItem('name'),
                  parseInt(localStorage.getItem('age')),
                  company,
                  period,
                  exp,
                  edu,
                ).then((res) => {
                  setDetail(res.response)
                  setLoading(false)
                })
              }}
            >
              AI 자동 생성하기
            </button>
          </div>
          <div className="mt-8">
            <h2 className=" text-2xl font-bold text-[#00396E]">
              직접 자기소개서 작성하기
            </h2>
            <label htmlFor="detail" className="label font-semibold">
              자기 소개
            </label>
            <textarea
              id="detail"
              className="textarea mb-3 h-32 w-full resize-none bg-white"
              value={detail}
              onChange={(e) => {
                setDetail(e.target.value)
              }}
            ></textarea>
          </div>
        </div>
      </div>
    </SignUpLayout>
  )
}
