import React from 'react'

const Navbar = () => {
    return (
        <div
            className='flex flex-row justify-between items-center fixed top-0 w-full h-20 z-50 bg-black border-b-2 border-green-500'
        >
            <h1
                className='text-2xl font-bold text-white ml-5 hover:text-accent'
            >
                Impuestito 🧉
            </h1>
        </div>
    )
}

export default Navbar