import Footer from './_components/Footer'
import NavBar from './_components/NavBar'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '800']
})

export const metadata = {
  title: 'Technoverse',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NavBar/>
        {children}
        <Footer />
        </body>
    </html>
  )
}
