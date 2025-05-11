import React from 'react'

const CtaComponent = () => {
  return (
    <section className='sm:main-container mobile-container mx-auto mt-[60px] rounded-2xl bg-gradientBlue2 py-11 text-center text-white sm:mt-[90px] sm:py-20'>
      <h2 className='mx-auto mb-5 max-w-[265px] text-center font-sora text-[28px] font-bold leading-snug sm:mb-6 sm:max-w-[711px] sm:text-[50px]'>
        Enter your email to get the latest news
      </h2>
      <p className='mx-auto max-w-[257px] text-center font-poppins text-sm font-thin text-white sm:max-w-[613px] sm:text-xl'>
        Stay informed about the latest school news with notifications.
      </p>

      <form className='mx-auto mt-[49px] flex max-w-[287px] items-center rounded-full bg-white px-1 py-1 text-dark shadow-sm sm:mt-10 sm:max-w-[402px]'>
        <input
          type='email'
          placeholder='Enter Email Address'
          className='ml-3 flex-grow bg-transparent text-sm placeholder-dark1 outline-none sm:ml-5 sm:text-lg'
        />
        <button
          type='submit'
          className='rounded-full bg-primary px-6 py-[15px] font-poppins text-sm font-thin text-white transition hover:bg-blue-800 sm:text-lg'
        >
          Submit
        </button>
      </form>
    </section>
  )
}

export default CtaComponent
