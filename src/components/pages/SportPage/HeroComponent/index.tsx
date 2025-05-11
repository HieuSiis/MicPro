import Image from 'next/image'
import React from 'react'

import { BPlayer, IBasketball, LogoAdidas, LogoNike, LogoPuma } from 'assets/images/sport-page'
import RadiusButton from 'components/ui/Button/RadiusButton'

const HeroComponent = () => {
  return (
    <section className='hero'>
      <div className='l-container'>
        <div className='flex flex-col gap-10 sm:flex-row sm:gap-[74px]'>
          <div className='flex flex-col justify-center'>
            <h1 className='mb-5 max-w-[327px] font-sora text-[28px] font-bold sm:mb-7 sm:max-w-[341px] sm:text-6xl sm:font-extrabold sm:leading-tight'>
              We are the <span className=' text-gradient'> Basketball </span>
              <span className='flex items-center gap-2 sm:gap-3'>
                Academy{' '}
                <Image src={IBasketball} alt='' className='h-[21px] w-[23px] sm:h-10 sm:w-[43px]' />
              </span>
            </h1>

            <div className='mb-[30px] max-w-[327px] font-poppins text-sm font-normal sm:mb-10 sm:max-w-[445px] sm:text-lg'>
              Browse the wide range of sports programs that you like, and many verified and fun
              sports inspectors staying at home.
            </div>
            <RadiusButton className='w-fit bg-primary font-poppins text-base text-white sm:bg-white sm:text-dark'>
              Our Service
              <div className='text-white sm:text-neutral-800'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M14.0909 7.26521C14.4968 6.8906 15.1294 6.9159 15.504 7.32172L18.7348 10.8217C19.0884 11.2047 19.0884 11.7952 18.7348 12.1782L15.504 15.6783C15.1294 16.0841 14.4968 16.1094 14.091 15.7348C13.6851 15.3602 13.6598 14.7276 14.0344 14.3217L15.716 12.5L6 12.5C5.44771 12.5 5 12.0523 5 11.5C5 10.9477 5.44771 10.5 6 10.5L15.716 10.5L14.0344 8.67829C13.6598 8.27247 13.6851 7.63981 14.0909 7.26521Z'
                    fill='currentColor'
                  />
                </svg>
              </div>
            </RadiusButton>
          </div>

          <Image src={BPlayer} alt='' width={290} height={615} className='hidden sm:block' />

          <div className='flex flex-col items-center justify-center sm:items-start'>
            <h1 className='mb-4 hidden font-sora text-6xl font-extrabold tracking-[10px] sm:block'>
              200K
            </h1>
            <span className='hidden max-w-[288px] font-poppins text-base font-normal leading-6 sm:block'>
              Unit products sold form our website every single day.
            </span>
            <span className='hidden max-w-[233px] py-12 font-poppins text-base font-normal leading-6 sm:block'>
              Balshai is the most trusted sporting gear manufacturing organization in the world
            </span>

            <h5 className='font-sora text-xl font-semibold'>Proudly partners with</h5>
            <div className='mt-6 flex gap-5'>
              <img src={LogoPuma} alt='' />
              <Image src={LogoNike} alt='' />
              <Image src={LogoAdidas} alt='' />
            </div>
            <Image
              src={BPlayer}
              alt=''
              width={290}
              height={615}
              className='mt-[50px] block sm:hidden'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroComponent
