import { RightOutlined } from '@ant-design/icons'
import { Carousel } from 'antd'
import React, { useEffect, useState } from 'react'

import PagDots from 'assets/icons/icon-dots-restaurant.svg'
import Heading from 'components/ui/Heading'

const cards = [
  {
    tag: 'Today Hot News',
    tagColor: 'text-sky-500',
    title: 'The most successful football clubs in Europe',
    description:
      "Which team is the most successful club in Europe? FC Barcelona – 90 trophies It's the most successful club based on",
    bg: 'bg-blue-200',
  },
  {
    tag: 'Recent Blog',
    tagColor: 'text-pink-400',
    title: 'The 5 Greatest Ghanaian Footballers',
    description:
      "Which team is the most successful club in Europe? FC Barcelona – 90 trophies It's the most successful club based on",
    bg: 'bg-pink-200',
  },
  {
    tag: 'Media Today',
    tagColor: 'text-orange-500',
    title: 'Top 5 Chelsea Players in Premier League History',
    description:
      "Which team is the most successful club in Europe? FC Barcelona – 90 trophies It's the most successful club based on",
    bg: 'bg-orange-100',
  },
  {
    tag: 'Today Hot News',
    tagColor: 'text-sky-500',
    title: 'The most successful football clubs in Europe',
    description:
      "Which team is the most successful club in Europe? FC Barcelona – 90 trophies It's the most successful club based on",
    bg: 'bg-blue-200',
  },
  {
    tag: 'Recent Blog',
    tagColor: 'text-pink-400',
    title: 'The 5 Greatest Ghanaian Footballers',
    description:
      "Which team is the most successful club in Europe? FC Barcelona – 90 trophies It's the most successful club based on",
    bg: 'bg-pink-200',
  },
  {
    tag: 'Media Today',
    tagColor: 'text-orange-500',
    title: 'Top 5 Chelsea Players in Premier League History',
    description:
      "Which team is the most successful club in Europe? FC Barcelona – 90 trophies It's the most successful club based on",
    bg: 'bg-orange-100',
  },
]

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
    <section className='main-container mt-[70px] pb-[92px] sm:mt-[130px] sm:pb-[114px]'>
      <Heading>
        Read Our Latest <span className='text-primary'>Blogs</span>{' '}
      </Heading>
      <p className='mx-auto mb-10 mt-[14px] max-w-[285px] text-center font-poppins text-base font-medium text-dark1 sm:mb-[100px] sm:mt-6 sm:max-w-[543px] sm:text-xl sm:font-normal'>
        Full-cycle development of powerful corporate websites and one-pagers
      </p>
      <Carousel autoplay className='custom-carousel-card'>
        {slides.map((group, index) => (
          <div key={index} className='flex items-center justify-center'>
            <div className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
              {group.map((card, index) => (
                <div
                  key={index}
                  className={`${card.bg} rounded-[20px] p-[18px] transition-transform hover:scale-95 sm:px-[64px] sm:py-[47px]`}
                >
                  <div className='max-w-[291px] rounded-[20px] bg-white p-5 shadow-sm sm:max-w-[372px] sm:p-[30px]'>
                    <h4 className={`font-roboto text-xl font-medium ${card.tagColor}`}>
                      {card.tag}
                    </h4>
                    <h2 className='mt-5 font-sora text-xl font-semibold text-black'>
                      {card.title}
                    </h2>
                    <p className='mt-[21px] font-poppins text-lg font-normal leading-[26px] text-dark1'>
                      {card.description}
                    </p>
                    <a
                      href='#'
                      className='mt-6 flex items-center font-inter text-base font-semibold text-black hover:underline'
                    >
                      Learn More{' '}
                      <RightOutlined className='ml-1' style={{ width: 10, height: 10 }} />
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
