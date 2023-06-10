'use client';
import Image from 'next/image'
import React, { useState } from 'react'

const Streaming = ({ item, CotizeDolar }: any) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='flex flex-1 w-full h-full justify-center items-center bg-slate-400 p-7  rounded-md mt-5 mb-5 '
        >
            <div>
                <div
                    className='flex flex-row justify-between items-center pl-10 pr-10'
                >
                    <Image
                        src={item.image}
                        alt='logo'
                        width={80}
                        height={80}
                    />

                    <button
                        className='flex flex-row justify-between items-center'
                        onClick={() => setIsOpen(!isOpen)}
                    >


                        <h1
                            className='text-xl font-bold text-white ml-12'
                        >
                            {
                                isOpen ? '-' : '+'
                            }
                        </h1>

                    </button>
                </div>


                <div
                    className={'flex flex-col justify-center items-center ' + (isOpen ? 'flex' : 'hidden')}
                >
                    <h1
                        className='text-md font-bold text-white text-center mt-3.5'
                    >
                        {item.name}
                    </h1>
                    <h1
                        className='text-md font-bold text-white text-center mt-2.5'
                    >

                    </h1>


                    {
                        item.name === 'Netflix' ? (
                            item.price.map((price: number) => {
                                return (
                                    <h1
                                        key={price}
                                        className='text-md font-bold text-white text-center mt-3.5'
                                    >
                                        aa ${price}
                                    </h1>
                                )
                            }
                            )
                        ) : (
                            <h1
                                className='text-md font-bold text-white text-center mt-3.5'
                            >
                                ${item.price}
                            </h1>
                        )

                    }


                    {
                        item.price.map((price: number) => {
                            return (
                                <h1
                                    key={price}
                                    className='text-md font-bold text-white text-center mt-3.5'
                                >
                                    ${price}
                                </h1>
                            )
                        }
                        )
                    }

                </div>
            </div>





        </div>
    )

}

export default Streaming