"use client"
import SignUpLayout from "@/components/signUpLayout"
import { useRouter } from "next/navigation"

export default function SignUpDetailPage() {
  const router = useRouter()
  const onClick = () => {
    router.push('/');
  }
  return (
    <SignUpLayout
      textTop="00님의"
      textBottom="자기소개가 궁금해요!"
      btnText="다음"
      btnEvent={onClick}
    >
      <div className="flex flex-col gap-5">
        <div>
          <label htmlFor="detail" className="cursor-pointer">
            나의 정보
          </label>
          <input
            id="detail"
            type="text"
            className="bg-white-200 input mt-2 w-full "
          />
        </div>
        <div>
          <label htmlFor="edu" className="cursor-pointer" className="label">
            {/*<span className="label-text"></span>*/}학력
          </label>
          <select id="edu" className="select w-full max-w-xs">
            <option selected>대졸</option>
            <option>초졸</option>
            <option>중졸</option>
            <option>고졸</option>
          </select>
        </div>
        <div>
          <div className="mb-3">아르바이트 근무 경험이 있다면?</div>
          <div>
            <label htmlFor="company" className="cursor-pointer">
              회사명
            </label>
            <input
              id="company"
              type="text"
              className="bg-white-200 input mt-2 w-full"
            />
          </div>
        </div>
        <div>
          <label htmlFor="period" className="cursor-pointer" className="label">
            {/*<span className="label-text"></span>*/}근무 기간
          </label>
          <select id="period" className="select w-full max-w-xs">
            <option selected>3일 이하</option>
            <option>1주일</option>
            <option>1개월</option>
            <option>3개월</option>
            <option>6개월</option>
            <option>1년</option>
            <option>1년 이상</option>
          </select>
        </div>
        <div>
          <div>
            <label htmlFor="exp" className="cursor-pointer">
              근무를 통한 나의 경험
            </label>
            <input
              id="exp"
              type="text"
              className="bg-white-200 input mt-2 w-full"
            />
          </div>
        </div>
      </div>
    </SignUpLayout>
  )
}
