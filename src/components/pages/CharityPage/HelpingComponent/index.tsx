import Image from 'next/image'
import React from 'react'

import { CheckBgRed } from 'assets/icons/check-icons'
import { ImgHelping } from 'assets/images/charity-page'
import Heading from 'components/ui/Heading'

const lists = [
  {
    content: '500m liters of water provided through communities',
  },
  {
    content: '4000+ houses built for the poor people',
  },
  {
    content: '700+ schools built for those childrens',
  },
]

const HelpingComponent = () => {
  return (
    <section className='bg-white'>
      <Heading className='max-w-[285px] sm:max-w-[810px]'>
        You can Help lots of people <span className='text-primary'>helping</span> others.
      </Heading>
      <div className='flex flex-col-reverse justify-center sm:mt-[120px] sm:flex-row'>
        <div className='flex flex-col px-6 sm:ml-20'>
          <h1 className='-mt-10 font-sora  text-[28px] font-bold leading-tight sm:mt-0 sm:max-w-[379px] sm:text-5xl'>
            We are here to support the vulnerable.
          </h1>
          <p className='mb-[30px] mt-4 max-w-[318px] font-poppins text-[16px] font-medium text-gray-500 sm:mb-12 sm:mt-6 sm:max-w-[512px]'>
            Transform the way you work with one place for everyone and everything you need to get
            stuff done.
          </p>
          <ul className='flex flex-col space-y-5'>
            {lists.map((item, index) => (
              <li key={index} className='flex items-center space-x-4'>
                <Image src={CheckBgRed} alt='' width={20} height={20} />
                <span className='font-poppins text-[16px] font-normal text-gray-700 sm:font-dmSans sm:text-lg sm:font-medium'>
                  {item.content}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className='sm:-ml-20 sm:-mt-24'>
          <Image src={ImgHelping} alt='' />
        </div>
      </div>
    </section>
  )
}

export default HelpingComponent
