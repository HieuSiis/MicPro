import Image from 'next/image'
import React from 'react'

import { ICalendar, IClock, ICoin, IGroup } from 'assets/icons/education-page'
import Heading from 'components/ui/Heading'

const Items = [
  {
    icon: IGroup,
    bgIcon: 'bg-primary',
    title: 'One-by one Teaching',
    description: 'All of our special education experts have a degree in special education',
  },
  {
    icon: IClock,
    bgIcon: 'bg-orange-500',
    title: '24/7 Tutor Availability',
    description: 'All of our special education experts have a degree in special education',
  },
  {
    icon: ICalendar,
    bgIcon: 'bg-pink-400',
    title: 'Interactive WhiteBook',
    description: 'All of our special education experts have a degree in special education',
  },
  {
    icon: ICoin,
    bgIcon: 'bg-red-500',
    title: 'Affordable Prices',
    description: 'All of our special education experts have a degree in special education',
  },
]
const DifferenceComponent = () => {
  return (
    <section className='l-container py-[70px] sm:py-[100px]'>
      <Heading>
        A Choice That Makes The <span className='text-primary'>Difference</span>
      </Heading>
      <div className='mt-[30px] flex flex-col items-center justify-center gap-[22px] sm:mt-[42px] sm:flex-row '>
        {Items.map((item, index) => (
          <div
            key={index}
            className='flex flex-col rounded-xl border border-zinc-100 px-4 py-5 hover:shadow-lg'>
            <div
              className={`flex h-[64px] w-[64px] items-center justify-center rounded-xl shadow-lg  ${item.bgIcon}`}
            >
              <Image src={item.icon} alt='' width={34} height={34} />
            </div>
            <h5 className='mb-[14px] mt-5 font-sora text-xl font-semibold'>{item.title}</h5>
            <p className='max-w-[237px] font-inter text-sm font-normal text-dark1'>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default DifferenceComponent
