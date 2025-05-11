import Image from 'next/image'
import React from 'react'
import { ClockCircleOutlined } from '@ant-design/icons'
import { Channel } from 'assets/images/event-page'

const ChannelMarketing = () => {
    return (
        <section className='sm:py-20 py-[60px] main-container'>
            <div className='flex sm:flex-row flex-col-reverse items-center justify-center sm:gap-[107px] gap-10'>

                <div className='max-w-[566px] rounded-xl'>
                    <Image src={Channel} alt='' className='relative sm:w-auto w-[327px] sm:ml-0 -ml-3' />
                    <div className='flex flex-col sm:py-5 sm:px-4 py-3 px-3 rounded-[10px] sm:gap-[10px] gap-[5px] shadow-sm sm:w-[180px] w-[113px] sm:h-[136px] h-[85px] bg-white absolute sm:right-1/2 right-1/4 sm:-translate-x-10 translate-x-[70px] -translate-y-10'>
                        <div className='flex items-center font-semibold font-poppins sm:text-lg text-[11px] gap-1'>
                            <ClockCircleOutlined />
                            Schedule
                        </div>
                        <div className='flex items-center font-normal font-poppins sm:text-lg text-[11px] gap-2'>
                            <div className='bg-primary sm:w-4 w-[10px] sm:h-4 h-[10px] rounded-full'></div>
                            Now
                        </div>
                        <div className='flex items-center font-normal font-poppins sm:text-lg text-[11px] gap-2'>
                            <div className='bg-orange-400 sm:w-4 w-[10px] sm:h-4 h-[10px] rounded-full'></div>
                            Specific time
                        </div>
                    </div>
                </div>
                <div>
                    <h5 className='sm:font-sora font-poppins sm:text-xl text-base font-semibold text-primary'>GO THE DISTANCE</h5>
                    <h2 className='sm:text-[50px] text-[28px] text-dark font-sora font-bold max-w-[520px] sm:py-[30px] py-4'>Omni-channel marketing tools</h2>
                    <p className='text-dark1 font-poppins sm:text-xl text-base font-normal sm:max-w-[446px] max-w-[327px]'>From a fully-customizable event website to email campaigns, from customizable social banners to affiliate marketing</p>
                </div>
            </div>
        </section>
    )
}

export default ChannelMarketing
