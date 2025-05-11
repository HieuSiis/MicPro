import Image from 'next/image'
import React from 'react'

import ElementaryStudent from 'assets/images/education-page/elementary-school.png'

const JoinUsComponent = () => {
  return (
    <section className='main-container mt-[100px] sm:mt-[140px]'>
      <div className='flex flex-col overflow-hidden rounded-2xl shadow-sm sm:flex-row'>
        {/* Left Side */}
        <div className='flex flex-1 flex-col justify-center bg-gray-50 px-[26px] py-6 sm:px-[60px] sm:py-0'>
          <p className='mb-4 font-poppins text-base font-medium text-blue-600'>Join Us</p>
          <h2 className='mb-3 max-w-[267px] font-sora text-xl font-semibold text-dark sm:mb-6 sm:max-w-[371px] sm:text-[28px] sm:font-bold'>
            Join our Trusted 20,000+ Students all over the world
          </h2>
          <p className='mb-[18px] max-w-[357px] font-poppins text-base font-normal text-dark1 sm:mb-10'>
            Fuel your company’s growth with real-time customer insights.
          </p>
          <button
            type='button'
            className='w-fit rounded-md bg-blue-600 px-10 py-4 text-white transition hover:bg-blue-700'>
            Get Started
          </button>
        </div>

        {/* Right Side */}
        <div className='relative flex-1 bg-gradient-to-br from-purple-400 to-blue-600 px-16 text-white sm:px-[122px]'>
          <Image src={ElementaryStudent} alt='' />
        </div>
      </div>
    </section>
  )
}

export default JoinUsComponent
