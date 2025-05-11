import Image from 'next/image'
import React from 'react'
import Img from 'assets/images/ecommerce-page/slider.png'
import { Carousel } from 'antd'
import { Group } from 'assets/icons'

const SliderComponent = () => {
    return (

        <section className='l-container sm:pt-[120px] sm:pb-[172px] pt-[81px] pb-[112px]'>
            <Carousel autoplay className='custom-carousel-panel'>
                {Array(5).fill(0).map((item, index) => (
                    <div key={index} className="mt-20 py-16 relative bg-gradientCarousel text-white rounded-2xl p-10 text-center">
                        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
                            <Image
                                src={Img}
                                alt="Mitchell Marsh"

                                className="rounded-full w-[147px] h-[147px] object-scale-down object- bg-blueCC shadow-lg"
                            />
                        </div>
                        <div className="mt-4 mb-11">
                            <h3 className="text-xl font-sora font-semibold">Mitchell Marsh</h3>
                            <p className="text-base font-poppins font-normal mt-[6px]">UI/UX Designer</p>
                        </div>
                        <div className="text-lg font-semibold leading-relaxed relative z-10">
                            <span className="absolute text-[100px] text-blue-400 opacity-10 top-0 left-4 leading-none select-none">“</span>
                            <h3 className='sm:text-[34px] text-xl font-sora font-bold max-w-[931px] text-center leading-tight mx-auto'>
                                Internal stakeholders were happy with the final product. The team was able to communicate their progress clearly and concisely. They took the initiative and executed the project without much supervision. Internal stakeholders were happy with the final product.
                            </h3>
                            <span className="absolute text-[100px] text-blue-400 opacity-10 bottom-0 right-4 leading-none select-none">”</span>
                        </div>
                    </div>
                ))}
            </Carousel>
        </section>

    )
}

export default SliderComponent
