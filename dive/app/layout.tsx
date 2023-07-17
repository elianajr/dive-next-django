import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer, Navbar } from '../components/common'
import Provider from '../redux/provider'
import Setup from '@/components/utils/Setup'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dive App',
  description: 'Dive app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Setup />
          <Navbar />
          <div>{children}</div>
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
