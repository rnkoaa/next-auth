// https://blog.bitsrc.io/adding-nextauth-to-nextjs-13-and-authenticating-with-github-40539ca6a81c

import Provider from './components/Provider/page'
import './globals.css'
import { Inter } from 'next/font/google'
// import { SessionPro}

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
          {children}
        </Provider>
      </body>
    </html>
  )
}
