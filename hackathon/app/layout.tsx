import Footer from '@/components/footer'
import './globals.css'
import Header from '@/components/header'
import { Noto_Sans } from 'next/font/google'

const noto = Noto_Sans({ subsets: ['latin'], weight: ['400', '600', '700'] })

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
      <body className={noto.className}>
        <div className="flex h-screen w-full flex-wrap items-center justify-center">
          <div className="bg-gray-10 flex h-full w-full max-w-lg flex-col justify-between bg-[#EFEFED]">
            <Header />
            <main className="h-full w-full">{children}</main>
            {/* <Footer /> */}
          </div>
        </div>
      </body>
    </html>
  )
}
