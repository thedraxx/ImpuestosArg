import CustomPointer from './components/Pointer/CustomPointer'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Calculadora de Impuetos Digitales - Argentina',
  description: 'Hola! Esta es una calculadora de impuestos digitales para Argentina.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <CustomPointer />
        {children}
      </body>
    </html>
  )
}
