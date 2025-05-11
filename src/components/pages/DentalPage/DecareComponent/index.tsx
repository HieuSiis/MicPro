import Image from 'next/image'
import React from 'react'

import { Tooth } from 'assets/icons/dental-page'
import { YoungWoman } from 'assets/images/dental-page'
import Heading from 'components/ui/Heading'

const items = [
  {
    id: 1,
    describe:
      'Booking your dental appointment with us has never been easier! With our convenient online booking system, you can schedule your visit at any time, from anywhere.',
    bgId: 'bg-gradientBlueDentalId',
  },
  {
    id: 2,
    describe:
      'At our dental practice, we believe that good dental health habits should start early, which is why we are dedicated to providing specialized dental care for children.',
    bgId: 'bg-gradientOrangeDentalId',
  },
  {
    id: 3,
    describe:
      'At our dental practice, we want every patient to walk away from their appointment feeling satisfied and confident in their dental health.',
    bgId: 'bg-gradientPinkDentalId',
  },
]

const DecareComponent = () => {
  return (
    <section className='main-container bg-white py-[30px] sm:py-20'>
      <Heading className='mb-[38px] max-w-[861px] sm:mb-[118px]'>
        Decare aims to help people make the most of their time.
      </Heading>
      <div className='flex flex-col justify-center gap-11 sm:flex-row sm:gap-[65px]'>
        <Image src={YoungWoman} alt='' className='relative rounded-full' />
        <div className='absolute left-1/2 flex h-[60px] w-[60px] -translate-y-[440px] translate-x-20 items-center justify-center rounded-full bg-orange-50 sm:left-1/3 sm:h-20 sm:w-20 sm:translate-x-10 sm:translate-y-0'>
          <img src={Tooth} alt='' className='h-[30px] w-[30px] sm:h-10 sm:w-10' />
        </div>
        <div className='flex flex-col justify-center'>
          {items.map((item, index) => (
            <div key={index}>
              <div
                className={`flex items-center justify-center ${item.bgId} mb-5 h-10 w-10 rounded-full font-poppins text-lg font-semibold text-white`}
              >
                0{item.id}
              </div>
              <p className='mb-[30px] max-w-[327px] font-poppins text-sm font-normal text-dark1 sm:max-w-[541px] sm:text-lg'>
                {item.describe}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DecareComponent
