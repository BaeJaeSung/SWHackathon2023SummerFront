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
    <div className="flex h-full flex-col justify-between px-10 py-16">
      <h2 className="text-3xl font-bold leading-relaxed">
        {textTop}
        <br />
        {textBottom}
      </h2>
      <div className="mt-12 h-full">{children}</div>
      <button
        className="hover:bg-[#292929] btn w-full border-none bg-[#292929] text-[#35FF6E]"
        onClick={btnEvent}
      >
        {btnText}
      </button>
    </div>
  )
}
