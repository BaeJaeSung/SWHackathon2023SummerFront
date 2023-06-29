"use client"
import SignUpLayout from "@/components/signUpLayout"
import { useRouter } from "next/navigation"
import Image from 'next/image'
import LOGO from "@/public/logo.png"

export default function SigninPage() {
  const router = useRouter()
  const onClick = () => {
    //router.push('/')
  }

  const onClickSingUp = () => {
    router.push('/signup')
  }
  return (
    <SignUpLayout
      textTop="환영합니다:)"
      textBottom="빛나는 연결입니다."
      btnText="로그인"
      btnEvent={onClick}
    >
      <div className="mb-10 flex items-center justify-center">
        <Image src={LOGO} width={150} height={150} alt="로고" />
      </div>
      <div className="flex flex-col gap-3">
        <input
          id="id"
          type="text"
          placeholder="아이디 입력"
          className="bg-white-200 input my-1 w-full "
        />
        <input
          id="pw"
          type="password"
          placeholder="비밀번호 입력"
          className="bg-white-200 input my-1 w-full "
        />
      </div>
      <button className="btn mt-4 w-full border-none bg-[#292929] text-[#35FF6E] hover:bg-[#292929]">
        로그인
      </button>
      <div className="text-right mt-2">
        <span className="text-[#9B9B9B] cursor-pointer" onClick={onClickSingUp}>회원가입</span>
      </div>
    </SignUpLayout>
  )
}
