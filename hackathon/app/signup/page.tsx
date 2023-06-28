'use client'
import SignUpLayout from '@/components/signUpLayout'

export default function SignUpPage() {
  const hello = () => {
    console.log('hello')
  }
  return (
    <SignUpLayout
      textTop="반갑습니다!"
      textBottom="청년이신가요 사장님이신가요"
      btnText="다음"
      btnEvent={hello}
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
