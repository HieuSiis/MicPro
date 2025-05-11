import { RightOutlined } from '@ant-design/icons';
import Heading from 'components/ui/Heading'
import React, { useEffect, useState } from 'react'
import PagDots from 'assets/icons/icon-dots-restaurant.svg'
import { Carousel } from 'antd';

const cards = [
    {
        tag: "Today Hot News",
        tagColor: "text-sky-500",
        title: "The most successful football clubs in Europe",
        description:
            "Which team is the most successful club in Europe? FC Barcelona – 90 trophies It's the most successful club based on",
        bg: "bg-blue-200",
    },
    {
        tag: "Recent Blog",
        tagColor: "text-pink-400",
        title: "The 5 Greatest Ghanaian Footballers",
        description:
            "Which team is the most successful club in Europe? FC Barcelona – 90 trophies It's the most successful club based on",
        bg: "bg-pink-200",
    },
    {
        tag: "Media Today",
        tagColor: "text-orange-500",
        title: "Top 5 Chelsea Players in Premier League History",
        description:
            "Which team is the most successful club in Europe? FC Barcelona – 90 trophies It's the most successful club based on",
        bg: "bg-orange-100",
    },
    {
        tag: "Today Hot News",
        tagColor: "text-sky-500",
        title: "The most successful football clubs in Europe",
        description:
            "Which team is the most successful club in Europe? FC Barcelona – 90 trophies It's the most successful club based on",
        bg: "bg-blue-200",
    },
    {
        tag: "Recent Blog",
        tagColor: "text-pink-400",
        title: "The 5 Greatest Ghanaian Footballers",
        description:
            "Which team is the most successful club in Europe? FC Barcelona – 90 trophies It's the most successful club based on",
        bg: "bg-pink-200",
    },
    {
        tag: "Media Today",
        tagColor: "text-orange-500",
        title: "Top 5 Chelsea Players in Premier League History",
        description:
            "Which team is the most successful club in Europe? FC Barcelona – 90 trophies It's the most successful club based on",
        bg: "bg-orange-100",
    },
];

const chunkArray = (arr: any[], size: number) => {
    const chunkedArr = []
    for (let i = 0; i < arr.length; i += size) {
        chunkedArr.push(arr.slice(i, i + size))
    }
    return chunkedArr
}

const BlogsComponent = () => {

    const [slides, setSlides] = useState<any[][]>([])

    const updateChunks = () => {
        const isMobile = window.innerWidth < 640
        const chunked = chunkArray(cards, isMobile ? 1 : 2)
        setSlides(chunked)
    }

    useEffect(() => {
        updateChunks()
        window.addEventListener('resize', updateChunks)
        return () => window.removeEventListener('resize', updateChunks)
    }, [])
    return (
        <section className='main-container sm:mt-[130px] mt-[70px] sm:pb-[114px] pb-[92px]'>
            <Heading>Read Our Latest  <span className='text-primary'>Blogs</span>  </Heading>
            <p className='text-dark1 sm:mb-[100px] mb-10 sm:max-w-[543px] max-w-[285px] sm:text-xl text-base font-poppins sm:font-normal font-medium sm:mt-6 mt-[14px] mx-auto text-center'>Full-cycle development of powerful corporate websites and one-pagers</p>
            <Carousel autoplay className='custom-carousel-card'>
                {slides.map((group, index) => (
                    <div key={index} className="flex justify-center items-center">
                        <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
                            {group.map((card, index) => (
                                <div
                                    key={index}
                                    className={`${card.bg} rounded-[20px] sm:py-[47px] sm:px-[64px] p-[18px] transition-transform hover:scale-95`}
                                >
                                    <div className="bg-white sm:max-w-[372px] max-w-[291px] sm:p-[30px] p-5 rounded-[20px] shadow-sm">
                                        <h4 className={`text-xl font-roboto font-medium ${card.tagColor}`}>
                                            {card.tag}
                                        </h4>
                                        <h2 className="mt-5 font-semibold text-xl font-sora text-black">
                                            {card.title}
                                        </h2>
                                        <p className="text-dark1 mt-[21px] text-lg font-normal font-poppins leading-[26px]">
                                            {card.description}
                                        </p>
                                        <a
                                            href="#"
                                            className="mt-6 flex items-center text-base font-inter font-semibold text-black hover:underline"
                                        >
                                            Learn More <RightOutlined className='ml-1' style={{ width: 10, height: 10 }} />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </Carousel>
        </section>
    )
}

export default BlogsComponent
