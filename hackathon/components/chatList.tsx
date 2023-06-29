import Image from 'next/image'
import Green from '@/public/green.svg'
import Purple from '@/public/purple.svg'

export default function ChatList({ sender, recent, type, onClick }: any) {
  return (
    <div
      className="flex h-24 w-full shrink-0 cursor-pointer flex-nowrap items-center gap-3 rounded-lg bg-white p-5"
      onClick={onClick}
    >
      <div className="rounded-full  pr-1  text-white">
        <Image
          src={type == 0 ? Green : Purple}
          alt="profile"
          width={50}
          height={50}
        />
      </div>
      <div>
        <p className="text-xl font-bold">{sender}</p>
        <p className="text-lg text-gray-400">{recent}</p>
      </div>
    </div>
  )
}
