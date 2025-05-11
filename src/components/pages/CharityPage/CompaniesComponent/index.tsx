import React from 'react'

import { Edu, Food, Insurance, Shelter } from 'assets/icons'
import { AirWallex, Amazon, Ghost, Slack, Woo } from 'assets/logo-companies'
import Heading from 'components/ui/Heading'

const brandItems = [Slack, Amazon, Woo, AirWallex, Ghost]

const cards = [
  {
    title: 'Health & Shelter',
    description: 'Support',
    icon: Shelter,
  },
  {
    title: 'Food & Groceries',
    description: 'Support',
    icon: Food,
  },
  {
    title: 'Educational',
    description: 'Support',
    icon: Edu,
  },
  {
    title: 'Health & Insurance',
    description: 'Support',
    icon: Insurance,
  },
]
const CompaniesComponent = () => {
  return (
    <section className='w-full bg-white'>
      <div className='sm:main-container mobile-container mx-auto px-[0px] pb-[70px] pt-10 sm:px-12 sm:pb-[120px] sm:pt-[70px]'>
        <Heading className='mb-[30px] sm:mb-[70px]'>
          More than <span className='text-primary'>80,000+</span> companies trust Micpro
        </Heading>
        <div className='mb-[30px] border border-grayEE' />
        <div className='flex items-center justify-between gap-10 overflow-auto px-0 sm:px-16'>
          {brandItems.map((item, index) => (
            <img key={index} src={item} alt='' />
          ))}
        </div>
        <div className='mb-[100px] mt-[30px] max-w-[1170px] border border-grayEE sm:mb-[146px]' />
        <div className='grid grid-cols-1 justify-items-center gap-[70px] sm:grid-cols-4 sm:gap-8'>
          {cards.map((item, index) => (
            <div
              key={index}
              className='relative h-[138px] w-[246px] rounded-xl border border-grayF2 bg-white p-6'
            >
              <div className='absolute -top-10'>
                <img src={item.icon} alt='Shelter Icon' />
              </div>
              <div className='pt-10'>
                <h3 className='text-lg font-semibold'>{item.title}</h3>
                <p className='text-sm font-normal text-dark1'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CompaniesComponent
