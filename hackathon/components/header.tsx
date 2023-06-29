import Image from 'next/image'
import Logo from '@/public/logo.png'
import { getSession } from '@/lib/api'
export default async function Header() {
  const session = await getSession()
  return (
    session && (
      <nav className="flex h-20 w-full text-right p-5">
        <Image src={Logo} width={48} height={48} alt="빛나는 연결" />
        <span className='font-bold flex justify-center items-center text-[#00396E] text-lg'>빛나는 연결</span>
      </nav>
    )
  )
}
