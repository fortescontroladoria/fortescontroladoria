import './globals.css'
import { ReactNode } from 'react'
import { Cabin } from 'next/font/google'
import { Header } from '@/components/Header'
import Footer from '@/components/Footer'
import { GridPattern } from '@/components/GridPattern'
// import Script from 'next/script'

const cabin = Cabin({
  subsets: ['latin'],
  variable: '--font-cabin',
  weight: ['400', '500', '600', '700'],
})

export const metadata = {
  title: 'Fortes Controladoria',
  description:
    'Contabilidade Digital. Especializada na Construção Civil. Ao escolher a Fortes Contabilidade, você tem o atendimento humano e personalizado que você merece.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      {/* <Script
        type="text/javascript"
        src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/4357e487-ad7b-4425-9b26-ad9232f7849b-loader.js"
        async
      /> */}
      <body className={`${cabin.variable} h-screen bg-neutral-50 font-cabin`}>
        <Header />
        <GridPattern />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
