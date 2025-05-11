import React from 'react'

import ArrowButton from 'components/ui/Button/ArrowButton'

const CtaComponent = () => {
  return (
    <section className='main-container py-[50px] sm:py-[139px]'>
      <div className=' rounded-[20px] bg-gradientBlue2 py-[52px] sm:py-[70px]'>
        <div className='mx-auto mb-3 text-center font-poppins text-lg font-semibold text-white sm:mb-[18px]'>
          Free Ticket
        </div>
        <h2 className='mx-auto mb-11 max-w-[279px] text-center font-sora text-[28px] font-bold text-white sm:mb-[30px] sm:max-w-[775px] sm:text-[50px]'>
          Ready to manage your events smarter, better?
        </h2>
        <div className='flex justify-center'>
          <ArrowButton className='font-semibold'>Get Started Now</ArrowButton>
        </div>
      </div>
    </section>
  )
}

export default CtaComponent
