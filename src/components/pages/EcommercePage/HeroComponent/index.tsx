import Image from 'next/image'
import React from 'react'

import {
  AvtB,
  AvtBL,
  AvtGD,
  AvtGL,
  AvtO,
  AvtPink,
  AvtPurple,
  AvtTL,
  AvtTR,
  DecorL,
  DecorR,
} from 'assets/images/ecommerce-page/hero-section'

const HeroComponent = () => {
  return (
    <section className='relative mb-9 sm:mb-[100px]'>
      {/* Heading */}
      <h1 className='mx-auto mb-[30px] max-w-[327px] text-center font-sora text-[34px] font-bold leading-tight sm:mb-7 sm:max-w-[719px] sm:text-6xl sm:font-extrabold sm:leading-tight'>
        Shop the Best <span className='text-gradient'>Styles</span> in One Place
      </h1>

      <div className='absolute left-40 top-32 hidden gap-[810px] sm:flex'>
        {/* Top Left Avatar */}
        <div className='relative'>
          <img src={DecorL} alt='Decorate Left' className='absolute -top-10 left-32' />
          <Image src={AvtTL} alt='Top Left Avatar' />
        </div>

        {/* Top Right Avatar */}
        <div className='relative'>
          <img src={DecorR} alt='Decorate Right' className='absolute -top-28' />
          <Image src={AvtTR} alt='Top Right Avatar' />
        </div>
      </div>

      {/* Grid Avatars */}
      <div className='flex items-center justify-center gap-3 px-6 sm:mt-[80px] sm:gap-4 sm:px-0'>
        <Image
          src={AvtGD}
          alt='Green Dark Avatar'
          className='hidden rounded-lg sm:block sm:rounded-[20px]'
        />

        <div className='flex flex-col gap-3 sm:gap-4'>
          <Image src={AvtB} alt='Blue Avatar' className='rounded-lg sm:rounded-[20px]' />
          <Image src={AvtGL} alt='Green Light Avatar' className='rounded-lg sm:rounded-[20px]' />
        </div>

        <Image
          src={AvtO}
          alt='Orange Avatar'
          className='h-[214px] rounded-lg sm:h-[490px] sm:rounded-[20px]'
        />

        <div className='flex flex-col gap-3 sm:gap-4'>
          <Image src={AvtPink} alt='Pink Avatar' className='rounded-lg sm:rounded-[20px]' />
          <Image src={AvtPurple} alt='Purple Avatar' className='rounded-lg sm:rounded-[20px]' />
        </div>
        <Image
          src={AvtBL}
          alt='Blue Light Avatar'
          className='hidden rounded-lg sm:block sm:rounded-[20px]'
        />
      </div>
    </section>
  )
}

export default HeroComponent
