import React from 'react'
import Calculator from './components/Calculator/Calculator';
import Link from 'next/link';

const dolarValue = async () => {
  const DolarValue = await fetch('https://api.bluelytics.com.ar/v2/latest')
  const data = await DolarValue.json()
  return data
}

const HomePage = async () => {
  const CotizeDolar = await dolarValue()
  return (
    <>
      <div
        className='flex flex-col justify-center min-h-screen py-2 bg-black'
      >
        <div
          className='flex  w-auto'
        >
          <span className='type'>
            Calculadora de impuestos digitales para Argentina.
          </span>
        </div>

      </div>

      <div className='flex flex-col items-center justify-center py-5 bg-white border-b-2 border-green-500'>
        <Calculator CotizeDolar={CotizeDolar} />
      </div>

      <div
        className='flex flex-col items-center justify-center py-5 bg-white'
      >
        <h1
          className='text-xl font-bold text-center text-black'
        >¿Quieres saber el precio de tus servicios de Streaming?</h1>

        <Link
          href='/services'
        >
          <h3
            className='text-md  text-center text-black hover:text-blue-500 cursor-pointer'
          >Haz click aca para cotizar el precio de sus servicios favoritos
          </h3>
        </Link>

      </div>
    </>

  )
}

export default HomePage