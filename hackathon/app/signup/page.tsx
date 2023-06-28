'use client'
import { useRouter } from 'next/navigation'
import SignUpLayout from '@/components/signUpLayout'

export default function SignUpPage() {
  const router = useRouter()
  const onClick = () => {
    router.push('/signup/new/name')
  }
  return (
    <SignUpLayout
      textTop="반갑습니다!"
      textBottom="청년이신가요 사장님이신가요"
      btnText="다음"
      btnEvent={onClick}
    >
      <div className="flexx flex-col gap-5">
        <div className="mb-5 rounded-md bg-gray-300 p-24 text-center">
          청년이예요
        </div>
        <div className="text rounded-md bg-gray-300 p-24 text-center">
          사장님이예요
        </div>
      </div>
    </SignUpLayout>
  )
}
