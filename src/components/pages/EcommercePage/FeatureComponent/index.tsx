import Image from 'next/image'
import React from 'react'

import { AppMarket, MoB, OntimeSp } from 'assets/images/ecommerce-page'

const features = [
  {
    title: 'Onetime Support',
    description:
      'Find your place with an immersive photo experience and the most listings, including things',
    icon: OntimeSp,
  },
  {
    title: 'App Market',
    description:
      'No matter what path you take to sell your home, we can help you navigate a successful',
    icon: AppMarket,
  },
  {
    title: 'Manage on Mobile',
    description:
      'We’re creating a seamless online experience – from shopping on the largest rental network',
    icon: MoB,
  },
]

const FeatureComponent = () => {
  return (
    <section className='bg-[#f4f8fc] px-5 py-[60px] sm:px-[135px] sm:py-[70px]'>
      <div className='mx-auto grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-[30px]'>
        {features.map((item, index) => (
          <div
            key={index}
            className='flex max-w-[370px] flex-col items-center rounded-xl bg-white p-4 py-12 text-center shadow-sm transition hover:shadow-md sm:px-8'
          >
            <Image src={item.icon} alt={item.title} className='mb-5' />
            <h3 className='mb-7 font-sora text-[28px] font-bold'>{item.title}</h3>
            <p className='mb-8 max-w-[302px] font-poppins text-xl font-normal text-gray-500'>
              {item.description}
            </p>
            <button className='rounded-md border bg-white px-9 py-4 font-manrope text-lg font-semibold text-black hover:bg-primary hover:text-white'>
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeatureComponent
