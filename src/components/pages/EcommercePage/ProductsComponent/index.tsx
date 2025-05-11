import { HeartFilled, HeartOutlined } from '@ant-design/icons'
import { Carousel } from 'antd'
import Image from 'next/image'
import React from 'react'

import { Arrow } from 'assets/icons'
import { TShirtBlack, TShirtBlue, TShirtOrange, TShirtPink } from 'assets/images/ecommerce-page'

const productList = [
  { img: TShirtBlack, liked: true },
  { img: TShirtOrange, liked: false },
  { img: TShirtBlue, liked: false },
  { img: TShirtPink, liked: false },
]

const ProductsComponent = () => {
  return (
    <section className='sm:main-container mobile-container rounded-3xl bg-white px-[38px] py-10 sm:px-12 sm:py-[70px]'>
      <div className='mb-12 flex items-center justify-between'>
        <h1 className='font-sora text-[28px] font-bold leading-tight sm:text-[50px]'>
          Popular <span className='text-primary'>Products</span>
        </h1>
        <button className='hidden items-center rounded-lg bg-primary px-6 py-[14px] text-base font-medium text-white sm:flex'>
          See all Products
          <Image className='ml-[10px]' src={Arrow} alt='arrow' width={24} height={24} />
        </button>
      </div>
      <Carousel autoplay className='custom-carousel-card sm:hidden'>
        {productList.map((product, index) => (
          <div key={index} className='group relative'>
            <div className='relative mb-4 flex h-[250px] w-[250px] items-center justify-center rounded-t-md bg-gray-100 '>
              <Image src={product.img} alt={`t-shirt-${index}`} className='object-contain' />

              {product.liked ? (
                <div className='absolute right-4 top-4 text-xl text-pink-500'>
                  <HeartFilled />
                </div>
              ) : (
                <div className='absolute right-4 top-4 text-xl text-dark1'>
                  <HeartOutlined />
                </div>
              )}
            </div>
            <div className='flex items-center justify-between rounded-b-md px-5 py-[10px] group-hover:shadow-xl'>
              <div>
                <h2 className='font-poppins text-lg font-semibold text-indigo-950'>
                  Smart t- Sirt
                </h2>
                <div className='mt-1 font-poppins'>
                  <span className='text-xl font-semibold'>
                    40<small className='text-[13px] font-semibold text-primary'>$</small>{' '}
                  </span>
                  <span className='text-[10px] font-normal text-neutral-400 line-through'>
                    100$
                  </span>
                </div>
              </div>
              <button className='rounded-[4px] bg-primary px-5 py-1 font-poppins text-base font-medium text-white'>
                BUY
              </button>
            </div>
          </div>
        ))}
      </Carousel>

      <div className='hidden items-center justify-between sm:flex'>
        {productList.map((product, index) => (
          <div key={index} className='group relative cursor-pointer'>
            <div className='relative flex h-[250px] w-[250px] items-center justify-center rounded-t-md bg-gray-100 '>
              <Image src={product.img} alt={`t-shirt-${index}`} className='object-contain' />

              {product.liked ? (
                <div className='absolute right-4 top-4 text-xl text-pink-500'>
                  <HeartFilled />
                </div>
              ) : (
                <div className='absolute right-4 top-4 text-xl text-dark1'>
                  <HeartOutlined />
                </div>
              )}
            </div>
            <div className='flex items-center justify-between rounded-b-md py-[10px] group-hover:px-5 group-hover:shadow-xl'>
              <div>
                <h2 className='mt-[18px] font-poppins text-lg font-semibold text-indigo-950'>
                  Smart t- Sirt
                </h2>
                <div className='mt-1 font-poppins'>
                  <span className='text-xl font-semibold'>
                    40<small className='text-[13px] font-semibold text-primary'>$</small>{' '}
                  </span>
                  <span className='text-[10px] font-normal text-neutral-400 line-through'>
                    100$
                  </span>
                </div>
              </div>
              <button className='rounded-[4px] bg-primary px-5 py-1 font-poppins text-base font-medium text-white'>
                BUY
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProductsComponent
