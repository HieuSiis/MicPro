import Image from 'next/image'
import React from 'react'
import { Carousel } from 'antd'
import { DoubleQuote, Group } from 'assets/icons'
import { ImgSlider } from 'assets/images/agency-page'

const SliderComponent = () => {
    return (
        <section className='sm:pt-[95px] pt-10 sm:pb-[172px] pb-[98px]'>
            <Carousel autoplay className='custom-carousel-panel'>
                {Array(5).fill(0).map((item, index) => (
                    <div key={index} className="sm:main-container mobile-container bg-gradientCarousel text-white p-8 rounded-2xl flex flex-col sm:flex-row">
                        <div className='sm:block hidden ml-5 mr-9'>
                            <Image src={DoubleQuote} alt='' width={34} height={31} ></Image>
                        </div>
                        <div className='flex sm:flex-row flex-col-reverse'>
                            <div className="">
                                <p className="sm:w-[656px] w-[254px] sm:text-left text-center sm:text-xl text-sm font-normal font-poppins mt-6 opacity-70">
                                    Internal stakeholders were happy with the final product. The team was
                                    able to communicate their progress clearly and concisely. They took
                                    the initiative and executed the project without much supervision.
                                    Internal stakeholders were happy with the final product. The team
                                    was able to communicate their progress clearly and concisely. They
                                    took the initiative and executed the project without much
                                    supervision.
                                </p>
                            </div>

                            <div className="sm:w-[1px] sm:h-[237px] h-[1px] w-[237px] bg-zinc-300 block sm:mx-7"></div>

                            <div className="flex flex-col items-center sm:items-start sm:mx-7 sm:mt-10 sm:mb-10 sm:py-0 py-[34px]">
                                <Image
                                    src={ImgSlider}
                                    width={85}
                                    height={85}
                                    alt="User Profile"
                                    className="bg-bgSlider rounded-full"
                                />
                                <h3 className="mt-4 mb-3 text-lg font-semibold">Mitchell Marsh</h3>
                                <p className="text-sm">UI/UX Designer</p>
                            </div>
                        </div>

                    </div>
                ))}
            </Carousel>
        </section>
    )
}

export default SliderComponent
