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
        <div className="flex max-h-screen w-full flex-wrap justify-center">
          <div className="flex h-screen w-full max-w-lg flex-col justify-between bg-[#ECEFF4]">
            {session && <Header />}
            <main className="min-h-screen w-full overflow-y-auto p-10">
              {children}
            </main>
            {/* <Footer /> */}
          </div>
        </div>
      </body>
    </html>
  )
}
