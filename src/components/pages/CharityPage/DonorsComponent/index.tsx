import { Avatar1, Avatar2, Avatar3, Avatar4, Avatar5, Avatar6 } from 'assets/images/charity-page'
import Heading from 'components/ui/Heading'
import Image from 'next/image'
import React from 'react'

const donors = [
    {
        id: 1,
        avatar: Avatar1,
        name: 'Micle James',
        price: '$1,225.00'
    },
    {
        id: 2,
        avatar: Avatar2,
        name: 'Micle James',
        amount: '$1,225.00'
    },
    {
        id: 3,
        avatar: Avatar3,
        name: 'Micle James',
        amount: '$1,225.00'
    },
    {
        id: 4,
        avatar: Avatar4,
        name: 'Micle James',
        amount: '$1,225.00'
    },
    {
        id: 5,
        avatar: Avatar5,
        name: 'Micle James',
        amount: '$1,225.00'
    },
    {
        id: 6,
        avatar: Avatar6,
        name: 'Micle James',
        amount: '$1,225.00'
    }
]
const DonorsComponent = () => {
    return (
        <section className='sm:main-container sm:pt-[100px] pt-[70px] '>
            <Heading>Top <span className='text-primary'>Donors</span></Heading>
            <div className='grid sm:grid-cols-3 grid-cols-1 mt-20 gap-7 justify-items-center'>
                {donors.map((item, index) => (
                    <div key={index} className='flex items-center p-6 justify-between border hover:shadow-md hover:bg-white border-grayD9 sm:w-[370px] w-[327px] h-[100px] rounded-xl '>
                        <Image src={item.avatar} alt='' width={60} height={60} className='rounded-full'></Image>

                        <div className='flex flex-col space-y-1 sm:-ml-20 -ml-16 '>
                            <h5 className='text-dark font-semibold text-lg'>{item.name}</h5>
                            <span className='text-dark1 text-lg font-normal'>{item.amount}</span>
                        </div>
                        <div className='bg-orange-400 rounded-full w-6 h-6 text-white flex justify-center items-center'>{item.id}</div>
                    </div>
                ))}

            </div>
        </section>
    )
}

export default DonorsComponent
