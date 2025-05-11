/* eslint-disable no-nested-ternary */
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import {
  BeeMonkey,
  ClownRounded,
  Fire,
  HeartGray,
  HeartRed,
  HiphopRounded,
  PoliceMonkey,
  VMonkey,
  WowMonkey,
} from 'assets/images/nft-page'
import Arrow from 'assets/images/nft-page/arrow-gray.svg'
import RadiusButton from 'components/ui/Button/RadiusButton'

const collections = [
  { img: HiphopRounded, favorite: true },
  { img: ClownRounded, favorite: false },
  { img: WowMonkey, favorite: false },
  { img: BeeMonkey, favorite: false },
  { img: PoliceMonkey, favorite: false },
  { img: VMonkey, favorite: false },
]

const CollectionsComponent = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640)
    }

    handleResize() // Kiểm tra ban đầu
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Depending on the device and "see more" status, display the appropriate number of items
  const visibleItems = showAll
    ? collections
    : isMobile
    ? collections.slice(0, 1)
    : collections.slice(0, 6)
  return (
    <section className='relative -top-5 bg-white'>
      <div className='main-container'>
        <div className='flex items-center justify-center gap-2 sm:gap-4'>
          <h2 className='font-sora text-[28px] font-bold leading-tight sm:text-[50px]'>
            Featured <span className='text-blue-600'>Collections</span>
          </h2>
          <img src={Fire} alt='' className='h-[21px] w-4 sm:h-11 sm:w-[33px] ' />
        </div>
        <p className='mx-auto mb-11 mt-5 max-w-[470px] text-center font-poppins text-sm font-normal text-dark1 sm:mb-[55px] sm:mt-[10px] sm:font-spaceGrotesk sm:text-lg'>
          Discover, collect, and sell extraordinary NFTs through our awesome platform.
        </p>
        <div className='grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-[30px]'>
          {visibleItems.map((item, index) => (
            <div
              key={index}
              className='rounded-xl border border-zinc-100 p-5 hover:shadow-md sm:max-w-[370px]'
            >
              <div className='relative'>
                <Image src={item.img} alt='NFT Image' className='h-[330px] w-[330px] rounded-xl' />
                <button
                  type='button'
                  className='absolute right-4 top-4 rounded-full bg-white p-[12px] shadow-md'>
                  {item.favorite ? <img src={HeartRed} alt='' /> : <img src={HeartGray} alt='' />}
                </button>
              </div>

              <div className='mt-7'>
                <h3 className='font-spaceGrotesk text-xl font-bold text-neutral-800'>
                  LuppyclubOfficial
                </h3>
                <p className='font-poppins text-[16px] font-normal text-slate-500'>
                  Created by{' '}
                  <span className='font-poppins text-[16px] font-medium text-blue-600'>
                    LuppyclubOfficial
                  </span>
                </p>

                <div className='mt-4 flex items-center justify-between text-xs text-gray-600'>
                  <div>
                    <p className='font-poppins text-sm font-normal uppercase text-slate-500'>
                      Floor
                    </p>
                    <p className='font-poppins text-lg font-normal'>0.06 ETH</p>
                  </div>
                  <div className='text-right'>
                    <p className='font-poppins text-sm font-normal uppercase text-slate-500'>
                      Total Volume
                    </p>
                    <p className='font-poppins text-lg font-normal'>0.65 ETH</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {!showAll && (
          <>
            {/* Desktop Button */}
            <RadiusButton
              onClick={() => setShowAll(true)}
              className='mx-auto mt-[60px] hidden bg-blue-600 font-spaceGrotesk text-lg font-semibold text-white sm:block'
            >
              View More
            </RadiusButton>

            {/* Mobile Button */}
            <button
              type='button'
              onClick={() => setShowAll(true)}
              className='mt-6 flex cursor-pointer justify-center gap-[10px] sm:hidden'
            >
              <span className='font-poppins text-lg font-semibold text-neutral-800'>See All</span>
              <div className='flex items-center justify-center'>
                <img src={Arrow} alt='' />
              </div>
            </button>
          </>
        )}
      </div>
    </section>
  )
}

export default CollectionsComponent
