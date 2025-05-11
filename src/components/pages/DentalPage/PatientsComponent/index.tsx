import { StarFilled } from '@ant-design/icons'
import Image from 'next/image'
import React from 'react'

import { Ben, Julita, Matthias } from 'assets/images/dental-page'
import Arrow from 'assets/images/nft-page/arrow-gray.svg'
import Heading from 'components/ui/Heading'

const patients = [
  {
    avatar: Julita,
    name: 'Julita Czyżewska',
    position: 'CEO, PZU Zdrowie',
    review:
      'We highly appreciate the quality of Infermedica’s technology, ease of deployment and the outstanding ability to',
  },
  {
    avatar: Matthias,
    name: 'Dr. Matthias Kuss',
    position: 'Head of Health Innovation',
    review:
      'Throughout our engagement we continue to be impressed with Infermedica’s involvement and the level of provided',
  },
  {
    avatar: Ben,
    name: 'Ben Rosner',
    position: 'CMIO, Get Well Network',
    review:
      'Infermedica beats out other “elephants in the room” such as IBM Watson. Throughout our engagement we continue to be',
  },
]
const PatientsComponent = () => {
  return (
    <section className='mt-[60px] h-[1350px] bg-slate-100 px-6 py-[50px] sm:mt-[78px] sm:h-[721px] sm:px-[135px] sm:py-[70px]'>
      <Heading className=''>
        Our thousand of smile <span className='text-primary'>patients</span>
      </Heading>
      <p className='mx-auto mt-5 max-w-[623px] text-center font-poppins text-base font-normal text-dark1 sm:mt-6 sm:text-xl'>
        Join thousands of other patients who have transformed their smiles through Laser vision
        correction.
      </p>
      <div className='overflow-x-auto'>
        <div className='mt-[70px] flex flex-col gap-5 sm:flex-row sm:gap-[50px]'>
          {patients.map((item, index) => (
            <div key={index} className=' rounded-[20px] bg-white px-6 py-6 sm:px-12 sm:py-[30px]'>
              <div className='flex items-center gap-4 sm:gap-6'>
                <Image src={item.avatar} alt='' width={76} height={76} className='rounded-full' />
                <div>
                  <h5 className='font-poppins text-lg font-semibold text-dark sm:font-sora sm:text-xl'>
                    {item.name}
                  </h5>
                  <p className='font-poppins text-sm font-normal text-dark1 sm:text-base'>
                    {item.position}
                  </p>
                </div>
              </div>
              <div className='mb-[15px] mt-5 flex gap-3 sm:mb-[30px] sm:mt-10'>
                {Array(5)
                  .fill(0)
                  .map((item, index) => (
                    <div key={index} className='text-xl text-starYellow'>
                      <StarFilled />
                    </div>
                  ))}
              </div>
              <p className='w-[294px] font-poppins text-base font-normal text-dark1 sm:w-[400px] sm:text-lg'>
                {item.review}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className='mt-[30px] flex cursor-pointer justify-center gap-[10px] sm:hidden'>
        <span className='font-poppins text-lg font-semibold text-neutral-800'>See All</span>
        <div className='flex items-center justify-center'>
          <img src={Arrow} alt='' />
        </div>
      </div>
    </section>
  )
}

export default PatientsComponent
