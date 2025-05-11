import { Carousel } from 'antd'
import Image from 'next/image'
import React from 'react'

import { DoubleQuote } from 'assets/icons'
import { ImgSlider } from 'assets/images/agency-page'

const SliderComponent = () => {
  return (
    <section className='pb-[98px] pt-10 sm:pb-[172px] sm:pt-[95px]'>
      <Carousel autoplay className='custom-carousel-panel'>
        {Array(5)
          .fill(0)
          .map((item, index) => (
            <div
              key={index}
              className='sm:main-container mobile-container flex flex-col rounded-2xl bg-gradientCarousel p-8 text-white sm:flex-row'
            >
              <div className='ml-5 mr-9 hidden sm:block'>
                <Image src={DoubleQuote} alt='' width={34} height={31} />
              </div>
              <div className='flex flex-col-reverse sm:flex-row'>
                <div className=''>
                  <p className='mt-6 w-[254px] text-center font-poppins text-sm font-normal opacity-70 sm:w-[656px] sm:text-left sm:text-xl'>
                    Internal stakeholders were happy with the final product. The team was able to
                    communicate their progress clearly and concisely. They took the initiative and
                    executed the project without much supervision. Internal stakeholders were happy
                    with the final product. The team was able to communicate their progress clearly
                    and concisely. They took the initiative and executed the project without much
                    supervision.
                  </p>
                </div>

                <div className='block h-[1px] w-[237px] bg-zinc-300 sm:mx-7 sm:h-[237px] sm:w-[1px]' />

                <div className='flex flex-col items-center py-[34px] sm:mx-7 sm:mb-10 sm:mt-10 sm:items-start sm:py-0'>
                  <Image
                    src={ImgSlider}
                    width={85}
                    height={85}
                    alt='User Profile'
                    className='rounded-full bg-bgSlider'
                  />
                  <h3 className='mb-3 mt-4 text-lg font-semibold'>Mitchell Marsh</h3>
                  <p className='text-sm'>UI/UX Designer</p>
                </div>
              </div>
            </div>
          ))}
      </Carousel>
    </section>
  )
}

export default SliderComponent
