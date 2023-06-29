'use client'
import SignInLayout from '@/components/signInLayout'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import LOGO from '@/public/logo.png'
import { useState } from 'react'

export default function SignUpPage() {
  const router = useRouter()

  const [id, setId] = useState('')
  const [pw, setPw] = useState('')

  const onClickSignIn = () => {
    router.push('/signin')
  }
  function onClickSignUp() {
    localStorage.setItem('id', id)
    localStorage.setItem('pw', pw)
    router.push('/signup/type')
  }

  return (
    <SignInLayout
      textTop="환영합니다:)"
      textBottom="새로운 계정을 생성해주세요!"
      btnText="회원가입"
      btnEvent={onClickSignUp}
      subEvent={onClickSignIn}
      subText='로그인'
    >
      <div className="mb-10 flex items-center justify-center">
        <Image src={LOGO} width={150} height={150} alt="로고" />
      </div>
      <div className="flex flex-col gap-3">
        <input
          id="id"
          type="text"
          placeholder="아이디 입력"
          className="input my-1 w-full bg-white "
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          id="pw"
          type="password"
          placeholder="비밀번호 입력"
          className="input my-1 w-full bg-white"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        />
      </div>
    </SignInLayout>
  )
}
