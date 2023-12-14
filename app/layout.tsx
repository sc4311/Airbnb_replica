import type { Metadata } from 'next'
import {Nunito} from 'next/font/google'
import './globals.css'
import Navbar from "@/app/Components/Navbar/Navbar";
import Modal from "@/app/Components/Modals/Modal";

export const metadata: Metadata = {
  title: 'Next Airbnb',
  description: 'new version of airbnb',
}

const font = Nunito({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
      <Navbar />
      {children}
      <Modal actionLabel="Submit" title = "hello" isOpen={true}/>
      </body>
    </html>
  )
}
