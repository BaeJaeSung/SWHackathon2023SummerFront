import type { ReactNode } from 'react'

interface SignupLayoutProps {
  children: ReactNode
  textTop: string
  textBottom: string
  btnText: string
}

export default function SignUpLayout({
  children,
  textTop,
  textBottom,
  btnText,
}: SignupLayoutProps) {
  return (
    <div className="flex h-full flex-col justify-between px-10 py-16">
      <h2 className="text-3xl font-bold">
        {textTop}
        <br />
        {textBottom}
      </h2>
      <div>{children}</div>
      <button className="btn w-full border-none bg-gray-500 text-white">
        {btnText}
      </button>
    </div>
  )
}
