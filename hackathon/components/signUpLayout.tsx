'use client'

import type { MouseEventHandler, ReactNode } from 'react'

interface SignupLayoutProps {
  children: ReactNode
  textTop: string
  textBottom: string
  btnText: string
  btnEvent: MouseEventHandler
}

export default function SignUpLayout({
  children,
  textTop,
  textBottom,
  btnText,
  btnEvent,
}: SignupLayoutProps) {
  return (
    <div className="flex h-full flex-col justify-around gap-10">
      <h2 className="text-3xl font-bold leading-relaxed">
        {textTop}
        <br />
        {textBottom}
      </h2>
      {children}
      {btnText !== '로그인' && (
        <button
          className="btn w-full border-none bg-[#292929] text-lg text-[#35FF6E] hover:bg-[#292929]"
          onClick={btnEvent}
        >
          {btnText}
        </button>
      )}
    </div>
  )
}
