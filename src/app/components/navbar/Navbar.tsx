'use client'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div
            className='flex flex-row justify-between items-center fixed top-0 w-full h-20 z-50 bg-black border-b-2 border-green-500'
        >
            <Link
                href='/'
            >
                <h1
                    className='text-2xl font-bold text-white ml-5 hover:text-green-500 cursor-pointer transition-all duration-500 ease-in-out'
                >
                    ¿Cuanto me sale? 🧉
                </h1>

            </Link>

        </div>
    )
}

export default Navbar