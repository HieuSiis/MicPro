import React from 'react'

import ArrowButton from 'components/ui/Button/ArrowButton'

const CtaComponent = () => {
  return (
    <section className='main-container py-[50px] sm:py-[70px]'>
      <div className='mx-auto rounded-[20px] bg-gradientBlue2 py-[52px] text-center sm:py-[70px]'>
        <div className='mb-3 font-poppins text-lg font-semibold text-white'>Free Consultation</div>
        <h2 className='mb-[60px] font-sora text-[28px] font-bold text-white sm:text-[50px]'>
          For Any Emergency Contact
        </h2>
        <div className='flex justify-center'>
          <ArrowButton>Book An Appointment</ArrowButton>
        </div>
      </div>
    </section>
  )
}

export default CtaComponent
