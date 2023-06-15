import React from 'react'

const PlansServices = ({ plan }: any) => {
    return (
        <div
            className='flex flex-1 flex-col justify-between items-center sm:w-96   '
            key={plan.id}
        >
            {
                Object.keys(plan).map((key: string) => {
                    return (
                        <div
                            className='flex flex-1 justify-between flex-row sm:w-96  mt-5'
                            key={key}
                        >
                            <h1
                                className='text-lg mt-5 sm:w-64 text-left font-bold text-lightBlack '
                            >
                                {key}

                            </h1>
                            <h1
                                className='text-lg mt-5 ml-5 font-bold text-lightBlack text-center'
                            >
                                ${plan[key]}
                            </h1>
                        </div>
                    )
                })}
        </div>
    )
}

export default PlansServices