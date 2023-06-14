import Image from 'next/image'
import React from 'react'
import MyGif from '../../../public/Ricardo.gif'

const page = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-5 rounded-xl w-screen h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"
        >
            <h1
                className="text-5xl text-white font-bold transition-all duration-500 ease-in-out transform hover:scale-110"
            >
                ERROR
            </h1>


            <div
                className="flex flex-row items-center justify-center py-5 rounded-xl "
            >
                <Image
                    src={MyGif}
                    alt="Ricardo Fort"
                    width={300}
                    height={300}
                    style={{
                        borderRadius: '50%',
                        boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.75)',
                        transition: 'all 0.5s ease-in-out',
                        transform: 'scale(1)',
                    }}
                />
            </div>
            <h2
                className="text-2xl text-white font-bold transition-all duration-500 ease-in-out transform hover:scale-110"
            >
                Te mandaste una cagada hermano, flasheaste Ricardo Fort, te fuiste al carajo con los numeros.
            </h2>
        </div>
    )
}

export default page