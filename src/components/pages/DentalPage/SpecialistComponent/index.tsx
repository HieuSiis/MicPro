import { StarFilled } from '@ant-design/icons'
import Image from 'next/image'
import React from 'react'

import { Doctor1, Doctor2, Doctor3 } from 'assets/images/dental-page'
import Arrow from 'assets/images/nft-page/arrow-gray.svg'
import RadiusButton from 'components/ui/Button/RadiusButton'
import Heading from 'components/ui/Heading'

const specialists = [
  {
    img: Doctor1,
    name: 'Dr. Melissa Smith',
    rating: 4.8,
    numberOfReviews: 252,
    position: 'Dental',
  },
  {
    img: Doctor2,
    name: 'Dr. Melissa Smith',
    rating: 4.8,
    numberOfReviews: 252,
    position: 'Dental',
  },
  {
    img: Doctor3,
    name: 'Dr. Melissa Smith',
    rating: 4.8,
    numberOfReviews: 252,
    position: 'Dental',
  },
]

const SpecialistComponent = () => {
  return (
    <section className='main-container'>
      <Heading>
        Our Dental <span className='text-primary'>Specialist</span>
      </Heading>
      <p className='mx-auto mt-6 max-w-[300px] text-center font-poppins text-base font-normal text-dark1 sm:max-w-[509px] sm:text-xl'>
        Clinical excellence must be the priority for any health care service provider.
      </p>
      <div className='mt-[57px] flex items-center gap-5 overflow-auto whitespace-nowrap sm:flex-wrap sm:gap-10'>
        {specialists.map((item, index) => (
          <div
            key={index}
            className='flex max-w-[327px] flex-shrink-0 flex-col items-center justify-center rounded-[10px] border border-zinc-100 p-5 sm:max-w-[360px]'
          >
            <Image src={item.img} alt='' className='rounded-[10px] bg-slate-50' />
            <h5 className='mt-[15px] font-sora text-xl font-semibold'>{item.name}</h5>
            <div className='flex gap-[14px] py-5'>
              <button
                type='button'
                className='rounded-[10px] bg-slate-50 px-5 py-[10px] font-poppins text-sm text-blue-600'
              >
                {item.position}
              </button>
              <div className='flex items-center gap-1'>
                <StarFilled className='text-amber-400 ' />
                <div className='font-poppins text-sm font-semibold text-blue-950'>
                  {item.rating} <span className='text-slate-500'>({item.numberOfReviews})</span>
                </div>
              </div>
            </div>
            <RadiusButton className='bg-blue-600 text-white'>Appointment</RadiusButton>
          </div>
        ))}
      </div>
      <div className='mt-[30px] flex cursor-pointer justify-center gap-[10px] sm:hidden'>
        <span className='font-poppins text-lg font-semibold text-neutral-800'>See All</span>
        <div className='flex items-center justify-center'>
          <img src={Arrow} alt='' />
        </div>
      </div>
    </section>
  )
}

export default SpecialistComponent
