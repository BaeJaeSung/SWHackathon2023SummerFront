'use client'
import { useRouter } from 'next/navigation'
import SignUpLayout from '@/components/signUpLayout'
import ICON_NEW from '@/public/new.png'
import ICON_OLD from '@/public/old.png'
import Image from 'next/image'

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
      <div className="flex flex-col gap-5">
        <div className="flex h-56 cursor-pointer flex-col justify-between rounded-md bg-[#8F00FF] p-10">
          <Image src={ICON_NEW} width={48} height={48} alt="청년" />
          <div className="text-2xl font-semibold text-white">청년이에요</div>
        </div>
        <div className="flex h-56 cursor-pointer flex-col justify-between rounded-md bg-[#35FF6E] p-10">
          <Image src={ICON_OLD} width={48} height={48} alt="자영업자" />
          <div className="text-2xl font-semibold">사장님이에요</div>
        </div>
      </div>
    </SignUpLayout>
  )
}
