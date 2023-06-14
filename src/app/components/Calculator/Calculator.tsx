"use client";
import { Dolar } from '@/app/interface/iDolarValue';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

interface ServicesProps {
    CotizeDolar: Dolar
}

const Calculator = ({ CotizeDolar }: ServicesProps) => {

    const [price, setPrice] = useState<number | null>(null)
    const [open, setOpen] = useState(false)
    const [isDolarActive, setIsDolarActive] = useState(true);
    const redirect = useRouter()

    useEffect(() => {
        if (price! > 100000) {
            redirect.push('/error')
        }
    }, [price])



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
        <div className="flex flex-col items-center justify-center py-5 bg-white rounded-xl w-96">
            <h1
                className="md:text-3xl text-md text-center text-black font-bold"
            >
                Calculadora de impuestos digitales para Argentina.
            </h1>

            <div className="flex flex-row items-center justify-center py-5 bg-white">
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
                        className={'flex flex-col items-center justify-center  mt-1 rounded-xl absolute ' + (open ? 'flex' : 'hidden')}
                    >
                        <div
                            className='flex flex-row items-center justify-center mt-28 p-5 rounded-xl bg-white border-2 border-slate-300 hover:bg-slate-300 hover:text-white '
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
                            className='flex flex-row items-center justify-center mt-1 p-5 rounded-xl ' >
                            <button
                                className='flex flex-row items-center justify-center mt-1 p-5 rounded-xl bg-white border-2 border-slate-300 hover:bg-slate-300 hover:text-white'
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

                <div className="flex flex-row items-center justify-center py-5 bg-white ml-5">
                    <h2 className="text-xl text-black font-bold">$</h2>
                    <input
                        className="flex flex-row items-center justify-center py-5 bg-white rounded-xl border-2 border-slate-300 text-xl text-black font-bold sm:w-96 w-52"
                        type="number"
                        name="price"
                        value={price || ""}
                        onChange={(e) => updateCurrency(Number(e.target.value))}
                    />
                </div>
            </div>

            <div className="flex flex-col items-center justify-center py-5 bg-white w-96">
                <h2 className="text-md text-black">
                    Cotizacion Dolar Oficial: AR$ {CotizeDolar.oficial.value_buy}
                </h2>

                {isDolarActive ? (
                    <h2 className="text-md text-black">Sin impuestos: AR$ {price}</h2>
                ) : (
                    <h2 className="text-md text-black">
                        Sin impuestos: AR$ {price! * CotizeDolar.oficial.value_buy}
                    </h2>
                )}

                <h2 className="text-md text-black">
                    + Impuesto Pais(30%): AR$ {isDolarActive ? Math.round(price! * ImpuestoPais) : Math.round(price! * ImpuestoPais * CotizeDolar.oficial.value_buy)}
                </h2>

                <h2 className="text-md text-black">
                    + Impuesto Ganancias(45%): AR$ {isDolarActive ? Math.round(price! * ImpuestoGanancias) : Math.round(price! * CotizeDolar.oficial.value_buy * ImpuestoGanancias)}
                </h2>

                {isDolarActive ? (
                    <h2
                        className="text-md text-black"
                    >Total con Impuestos: AR$ {price! + price! * ImpuestoPais + price! * ImpuestoGanancias}</h2>
                ) : (
                    <h2
                        className="text-md text-black"
                    >
                        Total con Impuestos: AR$
                        {price! * CotizeDolar.oficial.value_buy + price! * CotizeDolar.oficial.value_buy * ImpuestoPais + price! * CotizeDolar.oficial.value_buy * ImpuestoGanancias}
                    </h2>
                )}
            </div>
        </div>

    )
}

export default Calculator