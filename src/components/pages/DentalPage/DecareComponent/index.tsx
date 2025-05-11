import Heading from 'components/ui/Heading'
import React from 'react'
import Image from 'next/image'

import { Tooth } from 'assets/icons/dental-page'
import { YoungWoman } from 'assets/images/dental-page'

const items = [
    {
        id: 1,
        describe: 'Booking your dental appointment with us has never been easier! With our convenient online booking system, you can schedule your visit at any time, from anywhere.',
        bgId: 'bg-gradientBlueDentalId'
    },
    {
        id: 2,
        describe: 'At our dental practice, we believe that good dental health habits should start early, which is why we are dedicated to providing specialized dental care for children.',
        bgId: 'bg-gradientOrangeDentalId'
    },
    {
        id: 3,
        describe: 'At our dental practice, we want every patient to walk away from their appointment feeling satisfied and confident in their dental health.',
        bgId: 'bg-gradientPinkDentalId'
    }
]

const DecareComponent = () => {
    return (
        <section className='main-container sm:py-20 py-[30px] bg-white'>
            <Heading className='max-w-[861px] sm:mb-[118px] mb-[38px]'>Decare aims to help people make the most of their time.</Heading>
            <div className="flex sm:flex-row flex-col sm:gap-[65px] gap-11 justify-center">
                <Image src={YoungWoman} alt='' className='rounded-full relative' />
                <div className='absolute sm:left-1/3 left-1/2 sm:translate-x-10 translate-x-20 sm:translate-y-0 -translate-y-[440px] flex items-center justify-center bg-orange-50 rounded-full sm:w-20 sm:h-20 w-[60px] h-[60px]'>
                    <img src={Tooth} alt="" className='sm:w-10 sm:h-10 w-[30px] h-[30px]' />
                </div>
                <div className='flex flex-col justify-center'>
                    {items.map((item, index) => (
                        <div key={index}>
                            <div className={`flex items-center justify-center ${item.bgId} w-10 h-10 rounded-full text-white font-poppins text-lg font-semibold mb-5`}>0{item.id}</div>
                            <p className='text-dark1 font-poppins sm:text-lg text-sm font-normal sm:max-w-[541px] max-w-[327px] mb-[30px]'>{item.describe}</p>
                        </div>

                    ))}

                </div>
            </div>
        </section>
    )
}

export default DecareComponent
