import Image from 'next/image'
import Icon from '@/public/notifications_FILL1_wght400_GRAD0_opsz48.svg'
export default function Header() {
  return (
    <nav className="flex h-16 w-full items-center justify-around p-5">
      <Image
        width={30}
        height={30}
        src={Icon}
        alt={'notification'}
        className="cursor-pointer opacity-50 hover:opacity-80"
      />
      <Image
        width={30}
        height={30}
        src={Icon}
        alt={'notification'}
        className="cursor-pointer opacity-50 hover:opacity-80"
      />
      <Image
        width={30}
        height={30}
        src={Icon}
        alt={'notification'}
        className="cursor-pointer opacity-50 hover:opacity-80"
      />
    </nav>
  )
}
