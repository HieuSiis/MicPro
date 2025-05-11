import Image from 'next/image'
import React from 'react'

import Arrow from 'assets/icons/Arrow.svg'

import ButtonRadius from '../../../ui/Button/RadiusButton'

const HeroComponent = () => {
  return (
    <section className='hero mb-10 sm:mb-[100px]'>
      <div className='l-container relative'>
        <h1 className='mx-auto mb-7 max-w-[283px] text-center font-sora text-[34px] font-extrabold leading-snug sm:max-w-[807px] sm:text-6xl'>
          Build Your Dream Website with Our Skilled{' '}
          <span className='text-gradient'>Development</span> Team
        </h1>
        <div className='mx-auto mb-11 max-w-[275px] text-center font-poppins text-base sm:max-w-[715px] sm:text-lg'>
          Are you looking for a way to close all marketing, technical and customer support tasks for
          your company in one place
        </div>

        <div className='flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-6'>
          <ButtonRadius className='bg-blue-600 text-white '>
            Get Started <Image src={Arrow} alt='' width={24} height={24} />
          </ButtonRadius>
          <ButtonRadius className='border border-gray-950 '>Pricing</ButtonRadius>
        </div>
      </div>
    </section>
  )
}

export default HeroComponent
