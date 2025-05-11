import Image from 'next/image'
import React from 'react'

import { Img1Audience, Img2Audience } from 'assets/images/event-page'

const Audience = () => {
  return (
    <section className='main-container py-[75px]'>
      <div className='flex flex-col items-center justify-center sm:flex-row'>
        <div>
          <h5 className='font-poppins text-base font-semibold text-pink-400 sm:font-sora sm:text-xl'>
            KEEP THEM HOOKED
          </h5>
          <h2 className='max-w-[520px] py-4 font-sora text-[28px] font-bold text-dark sm:py-[30px] sm:text-[50px]'>
            Holistic audience engagement
          </h2>
          <p className='max-w-[446px] font-poppins text-base font-normal text-dark1 sm:text-xl'>
            Onsite or online, our session interaction tools, networking lounges, discussion
            channels, and 1:1 meetings make it easier than ever for you to engage attendees
          </p>
        </div>
        <div className=''>
          <Image src={Img1Audience} alt='' className='relative' />
          <Image
            src={Img2Audience}
            alt=''
            className='absolute right-1/4 -translate-y-[300px] translate-x-24 rounded-md sm:-translate-y-[530px] sm:translate-x-32'
          />
        </div>
      </div>
    </section>
  )
}

export default Audience
