import React from 'react'

import { Aerobic, Building, Cardio, Zumba } from 'assets/icons/sport-page'
import Heading from 'components/ui/Heading'

const programs = [
  {
    title: 'Zumba Exercise',
    description: 'The Program has a lot of fans is Zumba Gymnastics',
    img: Zumba,
  },
  {
    title: 'Aerobic Gymnastics',
    description: 'The Program has a lot of fans is Zumba Gymnastics',
    img: Aerobic,
  },
  {
    title: 'Cardio Exercise',
    description: 'The Program has a lot of fans is Zumba Gymnastics',
    img: Cardio,
  },
  {
    title: 'Building Muscle',
    description: 'The Program has a lot of fans is Zumba Gymnastics',
    img: Building,
  },
]

const ProgramComponent = () => {
  return (
    <section className='main-container mt-5 sm:mt-0'>
      <Heading>
        Get <span className='text-primary'>Program</span> of the month{' '}
      </Heading>
      <p className='mx-auto mb-[30px] mt-6 max-w-[322px] text-center font-poppins text-base font-normal text-dark1 sm:mb-[70px] sm:max-w-[553px] sm:text-xl'>
        You can join our program and enjoy the fun as we are always working hard to make our
        community better.
      </p>

      <div className='grid grid-cols-1 gap-6 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-[14px] py-[26px] sm:grid-cols-2 sm:gap-20 sm:px-[70px] sm:py-20 '>
        {programs.map((program, idx) => (
          <div key={idx} className='flex items-center gap-4 text-white sm:gap-6'>
            <img src={program.img} alt='' className='h-[78px] w-[78px] sm:h-[134px] sm:w-[134px]' />
            <div>
              <h5 className='mb-[10px] font-sora text-xl font-semibold sm:mb-4'>{program.title}</h5>
              <p className='max-w-[256px] font-poppins text-sm font-normal text-blueBB sm:text-base'>
                {program.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProgramComponent
