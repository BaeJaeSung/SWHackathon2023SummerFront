import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <main className="flex h-screen w-full items-center justify-center bg-cyan-500">
          <div className="h-full w-full max-w-lg bg-white">{children}</div>
        </main>
      </body>
    </html>
  )
}
