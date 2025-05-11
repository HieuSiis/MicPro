import Image from 'next/image'
import React from 'react'

import { Crispy, ExqRecipe, Pasta } from 'assets/images/restaurant-page'
import Heading from 'components/ui/Heading'

const listFood = [
  {
    ImgSrc: ExqRecipe,
    title: 'Exquisite Recipe',
    desc: 'Phasollus risus turpis sit arnot magna non.',
  },
  {
    ImgSrc: Crispy,
    title: 'Crispy Baked',
    desc: 'Phasollus risus turpis sit arnot magna non.',
  },
  {
    ImgSrc: Pasta,
    title: 'Pasta Recipe',
    desc: 'Phasollus risus turpis sit arnot magna non.',
  },
]
const FeaturesComponent = () => {
  return (
    <section className='main-container mt-[60px] sm:mt-[120px]'>
      <Heading>
        Our Special <span className='text-primary'>Features</span>
      </Heading>
      <p className='mx-auto mt-5 max-w-[282px] text-center font-poppins text-base font-medium text-dark1 sm:mt-6 sm:max-w-[713px] sm:text-lg'>
        This lesson provides a basic framework for conducting a recipe demonstration
      </p>

      <div className='mt-[54px] flex flex-col items-center justify-center gap-10 sm:mt-20 sm:flex-row'>
        {listFood.map((item, index) => (
          <div
            key={index}
            className='flex flex-col items-center justify-center rounded-xl p-3 shadow-md'
          >
            <Image src={item.ImgSrc} alt='' />
            <h4 className='mb-4 mt-6 font-sora text-[28px] font-bold text-dark'>{item.title}</h4>
            <p className='mb-[18px] max-w-[222px] text-center font-poppins text-base font-normal text-dark1'>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturesComponent
