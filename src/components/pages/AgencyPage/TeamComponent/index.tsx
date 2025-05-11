import Image from 'next/image'
import React from 'react'

import { Fb, Instagram, LinkedIn, Twitter } from 'assets/icons'
import {
  ImgPerson1,
  ImgPerson2,
  ImgPerson3,
  ImgPerson4,
  ImgPerson5,
  ImgPerson6,
} from 'assets/images/agency-page'
import Heading from 'components/ui/Heading'

const teams = [
  {
    name: 'STEVE THOMAS',
    role: 'WEB DEVELOPER',
    icon: [Fb, Twitter, LinkedIn, Instagram],
    img: ImgPerson1,
  },
  {
    name: 'STEVE THOMAS',
    role: 'WEB DEVELOPER',
    icon: [Fb, Twitter, LinkedIn, Instagram],
    img: ImgPerson2,
  },
  {
    name: 'STEVE THOMAS',
    role: 'WEB DEVELOPER',
    icon: [Fb, Twitter, LinkedIn, Instagram],
    img: ImgPerson3,
  },
  {
    name: 'STEVE THOMAS',
    role: 'WEB DEVELOPER',
    icon: [Fb, Twitter, LinkedIn, Instagram],
    img: ImgPerson4,
  },
  {
    name: 'STEVE THOMAS',
    role: 'WEB DEVELOPER',
    icon: [Fb, Twitter, LinkedIn, Instagram],
    img: ImgPerson5,
  },
  {
    name: 'STEVE THOMAS',
    role: 'WEB DEVELOPER',
    icon: [Fb, Twitter, LinkedIn, Instagram],
    img: ImgPerson6,
  },
]

const TeamComponent = () => {
  return (
    <section className='pb-[60px] sm:pb-[120px]'>
      <div className='sm:main-container mobile-container'>
        <Heading className='mb-6 sm:mb-[30px]'>
          Our Creative <span className='text-primary'>Team</span>
        </Heading>
        <p className='mx-auto mb-12 max-w-[327px] text-center font-poppins text-dark1 sm:mb-[70px] sm:max-w-[481px]'>
          Flowgiri is a creative and modern theme for startups, freelancers and creatives.{' '}
        </p>
        <div className='mx-auto grid max-w-[1075px] grid-cols-1 gap-12 sm:grid-cols-3'>
          {teams.map((item, index) => (
            <div key={index} className='group relative h-[385px] w-full rounded-full'>
              <div className='overlay invisible absolute inset-0 z-10 flex flex-col items-center justify-center rounded-full bg-primary bg-opacity-80 p-2 text-white opacity-0 transition-all group-hover:visible group-hover:opacity-100'>
                <h4 className='font-poppins text-xl font-semibold'>{item.name}</h4>
                <p className='text-sm'>{item.role}</p>
                <div className='mt-5 flex space-x-2'>
                  {item.icon.map((itm, idx) => (
                    <img key={idx} src={itm} alt='' />
                  ))}
                </div>
              </div>
              <Image
                src={item.img}
                alt=''
                fill
                className='h-full w-full rounded-full object-cover'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamComponent
