import Image from 'next/image'
import React from 'react'

import {
  CheckGradientBlue,
  CheckGradientOrange,
  CheckGradientPurple,
  CheckGradientRed,
} from 'assets/icons/check-icons'
import Img from 'assets/images/education-page/img-polygon.png'
import RadiusButton from 'components/ui/Button/RadiusButton'

const Items = [
  {
    icon: CheckGradientPurple,
    title: 'World Class',
  },
  {
    icon: CheckGradientOrange,
    title: 'Easily Learning',
  },
  {
    icon: CheckGradientBlue,
    title: 'Flexibel',
  },
  {
    icon: CheckGradientRed,
    title: 'Affordable',
  },
]
const IndustryComponent = () => {
  return (
    <section className='l-container'>
      <div className='flex flex-col-reverse gap-[60px] sm:flex-row sm:gap-[69px]'>
        <Image src={Img} alt='' />
        <div className='flex flex-1 flex-col'>
          <h2 className='mb-6 font-sora text-[28px] font-bold leading-tight sm:mb-[30px] sm:text-[50px]'>
            Premium courses from the <span className='text-primary'>industry</span> leaders
          </h2>
          <p className='font-poppins text-sm font-normal text-dark1 sm:text-xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
            elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
            commodo diam libero vitae erat.
          </p>
          <div className='grid grid-cols-2 py-10'>
            {Items.map((item, index) => (
              <div className='mb-[30px] flex'>
                <Image src={item.icon} alt='' width={20} height={20} />
                <span className='ml-3 font-poppins text-base font-semibold'>{item.title}</span>
              </div>
            ))}
          </div>
          <div>
            <RadiusButton className='bg-blue-600 font-normal text-white'>Get Started</RadiusButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IndustryComponent
