import React from 'react'
import RadiusButton from 'components/ui/Button/RadiusButton'
import Image from 'next/image'
import { Play, SparkleBlue } from 'assets/icons'
import { Img1Hero, Img2Hero } from 'assets/images/event-page'

const HeroComponent = () => {
    return (
        <section className='sm:py-20'>
            <div className="l-container flex sm:flex-row flex-col gap-24">
                <div className='sm:text-left text-center'>
                    <h5 className='font-sora sm:text-xl text-sm font-semibold text-dark sm:mb-[26px] mb-[14px]'>Design Event Conference <span className='text-pink-400'>2023</span></h5>
                    <h1 className='max-w-[533px] font-extrabold sm:text-6xl text-[34px] leading-tight font-sora'>
                        Designing Events for Brand <span className='text-gradient'>Awareness</span>
                        <img src={SparkleBlue} alt="" className='w-6 h-6 text-center top-[430px] left-[590px] absolute sm:block hidden' />
                    </h1>
                    <p className='text-dark text-xl font-poppins font-normal sm:max-w-[612px] max-w-[327px] mt-[30px]'>Our team of skilled dentists and dental professionals are dedicated to providing you with comprehensive and personalized dental care.</p>
                    <div className='flex flex-wrap sm:justify-start justify-center gap-4 sm:mt-11 mt-[30px]'>
                        <RadiusButton className='bg-primary text-white'>Get Ticket</RadiusButton>
                        <RadiusButton className='border border-dark'><Image src={Play} alt='' width={24} height={24}></Image> Watch Video</RadiusButton>
                    </div>
                </div>
                <div className='sm:h-[641px] h-[400px] flex items-center'>
                    <div className="relative">
                        <Image src={Img1Hero} alt="" className="rounded-2xl sm:w-[356px] w-[215px] sm:ml-0 ml-2" />
                        <Image
                            src={Img2Hero}
                            alt=""
                            className="rounded-2xl absolute bottom-1/4 -translate-y-10 sm:right-1/4 sm:translate-x-72 translate-x-36 sm:w-[324px] w-[195px]"
                        />
                    </div>
                </div>

            </div>

        </section>
    )
}

export default HeroComponent
