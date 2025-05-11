import { Img1Audience, Img2Audience } from 'assets/images/event-page'
import Image from 'next/image'
import React from 'react'

const Audience = () => {
    return (
        <section className='py-[75px] main-container'>
            <div className='flex sm:flex-row flex-col items-center justify-center'>
                <div>
                    <h5 className='sm:font-sora font-poppins sm:text-xl text-base font-semibold text-pink-400'>KEEP THEM HOOKED</h5>
                    <h2 className='sm:text-[50px] text-[28px] text-dark font-sora font-bold max-w-[520px] sm:py-[30px] py-4'>Holistic audience engagement</h2>
                    <p className='text-dark1 font-poppins sm:text-xl text-base font-normal max-w-[446px]'>Onsite or online, our session interaction tools, networking lounges, discussion channels, and 1:1 meetings make it easier than ever for you to engage attendees</p>
                </div>
                <div className=''>
                    <Image src={Img1Audience} alt='' className='relative' />
                    <Image src={Img2Audience} alt='' className='absolute right-1/4 sm:translate-x-32 translate-x-24 sm:-translate-y-[530px] -translate-y-[300px] rounded-md' />
                </div>
            </div>
        </section>
    )
}

export default Audience
