/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { ImgFrame490, ImgFrame494, ImgFrame495, ImgFrame496 } from 'assets/images/agency-page'
import Heading from 'components/ui/Heading'

const portfolioItems = [
  {
    category: 'Mobile app, Weather, Software',
    title: (
      <>
        Weather App UI Kit
        <br />- WETHY
      </>
    ),
    description:
      'Hello Designers! This is the video calling website landing page design concept. Video calling software is very popular nowadays.',
    image: ImgFrame490,
  },
  {
    category: 'Web Design, Video call, Software',
    title: (
      <>
        Video Calling Website
        <br />- Jabber
      </>
    ),
    description:
      'WEATHY is a modern and clean mobile app project based on the weather app. The UI Kit gives you the necessary screens for creating stunning iOS screens and applying them to any weather app.',
    image: ImgFrame494,
  },
  {
    category: 'Web app, Software, Car Dashboard',
    title: (
      <>
        Car Dashboard UI
        <br />
        Kit Design
      </>
    ),
    description:
      'Motiv. is a Free Car Dashboard UI Kit Design of 20+ Free pixel-perfect screens and 60+ Components easy to use in Figma.',
    image: ImgFrame495,
  },
  {
    category: 'Web Design, Software',
    title: (
      <>
        Video Editing Website
        <br />- Revise
      </>
    ),
    description:
      'Hello Peoples! This is the Video Editing Website landing page design concept. Video editing is an essential part of a tech user.',
    image: ImgFrame496,
  },
]

const WorkComponent = () => {
  return (
    <section className='main-container pb-[50px] sm:pb-[120px]'>
      <Heading className='mb-[30px] sm:mb-[100px]'>
        Our Team’s <span className='text-primary'>Work</span>
      </Heading>
      <div className='flex flex-col gap-[60px] sm:gap-[100px]'>
        {portfolioItems.map((item, index) => (
          <div
            className='group grid grid-cols-1 items-center odd:gap-[36px] even:flex-row-reverse even:gap-[30px] even:text-left sm:flex sm:odd:gap-[104px] sm:even:gap-[70px] sm:even:text-right'
            key={index}
          >
            <div>
              <div className='mb-4 flex items-start gap-2 font-poppins text-base font-normal text-dark1 sm:group-even:justify-end'>
                <span>{item.category}</span>
              </div>
              <h3 className='mb-6 font-sora text-xl font-semibold leading-snug sm:mb-8 sm:text-[34px] sm:font-bold'>
                {item.title}
              </h3>
              <p className='mb-5 font-poppins text-[14px] font-normal leading-normal text-gray17 sm:mb-10 sm:text-lg'>
                {item.description}
              </p>
              <Link href='#' className='text-lg uppercase tracking-[10px]'>
                <span className='mb-4 block'>VIEW PORTFOLIO</span>
                <div className='gradient-line h-[2px] w-36 sm:group-even:ml-auto' />
              </Link>
            </div>
            <div className='w-full max-w-[700px] flex-shrink-0'>
              <Image src={item.image} alt='' width={700} height={585} className=' object-cover' />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WorkComponent
