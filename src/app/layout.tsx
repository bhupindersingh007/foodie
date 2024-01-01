import type { Metadata } from 'next'
import { Rubik, Shadows_Into_Light_Two } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap'
})

const shadows_into_light = Shadows_Into_Light_Two({
  subsets : ['latin'],
  weight : ['400'],
  variable: '--font-shadows-into-light-2',
  display: 'swap'
})


export const metadata: Metadata = {
  title: 'Foodie',
  description: 'Don\'t just be foodie, make tasty food.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${shadows_into_light.variable}`}>
      <body className={ rubik.className }>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
