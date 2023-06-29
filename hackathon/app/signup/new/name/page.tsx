'use client'
import { useRouter } from 'next/navigation'
import SignUpLayout from '@/components/signUpLayout'
import { useState } from 'react'

export default function SignUpPage() {
  const router = useRouter()
  const onClick = () => {
    localStorage.setItem('name', name)
    localStorage.setItem('age', age)
    router.push('/signup/new/photo')
  }
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  return (
    <SignUpLayout
      textTop="OO님의"
      textBottom="이름과 나이를 입력해주세요"
      btnText="다음"
      btnEvent={onClick}
    >
      <div className="flex h-full flex-col gap-5">
        <div>
          <label htmlFor="name" className="cursor-pointer font-semibold">
            이름
          </label>
          <input
            id="name"
            type="text"
            className="input my-3 w-full bg-white"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="age" className="cursor-pointer font-semibold">
            나이
          </label>
          <input
            id="age"
            type="text"
            className="input my-3 w-full bg-white"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
      </div>
    </SignUpLayout>
  )
}
