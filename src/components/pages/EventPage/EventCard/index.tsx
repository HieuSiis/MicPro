import Image from 'next/image'
import React from 'react'

import { Card1, Card2, Card3 } from 'assets/images/event-page'
import Heading from 'components/ui/Heading'

const eventCards = [
  {
    title: 'In Person events',
    description: 'Go beyond webinars and workshop',
    bgCard: 'bg-gradientPinkEvent',
    img: Card1,
  },
  {
    title: 'Virtual Events',
    description: 'Go beyond webinars and workshop',
    bgCard: 'bg-gradientBlueEvent',
    img: Card2,
  },
  {
    title: 'Design events',
    description: 'Go beyond webinars and workshop',
    bgCard: 'bg-gradientOrangeEvent',
    img: Card3,
  },
]
const EventCard = () => {
  return (
    <section className='main-container py-10 sm:py-[70px]'>
      <Heading className='mb-10 max-w-[3270px] sm:mb-20 sm:max-w-[720px]'>
        The simplest way to host all your <span className='text-primary'>events</span>
      </Heading>
      <div className='flex flex-col items-center justify-center gap-[30px] sm:flex-row'>
        {eventCards.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center px-5 py-[30px] sm:px-10 ${item.bgCard} rounded-[20px]`}
          >
            <h3 className='mb-4 font-sora text-[34px] font-bold text-white'>{item.title}</h3>
            <p className='mb-[26px] font-poppins text-[16px] font-normal text-white'>
              {item.description}
            </p>
            <button
              type='button'
              className='mb-4 rounded-full bg-white px-[50px] py-3 font-poppins text-base font-medium text-primary'
            >
              Get Ticket
            </button>

            <Image
              src={item.img}
              alt=''
              className='h-[162px] w-[244px] overflow-hidden rounded-[10px]'
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default EventCard
