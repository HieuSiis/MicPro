
import Image from 'next/image'
import React from 'react'
import Arrow from 'assets/icons/Arrow.svg';
import ButtonRadius from '../../../ui/Button/RadiusButton'

const HeroComponent = () => {
    return (
        <section className='hero sm:mb-[100px] mb-10'>
            <div className="l-container relative">
                <h1 className='max-w-[283px] sm:max-w-[807px] text-[34px] mx-auto font-extrabold sm:text-6xl text-center leading-snug mb-7 font-sora'>
                    Build Your Dream Website with Our Skilled {" "}
                    <span className='text-gradient'>Development</span> Team
                </h1>
                <div className='text-center sm:max-w-[715px] sm:text-lg max-w-[275px] text-base mb-11 mx-auto font-poppins'>
                    Are you looking for a way to close all marketing, technical and customer support tasks for your company in one place
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:gap-6 gap-5 justify-center">
                    <ButtonRadius className='text-white bg-blue-600 '>Get Started <Image src={Arrow} alt='' width={24} height={24}></Image></ButtonRadius>
                    <ButtonRadius className='border border-gray-950 '>Pricing</ButtonRadius>
                </div>
            </div>
        </section>
    )
}

export default HeroComponent
