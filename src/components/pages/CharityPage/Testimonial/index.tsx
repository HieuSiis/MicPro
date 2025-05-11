import Image from 'next/image'
import React from 'react'

import { Avt1, Avt2, Avt3 } from 'assets/images/charity-page'
import Heading from 'components/ui/Heading'

const testimonials = [
  {
    id: 1,
    imageSrc: Avt1,
    content:
      'I recently had to jump on 10+ different calls across eight different countries to find the right owner.',
    author: 'Joe Root',
    position: 'Head of Design at AMA',
  },
  {
    id: 2,
    imageSrc: Avt2,
    content:
      'I recently had to jump on 10+ different calls across eight different countries to find the right owner.',
    author: 'Billy Root',
    position: 'Web Designer at AMA',
  },
  {
    id: 3,
    imageSrc: Avt3,
    content:
      'I recently had to jump on 10+ different calls across eight different countries to find the right owner.',
    author: 'Sarah Root',
    position: 'UI Designer at AMA',
  },
]

const Testimonial = () => {
  return (
    <section className='main-container'>
      <Heading>
        Our <span className='text-primary'>Testimonial</span>
      </Heading>
      <p className='mx-auto mt-5 max-w-[306px] text-center font-poppins text-[16px] font-normal text-dark1 sm:max-w-[653px] sm:text-xl'>
        Read and understand our testimonial and know what people say
      </p>
      <div className='mt-[30px] flex flex-col items-center justify-center gap-[30px] sm:mt-20 sm:flex-row sm:gap-5'>
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className='flex flex-col items-center rounded-lg border border-grayEB px-[15px] py-[30px] sm:px-10 sm:py-10 '
          >
            <Image src={testimonial.imageSrc} alt='' className='mb-6' />
            <p className='mb-5 w-[286px] space-y-6 text-center font-poppins text-[16px] font-normal'>
              {testimonial.content}
            </p>
            <div className='mt-5 w-[120px] border border-orange-400' />
            <h5 className='mt-5 font-sora text-xl font-semibold'>{testimonial.author}</h5>
            <span className='mt-1 font-poppins text-sm font-normal text-dark1'>
              {testimonial.position}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonial
