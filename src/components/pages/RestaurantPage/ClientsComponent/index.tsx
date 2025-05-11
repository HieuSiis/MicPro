import { StarFilled } from '@ant-design/icons'
import { Carousel } from 'antd'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import { PagDots } from 'assets/icons'
import { Elmo, Yaron } from 'assets/images/restaurant-page'
import Heading from 'components/ui/Heading'

const InfoClients = [
  {
    name: 'Yaron Shifman',
    position: 'CEO, Swathly Ltd',
    introduce:
      'I’m very pleased with their work. When I need help with any aspect of development, I’m able to call on them to take care of it. They’re professional and complete tasks in a timely manner.',
    ImgSrc: Yaron,
  },
  {
    name: 'Elmo Weber',
    position: 'Founder, Fair Friend ',
    introduce:
      'Scopic has never let me down. I’m pleased with our partnership and they consistently develop reliable applications. They estimate a range of hours for each project and they manage it efficiently.',
    ImgSrc: Elmo,
  },
  {
    name: 'Yaron Shifman',
    position: 'CEO, Swathly Ltd',
    introduce:
      'I’m very pleased with their work. When I need help with any aspect of development, I’m able to call on them to take care of it. They’re professional and complete tasks in a timely manner.',
    ImgSrc: Yaron,
  },
  {
    name: 'Elmo Weber',
    position: 'Founder, Fair Friend ',
    introduce:
      'Scopic has never let me down. I’m pleased with our partnership and they consistently develop reliable applications. They estimate a range of hours for each project and they manage it efficiently.',
    ImgSrc: Elmo,
  },
  {
    name: 'Yaron Shifman',
    position: 'CEO, Swathly Ltd',
    introduce:
      'I’m very pleased with their work. When I need help with any aspect of development, I’m able to call on them to take care of it. They’re professional and complete tasks in a timely manner.',
    ImgSrc: Yaron,
  },
  {
    name: 'Elmo Weber',
    position: 'Founder, Fair Friend ',
    introduce:
      'Scopic has never let me down. I’m pleased with our partnership and they consistently develop reliable applications. They estimate a range of hours for each project and they manage it efficiently.',
    ImgSrc: Elmo,
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
    <section className='main-container mt-[60px] sm:mt-[120px]'>
      <Heading className='max-w-[267px] sm:max-w-[543px]'>
        What Our <span className='text-primary'>Clients</span> Say
      </Heading>
      <p className='mx-auto mt-5 max-w-[278px] text-center font-poppins text-base font-medium text-dark1 sm:mt-6 sm:max-w-[513px] sm:text-xl sm:font-normal'>
        Here, We make almost every genre of applications. Your name it and we build it.
      </p>
      <Carousel autoplay className='custom-carousel-card'>
        {slides.map((group, index) => (
          <div
            key={index}
            className='mt-10 grid grid-cols-1 items-center justify-center gap-[30px] sm:mt-[70px] sm:grid-cols-2'
          >
            {group.map((item, idx) => (
              <div
                key={idx}
                className='flex max-h-[252px] flex-col rounded-lg border bg-white p-[29px] shadow-sm'
              >
                <div className='flex'>
                  <Image className='mr-[10px] rounded-full' src={item.ImgSrc} alt='' />
                  <div className='flex flex-col justify-center font-mulish font-semibold'>
                    <h4 className='text-base'>{item.name}</h4>
                    <span className='text-sm text-stone-400'>{item.position}</span>
                  </div>
                  <div className='ml-auto flex gap-1'>
                    {Array(5)
                      .fill(0)
                      .map((item, index) => (
                        <div key={index} className='mt-1 text-sm font-light text-starYellow'>
                          <StarFilled />
                        </div>
                      ))}
                  </div>
                </div>
                <p className='mt-[29px] max-w-[285px] font-poppins text-sm font-normal text-stone-900 sm:max-w-[451px] sm:font-mulish sm:text-base'>
                  {item.introduce}
                </p>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </section>
  )
}

export default ClientsComponent
