import Image from 'next/image'

export default function GridCard() {
  return (
    <div className="rounded-lg bg-[#292929] p-8 text-white">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <span className="text-xl font-semibold text-white">
            이래영 <span className="text-lg text-[#35FF6E]">26</span>
          </span>
        </div>
        <div>
          <button className="rounded-full bg-white px-4 py-1 text-xs font-semibold text-[#292929]">
            축소하기
          </button>
        </div>
      </div>
      <div className="mb-5 text-white">
        안녕하세요, 카페 아르바이트를 구하고 있는 22살 이래영입니다. 저는
        바리스타 자격증 1급이 있으며, 책임감이 강합니다. 최근 1년간 집에서
        무기력하게 지내다 빛나는 연결을 접한 후 다시 바리스타의 꿈을 꾸기
        시작했어요!
      </div>

      <div className="mb-3 font-semibold text-white">
        학력<span className="font-normal text-white">&nbsp;대졸</span>
      </div>
      <div className="mb-3 font-semibold text-white">
        아르바이트 근무 경험
        <span className="font-normal text-white">&nbsp;있음</span>
      </div>

      <div className="mb-3 grid items-center justify-between">
        <div className="flex">
          <div className="bg-gray mr-4 h-48 w-1 rounded-sm bg-[#35FF6E]">
            &nbsp;
          </div>
          <div className="w-full  rounded-lg bg-white p-5">
            <div className="mb-3 font-semibold text-[#292929]">
              회사명
              <span className="font-normal text-[#292929]">&nbsp;우리카페</span>
            </div>
            <div className="mb-3 font-semibold text-[#292929]">
              근무기간
              <span className="font-normal text-[#292929]">&nbsp;3개월</span>
            </div>
            <div className="font-semibold text-[#292929]">
              근무를 통한 나의 경험
              <p className="mt-1 font-normal text-[#292929]">
                커피 만드는 것이 즐거웠고, 근무하면서
                커피커피커피커피커피커피커피
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-3 font-semibold text-white">
        사진
        <div className="my-3 w-full overflow-x-auto whitespace-nowrap">
          <div className="flex gap-5">
            <div className=" h-[180px] w-[150px] flex-shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white">
              <Image
                src={`https://swhackathon.s3.ap-northeast-2.amazonaws.com/name_1.jpg`}
                alt="ex"
                width={150}
                height={180}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex h-[180px]  w-[150px] flex-shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white">
              <Image
                src={`https://swhackathon.s3.ap-northeast-2.amazonaws.com/name_2.jpg`}
                alt="ex"
                width={150}
                height={180}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex h-[180px] w-[150px] flex-shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white">
              <Image
                src={`https://swhackathon.s3.ap-northeast-2.amazonaws.com/name_3.jpg`}
                alt="ex"
                width={150}
                className="h-full w-full object-cover"
                height={180}
              />
            </div>
            <div className="flex h-[180px]  w-[150px] flex-shrink-0 items-center justify-center  overflow-hidden rounded-lg bg-white">
              <Image
                src={`https://swhackathon.s3.ap-northeast-2.amazonaws.com/name_4.jpg`}
                alt="ex"
                className="h-full w-full object-cover"
                width={150}
                height={180}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}