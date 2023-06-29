'use client'
import { useRouter } from 'next/navigation'
import SignUpLayout from '@/components/signUpLayout'

export default function SignUpPage() {
  const router = useRouter()
  const onClick = () => {
    router.push('/signup/new/photo')
  }
  return (
    <SignUpLayout
      textTop="OO님의"
      textBottom="이름과 나이를 입력해주세요"
      btnText="다음"
      btnEvent={onClick}
    >
      <div className="flex flex-col gap-5">
        <div>
          <label htmlFor="name" className="cursor-pointer">
            이름
          </label>
          <input
            id="name"
            type="text"
            className="input my-3 w-full bg-white-200 "
          />
        </div>
        <div>
          <label htmlFor="age" className="cursor-pointer">
            나이
          </label>
          <input
            id="age"
            type="text"
            className="input my-3 w-full bg-white-200 "
          />
        </div>
      </div>
    </SignUpLayout>
  )
}
