// import Image from 'next/image'
// import Icon from '@/public/notifications_FILL1_wght400_GRAD0_opsz48.svg'
export default function Header() {
  return (
    <nav className="flex h-16 w-full items-center justify-between p-5">
      <div className="w-8" />
      <h1 className="text-xl font-semibold">빛나는 연결</h1>
      {/* <Image
        width={32}
        height={32}
        src={Icon}
        alt={'notification'}
        className="cursor-pointer opacity-50 hover:opacity-80"
      /> */}
    </nav>
  )
}
