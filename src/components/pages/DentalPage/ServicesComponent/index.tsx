import React from 'react'

import { Chemistry, Person, Pharmacy, Siren, Tomography, ToothBlue } from 'assets/icons/dental-page'
import Heading from 'components/ui/Heading'

const services = [
  {
    icon: Person,
    title: 'Anti Wrinkle',
    description: 'Ease your pain and soothe your joints.',
  },
  {
    icon: Chemistry,
    title: 'Laboratory',
    description: 'Ease your pain and soothe your joints.',
  },
  {
    icon: ToothBlue,
    title: 'Smile Makeover',
    description: 'Ease your pain and soothe your joints.',
  },
  {
    icon: Tomography,
    title: 'Radiology',
    description: 'Ease your pain and soothe your joints.',
  },
  {
    icon: Siren,
    title: 'Emergency Care',
    description: 'Ease your pain and soothe your joints.',
  },
  {
    icon: Pharmacy,
    title: 'Emergency Care',
    description: 'Ease your pain and soothe your joints.',
  },
]
const ServicesComponent = () => {
  return (
    <section className='main-container py-[70px] sm:py-[140px]'>
      <Heading className='max-w-[327px] sm:max-w-[758px]'>
        Smile Confidently with Our Dental <span className='text-primary'>Services</span>
      </Heading>
      <p className='mx-auto mt-5 max-w-[300px] text-center font-poppins text-base font-normal text-dark1 sm:mt-[30px] sm:max-w-[596px] sm:text-xl'>
        A small river named Duden flows by their place and supplies it with the necessary
        regelialia.
      </p>

      <div className='mt-12 grid grid-cols-1 justify-items-center gap-x-[105px] gap-y-[50px] sm:mt-[86px] sm:grid-cols-3'>
        {services.map((item, index) => (
          <div key={index} className='flex flex-col items-center sm:items-start'>
            <div className='mb-6 flex h-[84px] w-[84px] items-center justify-center rounded-lg bg-sky-50'>
              <img src={item.icon} alt='' />
            </div>
            <h4 className='mb-2 font-sora text-[28px] font-bold text-dark'>{item.title}</h4>
            <p className='font-poppins text-[16px] font-medium text-dark1'>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ServicesComponent
