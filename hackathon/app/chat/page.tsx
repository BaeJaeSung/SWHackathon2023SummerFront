import Image from 'next/image'
import Dummy from '@/public/dummy.png'

export default function ChatPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold">나와 매칭된 사장님</h2>
      <div className="mt-5 overflow-x-auto">
        <div className="flex w-full flex-nowrap gap-3 ">
          <div className="relative shrink-0 overflow-hidden rounded-lg">
            <div className="badge absolute right-3 top-3 border-none bg-[#83FFA6] p-3 text-[12px] text-black">
              07/06
            </div>
            <Image src={Dummy} width={160} height={160} alt="dummy"></Image>
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-b from-transparent to-black"></div>
            <div className="absolute bottom-3 left-3">
              <p className="text-xl font-bold text-white">한국카페</p>
              <p className="text-[#83FFA6]">시급 10,000원</p>
            </div>
          </div>

          <div className="relative shrink-0 overflow-hidden rounded-lg">
            <div className="badge absolute right-3 top-3 border-none bg-[#83FFA6] p-3 text-[12px] text-black">
              07/06
            </div>
            <Image src={Dummy} width={160} height={160} alt="dummy"></Image>
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-b from-transparent to-black"></div>
            <div className="absolute bottom-3 left-3">
              <p className="text-xl font-bold text-white">한국카페</p>
              <p className="text-[#83FFA6]">시급 10,000원</p>
            </div>
          </div>

          <div className="relative shrink-0 overflow-hidden rounded-lg">
            <div className="badge absolute right-3 top-3 border-none bg-[#83FFA6] p-3 text-[12px] text-black">
              07/06
            </div>
            <Image src={Dummy} width={160} height={160} alt="dummy"></Image>
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-b from-transparent to-black"></div>
            <div className="absolute bottom-3 left-3">
              <p className="text-xl font-bold text-white">한국카페</p>
              <p className="text-[#83FFA6]">시급 10,000원</p>
            </div>
          </div>

          <div className="relative shrink-0 overflow-hidden rounded-lg">
            <div className="badge absolute right-3 top-3 border-none bg-[#83FFA6] p-3 text-[12px] text-black">
              07/06
            </div>
            <Image src={Dummy} width={160} height={160} alt="dummy"></Image>
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-b from-transparent to-black"></div>
            <div className="absolute bottom-3 left-3">
              <p className="text-xl font-bold text-white">한국카페</p>
              <p className="text-[#83FFA6]">시급 10,000원</p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="mb-5 mt-10 text-2xl font-bold">채팅</h2>
      <div className="flex flex-col gap-5 overflow-y-auto">
        <div className="w-full rounded-lg bg-white p-5">
          <p className="text-lg font-semibold">미국카페</p>
          <p className="text-sm text-gray-400">
            미국카페와의 가장 최신 채팅이 들어갈 자리입니다.
          </p>
        </div>
        <div className="w-full rounded-lg bg-white p-5">
          <p className="text-lg font-semibold">미국카페</p>
          <p className="text-sm text-gray-400">
            미국카페와의 가장 최신 채팅이 들어갈 자리입니다.
          </p>
        </div>
        <div className="w-full rounded-lg bg-white p-5">
          <p className="text-lg font-semibold">미국카페</p>
          <p className="text-sm text-gray-400">
            미국카페와의 가장 최신 채팅이 들어갈 자리입니다.
          </p>
        </div>
        <div className="w-full rounded-lg bg-white p-5">
          <p className="text-lg font-semibold">미국카페</p>
          <p className="text-sm text-gray-400">
            미국카페와의 가장 최신 채팅이 들어갈 자리입니다.
          </p>
        </div>
      </div>
    </div>
  )
}
