import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const nunito = Rubik({
  subsets: ['latin'],
  weight: ['400']
})


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
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
