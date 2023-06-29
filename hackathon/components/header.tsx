import Image from 'next/image'
import Logo from '@/public/logo.png'
import { getSession } from '@/lib/api'
import Link from 'next/link'
export default async function Header() {
  const session = await getSession()
  return (
    session && (
      <nav className="flex h-24 w-full items-center pl-5">
        <Link href="/" className="flex gap-3">
          <Image src={Logo} width={30} height={30} alt="빛나는 연결" />
          <span className="flex items-center justify-center text-xl font-bold text-[#00396E]">
            빛나는 연결
          </span>
        </Link>
      </nav>
    )
  )
}
