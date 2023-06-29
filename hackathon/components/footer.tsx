import Image from 'next/image'
import LOGO_FOOTER from "@/public/logo_footer.png"
import HEART from "@/public/heart.png"
import MESSAGE from "@/public/mess.png"
import MY from "@/public/my.png"

export default function Header() {
  return (
    <nav className="flex h-16 w-full items-center justify-around p-5">
      <Image
        width={35}
        height={35}
        src={LOGO_FOOTER}
        alt={'logo'}
        className="cursor-pointer hover:opacity-80"
      />
      <Image
        width={35}
        height={35}
        src={HEART}
        alt={'heart'}
        className="cursor-pointer hover:opacity-80"
      />
      <Image
        width={35}
        height={35}
        src={MESSAGE}
        alt={'message'}
        className="cursor-pointer hover:opacity-80"
      />
      <Image
        width={35}
        height={35}
        src={MY}
        alt={'my'}
        className="cursor-pointer hover:opacity-80"
      />
    </nav>
  )
}
