import NavBar from './components/NavBar';
import MyProfile from './components/MyProfile';
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Roshan's Blog",
  description: 'Created by Roshan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-slate-800'>
        <NavBar />
        <MyProfile />
        {children}
      </body>
    </html>
  )
}
