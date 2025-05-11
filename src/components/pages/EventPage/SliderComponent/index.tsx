import { StarFilled } from '@ant-design/icons'
import { Carousel } from 'antd'
import Image from 'next/image'
import React from 'react'

import { Amazon, Avatar, Group } from 'assets/images/event-page'

const SliderComponent = () => {
  return (
    <section className='main-container mb-[70px] sm:mb-0 sm:py-[100px]'>
      <Carousel autoplay className='custom-carousel-panel-event'>
        {Array(3)
          .fill(0)
          .map((item, index) => (
            <div className='rounded-[20px] bg-gradientCarousel px-6 py-[30px] sm:p-[70px]'>
              <h3 className='mx-auto mb-[26px] text-center font-sora text-xl font-bold text-white sm:mb-[60px] sm:text-[34px]'>
                CUSTOMER STORY
              </h3>
              <div className='flex flex-col-reverse gap-6 sm:flex-row sm:gap-[188px]'>
                <h4 className='max-w-[591px] font-sora text-lg font-bold text-white sm:text-[28px]'>
                  "We used Backstage to organize our second anniversary. It helped us gather more
                  than 450 guests to celebrate this event with us."
                </h4>
                <div className='flex gap-[87px]'>
                  <div className='flex justify-center gap-1 sm:hidden'>
                    {Array(5)
                      .fill(0)
                      .map((item, index) => (
                        <div key={index} className='mt-1 text-[19px] text-orange-300'>
                          <StarFilled />
                        </div>
                      ))}
                  </div>
                  <img src={Amazon} alt='' className='h-[35px] sm:h-auto' />
                </div>
              </div>
              <div className='mt-[17px] grid grid-cols-1 justify-center sm:mt-[30px] sm:grid-cols-3'>
                <div className='mb-10 flex items-center gap-[10px]'>
                  <Image
                    src={Avatar}
                    alt=''
                    width={60}
                    height={60}
                    className='h-10 w-10 rounded-full sm:h-[60px] sm:w-[60px]'
                  />
                  <div className='flex flex-col gap-[6px]'>
                    <h5 className='font-poppins text-lg font-semibold text-white sm:font-sora sm:text-xl'>
                      Yaron Shifman
                    </h5>
                    <p className='font-poppins text-sm font-medium text-indigo-200'>
                      CEO, Swathly Ltd
                    </p>
                  </div>
                </div>
                <div className='hidden justify-center gap-2 sm:flex'>
                  {Array(5)
                    .fill(0)
                    .map((item, index) => (
                      <div key={index} className='mt-1 text-[29px] text-orange-300'>
                        <StarFilled />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ))}
      </Carousel>
    </section>
  )
}

export default SliderComponent
