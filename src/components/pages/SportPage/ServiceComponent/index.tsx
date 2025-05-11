import React from 'react'

import { IArrow, IAuthority, IChampion, ITiming, ITraining } from 'assets/icons/sport-page'
import Heading from 'components/ui/Heading'

const cards = [
  {
    title: 'Training',
    icon: ITraining,
    bgIcon: 'bg-gradientPink',
    description: 'Content AI allows anyone to create custom tailored',
  },
  {
    title: 'Authority',
    icon: IAuthority,
    bgIcon: 'bg-gradientOrange',
    description: 'Content AI allows anyone to create custom tailored',
  },
  {
    title: 'Precision & timing',
    icon: ITiming,
    bgIcon: 'bg-gradientBlue',
    description: 'Content AI allows anyone to create custom tailored',
  },
  {
    title: 'Championship',
    icon: IChampion,
    bgIcon: 'bg-gradientRed',
    description: 'Content AI allows anyone to create custom tailored',
  },
]

const ServiceComponent = () => {
  return (
    <section className='main-container  mt-5 rounded-2xl bg-white px-16 py-10 sm:mt-[51px] sm:px-12 sm:py-[76px]'>
      <Heading className='mb-[30px] sm:mb-[70px]'>
        Let’s Check our <span className='text-primary'>service</span>
      </Heading>

      <div className='grid grid-cols-1 gap-8 sm:grid-cols-4'>
        {cards.map((item, index) => (
          <div key={index} className='rounded-xl border border-grayF2 bg-white p-5'>
            <div
              className={`mb-5 h-[88px] w-[88px] rounded-full ${item.bgIcon} flex items-center justify-center`}
            >
              <img src={item.icon} alt='' />
            </div>
            <h3 className='mb-[10px] font-sora text-xl font-semibold'>{item.title}</h3>
            <p className='max-w-[215px] font-poppins text-base font-normal leading-6 text-dark1'>
              {item.description}
            </p>
            <button className='mt-4 flex justify-center gap-1 font-inter text-base font-semibold'>
              Learn More <img src={IArrow} alt='' />
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ServiceComponent
