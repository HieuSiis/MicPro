import ArrowButton from 'components/ui/Button/ArrowButton'
import React from 'react'

const CtaComponent = () => {
    return (
        <section className='main-container sm:py-[139px] py-[50px]'>
            <div className=' bg-gradientBlue2 rounded-[20px] sm:py-[70px] py-[52px]'>
                <div className='font-poppins text-lg font-semibold sm:mb-[18px] mb-3 text-white mx-auto text-center'>Free Ticket</div>
                <h2 className='sm:text-[50px] text-[28px] font-sora font-bold sm:mb-[30px] mb-11 text-white sm:max-w-[775px] max-w-[279px] mx-auto text-center'>Ready to manage your events smarter, better?</h2>
                <div className='flex justify-center'>
                    <ArrowButton className='font-semibold'>Get Started Now</ArrowButton>
                </div>
            </div>

        </section>
    )
}

export default CtaComponent
