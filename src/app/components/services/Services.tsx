"use client";
import Image from 'next/image';
import React from 'react'

const Services = () => {
    return (
        <div
            className='flex flex-col items-center justify-center  py-2 bg-white'
        >
            <div
                className='grid grid-cols-4 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4'
            >
                <button
                    className="collapse-button mr-5 ml-5 p-5 bg-black border-2 border-white rounded-lg flex flex-row justify-center items-center"
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


                <button
                    className="collapse-button mr-5 ml-5 p-5 bg-black border-2 border-white rounded-lg flex flex-row justify-center items-center"
                >
                    <Image
                        src='https://hbomax-images.warnermediacdn.com/2020-05/square%20social%20logo%20400%20x%20400_0.png'
                        alt='logo'
                        width={50}
                        height={50}
                    />
                    <h1
                        className='text-xl font-bold text-white ml-5'
                    >
                        HBO Max
                    </h1>
                </button>

                <button
                    className="collapse-button mr-5 ml-5 p-5 bg-black border-2 border-white rounded-lg flex flex-row justify-center items-center"
                >
                    <Image
                        src='https://static.vecteezy.com/system/resources/previews/019/614/399/non_2x/amazon-logo-amazon-icon-free-free-vector.jpg'
                        alt='logo'
                        width={50}
                        height={50}
                    />
                    <h1
                        className='text-xl font-bold text-white ml-5'
                    >
                        Amazon Prime
                    </h1>
                </button>

                <button
                    className="collapse-button mr-5 ml-5 p-5 bg-black border-2 border-white rounded-lg flex flex-row justify-center items-center"
                >
                    <Image
                        src='https://seeklogo.com/images/D/disney-logo-9649A88458-seeklogo.com.png'
                        alt='logo'
                        width={50}
                        height={50}
                    />
                    <h1
                        className='text-xl font-bold text-white ml-5'
                    >
                        Disney +
                    </h1>
                </button>

                <button
                    className="collapse-button mr-5 ml-5 p-5 bg-black border-2 border-white rounded-lg flex flex-row justify-center items-center"
                >
                    <Image
                        src='https://seeklogo.com/images/D/disney-logo-9649A88458-seeklogo.com.png'
                        alt='logo'
                        width={50}
                        height={50}
                    />
                    <h1
                        className='text-xl font-bold text-white ml-5'
                    >
                        Star +
                    </h1>
                </button>

                <button
                    className="collapse-button mr-5 ml-5 p-5 bg-black border-2 border-white rounded-lg flex flex-row justify-center items-center"
                >
                    <Image
                        src='https://seeklogo.com/images/D/disney-logo-9649A88458-seeklogo.com.png'
                        alt='logo'
                        width={50}
                        height={50}
                    />
                    <h1
                        className='text-xl font-bold text-white ml-5'
                    >
                        Apple TV
                    </h1>
                </button>

                <button
                    className="collapse-button mr-5 ml-5 p-5 bg-black border-2 border-white rounded-lg flex flex-row justify-center items-center"
                >
                    <Image
                        src='https://seeklogo.com/images/D/disney-logo-9649A88458-seeklogo.com.png'
                        alt='logo'
                        width={50}
                        height={50}
                    />
                    <h1
                        className='text-xl font-bold text-white ml-5'
                    >
                        Peacock
                    </h1>
                </button>


            </div>
        </div>
    )
}

export default Services