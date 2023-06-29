import Image, { StaticImageData } from 'next/image'
import Dummy from '@/public/dummy.png'

export default function ListItem({
  top,
  bottom,
  img,
  date,
}: {
  top: string
  bottom: string
  img?: StaticImageData
  date: string
}) {
  return (
    <div className="relative shrink-0 cursor-pointer overflow-hidden rounded-lg">
      <div className="badge absolute right-3 top-3 border-none bg-[#83FFA6] p-3 text-[12px] text-black">
        {date}
      </div>
      <Image
        src={img ? img : Dummy}
        width={150}
        height={150}
        alt="dummy"
        className="w-full"
      ></Image>
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-b from-transparent to-black" />
      <div className="absolute bottom-3 left-3 w-full pr-5">
        <p className="text-lg font-bold text-white">{top}</p>
        <p className="w-full truncate text-[#83FFA6]">{bottom}</p>
      </div>
    </div>
  )
}
