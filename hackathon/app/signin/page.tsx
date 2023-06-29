'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import LOGO from '@/public/logo.png'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import SignInLayout from '@/components/signInLayout'

export default function SigninPage() {
  const router = useRouter()

  const [id, setId] = useState('')
  const [pw, setPw] = useState('')

  const onClickSingUp = () => {
    router.push('/signup')
  }
  function onClickSignIn() {
    signIn('custom', { id, password: pw, callbackUrl: '/' })
  }

  return (
    <SignInLayout
      textTop="환영합니다:)"
      textBottom="빛나는 연결입니다."
      btnText="로그인"
      btnEvent={onClickSignIn}
      subEvent={onClickSingUp}
      subText="회원가입"
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
