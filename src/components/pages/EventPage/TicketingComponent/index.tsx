import Image from 'next/image'
import React from 'react'

import { CreditCards, PaymentMethod } from 'assets/images/event-page'

const TicketingComponent = () => {
  return (
    <section className='main-container py-5 sm:py-[94px]'>
      <div className='flex flex-col items-center justify-center gap-[30px] sm:flex-row sm:gap-[107px]'>
        <div>
          <h5 className='font-poppins text-base font-semibold text-orange-400 sm:font-sora sm:text-xl'>
            TURN A PROFIT
          </h5>
          <h2 className='max-w-[520px] py-4 font-sora text-[28px] font-bold text-dark sm:py-[30px] sm:text-[50px]'>
            0% commission event ticketing
          </h2>
          <p className='max-w-[327px] font-poppins text-base font-normal text-dark1 sm:max-w-[446px] sm:text-xl'>
            Our ticketing platform supports a wide range of payment options and 10+ payment
            gateways, so you can sell tickets exactly the way you want.
          </p>
        </div>
        <div className='max-w-[566px]'>
          <Image
            src={PaymentMethod}
            alt=''
            className='relative ml-14 w-[282px] sm:ml-0 sm:w-auto'
          />
          <Image
            src={CreditCards}
            alt=''
            className='absolute w-[180px] -translate-x-8 -translate-y-28 rounded-md sm:w-auto sm:-translate-x-32 sm:-translate-y-44'
          />
        </div>
      </div>
    </section>
  )
}

export default TicketingComponent
