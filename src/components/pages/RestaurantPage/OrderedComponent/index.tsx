import { ShoppingCartOutlined } from '@ant-design/icons'
import Image from 'next/image'
import React from 'react'

import { Arrow } from 'assets/icons'
import FriedChicken from 'assets/images/restaurant-page/fried-chicken.png'
import Heading from 'components/ui/Heading'

const foodList = [
  {
    id: 1,
    name: 'Chicken Curry',
    address: '1234 elgin st. Celina, newyork city 7894',
    price: 88,
    image: FriedChicken,
  },
  {
    id: 2,
    name: 'Chicken Curry',
    address: '1234 elgin st. Celina, newyork city 7894',
    price: 88,
    image: FriedChicken,
  },
  {
    id: 3,
    name: 'Chicken Curry',
    address: '1234 elgin st. Celina, newyork city 7894',
    price: 88,
    image: FriedChicken,
  },
  {
    id: 4,
    name: 'Chicken Curry',
    address: '1234 elgin st. Celina, newyork city 7894',
    price: 88,
    image: FriedChicken,
  },
  {
    id: 5,
    name: 'Chicken Curry',
    address: '1234 elgin st. Celina, newyork city 7894',
    price: 88,
    image: FriedChicken,
  },
  {
    id: 6,
    name: 'Chicken Curry',
    address: '1234 elgin st. Celina, newyork city 7894',
    price: 88,
    image: FriedChicken,
  },
]

const OrderedComponent = () => {
  return (
    <section className='main-container mt-[60px] sm:mt-[120px]'>
      <Heading className='mb-10 max-w-[552px] sm:mb-[77px]'>
        Most Ordered Food in <span className='text-primary'>New York</span>
      </Heading>
      <div className='rounded-2xl bg-opacity-60 bg-gradientCream p-[10px] sm:p-[30px]'>
        <div className='grid grid-cols-1 gap-x-[30px] gap-y-3 sm:grid-cols-2 sm:gap-y-5'>
          {foodList.map((food) => (
            <div
              key={food.id}
              className='flex justify-between   rounded-xl bg-white px-4 py-3 sm:p-5'
            >
              <div className='flex flex-col items-start sm:flex-row sm:items-center'>
                <Image
                  src={food.image}
                  alt={food.name}
                  className='mb-[10px] h-[67px] w-[67px] rounded-lg bg-gradientCream sm:mb-0 sm:h-[120px] sm:w-[120px]'
                />
                <div className='flex-1 px-0 sm:px-4'>
                  <h3 className='mb-3 font-sora text-xl font-semibold sm:text-[28px] sm:font-bold'>
                    {food.name}
                  </h3>
                  <p className='mb-0 max-w-[180px] font-poppins text-[12px] font-normal text-dark1 sm:mb-4 sm:max-w-[229px]'>
                    {food.address}
                  </p>
                  <p className='hidden font-sora text-[28px] font-bold text-blue-600 sm:block'>
                    ${food.price}
                  </p>
                </div>
                <div className='hidden sm:block'>
                  <p className='block font-sora text-[28px] font-bold text-blue-600 sm:hidden'>
                    ${food.price}
                  </p>
                  <button
                    type='button'
                    className='ml-[59px] h-11 w-11 rounded-md bg-blue-600 text-white hover:bg-blue-700 sm:h-[60px] sm:w-[60px]'
                  >
                    <ShoppingCartOutlined className='text-5 sm:text-[32px]' />
                  </button>
                </div>
              </div>

              <div className=''>
                <div className='mt-4 flex flex-col gap-[49px] sm:hidden '>
                  <p className='block font-sora text-[28px] font-bold text-blue-600 sm:hidden'>
                    ${food.price}
                  </p>
                  <div className='ml-auto'>
                    <button
                      type='button'
                      className='h-11 w-11 rounded-md bg-blue-600 text-white hover:bg-blue-700 sm:h-[60px] sm:w-[60px]'
                    >
                      <ShoppingCartOutlined className='text-5 sm:text-[32px]' />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className=' mb-5 mt-5 flex justify-center sm:mt-[50px]'>
          <button
            type='button'
            className=' flex justify-center rounded-lg bg-primary px-11 py-[18px] text-white'
          >
            VIEW ALL FOOD <Image className='ml-[10px]' src={Arrow} alt='' width={24} height={24} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default OrderedComponent
