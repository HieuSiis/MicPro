import Image from 'next/image'
import React from 'react'
import RadiusButton from 'components/ui/Button/RadiusButton'
import { BPlayer, IBasketball, LogoAdidas, LogoNike, LogoPuma } from 'assets/images/sport-page'

const HeroComponent = () => {
    return (
        <section className='hero'>
            <div className='l-container'>
                <div className="flex sm:flex-row flex-col sm:gap-[74px] gap-10">
                    <div className="flex flex-col justify-center">
                        <h1 className="sm:max-w-[341px] max-w-[327px] sm:font-extrabold font-bold sm:text-6xl sm:leading-tight text-[28px] sm:mb-7 mb-5 font-sora">
                            We are the <span className=" text-gradient"> Basketball </span>
                            <span className='flex items-center sm:gap-3 gap-2'>
                                Academy <Image src={IBasketball} alt="" className='sm:w-[43px] sm:h-10 w-[23px] h-[21px]' />
                            </span>
                        </h1>

                        <div className='sm:max-w-[445px] max-w-[327px] sm:text-lg text-sm font-poppins font-normal sm:mb-10 mb-[30px]'>
                            Browse the wide range of sports programs that you like, and many verified and fun sports inspectors staying at home.
                        </div>
                        <RadiusButton className='sm:bg-white bg-primary sm:text-dark text-white w-fit text-base font-poppins'>Our Service
                            <div className='text-white sm:text-neutral-800'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0909 7.26521C14.4968 6.8906 15.1294 6.9159 15.504 7.32172L18.7348 10.8217C19.0884 11.2047 19.0884 11.7952 18.7348 12.1782L15.504 15.6783C15.1294 16.0841 14.4968 16.1094 14.091 15.7348C13.6851 15.3602 13.6598 14.7276 14.0344 14.3217L15.716 12.5L6 12.5C5.44771 12.5 5 12.0523 5 11.5C5 10.9477 5.44771 10.5 6 10.5L15.716 10.5L14.0344 8.67829C13.6598 8.27247 13.6851 7.63981 14.0909 7.26521Z" fill="currentColor" />
                                </svg>
                            </div>
                        </RadiusButton>
                    </div>

                    <Image src={BPlayer} alt='' width={290} height={615} className='sm:block hidden' />

                    <div className="flex flex-col sm:items-start items-center justify-center">

                        <h1 className='text-6xl font-extrabold tracking-[10px] mb-4 font-sora sm:block hidden'>200K</h1>
                        <span className='text-base font-normal leading-6 max-w-[288px] font-poppins sm:block hidden'>Unit products sold form our website every single day.</span>
                        <span className='text-base font-normal leading-6 py-12 max-w-[233px] font-poppins sm:block hidden'>Balshai is the most trusted sporting gear manufacturing organization in the world</span>

                        <h5 className='text-xl font-sora font-semibold'>Proudly partners with</h5>
                        <div className="flex gap-5 mt-6">
                            <img src={LogoPuma} alt="" />
                            <Image src={LogoNike} alt="" />
                            <Image src={LogoAdidas} alt="" />
                        </div>
                        <Image src={BPlayer} alt='' width={290} height={615} className='block sm:hidden mt-[50px]' />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroComponent
