import Image from 'next/image'
import Icon from '@/public/notifications_FILL1_wght400_GRAD0_opsz48.svg'
export default function Header() {
  return (
    <nav className="flex h-16 w-full items-center justify-between p-5">
      <div />
      <h1 className="text-xl font-semibold">빛나는 연결</h1>
      <Image width={30} height={30} src={Icon} alt={'notification'} className='opacity-50 hover:opacity-80 cursor-pointer' />
    </nav>
  )
}
