import Image from 'next/image'
import React from 'react'

import { AppStore, GgPlay, IpadPro } from 'assets/images/restaurant-page'

const HeroComponent = () => {
  return (
    <section>
      <div className='l-container'>
        <h1 className='mx-auto mb-6 max-w-[327px] text-center font-sora text-[34px] font-bold leading-10 sm:max-w-[734px] sm:text-6xl sm:leading-snug'>
          The Best way to grow your <span className='text-gradient'>Business</span>
        </h1>
        <div className='mx-auto max-w-[285px] text-center font-poppins text-lg font-normal sm:max-w-[715px]'>
          Imagine you don’t need a diet because we provide healthy and delicious toad for you! We
          are providing the best food delivery services.
        </div>
        <div className='mb-[42px] mt-[30px] flex flex-col items-center justify-center gap-[10px] sm:mb-[76px] sm:mt-[70px] sm:flex-row sm:gap-6'>
          <button type='button'>
            <Image src={GgPlay} alt='' />
          </button>
          <button type='button'>
            <Image src={AppStore} alt='' />
          </button>
        </div>
        <div className='flex justify-center'>
          <img src={IpadPro} alt='' className='object-contain' />
        </div>
      </div>
    </section>
  )
}

export default HeroComponent
