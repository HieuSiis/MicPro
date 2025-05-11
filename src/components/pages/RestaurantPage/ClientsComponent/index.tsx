import Heading from 'components/ui/Heading'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { StarFilled } from '@ant-design/icons'
import { Carousel } from 'antd'
import { Elmo, Yaron } from 'assets/images/restaurant-page'
import { PagDots } from 'assets/icons'

const InfoClients = [
    {
        name: "Yaron Shifman",
        position: "CEO, Swathly Ltd",
        introduce: "I’m very pleased with their work. When I need help with any aspect of development, I’m able to call on them to take care of it. They’re professional and complete tasks in a timely manner.",
        ImgSrc: Yaron
    },
    {
        name: "Elmo Weber",
        position: "Founder, Fair Friend ",
        introduce: "Scopic has never let me down. I’m pleased with our partnership and they consistently develop reliable applications. They estimate a range of hours for each project and they manage it efficiently.",
        ImgSrc: Elmo
    },
    {
        name: "Yaron Shifman",
        position: "CEO, Swathly Ltd",
        introduce: "I’m very pleased with their work. When I need help with any aspect of development, I’m able to call on them to take care of it. They’re professional and complete tasks in a timely manner.",
        ImgSrc: Yaron
    },
    {
        name: "Elmo Weber",
        position: "Founder, Fair Friend ",
        introduce: "Scopic has never let me down. I’m pleased with our partnership and they consistently develop reliable applications. They estimate a range of hours for each project and they manage it efficiently.",
        ImgSrc: Elmo
    },
    {
        name: "Yaron Shifman",
        position: "CEO, Swathly Ltd",
        introduce: "I’m very pleased with their work. When I need help with any aspect of development, I’m able to call on them to take care of it. They’re professional and complete tasks in a timely manner.",
        ImgSrc: Yaron
    },
    {
        name: "Elmo Weber",
        position: "Founder, Fair Friend ",
        introduce: "Scopic has never let me down. I’m pleased with our partnership and they consistently develop reliable applications. They estimate a range of hours for each project and they manage it efficiently.",
        ImgSrc: Elmo
    },
]

const chunkArray = (arr: any[], size: number) => {
    const chunkedArr = []
    for (let i = 0; i < arr.length; i += size) {
        chunkedArr.push(arr.slice(i, i + size))
    }
    return chunkedArr
}
const ClientsComponent = () => {

    const [slides, setSlides] = useState<any[][]>([])

    const updateChunks = () => {
        const isMobile = window.innerWidth < 640
        const chunked = chunkArray(InfoClients, isMobile ? 1 : 2)
        setSlides(chunked)
    }

    useEffect(() => {
        updateChunks()
        window.addEventListener('resize', updateChunks)
        return () => window.removeEventListener('resize', updateChunks)
    }, [])

    return (
        <section className='main-container sm:mt-[120px] mt-[60px]'>
            <Heading className='sm:max-w-[543px] max-w-[267px]'>What Our <span className='text-primary'>Clients</span> Say</Heading>
            <p className='text-dark1 sm:max-w-[513px] max-w-[278px] sm:text-xl text-base sm:font-normal font-medium font-poppins sm:mt-6 mt-5 mx-auto text-center'>Here, We make almost every genre of applications. Your name it and we build it.</p>
            <Carousel autoplay className='custom-carousel-card'>
                {slides.map((group, index) => (
                    <div key={index} className="grid sm:grid-cols-2 grid-cols-1 items-center justify-center sm:mt-[70px] mt-10 gap-[30px]">
                        {group.map((item, idx) => (
                            <div key={idx} className='flex flex-col bg-white border rounded-lg shadow-sm p-[29px] max-h-[252px]'>
                                <div className="flex">
                                    <Image className='rounded-full mr-[10px]' src={item.ImgSrc} alt=''></Image>
                                    <div className='flex flex-col justify-center font-semibold font-mulish'>
                                        <h4 className='text-base'>{item.name}</h4>
                                        <span className='text-sm text-stone-400'>{item.position}</span>
                                    </div>
                                    <div className="flex gap-1 ml-auto">
                                        {Array(5).fill(0).map((item, index) => (
                                            <div key={index} className="text-starYellow mt-1 text-sm font-light"><StarFilled /></div>
                                        ))}
                                    </div>
                                </div>
                                <p className='sm:text-base text-sm text-stone-900 font-normal mt-[29px] sm:max-w-[451px] max-w-[285px] sm:font-mulish font-poppins'>{item.introduce}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </Carousel>
        </section>
    )
}

export default ClientsComponent
