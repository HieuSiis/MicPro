import Image from 'next/image'
import React from 'react'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { DoubleQuote } from 'assets/icons/sport-page'
import { Avatar, LogoAttentive, LogoGusto } from 'assets/images/sport-page'

const TestimonialComponent = () => {
    return (
        <section className='l-container sm:mt-[124px] mt-[60px]'>
            <div className="flex sm:flex-row flex-col rounded-2xl overflow-hidden shadow-sm">
                {/* Left Side */}
                <div className="bg-gray-50 flex-1 p-10">
                    <p className="text-base font-poppins text-blue-600 mb-4 font-normal">Testimonial</p>
                    <h2 className="sm:text-[28px] text-xl leading-snug font-sora font-bold sm:mb-4 mb-3">
                        Trusted by the world's most customer-centric teams
                    </h2>
                    <p className="text-dark1 sm:text-base text-sm font-poppins sm:mb-11 mb-[26px] font-normal max-w-[363px]">
                        Fuel your company’s growth with real-time customer insights.
                    </p>
                    <button className="bg-blue-600 text-white px-10 py-4 rounded-md hover:bg-blue-700 transition">
                        Read More
                    </button>
                </div>

                {/* Right Side */}
                <div className="bg-gradient-to-br from-purple-500 to-blue-600 text-white flex-1 sm:pt-20 sm:pb-[46px] sm:pl-[120px] sm:pr-[66px] p-[28px] relative">
                    <img src={DoubleQuote} alt="" className="absolute sm:top-0 sm:left-0 top-4 left-4 z-0 sm:w-[153px] sm:h-[141px] w-[93px] h-[85px]" />
                    <div className="z-10 relative">
                        <p className="sm:text-3xl text-xl font-sora font-bold sm:mb-[30px] mb-6 max-w-[556px]">
                            The biggest problem was how to connect freelancers with us in a way that is legally possible in the EU.
                        </p>

                        <div className="flex space-x-[52px] sm:mb-8 mb-7">
                            <img src={LogoAttentive} alt="" />
                            <img src={LogoGusto} alt="" />
                        </div>

                        <div className="flex items-center justify-between space-x-4">

                            <div className='flex items-center justify-between space-x-4'>
                                <Image
                                    src={Avatar}
                                    alt="Avatar"
                                    className='sm:w-20 sm:h-20 w-10 h-10 bg-orange-200 rounded-full object-cover'
                                />

                                <div>
                                    <h5 className="sm:font-semibold font-medium sm:text-xl text-base font-sora mb-2">Davor Mišmaš</h5>
                                    <p className="sm:text-sm text-xs opacity-80 font-normal font-poppins">COO of Trash Gang</p>
                                </div>
                            </div>

                            <div className='sm:flex hidden gap-4'>
                                <div className='flex items-center justify-center w-[34px] h-[34px] border border-blue-500 rounded-full hover:border-white'>
                                    <LeftOutlined />
                                </div>
                                <div className='flex items-center justify-center w-[34px] h-[34px] border border-blue-500 rounded-full hover:border-white'>
                                    <RightOutlined />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>

    )
}

export default TestimonialComponent
