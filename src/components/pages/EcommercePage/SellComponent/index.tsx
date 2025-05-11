import Image from 'next/image'
import React from 'react'

import {
  CheckGradientBlue,
  CheckGradientOrange,
  CheckGradientPurple,
  CheckGradientRed,
} from 'assets/icons/check-icons'
import {
  Amazon,
  Fb,
  Instag,
  Legend,
  Person1,
  Person2,
  Shoes,
  Watch,
} from 'assets/images/ecommerce-page'

const lists = [
  { icon: CheckGradientPurple, content: 'Build a new online store or connect to any website' },
  {
    icon: CheckGradientOrange,
    content: 'Sell across social media platforms like Facebook, Instagram and TikTok',
  },
  {
    icon: CheckGradientBlue,
    content: 'Integrate with online marketplaces like Amazon, eBay, Walmart',
  },
  { icon: CheckGradientRed, content: 'Connect with Point-of-Sale in your physical store' },
]

const SellComponent = () => {
  return (
    <section className='l-container py-10'>
      <div className='flex flex-col-reverse justify-between sm:flex-row sm:px-10'>
        <div className='relative flex flex-col items-center'>
          {/* Profile images */}
          <div className='relative -left-[70px] -z-10 mt-[78px] flex items-center gap-4 sm:-left-0 sm:mt-0'>
            <div className='relative'>
              <Image
                src={Person1}
                alt='Person 1'
                className='h-[166px] w-[204px] bg-sky-400 object-cover sm:h-[263px] sm:w-[324px]'
              />
            </div>
            <div className='absolute -right-20 -top-10 sm:-right-32 sm:-top-10'>
              <Image
                src={Person2}
                alt='Person 2'
                className=' h-[154px] w-[95px] object-cover sm:h-[245px] sm:w-[150px]'
              />
            </div>
          </div>

          {/* Product cards */}
          <div className='absolute left-6 top-56 flex gap-3'>
            {/* Facebook Card */}
            <div className='flex min-h-[131px] w-[99px] flex-col rounded-xl bg-white p-3 text-center shadow-md sm:min-h-[208px] sm:w-[157px]'>
              <Image src={Fb} alt='Facebook' className='h-5 w-5 sm:h-[25px] sm:w-[25px]' />
              <Image
                src={Legend}
                alt='Glasses'
                className='mx-auto my-auto mb-auto h-[51px] w-[88px] sm:h-[81px] sm:w-[139px]'
              />

              <p className='font-poppins text-[9px] font-normal text-dark1 sm:text-sm'>
                Legend Brown
              </p>
              <p className='mt-[6px] font-poppins text-[9px] font-semibold sm:text-sm'>$90.50</p>
            </div>

            {/* Instagram Card */}
            <div className='flex min-h-[131px] w-[99px] flex-col rounded-xl bg-white p-3 text-center shadow-md sm:min-h-[208px] sm:w-[157px]'>
              <Image src={Instag} alt='Instagram' className='h-5 w-5 sm:h-[25px] sm:w-[25px]' />
              <Image
                src={Watch}
                alt='Watch'
                className='mx-auto my-auto mb-auto h-[55px] w-[34px] sm:h-[88px] sm:w-[54px] '
              />
              <p className='font-poppins text-[9px] font-normal text-dark1 sm:text-sm'>
                Black Watch
              </p>
              <p className='mt-[6px] font-poppins text-[9px] font-semibold sm:text-sm'>$90.50</p>
            </div>

            {/* Amazon Card */}
            <div className='flex min-h-[131px] w-[99px] flex-col rounded-xl bg-white p-3 text-center shadow-md sm:min-h-[208px] sm:w-[157px]'>
              <Image src={Amazon} alt='Amazon' className='h-5 w-5 sm:h-[25px] sm:w-[25px]' />
              <Image
                src={Shoes}
                alt='Shoes'
                className='mx-auto my-auto mb-auto h-[55px] w-[82px] sm:h-[87px] sm:w-[130px] '
              />
              <p className='font-poppins text-[9px] font-normal text-dark1 sm:text-sm'>
                Black Shoes
              </p>
              <p className='mt-[6px] font-poppins text-[9px] font-semibold sm:text-sm'>$90.50</p>
            </div>
          </div>
        </div>

        {/* Right side - Text content */}
        <div className=''>
          <h2 className='mb-5 font-sora text-[28px] font-bold text-dark sm:mb-[30px] sm:text-[50px]'>
            Sell everywhere
          </h2>
          <p className='mb-[30px] max-w-[463px] font-poppins text-sm font-normal text-dark1 sm:mb-10 sm:text-xl'>
            Bring your products and services to the world. Get started with selling on one channel
            and expand everywhere online and in person.
          </p>

          <ul className='max-w-[438px] space-y-6 font-poppins text-sm font-medium sm:text-base'>
            {lists.map((item, index) => (
              <li key={index} className='flex items-center gap-3'>
                <Image src={item.icon} alt='' width={20} height={20} />
                {item.content}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default SellComponent
