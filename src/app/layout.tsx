import CustomPointer from './components/Pointer/CustomPointer'
import { Inter } from 'next/font/google'
import './globals.css'

export const dolarValue = async () => {
  const DolarValue = await fetch('https://api.bluelytics.com.ar/v2/latest')
  const data = await DolarValue.json()
  return data
}

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
      <head>
        <link rel="icon" href="/mate.ico" />
      </head>
      <body className={inter.className}>
        <CustomPointer />
        {children}
      </body>
    </html>
  )
}
