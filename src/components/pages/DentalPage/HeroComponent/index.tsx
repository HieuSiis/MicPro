import { StarFilled } from '@ant-design/icons'
import Image from 'next/image'
import React from 'react'

import { SparkleBlue } from 'assets/icons'
import { Call, Doctor, Tap, Tooth } from 'assets/icons/dental-page'
import { DoctorGroup, ImgBg } from 'assets/images/dental-page'
import RadiusButton from 'components/ui/Button/RadiusButton'

const cards = [
  {
    icon: Tap,
    bgIcon: 'bg-orange-50',
    title: 'Easy to use',
    description: 'An easy-to-use online directory that lets you search and filter',
  },
  {
    icon: Call,
    bgIcon: 'bg-blue-50',
    title: 'Free support',
    description: 'On what matters most Free matching support an optional',
  },
  {
    icon: Doctor,
    bgIcon: 'bg-indigo-50',
    title: 'Online care',
    description: 'One-to-one matching experience to support you',
  },
]

const HeroComponent = () => {
  return (
    <section>
      <div className='l-container'>
        <div className='flex flex-col gap-9 sm:flex-row sm:gap-3'>
          <div className='flex flex-col items-center sm:items-start'>
            <div className='flex max-w-[153px] gap-2 rounded-full bg-orange-50 px-3 py-1 sm:max-w-[330px] sm:gap-5 sm:px-5 sm:py-4'>
              <img src={Tooth} alt='' className='h-[13px] w-3 sm:h-[30px] sm:w-[28px]' />
              <h5 className='font-sora text-[9px] font-normal text-orange-400 sm:text-xl sm:font-semibold'>
                Award Winning Dentist
              </h5>
            </div>
            <h1 className='relative mt-[14px] max-w-[327px] text-center font-sora text-[34px] font-extrabold leading-tight sm:mt-[30px] sm:max-w-[613px] sm:text-start sm:text-6xl'>
              Smile Brighter with Our <span className='text-gradient'>Professional</span> Dental
              Services
            </h1>
            <img
              src={SparkleBlue}
              alt=''
              className='mx-auto mb-[10px] hidden h-6 w-6 text-center sm:block'
            />
            <div className='mt-5 max-w-[327px] text-center font-poppins text-xl font-normal text-neutral-800 sm:mt-0 sm:max-w-[612px] sm:text-start'>
              Our team of skilled dentists and dental professionals are dedicated to providing you
              with comprehensive and personalized dental care.
            </div>
            <div className='mt-6 flex flex-wrap justify-center gap-x-[30px] gap-y-6 sm:mt-11 sm:gap-[30px]'>
              <RadiusButton className='bg-blue-600 font-poppins text-base font-medium text-white'>
                Book An Appointment
              </RadiusButton>
              <div className='flex flex-col'>
                <h3 className='mb-[10px] font-sora text-[34px] font-bold'>100+</h3>
                <p className='font-poppins text-[16px] font-medium text-slate-500'>
                  Dentist Doctors
                </p>
              </div>
              <div className='flex flex-col'>
                <h3 className='mb-[10px] font-sora text-[34px] font-bold'>40k+</h3>
                <p className='font-poppins text-[16px] font-medium text-slate-500'>
                  Patient Treatment
                </p>
              </div>
            </div>
          </div>
          <Image src={ImgBg} alt='' width={571} height={681} className='relative ' />
          <div className='absolute right-1/3 top-1/4 hidden translate-x-14 flex-col items-center rounded-lg bg-white p-4 sm:flex'>
            <div className='mb-4 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-orange-50 font-poppins text-[16px] font-medium'>
              <img src={Tooth} alt='' />
            </div>
            <h5 className='text-neutral-800'>Micpro</h5>
            <p className='text-slate-500'>Dental Care Clinic</p>
          </div>
          <div className='absolute bottom-1/4 right-1/4 hidden h-20 w-20 translate-x-60 translate-y-52 items-center justify-center rounded-full bg-white sm:flex'>
            <img src={Tooth} alt='' className='h-10 w-10' />
          </div>
          <div className='absolute bottom-1/3 right-1/4 hidden translate-x-80 translate-y-5 rounded-lg bg-white p-3 sm:block'>
            <h3 className='font-poppins text-sm font-normal text-black'>Our Smile Patient</h3>
            <div className='flex items-center justify-center gap-2'>
              <Image src={DoctorGroup} alt='' />

              <div className='flex gap-1'>
                {Array(5)
                  .fill(0)
                  .map((item, index) => (
                    <div key={index} className='mt-1 text-sm text-starYellow'>
                      <StarFilled />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='main-container rounded-none bg-white px-6 py-[30px] sm:rounded-3xl sm:p-[60px]'>
        <div className='flex flex-col gap-5 sm:flex-row sm:gap-[30px]'>
          {cards.map((item, index) => (
            <div
              key={index}
              className='rounded-lg border border-slate-100 bg-white px-11 py-[30px] hover:shadow-md'
            >
              <div
                className={`flex items-center justify-center ${item.bgIcon} mb-5 h-20 w-20  rounded-lg`}
              >
                <Image src={item.icon} alt='' width={50} height={50} />
              </div>
              <h4 className='mb-4 font-sora text-[28px] font-bold text-neutral-800'>
                {item.title}
              </h4>
              <p className='w-[260px] font-poppins text-[16px] font-normal text-slate-500'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroComponent
