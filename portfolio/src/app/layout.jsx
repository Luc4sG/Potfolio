import HeaderComp from '../components/HeaderComp';
import { Inter } from 'next/font/google'
import { TProvider } from '../app/TProvider'

import './globals.css' 

const inter = Inter({ subsets: ['latin'] })



export const metadata = {
  title: 'Portfolio Lucas G',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <TProvider attribute="class">
      <HeaderComp/>
       {children}        
       </TProvider>
      </body>
    </html>
  )
}
