import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Paponga Games',
  description: 'Videogames develop by paponga',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}