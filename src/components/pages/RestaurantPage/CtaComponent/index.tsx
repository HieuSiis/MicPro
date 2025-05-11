import Image from 'next/image'
import React from 'react'
import { MailOutlined } from '@ant-design/icons'
import { Hamburger } from 'assets/images/restaurant-page'
const CtaComponent = () => {
    return (
        <section className='main-container sm:mt-[157px] mt-[102px]'>
            <div className="flex sm:flex-row flex-col-reverse bg-gradientCtaCharity rounded-xl sm:p-0 p-5">
                <Image src={Hamburger} alt='' className='flex sm:pt-[83px] sm:pl-[46px] sm:pb-[18px] sm:py-0 sm:px-0 py-10 px-4 mr-[128px]'></Image>
                <div className='flex flex-col justify-center '>
                    <span className='text-lg font-normal font-inter text-zinc-100 sm:mb-[14px] mb-4 sm:mt-0 mt-[10px]'>$20 discount for your first order</span>
                    <h2 className='text-[34px] font-sora font-bold text-white sm:mb-[30px] mb-5 sm:max-w-[465px] max-w-[266px]'>Join our newsletter and get updates</h2>
                    <p className='text-base font-normal font-poppins text-white sm:max-w-[396px] max-w-[258px]'>Join our email subcription now to get updates on promotoions and coupons.</p>
                    <div className='flex items-center bg-white px-1 rounded-[4px] sm:mt-[38px] mt-6 justify-between sm:max-w-[481px] max-w-[327px] sm:h-[66px] h-[54px]'>
                        <MailOutlined style={{ color: 'gray' }} className='sm:ml-5 ml-[11px] sm:-mr-36 -mr-10' />
                        <input type="email" placeholder='Your email address' className='sm:text-sm text-xs sm:font-inter font-poppins sm:font-medium font-normal focus:outline-none w-[116px] sm:w-[128px]' />
                        <button className='bg-primary text-white rounded-[4px] text-sm font-inter font-semibold sm:p-5 p-[11px]'>Subscribe</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CtaComponent
