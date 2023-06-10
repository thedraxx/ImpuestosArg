"use client";
import { Dolar } from '@/app/interface/iDolarValue';
import React, { useState } from 'react'

interface ServicesProps {
    CotizeDolar: Dolar
}

const Calculator = ({ CotizeDolar }: ServicesProps) => {

    const [price, setPrice] = useState<number | null>(null)
    const [open, setOpen] = useState(false)
    const [isDolarActive, setIsDolarActive] = useState(true);

    const ImpuestoPais = 0.3
    const ImpuestoGanancias = 0.45

    const updateCurrency = (precioRecibido: number) => {


        if (precioRecibido < 0) {
            setPrice(0)
            return
        }

        setPrice(precioRecibido)
    }

    return (
        <div
            className='flex flex-col items-center justify-center py-5 bg-white'
        >
            <h1
                className='text-xl text-black'
            >
                Calculadora de impuestos digitales para Argentina.
            </h1>

            <div
                className='flex flex-row items-center justify-center py-5 bg-white'
            >
                <div
                    className='flex flex-col items-center justify-center py-5 bg-white'
                >
                    <button
                        onClick={() => setOpen(!open)}
                        className='flex flex-row items-center justify-center py-5 bg-slate-300 rounded-xl'
                    >
                        <h2
                            className='text-xl text-black ml-5 mr-5'
                        >
                            {isDolarActive ? "AR$" : "USD"}
                        </h2>
                    </button>

                    <div
                        className={'flex flex-col items-center bg-slate-300 justify-center mt-1 rounded-xl absolute ' + (open ? 'flex' : 'hidden')}
                    >
                        <div
                            className='flex flex-row items-center justify-center mt-1 p-5 bg-slate-300 rounded-xl'
                        >
                            <button
                                onClick={() => {
                                    setIsDolarActive(true)
                                    setOpen(false)
                                }
                                }
                            >
                                <h2
                                    className='text-xl text-black'
                                >
                                    {"AR$"}
                                </h2>
                            </button>
                        </div>
                        <div
                            className='flex flex-row items-center justify-center mt-1 p-5 bg-slate-300 rounded-xl'                        >
                            <button
                                onClick={() => {
                                    setIsDolarActive(false)
                                    setOpen(false)
                                }
                                }
                            >
                                <h2
                                    className='text-xl text-black'
                                >
                                    {"USD"}
                                </h2>
                            </button>
                        </div>



                    </div>
                </div>


                <input
                    type="number"
                    name="price"
                    value={price || ''}
                    onChange={(e) => updateCurrency(Number(e.target.value))}
                />

            </div>

            <div
                className='flex flex-col items-center justify-center py-5 bg-white'
            >

                <h2
                    className='text-xl text-black'
                >
                    Cotizacion Dolar Oficial: AR${" " + CotizeDolar.oficial.value_buy}
                </h2>


                {
                    isDolarActive ?

                        <h2
                            className='text-xl text-black'
                        >
                            Sin impuestos: USD${price!}
                        </h2>
                        :
                        <h2
                            className='text-xl text-black'
                        >
                            Sin impuestos: AR${price! * CotizeDolar.oficial.value_buy}
                        </h2>
                }

                <h2
                    className='text-xl text-black'
                >
                    {
                        isDolarActive ?
                            <h2>
                                +Impuesto Pais(30%): AR${Math.round(price! * ImpuestoPais)}
                            </h2>
                            :
                            <h2>
                                +Impuesto Pais(30%): AR${Math.round(price! * ImpuestoPais * CotizeDolar.oficial.value_buy)}
                            </h2>
                    }
                </h2>
                <h2
                    className='text-xl text-black'
                >
                    {
                        isDolarActive ?
                            <h2>
                                +Impuesto Ganancias(45%): AR${Math.round(price! * ImpuestoGanancias)}
                            </h2>
                            :
                            <h2>
                                +Impuesto Ganancias(45%): AR${Math.round(price! * CotizeDolar.oficial.value_buy * ImpuestoGanancias)}
                            </h2>
                    }
                </h2>

                <h2
                    className='text-xl text-black'
                >
                    {
                        isDolarActive ?

                            <h2>
                                Total con Impuestos: AR${price! + price! * ImpuestoPais + price! * ImpuestoGanancias}
                            </h2>
                            :
                            <h2>
                                Total con Impuestos: AR${price! * CotizeDolar.oficial.value_buy + price! * CotizeDolar.oficial.value_buy * ImpuestoPais + price! * CotizeDolar.oficial.value_buy * ImpuestoGanancias}
                            </h2>
                    }
                </h2>
            </div>

        </div>
    )
}

export default Calculator