import Green from '@/public/green.svg'
import Purple from '@/public/purple.svg'
import Image from 'next/image'

export default function ChatEnd({
  text,
  date,
  type,
}: {
  text: string
  date: string
  type: string
}) {
  return (
    <div className="chat chat-end mt-5">
      <div className="chat-bubble relative bg-white p-4 text-black">
        <Image
          src={type == '0' ? Purple : Green}
          width={35}
          height={35}
          alt="green"
          className="absolute -top-4 right-2"
        />
        {text}
      </div>
      <div className="chat-footer mt-2 text-xs text-white">{date}</div>
    </div>
  )
}
