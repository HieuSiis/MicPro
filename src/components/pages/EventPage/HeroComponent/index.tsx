import Image from 'next/image'
import React from 'react'

import { Play, SparkleBlue } from 'assets/icons'
import { Img1Hero, Img2Hero } from 'assets/images/event-page'
import RadiusButton from 'components/ui/Button/RadiusButton'

const HeroComponent = () => {
  return (
    <section className='sm:py-20'>
      <div className='l-container flex flex-col gap-24 sm:flex-row'>
        <div className='text-center sm:text-left'>
          <h5 className='mb-[14px] font-sora text-sm font-semibold text-dark sm:mb-[26px] sm:text-xl'>
            Design Event Conference <span className='text-pink-400'>2023</span>
          </h5>
          <h1 className='max-w-[533px] font-sora text-[34px] font-extrabold leading-tight sm:text-6xl'>
            Designing Events for Brand <span className='text-gradient'>Awareness</span>
            <img
              src={SparkleBlue}
              alt=''
              className='absolute left-[590px] top-[430px] hidden h-6 w-6 text-center sm:block'
            />
          </h1>
          <p className='mt-[30px] max-w-[327px] font-poppins text-xl font-normal text-dark sm:max-w-[612px]'>
            Our team of skilled dentists and dental professionals are dedicated to providing you
            with comprehensive and personalized dental care.
          </p>
          <div className='mt-[30px] flex flex-wrap justify-center gap-4 sm:mt-11 sm:justify-start'>
            <RadiusButton className='bg-primary text-white'>Get Ticket</RadiusButton>
            <RadiusButton className='border border-dark'>
              <Image src={Play} alt='' width={24} height={24} /> Watch Video
            </RadiusButton>
          </div>
        </div>
        <div className='flex h-[400px] items-center sm:h-[641px]'>
          <div className='relative'>
            <Image
              src={Img1Hero}
              alt=''
              className='ml-2 w-[215px] rounded-2xl sm:ml-0 sm:w-[356px]'
            />
            <Image
              src={Img2Hero}
              alt=''
              className='absolute bottom-1/4 w-[195px] -translate-y-10 translate-x-36 rounded-2xl sm:right-1/4 sm:w-[324px] sm:translate-x-72'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroComponent
