import { SearchOutlined } from '@ant-design/icons'
import Image from 'next/image'
import React from 'react'

import {
  CheckGradientBlue,
  CheckGradientOrange,
  CheckGradientPurple,
  CheckGradientRed,
} from 'assets/icons/check-icons'
import { Amazon, Fb, GG, Legend, Shoes, Watch } from 'assets/images/ecommerce-page'

const features = [
  { text: 'Automated Google and Facebook ads', icon: CheckGradientPurple },
  { text: 'TikTok, Pinterest and Snapchat Pixel integrations', icon: CheckGradientOrange },
  {
    text: 'Automated abandoned cart emails and other customizable Marketing emails',
    icon: CheckGradientBlue,
  },
  { text: 'Discount coupons and gift cards', icon: CheckGradientRed },
]

const GrowFaster = () => {
  return (
    <section className='main-container relative mt-[120px] overflow-hidden p-5'>
      <div className='mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 sm:grid-cols-2 sm:px-6'>
        {/* Left Side */}
        <div>
          <h2 className='mb-5 font-sora text-[28px] font-bold text-dark sm:mb-[30px] sm:text-[50px]'>
            Grow faster
          </h2>
          <p className='mb-[30px] max-w-[463px] font-poppins text-sm font-normal text-dark1 sm:mb-10 sm:text-xl'>
            Take your business to the next level with our easy-to-use marketing tools to attract and
            retain more customers.
          </p>
          <ul className='max-w-[438px] space-y-6 font-poppins text-sm font-medium sm:text-base'>
            {features.map((item, index) => (
              <li key={index} className='flex items-center gap-3'>
                <Image src={item.icon} alt='' width={20} height={20} />
                {item.text}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side - Flex Layout */}
        <div className='flex items-center justify-center gap-4'>
          <div className='flex gap-4'>
            {/* Google */}
            <div className='min-h-[257px] max-w-[157px] rounded-xl bg-white p-3 shadow-md sm:min-h-[338px] sm:max-w-[206px] sm:p-4'>
              <div className='mb-auto flex items-center justify-between'>
                <Image src={GG} alt='Google' className='h-[15px] w-[45px] sm:h-5 sm:w-[60px] ' />
                <SearchOutlined className='h-3 w-3 text-dark1 sm:h-4 sm:w-4' />
              </div>
              <Image
                src={Legend}
                alt='Sunglasses'
                className='mx-auto mb-5 mt-[74px] sm:mt-[97px]'
              />
              <div className='flex items-center justify-between'>
                <div className='flex flex-col'>
                  <div className='mb-[6px] h-[3px] w-[57px] rounded bg-gray-200 sm:w-[75px]' />
                  <div className='h-[3px] w-[37px] rounded bg-gray-200 sm:w-[49px]' />
                </div>
                <button
                  type='button'
                  className='rounded-sm bg-blue-600 px-[5px] py-[2px] text-[9px] text-white sm:text-xs '>
                  Buy now
                </button>
              </div>

              <div className='mt-8 space-y-[10px]'>
                <div className='h-[3px] w-[126px] rounded bg-gray-200 sm:w-[166px]' />
                <div className='h-[3px] w-[100px] rounded bg-gray-200 sm:w-[131px]' />
                <div className='h-[3px] w-[65px] rounded bg-gray-200 sm:w-[86px]' />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            {/* Facebook */}
            <div className='flex min-h-[184px] max-w-[157px] flex-col rounded-xl bg-white p-3 shadow-md sm:min-h-[242px] sm:max-w-[206px] sm:p-4'>
              <Image src={Fb} alt='Facebook' width={25} height={25} className='' />
              <Image src={Watch} alt='Watch' className='mx-auto my-auto' />
              <div className='flex items-center justify-between'>
                <div className='flex flex-col'>
                  <div className='mb-[6px] h-[3px] w-[57px] rounded bg-gray-200 sm:w-[75px]' />
                  <div className='h-[3px] w-[37px] rounded bg-gray-200 sm:w-[49px]' />
                </div>
                <button
                  type='button'
                  className='ml-7 rounded-sm bg-blue-600 px-[5px] py-[2px] text-[9px] text-white sm:text-xs'>
                  Buy now
                </button>
              </div>
            </div>
            {/* Amazon */}
            <div className='flex min-h-[184px] max-w-[157px] flex-col rounded-xl bg-white p-3 shadow-md sm:min-h-[242px] sm:max-w-[206px] sm:p-4'>
              <Image src={Amazon} alt='Amazon' width={25} height={25} />
              <Image src={Shoes} alt='Shoes' className='mx-auto my-auto' />
              <div className='space-y-[10px]'>
                <div className='h-[3px] w-[135px] rounded bg-gray-200 sm:w-[166px]' />
                <div className='h-[3px] w-[100px] rounded bg-gray-200 sm:w-[131px]' />
                <div className='h-[3px] w-[65px] rounded bg-gray-200 sm:w-[86px]' />
              </div>
              <button
                type='button'
                className='mx-auto mt-4 w-full rounded-sm bg-blue-600 px-4 py-1 text-[9px] text-white sm:text-xs'>
                Special Offer
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GrowFaster
