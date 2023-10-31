import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const nunito = Nunito({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Foodie',
  description: 'Don\'t just be foodie, make tasty food',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
