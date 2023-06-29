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
      <div>
        <button
          className="btn flex h-16 w-full items-center justify-center border-none bg-[#00396E] text-lg text-white hover:bg-[#00396E]"
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
    </div>
  )
}
