import React from 'react'
import Services from './components/services/Services'
import Navbar from './components/navbar/Navbar';
import Calculator from './components/Calculator/Calculator';


const dolarValue = async () => {
  const DolarValue = await fetch('https://api.bluelytics.com.ar/v2/latest')
  const data = await DolarValue.json()
  return data
}



const HomePage = async () => {

  const CotizeDolar = await dolarValue()

  return (
    <>
      <Navbar />
      <div
        className='flex flex-col  justify-center min-h-screen py-2 bg-black'
      >
        <h1 className='text-6xl font-bold text-white'>
          Calculadora de impuestos digitales para Argentina.
        </h1>
      </div>

      <div className='flex flex-col items-center justify-center py-5 bg-white'>
        <Calculator CotizeDolar={CotizeDolar} />
      </div>

      <div
        className='flex flex-col items-center justify-center py-5 bg-white'
      >
        <Services CotizeDolar={CotizeDolar} />
      </div>
    </>

  )
}

export default HomePage