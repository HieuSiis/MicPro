import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import Image from 'next/image'
import React from 'react'

import { DoubleQuote } from 'assets/icons/sport-page'
import { Avatar, LogoAttentive, LogoGusto } from 'assets/images/sport-page'

const TestimonialComponent = () => {
  return (
    <section className='l-container mt-[60px] sm:mt-[124px]'>
      <div className='flex flex-col overflow-hidden rounded-2xl shadow-sm sm:flex-row'>
        {/* Left Side */}
        <div className='flex-1 bg-gray-50 p-10'>
          <p className='mb-4 font-poppins text-base font-normal text-blue-600'>Testimonial</p>
          <h2 className='mb-3 font-sora text-xl font-bold leading-snug sm:mb-4 sm:text-[28px]'>
            Trusted by the world&apos;s most customer-centric teams
          </h2>
          <p className='mb-[26px] max-w-[363px] font-poppins text-sm font-normal text-dark1 sm:mb-11 sm:text-base'>
            Fuel your company’s growth with real-time customer insights.
          </p>
          <button
            type='button'
            className='rounded-md bg-blue-600 px-10 py-4 text-white transition hover:bg-blue-700'>
            Read More
          </button>
        </div>

        {/* Right Side */}
        <div className='relative flex-1 bg-gradient-to-br from-purple-500 to-blue-600 p-[28px] text-white sm:pb-[46px] sm:pl-[120px] sm:pr-[66px] sm:pt-20'>
          <img
            src={DoubleQuote}
            alt=''
            className='absolute left-4 top-4 z-0 h-[85px] w-[93px] sm:left-0 sm:top-0 sm:h-[141px] sm:w-[153px]'
          />
          <div className='relative z-10'>
            <p className='mb-6 max-w-[556px] font-sora text-xl font-bold sm:mb-[30px] sm:text-3xl'>
              The biggest problem was how to connect freelancers with us in a way that is legally
              possible in the EU.
            </p>

            <div className='mb-7 flex space-x-[52px] sm:mb-8'>
              <img src={LogoAttentive} alt='' />
              <img src={LogoGusto} alt='' />
            </div>

            <div className='flex items-center justify-between space-x-4'>
              <div className='flex items-center justify-between space-x-4'>
                <Image
                  src={Avatar}
                  alt='Avatar'
                  className='h-10 w-10 rounded-full bg-orange-200 object-cover sm:h-20 sm:w-20'
                />

                <div>
                  <h5 className='mb-2 font-sora text-base font-medium sm:text-xl sm:font-semibold'>
                    Davor Mišmaš
                  </h5>
                  <p className='font-poppins text-xs font-normal opacity-80 sm:text-sm'>
                    COO of Trash Gang
                  </p>
                </div>
              </div>

              <div className='hidden gap-4 sm:flex'>
                <div className='flex h-[34px] w-[34px] items-center justify-center rounded-full border border-blue-500 hover:border-white'>
                  <LeftOutlined />
                </div>
                <div className='flex h-[34px] w-[34px] items-center justify-center rounded-full border border-blue-500 hover:border-white'>
                  <RightOutlined />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialComponent
