import Image from 'next/image'
import React from 'react'

import IMG from 'assets/images/charity-page/img-cta-charity.png'
import ArrowButton from 'components/ui/Button/ArrowButton'

const CtaComponent = () => {
  return (
    <section className='main-container pt-[70px] sm:pt-[120px]'>
      <div className='flex w-full flex-col-reverse items-center rounded-2xl bg-gradientCtaCharity pt-9 text-white sm:flex-row sm:pt-11'>
        <div>
          <Image src={IMG} alt='Volunteers' className='mt-8 px-[18px] sm:mt-0 sm:px-0 ' />
        </div>

        <div className='text-center text-white sm:mt-0 sm:w-1/2 sm:pl-8 sm:text-left'>
          <h2 className='mx-auto mb-6 max-w-[241px] font-sora text-xl font-bold leading-7 sm:mx-0 sm:mb-8 sm:max-w-[413px] sm:text-[34px] sm:leading-10'>
            Become a Volunteer of our charity
          </h2>
          <p className='max-w-[267px] font-poppins text-[16px] font-normal opacity-70 sm:max-w-[486px]'>
            We believe your project is only as good as the team that&apos;s working on it. When we work
            with you and your team, we know there are no shortcuts to success. Your research is
            done; now lets get down to business!
          </p>
          <ArrowButton className='mx-auto mt-6 sm:mx-0 sm:mt-11'>Join the team</ArrowButton>
        </div>
      </div>
    </section>
  )
}

export default CtaComponent
