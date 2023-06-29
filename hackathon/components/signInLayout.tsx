'use client'

import type { MouseEventHandler, ReactNode } from 'react'

interface SignupLayoutProps {
  children: ReactNode
  textTop: string
  textBottom: string
  btnText: string
  btnEvent: MouseEventHandler
  subText: string
  subEvent: MouseEventHandler
}

export default function SignInLayout({
  children,
  textTop,
  textBottom,
  btnText,
  btnEvent,
  subText,
  subEvent,
}: SignupLayoutProps) {
  return (
    <div className="flex h-full flex-col justify-around gap-10">
      <h2 className="text-3xl font-bold leading-relaxed">
        {textTop}
        <br />
        {textBottom}
      </h2>
      {children}
      <button
        className="btn w-full border-none bg-[#292929] text-lg text-[#35FF6E] hover:bg-[#292929]"
        onClick={btnEvent}
      >
        {btnText}
      </button>
      <div className="mt-2 text-right">
        <span className="cursor-pointer text-[#9B9B9B]" onClick={subEvent}>
          {subText}
        </span>
      </div>
    </div>
  )
}
