import { AvtB, AvtBL, AvtGD, AvtGL, AvtO, AvtPink, AvtPurple, AvtTL, AvtTR, DecorL, DecorR } from 'assets/images/ecommerce-page/hero-section'
import Image from 'next/image'
import React from 'react'

const HeroComponent = () => {
    return (
        <section className='relative sm:mb-[100px] mb-9'>
            {/* Heading */}
            <h1 className='sm:max-w-[719px] max-w-[327px] mx-auto sm:font-extrabold font-bold font-sora sm:text-6xl text-[34px] text-center sm:leading-tight leading-tight sm:mb-7 mb-[30px]'>
                Shop the Best <span className='text-gradient'>Styles</span> in One Place
            </h1>

            <div className="absolute left-40 top-32 sm:flex hidden gap-[810px]">
                {/* Top Left Avatar */}
                <div className="relative">
                    <img src={DecorL} alt="Decorate Left" className='absolute left-32 -top-10' />
                    <Image src={AvtTL} alt="Top Left Avatar" />

                </div>

                {/* Top Right Avatar */}
                <div className="relative">
                    <img src={DecorR} alt="Decorate Right" className='absolute -top-28' />
                    <Image src={AvtTR} alt="Top Right Avatar" />
                </div>
            </div>

            {/* Grid Avatars */}
            <div className="flex items-center justify-center sm:gap-4 gap-3 sm:mt-[80px] sm:px-0 px-6">

                <Image src={AvtGD} alt="Green Dark Avatar" className="sm:rounded-[20px] rounded-lg sm:block hidden" />

                <div className="flex flex-col sm:gap-4 gap-3">
                    <Image src={AvtB} alt="Blue Avatar" className="sm:rounded-[20px] rounded-lg" />
                    <Image src={AvtGL} alt="Green Light Avatar" className="sm:rounded-[20px] rounded-lg" />
                </div>

                <Image src={AvtO} alt="Orange Avatar" className="sm:rounded-[20px] rounded-lg sm:h-[490px] h-[214px]" />

                <div className="flex flex-col sm:gap-4 gap-3">
                    <Image src={AvtPink} alt="Pink Avatar" className="sm:rounded-[20px] rounded-lg" />
                    <Image src={AvtPurple} alt="Purple Avatar" className="sm:rounded-[20px] rounded-lg" />
                </div>
                <Image src={AvtBL} alt="Blue Light Avatar" className="sm:rounded-[20px] rounded-lg sm:block hidden" />
            </div>

        </section>
    )
}

export default HeroComponent
