import Image from 'next/image'
import React from 'react'

import { CheckBgOrange } from 'assets/icons/sport-page'
import { ImgRight } from 'assets/images/sport-page'

const lists = [
  { icon: CheckBgOrange, content: 'Powered by GPT-3 from OpenAI' },
  { icon: CheckBgOrange, content: 'Generate effective copy fast' },
  { icon: CheckBgOrange, content: 'Facebook Ads, Headlines, Idea Generator and more' },
]

const BenefitComponent = () => {
  return (
    <section className='main-container mt-[35px] sm:mt-[100px]'>
      <div className='flex flex-col justify-center gap-[30px] sm:flex-row sm:gap-[190px]'>
        <div className='flex flex-col sm:mt-5'>
          <h2 className='font-sora text-[28px] font-bold leading-tight text-dark sm:text-[48px]'>
            Many <span className='text-primary'>Benefits</span> for you
          </h2>
          <p className='mb-[30px] mt-6 max-w-[309px] font-poppins text-sm font-normal text-dark1 sm:mb-10 sm:max-w-[500px] sm:text-base'>
            We use artificial intelligence to write your marketing copy for you. From Facebook Ads
            to web pages—our AI creates text that converts.
          </p>
          <ul className='flex flex-col space-y-4'>
            {lists.map((item, index) => (
              <li key={index} className='flex items-center space-x-2'>
                <Image src={item.icon} alt='' width={20} height={20} />
                <span className='font-poppins text-sm font-semibold text-dark sm:text-base'>
                  {item.content}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className='sm:-ml-20 sm:-mt-16'>
          <Image src={ImgRight} alt='' width={522} height={502} />
        </div>
      </div>
    </section>
  )
}

export default BenefitComponent
