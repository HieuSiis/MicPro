import { Carousel } from 'antd'
import Image from 'next/image'
import React from 'react'

import Img from 'assets/images/ecommerce-page/slider.png'

const SliderComponent = () => {
  return (
    <section className='l-container pb-[112px] pt-[81px] sm:pb-[172px] sm:pt-[120px]'>
      <Carousel autoplay className='custom-carousel-panel'>
        {Array(5)
          .fill(0)
          .map((item, index) => (
            <div
              key={index}
              className='relative mt-20 rounded-2xl bg-gradientCarousel p-10 py-16 text-center text-white'
            >
              <div className='absolute -top-20 left-1/2 -translate-x-1/2 transform'>
                <Image
                  src={Img}
                  alt='Mitchell Marsh'
                  className='object- h-[147px] w-[147px] rounded-full bg-blueCC object-scale-down shadow-lg'
                />
              </div>
              <div className='mb-11 mt-4'>
                <h3 className='font-sora text-xl font-semibold'>Mitchell Marsh</h3>
                <p className='mt-[6px] font-poppins text-base font-normal'>UI/UX Designer</p>
              </div>
              <div className='relative z-10 text-lg font-semibold leading-relaxed'>
                <span className='absolute left-4 top-0 select-none text-[100px] leading-none text-blue-400 opacity-10'>
                  “
                </span>
                <h3 className='mx-auto max-w-[931px] text-center font-sora text-xl font-bold leading-tight sm:text-[34px]'>
                  Internal stakeholders were happy with the final product. The team was able to
                  communicate their progress clearly and concisely. They took the initiative and
                  executed the project without much supervision. Internal stakeholders were happy
                  with the final product.
                </h3>
                <span className='absolute bottom-0 right-4 select-none text-[100px] leading-none text-blue-400 opacity-10'>
                  ”
                </span>
              </div>
            </div>
          ))}
      </Carousel>
    </section>
  )
}

export default SliderComponent
