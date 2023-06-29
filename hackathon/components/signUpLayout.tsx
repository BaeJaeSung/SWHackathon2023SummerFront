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
      <button
        className="btn flex h-16 w-full items-center justify-center border-none bg-[#00396E] text-lg text-white hover:bg-[#00396E]"
        onClick={btnEvent}
      >
        {btnText}
      </button>
    </div>
  )
}
