import Image from 'next/image'
import React from 'react'

import Model from 'assets/images/ecommerce-page/img-model.png'

const SimilarItems = () => {
  return (
    <section className='sm:main-container'>
      <div className='flex flex-col items-center justify-between gap-10 py-[30px] sm:flex-row sm:py-16'>
        {/* Text Content */}
        <div className=''>
          <p className='font-poppins text-base font-normal text-dark1'>Men Fashion</p>
          <h2 className='mt-4 max-w-[256px] font-sora text-[28px] font-bold leading-tight text-dark sm:max-w-[457px] sm:text-[50px]'>
            Similar Items You Might Enjoy
          </h2>
          <p className='mt-5 max-w-[327px] font-poppins text-sm font-normal text-dark1 sm:mt-[30px] sm:max-w-[457px] sm:text-lg'>
            Hello Designers! This is the video calling website landing page design concept. Video
            calling software is very popular nowadays.
          </p>

          {/* Features */}
          <div className='mt-[30px] flex flex-col gap-5 sm:mt-12 sm:flex-row sm:gap-[57px]'>
            <div className='flex items-center gap-4'>
              <div className='flex h-10 w-10 items-center justify-center rounded-full border border-dark1 text-2xl text-dark1'>
                +
              </div>
              <div>
                <p className='font-poppins text-lg font-semibold text-dark'>Care instructions</p>
                <p className='mt-[10px] text-sm text-gray-500'>Machine wash at 30.c</p>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <div className='flex h-10 w-10 items-center justify-center rounded-full border border-dark1 text-2xl text-dark1'>
                +
              </div>
              <div>
                <p className='font-poppins text-lg font-semibold text-dark'>Fabric material</p>
                <p className='mt-[10px] font-poppins text-sm font-normal text-dark1'>
                  84% cotton, 16% polyester
                </p>
              </div>
            </div>
          </div>
        </div>

        <Image src={Model} alt='' />
      </div>
    </section>
  )
}

export default SimilarItems
