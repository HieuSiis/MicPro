import Image from 'next/image'
import React from 'react'

import {
  CheckGradientBlue,
  CheckGradientBlueDark,
  CheckGradientOrange,
  CheckGradientPurple,
  CheckGradientRed,
} from 'assets/icons/check-icons'
import { Tooth } from 'assets/icons/dental-page'
import { DentistBlue, DentistDo } from 'assets/images/dental-page'
import RadiusButton from 'components/ui/Button/RadiusButton'

const overviews = [
  {
    title: 'Dental Health is Our Top Priority',
    description:
      'Esteem spirit temper too say adieus who direct esteem. It esteems luckily or picture placing drawing.',
    img: DentistDo,
    lists: [
      {
        icon: CheckGradientOrange,
        description: 'Apartments frequently or motionless.',
      },
      {
        icon: CheckGradientBlue,
        description: 'Voluptatem quia voluptas sit aspernatur.',
      },
    ],
  },
  {
    title: 'A healthy smile is a happy smile',
    description:
      'our mission is to provide our patients with the highest quality dental care in a comfortable and welcoming environment.',
    img: DentistBlue,
    lists: [
      { icon: CheckGradientOrange, description: 'Skilled Dentist' },
      { icon: CheckGradientBlue, description: 'Patients Value' },
      { icon: CheckGradientRed, description: 'Affortable Costs' },
      { icon: CheckGradientPurple, description: 'Latest Technologies' },
      { icon: CheckGradientBlueDark, description: 'Comfortable & Friendly' },
    ],
  },
]
const DentalOverview = () => {
  return (
    <section className='main-container'>
      <div className='flex flex-col gap-[140px]'>
        {overviews.map((item, index) => (
          <div
            key={index}
            className='group flex flex-col items-center justify-center odd:gap-[30px] even:gap-0 sm:flex-row sm:even:flex-row-reverse sm:even:gap-[60px]'
          >
            <div>
              <h2 className='mb-5 max-w-[520px] font-sora text-[28px] font-bold leading-tight text-dark sm:mb-[30px] sm:text-[50px]'>
                {item.title}
              </h2>
              <p className='font-poppins text-base font-medium text-dark1 group-odd:max-w-[327px] group-even:max-w-[327px] sm:text-xl sm:font-normal sm:group-odd:max-w-[400px] sm:group-even:max-w-[520px]'>
                {item.description}
              </p>

              <div className='flex flex-col gap-[18px] py-[30px] sm:py-[50px]'>
                {item.lists.map((item, index) => (
                  <div key={index} className='flex gap-[10px]'>
                    <img src={item.icon} alt='' />
                    <p className='font-poppins group-odd:text-sm group-odd:font-normal group-odd:text-dark1 group-even:text-sm group-even:font-normal group-even:text-dark sm:group-odd:text-lg sm:group-even:text-xl sm:group-even:font-semibold'>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
              <RadiusButton className='bg-blue-600 text-white group-even:hidden'>
                Get Started
              </RadiusButton>
            </div>
            <div className=''>
              <Image
                src={item.img}
                alt=''
                className='relative rounded-br-[50px] rounded-tl-[50px]'
              />
              <div className='absolute flex -translate-y-24 flex-col items-center rounded-lg bg-white p-4 shadow-md group-even:hidden sm:-translate-x-24'>
                <div className='mb-4 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-orange-50 font-poppins text-base font-medium'>
                  <img src={Tooth} alt='' />
                </div>
                <h5 className='text-neutral-800'>Operation</h5>
                <p className='text-slate-500'>Let’s start Process</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default DentalOverview
