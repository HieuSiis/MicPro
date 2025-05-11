import Image from 'next/image'
import React from 'react'

import { Avatar1, Avatar2, Avatar3, Avatar4, Avatar5, Avatar6 } from 'assets/images/charity-page'
import Heading from 'components/ui/Heading'

const donors = [
  {
    id: 1,
    avatar: Avatar1,
    name: 'Micle James',
    price: '$1,225.00',
  },
  {
    id: 2,
    avatar: Avatar2,
    name: 'Micle James',
    amount: '$1,225.00',
  },
  {
    id: 3,
    avatar: Avatar3,
    name: 'Micle James',
    amount: '$1,225.00',
  },
  {
    id: 4,
    avatar: Avatar4,
    name: 'Micle James',
    amount: '$1,225.00',
  },
  {
    id: 5,
    avatar: Avatar5,
    name: 'Micle James',
    amount: '$1,225.00',
  },
  {
    id: 6,
    avatar: Avatar6,
    name: 'Micle James',
    amount: '$1,225.00',
  },
]
const DonorsComponent = () => {
  return (
    <section className='sm:main-container pt-[70px] sm:pt-[100px] '>
      <Heading>
        Top <span className='text-primary'>Donors</span>
      </Heading>
      <div className='mt-20 grid grid-cols-1 justify-items-center gap-7 sm:grid-cols-3'>
        {donors.map((item, index) => (
          <div
            key={index}
            className='flex h-[100px] w-[327px] items-center justify-between rounded-xl border border-grayD9 p-6 hover:bg-white hover:shadow-md sm:w-[370px] '
          >
            <Image src={item.avatar} alt='' width={60} height={60} className='rounded-full' />

            <div className='-ml-16 flex flex-col space-y-1 sm:-ml-20 '>
              <h5 className='text-lg font-semibold text-dark'>{item.name}</h5>
              <span className='text-lg font-normal text-dark1'>{item.amount}</span>
            </div>
            <div className='flex h-6 w-6 items-center justify-center rounded-full bg-orange-400 text-white'>
              {item.id}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default DonorsComponent
