import React from 'react'

export const dolarValue = async () => {
    const DolarValue = await fetch('https://api.bluelytics.com.ar/v2/latest')
    const data = await DolarValue.json()
    return data
}

const CotRealTime = async ({ price, isDolarActive }: any) => {

    const CotizeDolar = await dolarValue()
    const ImpuestoPais = 0.3
    const ImpuestoGanancias = 0.45

    return (
        <div className="flex flex-col items-center justify-center py-5 bg-white">
            <h2 className="text-xl text-black">
                Cotizacion Dolar Oficial: AR$ {CotizeDolar.oficial.value_buy}
            </h2>

            {isDolarActive ? (
                <h2 className="text-xl text-black">Sin impuestos: AR$ {price}</h2>
            ) : (
                <h2 className="text-xl text-black">
                    Sin impuestos: AR$ {price! * CotizeDolar.oficial.value_buy}
                </h2>
            )}

            <h2 className="text-xl text-black">
                + Impuesto Pais(30%): AR$ {isDolarActive ? Math.round(price! * ImpuestoPais) : Math.round(price! * ImpuestoPais * CotizeDolar.oficial.value_buy)}
            </h2>

            <h2 className="text-xl text-black">
                + Impuesto Ganancias(45%): AR$ {isDolarActive ? Math.round(price! * ImpuestoGanancias) : Math.round(price! * CotizeDolar.oficial.value_buy * ImpuestoGanancias)}
            </h2>

            {isDolarActive ? (
                <h2
                    className="text-xl text-black"
                >Total con Impuestos: AR$ {price! + price! * ImpuestoPais + price! * ImpuestoGanancias}</h2>
            ) : (
                <h2
                    className="text-xl text-black"
                >
                    Total con Impuestos: AR$
                    {price! * CotizeDolar.oficial.value_buy + price! * CotizeDolar.oficial.value_buy * ImpuestoPais + price! * CotizeDolar.oficial.value_buy * ImpuestoGanancias}
                </h2>
            )}
        </div>
    )
}

export default CotRealTime