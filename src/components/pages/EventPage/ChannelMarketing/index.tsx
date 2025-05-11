import { ClockCircleOutlined } from '@ant-design/icons'
import Image from 'next/image'
import React from 'react'

import { Channel } from 'assets/images/event-page'

const ChannelMarketing = () => {
  return (
    <section className='main-container py-[60px] sm:py-20'>
      <div className='flex flex-col-reverse items-center justify-center gap-10 sm:flex-row sm:gap-[107px]'>
        <div className='max-w-[566px] rounded-xl'>
          <Image src={Channel} alt='' className='relative -ml-3 w-[327px] sm:ml-0 sm:w-auto' />
          <div className='absolute right-1/4 flex h-[85px] w-[113px] -translate-y-10 translate-x-[70px] flex-col gap-[5px] rounded-[10px] bg-white px-3 py-3 shadow-sm sm:right-1/2 sm:h-[136px] sm:w-[180px] sm:-translate-x-10 sm:gap-[10px] sm:px-4 sm:py-5'>
            <div className='flex items-center gap-1 font-poppins text-[11px] font-semibold sm:text-lg'>
              <ClockCircleOutlined />
              Schedule
            </div>
            <div className='flex items-center gap-2 font-poppins text-[11px] font-normal sm:text-lg'>
              <div className='h-[10px] w-[10px] rounded-full bg-primary sm:h-4 sm:w-4' />
              Now
            </div>
            <div className='flex items-center gap-2 font-poppins text-[11px] font-normal sm:text-lg'>
              <div className='h-[10px] w-[10px] rounded-full bg-orange-400 sm:h-4 sm:w-4' />
              Specific time
            </div>
          </div>
        </div>
        <div>
          <h5 className='font-poppins text-base font-semibold text-primary sm:font-sora sm:text-xl'>
            GO THE DISTANCE
          </h5>
          <h2 className='max-w-[520px] py-4 font-sora text-[28px] font-bold text-dark sm:py-[30px] sm:text-[50px]'>
            Omni-channel marketing tools
          </h2>
          <p className='max-w-[327px] font-poppins text-base font-normal text-dark1 sm:max-w-[446px] sm:text-xl'>
            From a fully-customizable event website to email campaigns, from customizable social
            banners to affiliate marketing
          </p>
        </div>
      </div>
    </section>
  )
}

export default ChannelMarketing
