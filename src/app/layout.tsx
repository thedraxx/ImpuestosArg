import CustomPointer from './components/Pointer/CustomPointer'
import Navbar from './components/navbar/Navbar'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Calculadora de Impuetos Digitales - Argentina',
  description: 'Hola! Esta es una calculadora de impuestos digitales para Argentina.',
  icons: {
    icon: '/mate.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href='/mate.ico' />
      </head>
      <body className={inter.className}>
        <CustomPointer />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
