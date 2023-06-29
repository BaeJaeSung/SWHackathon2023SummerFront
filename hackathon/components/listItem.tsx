import Image from 'next/image'
import Dummy from '@/public/dummy.png'

export default function ListItem() {
  return (
    <div className="relative shrink-0 cursor-pointer overflow-hidden rounded-lg">
      <div className="badge absolute right-3 top-3 border-none bg-[#83FFA6] p-3 text-[12px] text-black">
        07/06
      </div>
      <Image
        src={Dummy}
        width={160}
        height={160}
        alt="dummy"
        className="w-full"
      ></Image>
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-b from-transparent to-black" />
      <div className="absolute bottom-3 left-3">
        <p className="text-lg font-bold text-white">한국카페</p>
        <p className="text-[#83FFA6]">시급 10,000원</p>
      </div>
    </div>
  )
}
