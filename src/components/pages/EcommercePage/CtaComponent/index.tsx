import React from 'react'

const CtaComponent = () => {
  return (
    <section className='sm:main-container mobile-container mx-auto mt-[60px] rounded-2xl bg-gradientBlue2 py-10 text-center text-white sm:mt-[120px] sm:py-20'>
      <h2 className='mx-auto mb-[30px] max-w-[858px] text-center font-sora text-[28px] font-bold leading-snug sm:mb-10 sm:text-[50px]'>
        Your Own Online Store is Just a Few Clicks Away
      </h2>
      <button
        type='button'
        className='rounded-[10px] bg-white p-4 font-poppins text-lg font-semibold text-black transition hover:bg-gray-100'>
        Get Started for free
      </button>
      <p className='mt-[14px] font-poppins text-base font-thin text-white'>
        No credit card required — pay when you&apos;re ready.
      </p>
    </section>
  )
}

export default CtaComponent
