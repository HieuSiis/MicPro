import Image from 'next/image'
import React from 'react'

import { ChickenGrill, Lunch, SpicyClub, SpicySalad } from 'assets/images/restaurant-page'
import Heading from 'components/ui/Heading'

const menuItems = [
  {
    name: 'Spicy Club',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu.',
    price: 42,
    image: SpicyClub,
  },
  {
    name: 'Spicy Salad',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu.',
    price: 42,
    image: SpicySalad,
  },
  {
    name: 'Chicken Grill',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu.',
    price: 42,
    image: ChickenGrill,
  },
]

const OfferComponent = () => {
  return (
    <section className='main-container mt-[60px] sm:mt-[120px]'>
      <Heading>
        Get The Best <span className='text-primary'>Offer</span>
      </Heading>
      <p className='mx-auto mt-5 max-w-[317px] text-center font-poppins text-sm font-normal text-dark1 sm:mt-6 sm:max-w-[553px] sm:text-xl'>
        Eat the food you dream about at affordable prices. No need to come to us just call is.
      </p>
      <div className='mt-10 flex flex-col items-center justify-center font-inter sm:mt-20 sm:flex-row'>
        <div className='relative mr-0 overflow-hidden rounded-2xl sm:mr-4 sm:rounded-r-none'>
          <Image src={Lunch} alt='Lunch Promo' className='h-[428px] object-cover object-left' />
          <div className='absolute inset-0 flex flex-col justify-center bg-gradient-to-r from-black/80 to-black/20 px-[30px] text-white  sm:px-[50px]'>
            <h2 className='mb-1 text-2xl font-semibold'>Lunch Time</h2>
            <div className='flex items-baseline font-medium'>
              <span className='text-7xl italic  text-blue-600'>30%</span>
              <span className='ml-3 text-xl'>OFF</span>
            </div>
            <p className='mb-10 mt-2 w-[220px] text-base font-normal leading-7'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className='w-[130px] rounded-full bg-primary px-4 py-3 text-sm text-white transition hover:bg-blue-600'>
              Order Now
            </button>
          </div>
        </div>

        <div className='mt-[14px] flex flex-col gap-3 sm:mt-0'>
          {menuItems.map((item, index) => (
            <div key={index} className='flex items-center rounded-lg bg-bgWhiteFC px-1 py-2'>
              <div className=''>
                <Image src={item.image} alt={item.name} className='rounded-lg sm:rounded-none' />
              </div>
              <div className='ml-3 flex-1'>
                <div className='flex flex-row justify-between'>
                  <h3 className='mb-[15px] text-xl font-semibold sm:text-2xl'>{item.name}</h3>
                  <div className='mr-3 text-2xl'>
                    <span className='font-normal italic text-primary'>$ </span>
                    <span className='font-semibold text-primary'>{item.price}</span>
                  </div>
                </div>
                <p className='text-[12px] text-dark1 sm:max-w-[412px] sm:text-base'>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OfferComponent
