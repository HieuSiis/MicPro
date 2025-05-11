import Image from 'next/image'
import React from 'react'

import { Arrow, Play } from 'assets/icons'
import RadiusButton from 'components/ui/Button/RadiusButton'

const HeroComponent = () => {
  return (
    <section className='hero mb-[100px]'>
      <div className='sm:l-container mobile-container'>
        <h1 className='mx-auto mb-7 max-w-[327px] text-center text-[34px] font-extrabold leading-snug sm:max-w-[807px] sm:text-6xl'>
          Fundraising Through Your Social <span className='text-gradient'>Networks</span>
        </h1>
        <div className='mx-auto mb-[30px] max-w-[285px] text-center font-poppins text-lg font-normal sm:mb-12 sm:max-w-[715px]'>
          Are you looking for a way to close all marketing, technical and customer support tasks for
          your company in one place
        </div>

        <div className='flex flex-col items-center justify-center gap-5 sm:flex-row'>
          <RadiusButton className='bg-blue-600 font-normal text-white'>
            Donate Now <Image src={Arrow} alt='' width={24} height={24} />
          </RadiusButton>
          <RadiusButton className='bg-white font-normal'>
            <Image src={Play} alt='' width={24} height={24} /> Watch Video
          </RadiusButton>
        </div>
      </div>
    </section>
  )
}

export default HeroComponent
