import React from 'react'
import Image from 'next/image'
import { CreditCards, PaymentMethod } from 'assets/images/event-page'

const TicketingComponent = () => {
    return (
        <section className='sm:py-[94px] py-5 main-container'>
            <div className='flex sm:flex-row flex-col items-center justify-center sm:gap-[107px] gap-[30px]'>
                <div>
                    <h5 className='sm:font-sora font-poppins sm:text-xl text-base font-semibold text-orange-400'>TURN A PROFIT</h5>
                    <h2 className='sm:text-[50px] text-[28px] text-dark font-sora font-bold max-w-[520px] sm:py-[30px] py-4'>0% commission event ticketing</h2>
                    <p className='text-dark1 font-poppins sm:text-xl text-base font-normal sm:max-w-[446px] max-w-[327px]'>Our ticketing platform supports a wide range of payment options and 10+ payment gateways, so you can sell tickets exactly the way you want.</p>
                </div>
                <div className='max-w-[566px]'>
                    <Image src={PaymentMethod} alt='' className='relative sm:w-auto w-[282px] sm:ml-0 ml-14' />
                    <Image src={CreditCards} alt='' className='absolute sm:-translate-x-32 -translate-x-8 sm:-translate-y-44 -translate-y-28 rounded-md sm:w-auto w-[180px]' />
                </div>
            </div>
        </section>
    )
}

export default TicketingComponent
