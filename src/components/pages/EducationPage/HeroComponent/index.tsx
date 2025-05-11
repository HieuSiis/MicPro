import Image from 'next/image'
import React from 'react'

import { Play } from 'assets/icons'
import { Board, Books, Light, Std1, Std2, Std3, Std4 } from 'assets/images/education-page'
import RadiusButton from 'components/ui/Button/RadiusButton'

const ImgStudents = [{ img: Std1 }, { img: Std2 }, { img: Std3 }, { img: Std4 }]

const HeroComponent = () => {
  return (
    <section className=''>
      <div className='l-container'>
        <h1 className='mx-auto mb-5 max-w-[782px] text-center font-sora text-[34px] font-extrabold leading-snug sm:mb-[30px] sm:text-6xl'>
          Welcome to the World of{' '}
          <div className='flex justify-center'>
            <span className='text-gradient'>Knowledge </span> <img src={Light} alt='' />
          </div>
        </h1>

        <div className='mb-12 flex items-center justify-center font-poppins text-sm font-normal sm:justify-between sm:text-xl'>
          <img src={Books} alt='' className='hidden sm:block' />
          <span className='max-w-[285px] text-center sm:max-w-[610px]'>
            Lets explore new ideas, knowledge and experiences together with a beautiful teacher and
            enjoy it!
          </span>
          <img src={Board} alt='' className='hidden sm:block' />
        </div>

        <div className='flex flex-col items-center justify-center gap-6 sm:flex-row'>
          <RadiusButton className='bg-blue-600 text-white'>Get Started</RadiusButton>
          <RadiusButton className=''>
            <div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary bg-opacity-10'>
              <Image src={Play} alt='' width={24} height={24} />
            </div>
            Watch Video
          </RadiusButton>
        </div>
        <div className='flex items-start justify-center gap-[10px] sm:gap-8'>
          {ImgStudents.map((item, index) => (
            <Image
              key={index}
              src={item.img}
              alt={`Student ${index + 1}`}
              className={`h-[113px] w-[74px] rounded-full object-cover transition-transform duration-300 sm:h-[384px] sm:w-[252px] ${
                index === 1 || index === 2 ? 'mt-[26px] sm:mt-[90px]' : 'mt-0'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroComponent
