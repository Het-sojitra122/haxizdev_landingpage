import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Haxiz Dev — Premium Web & Python Portfolio",
  description: 'Portfolio of Haxiz Dev, building next-gen web apps and high-performance Python utilities.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-[#050507] text-white font-sans antialiased selection:bg-cyan-500/30">
        {children}
      </body>
    </html>
  )
}
