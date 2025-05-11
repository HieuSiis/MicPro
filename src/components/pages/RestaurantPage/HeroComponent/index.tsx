import React from 'react'
import Image from 'next/image'
import { AppStore, GgPlay, IpadPro } from 'assets/images/restaurant-page'

const HeroComponent = () => {
    return (
        <section>
            <div className="l-container">
                <h1 className='sm:max-w-[734px] max-w-[327px] mx-auto font-bold sm:text-6xl text-[34px] text-center font-sora sm:leading-snug leading-10 mb-6'>
                    The Best way to grow your <span className='text-gradient'>Business</span>
                </h1>
                <div className='text-center sm:max-w-[715px] max-w-[285px] text-lg font-poppins font-normal mx-auto'>
                    Imagine you don’t need a diet because we provide healthy and delicious toad for you! We are providing the best food delivery services.
                </div>
                <div className="flex sm:flex-row flex-col items-center justify-center sm:gap-6 gap-[10px] sm:mt-[70px] mt-[30px] sm:mb-[76px] mb-[42px]">
                    <button>
                        <Image src={GgPlay} alt=''></Image>
                    </button>
                    <button>
                        <Image src={AppStore} alt=''></Image>
                    </button>
                </div>
                <div className='flex justify-center'>
                    <img src={IpadPro} alt="" className='object-contain' />
                </div>
            </div>
        </section>
    )
}

export default HeroComponent
