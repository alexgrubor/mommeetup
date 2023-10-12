import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const openSens = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mom Meet Up',
  description: 'Platform form moms',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className='mx-auto max-w-screen-xl'>
          <Navbar/>
          {children}
          <Footer/>
          </body>
      </html>
    </ClerkProvider>
  )
}
