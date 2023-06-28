import './globals.css'
// import { Noto_Sans } from 'next/font/google'

// const noto = Noto_Sans({ subsets: ['latin'], weight:['400','600','700'] })

export const metadata = {
  title: 'hackathon',
  description: '2023',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className="flex h-screen w-full items-center justify-center bg-slate-100">
          <div className="h-full w-full max-w-lg bg-white">{children}</div>
        </main>
      </body>
    </html>
  )
}
