import React from 'react'
import Image from 'next/image'
import { StarFilled } from '@ant-design/icons'
import { Amazon, Avatar, Group } from 'assets/images/event-page'
import { Carousel } from 'antd'

const SliderComponent = () => {
    return (
        <section className='main-container sm:py-[100px] sm:mb-0 mb-[70px]'>
            <Carousel autoplay className='custom-carousel-panel-event'>
                {Array(3).fill(0).map((item, index) => (
                    <div className='bg-gradientCarousel rounded-[20px] sm:p-[70px] px-6 py-[30px]'>
                        <h3 className='text-white font-sora sm:text-[34px] text-xl font-bold mx-auto text-center sm:mb-[60px] mb-[26px]'>CUSTOMER STORY</h3>
                        <div className='flex sm:flex-row flex-col-reverse sm:gap-[188px] gap-6'>
                            <h4 className='sm:text-[28px] text-lg text-white font-sora font-bold max-w-[591px]'>"We used Backstage to organize our second anniversary. It helped us gather more than 450 guests to celebrate this event with us."</h4>
                            <div className='flex gap-[87px]'>
                                <div className="flex sm:hidden gap-1 justify-center">
                                    {Array(5).fill(0).map((item, index) => (
                                        <div key={index} className="text-orange-300 mt-1 text-[19px]"><StarFilled /></div>
                                    ))}
                                </div>
                                <img src={Amazon} alt="" className='sm:h-auto h-[35px]' />
                            </div>
                        </div>
                        <div className='grid sm:grid-cols-3 grid-cols-1 justify-center sm:mt-[30px] mt-[17px]'>
                            <div className='flex gap-[10px] items-center mb-10'>
                                <Image src={Avatar} alt='' width={60} height={60} className='rounded-full sm:w-[60px] sm:h-[60px] w-10 h-10' />
                                <div className='flex flex-col gap-[6px]'>
                                    <h5 className='text-white sm:font-sora font-poppins sm:text-xl text-lg font-semibold'>Yaron Shifman</h5>
                                    <p className='font-poppins text-indigo-200 font-medium text-sm'>CEO, Swathly Ltd</p>
                                </div>
                            </div>
                            <div className="sm:flex hidden gap-2 justify-center">
                                {Array(5).fill(0).map((item, index) => (
                                    <div key={index} className="text-orange-300 mt-1 text-[29px]"><StarFilled /></div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>

        </section>
    )
}

export default SliderComponent
