import { MailOutlined } from '@ant-design/icons'
import Image from 'next/image'
import React from 'react'

import { Hamburger } from 'assets/images/restaurant-page'

const CtaComponent = () => {
  return (
    <section className='main-container mt-[102px] sm:mt-[157px]'>
      <div className='flex flex-col-reverse rounded-xl bg-gradientCtaCharity p-5 sm:flex-row sm:p-0'>
        <Image
          src={Hamburger}
          alt=''
          className='mr-[128px] flex px-4 py-10 sm:px-0 sm:py-0 sm:pb-[18px] sm:pl-[46px] sm:pt-[83px]'
        />
        <div className='flex flex-col justify-center '>
          <span className='mb-4 mt-[10px] font-inter text-lg font-normal text-zinc-100 sm:mb-[14px] sm:mt-0'>
            $20 discount for your first order
          </span>
          <h2 className='mb-5 max-w-[266px] font-sora text-[34px] font-bold text-white sm:mb-[30px] sm:max-w-[465px]'>
            Join our newsletter and get updates
          </h2>
          <p className='max-w-[258px] font-poppins text-base font-normal text-white sm:max-w-[396px]'>
            Join our email subcription now to get updates on promotoions and coupons.
          </p>
          <div className='mt-6 flex h-[54px] max-w-[327px] items-center justify-between rounded-[4px] bg-white px-1 sm:mt-[38px] sm:h-[66px] sm:max-w-[481px]'>
            <MailOutlined
              style={{ color: 'gray' }}
              className='-mr-10 ml-[11px] sm:-mr-36 sm:ml-5'
            />
            <input
              type='email'
              placeholder='Your email address'
              className='w-[116px] font-poppins text-xs font-normal focus:outline-none sm:w-[128px] sm:font-inter sm:text-sm sm:font-medium'
            />
            <button
              type='button'
              className='rounded-[4px] bg-primary p-[11px] font-inter text-sm font-semibold text-white sm:p-5'>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaComponent
