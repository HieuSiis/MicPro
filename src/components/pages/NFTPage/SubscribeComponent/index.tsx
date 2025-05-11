import Image from 'next/image'
import React from 'react'

import ButtonIcon from 'assets/images/nft-page/button-arrow-topright.svg'
import Heading from 'components/ui/Heading'

const SubscribeComponent = () => {
  return (
    <section className='main-container mt-[60px] sm:mt-[120px]'>
      <Heading className='max-w-[766px]'>
        Subscribe to join our <span className='text-blue-600'>community</span>
      </Heading>

      <p className='mx-auto mt-5 max-w-[682px] text-center font-poppins text-sm font-normal text-dark1 sm:mt-[34px] sm:text-xl'>
        Stay Up To Date On New Releases, Interviews, Events, And Updates From Foundation's
        Community.
      </p>

      <form
        // onSubmit={(e) => e.preventDefault()}
        className='mx-auto mt-[30px] flex h-[60px] max-w-[327px] items-center rounded-full border border-dark1 px-1 py-1 shadow-sm sm:mt-11 sm:h-20 sm:max-w-xl sm:px-2 sm:py-2'
      >
        <input
          type='email'
          placeholder='Enter your email'
          className='ml-5 flex-grow bg-transparent text-sm placeholder-gray-400 outline-none sm:text-[22px]'
        />
        <button type='submit'>
          <Image
            src={ButtonIcon}
            alt=''
            width={64}
            height={64}
            className=' h-[50px] w-[50px] transition hover:bg-blue-700 sm:h-auto sm:w-auto '
          />
        </button>
      </form>
    </section>
  )
}

export default SubscribeComponent
