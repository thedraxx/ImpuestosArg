"use client"
import React, { useState } from 'react'
import PlansServices from './PlansServices';
import Image from 'next/image';

const ServiceInfo = ({ item }: any) => {

    const [isOpen, setisOpen] = useState(false);

    return (
        <>
            <div
                key={item.id}
                className='flex flex-1 flex-row justify-between items-center bg-white w-96  '
            >
                <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                />
                <button
                    className='flex flex-col justify-center items-center'
                    onClick={() => setisOpen(!isOpen)}
                >
                    <h1
                        className='text-2xl font-bold text-black text-center'
                    >
                        {
                            isOpen ? '-' : '+'
                        }
                    </h1>
                </button>
            </div>
            {
                isOpen ? (
                    <div
                        className='flex flex-1 flex-col justify-between items-center bg-white w-96'
                    >
                        {
                            item.plans.map((plan: any) => {
                                return (
                                    <div
                                        className='flex flex-1 justify-between flex-row w-96'
                                        key={plan}
                                    >
                                        <PlansServices
                                            plan={plan}
                                            key={plan}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                ) : (
                    <></>
                )
            }
        </>
    )
}

export default ServiceInfo