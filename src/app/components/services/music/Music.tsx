'use client';
import Image from 'next/image'
import React from 'react'

const Music = ({ item }: any) => {

    console.log('desde Music', item)

    return (
        <div className=''>
            <button
                className=""
            >
                <Image
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/2048px-Netflix_icon.svg.png'
                    alt='logo'
                    width={50}
                    height={50}
                />
                <h1
                    className='text-xl font-bold text-white'
                >
                    Netflix
                </h1>
            </button>
        </div>
    )

}

export default Music