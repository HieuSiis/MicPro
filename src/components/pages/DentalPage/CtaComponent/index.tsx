import ArrowButton from 'components/ui/Button/ArrowButton'
import React from 'react'

const CtaComponent = () => {
    return (
        <section className='main-container sm:py-[70px] py-[50px]'>
            <div className='mx-auto text-center bg-gradientBlue2 rounded-[20px] sm:py-[70px] py-[52px]'>
                <div className='font-poppins text-lg font-semibold mb-3 text-white'>Free Consultation</div>
                <h2 className='sm:text-[50px] text-[28px] font-sora font-bold mb-[60px] text-white'>For Any Emergency Contact</h2>
                <div className='flex justify-center'>
                    <ArrowButton>Book An Appointment</ArrowButton>
                </div>
            </div>

        </section>
    )
}

export default CtaComponent
