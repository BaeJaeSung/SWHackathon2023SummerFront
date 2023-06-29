import Footer from '@/components/footer'
import './globals.css'
import Header from '@/components/header'
import { Noto_Sans } from 'next/font/google'
import { getSession } from '@/lib/api'

const noto = Noto_Sans({ subsets: ['latin'], weight: ['400', '600', '700'] })

export const metadata = {
  title: 'hackathon',
  description: '2023',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getSession()
  return (
    <html lang="en">
      <body className={noto.className}>
        <div className="over flex max-h-screen w-full flex-wrap items-center justify-center">
          <div className="bg-gray-10 flex h-screen w-full max-w-lg flex-col justify-between bg-[#EFEFED]">
            {session && <Header />}
            <main className="h-full w-full overflow-y-scroll">{children}</main>
            {/* <Footer /> */}
          </div>
        </div>
      </body>
    </html>
  )
}
