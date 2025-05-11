import Image from 'next/image'
import React from 'react'
import RadiusButton from 'components/ui/Button/RadiusButton'
import { Arrow, Play } from 'assets/icons'

const HeroComponent = () => {
    return (
        <section className='hero mb-[100px]'>
            <div className="sm:l-container mobile-container">
                <h1 className='sm:max-w-[807px] max-w-[327px] mx-auto font-extrabold sm:text-6xl text-[34px] text-center leading-snug mb-7'>
                    Fundraising Through Your Social <span className='text-gradient'>Networks</span>
                </h1>
                <div className='text-center sm:max-w-[715px] max-w-[285px] text-lg sm:mb-12 mb-[30px] mx-auto font-poppins font-normal'>
                    Are you looking for a way to close all marketing, technical and customer support tasks for your company in one place
                </div>

                <div className="flex sm:flex-row flex-col items-center gap-5 justify-center">
                    <RadiusButton className='text-white bg-blue-600 font-normal'>Donate Now <Image src={Arrow} alt='' width={24} height={24}></Image></RadiusButton>
                    <RadiusButton className='font-normal bg-white'><Image src={Play} alt='' width={24} height={24}></Image> Watch Video</RadiusButton>
                </div>
            </div>
        </section>
    )
}

export default HeroComponent
