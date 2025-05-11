import { StarFilled } from '@ant-design/icons'
import Image from 'next/image'
import React from 'react'

import { Avatar1, Avatar2, Avatar3 } from 'assets/images/ai-page'

const testimonials = [
  {
    name: 'Sarah Rose',
    role: 'Co- Founder of Web Design',
    avatar: Avatar1,
    content:
      "The ChatBot platform has become a key part of our proposition. It's fully flexible and has allowed us to drive 30% more leads while dramatically reducing our cost to serve.",
  },
  {
    name: 'Meghan Scutt',
    role: 'Co- Founder of Vector CX',
    avatar: Avatar2,
    content:
      "The ChatBot platform has become a key part of our proposition. It's fully flexible and has allowed us to drive 30% more leads while dramatically reducing our cost to serve.",
  },
  {
    name: 'Valentina',
    role: 'Founder of Web UI',
    avatar: Avatar3,
    content:
      "The ChatBot platform has become a key part of our proposition. It's fully flexible and has allowed us to drive 30% more leads while dramatically reducing our cost to serve.",
  },
]

const ReviewStudent = () => {
  return (
    <section className='sm:main-container mobile-container mt-[50px] rounded-2xl bg-gradientCarousel px-4 py-6 sm:mt-20 sm:p-[70px]'>
      <h3 className='mb-5 text-center font-sora text-xl font-semibold text-white sm:mb-[50px] sm:text-[34px] sm:font-bold'>
        What our Student Say
      </h3>
      <div className='overflow-x-auto'>
        <div className='grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-[30px]'>
          {testimonials.map((item, index) => (
            <div
              key={index}
              className='flex h-full max-w-[295px] flex-col justify-between rounded-md bg-white p-5 shadow-sm sm:max-w-[370px] sm:p-[29px]'
            >
              <div className='mb-[30px] flex gap-1'>
                {Array(5)
                  .fill(0)
                  .map((item, index) => (
                    <div key={index} className='mt-1 text-sm text-starYellow'>
                      <StarFilled />
                    </div>
                  ))}
              </div>
              <p className='max-w-[242px] font-poppins text-xs font-normal text-dark1 sm:max-w-[314px] sm:text-sm'>
                {item.content}
              </p>

              <div className='mt-6 flex items-center gap-3'>
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={40}
                  height={40}
                  className='rounded-full'
                />
                <div className='font-poppins'>
                  <p className='text-sm font-semibold text-dark sm:text-base'>{item.name}</p>
                  <p className='text-xs text-dark1 sm:text-sm'>{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReviewStudent
