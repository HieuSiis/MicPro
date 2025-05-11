import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import {
  Fire,
  Img1GroupPlace,
  Img1Place,
  Img2GroupPlace,
  Img2Place,
  Img3GroupPlace,
  Img3Place,
  Img4Place,
  Img5Place,
  Img6Place,
  NFT,
} from 'assets/images/nft-page'
import Arrow from 'assets/images/nft-page/arrow-gray.svg'

const categories = [
  'Trendings',
  'Art',
  'Music',
  'Sports',
  'Photography',
  'Trending Card',
  'See More',
]

const cards = [
  {
    image: Img1Place,
    title: 'LuppyclubOfficial',
    price: '0.65 ETH',
    time: '04h 20m 14s',
    avatars: [Img1GroupPlace, Img2GroupPlace, Img3GroupPlace],
  },
  {
    image: Img2Place,
    title: 'LuppyclubOfficial',
    price: '0.65 ETH',
    time: '04h 20m 14s',
    avatars: [Img1GroupPlace, Img2GroupPlace, Img3GroupPlace],
  },
  {
    image: Img3Place,
    title: 'LuppyclubOfficial',
    price: '0.65 ETH',
    time: '04h 20m 14s',
    avatars: [Img1GroupPlace, Img2GroupPlace, Img3GroupPlace],
  },
  {
    image: Img4Place,
    title: 'LuppyclubOfficial',
    price: '0.65 ETH',
    time: '04h 20m 14s',
    avatars: [Img1GroupPlace, Img2GroupPlace, Img3GroupPlace],
  },
  {
    image: Img5Place,
    title: 'LuppyclubOfficial',
    price: '0.65 ETH',
    time: '04h 20m 14s',
    avatars: [Img1GroupPlace, Img2GroupPlace, Img3GroupPlace],
  },
  {
    image: Img6Place,
    title: 'LuppyclubOfficial',
    price: '0.65 ETH',
    time: '04h 20m 14s',
    avatars: [Img1GroupPlace, Img2GroupPlace, Img3GroupPlace],
  },
  {
    image: Img5Place,
    title: 'LuppyclubOfficial',
    price: '0.65 ETH',
    time: '04h 20m 14s',
    avatars: [Img1GroupPlace, Img2GroupPlace, Img3GroupPlace],
  },
  {
    image: Img6Place,
    title: 'LuppyclubOfficial',
    price: '0.65 ETH',
    time: '04h 20m 14s',
    avatars: [Img1GroupPlace, Img2GroupPlace, Img3GroupPlace],
  },
]

const MarketPlace = () => {
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
  // eslint-disable-next-line no-nested-ternary
  const visibleItems = showAll ? cards : isMobile ? cards.slice(0, 1) : cards.slice(0, 6)
  return (
    <section className='main-container'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2 sm:gap-4'>
          <h2 className='font-sora text-[28px] font-bold leading-tight sm:text-[50px]'>
            Market <span className='text-blue-600'>Place</span>
          </h2>
          <img src={Fire} alt='' className='h-[28px] h-auto w-[28px] sm:w-auto' />
        </div>
        {!showAll && (
          <>
            {/* Desktop Button */}
            <button
              type='button'
              onClick={() => setShowAll(true)}
              className='hidden cursor-pointer gap-[10px] sm:flex'
            >
              <span className='font-poppins text-lg font-semibold text-neutral-800'>See All</span>
              <div className='flex items-center justify-center'>
                <img src={Arrow} alt='' />
              </div>
            </button>
          </>
        )}
      </div>

      <div className='mt-5 flex gap-4 overflow-x-auto py-2 sm:mt-[55px]'>
        {categories.map((category, index) => {
          return (
            <button
              type='button'
              key={index}
              className='whitespace-nowrap rounded-full border border-zinc-100 bg-white px-5 py-3 font-poppins text-sm font-medium text-neutral-800
                             hover:border-transparent hover:bg-blue-600 hover:text-white sm:px-[30px] sm:py-[18px] sm:text-base'
            >
              {category}
            </button>
          )
        })}
      </div>
      <div className='mt-[30px] grid grid-cols-1 gap-5 sm:mt-[60px] sm:grid-cols-3 sm:gap-[70px]'>
        {visibleItems.map((card, index) => (
          <div key={index} className='group rounded-xl bg-white px-5 py-5 shadow-lg'>
            <div className='relative mb-[14px] overflow-hidden rounded-xl'>
              <Image
                src={card.image}
                alt={card.title}
                className='h-[330px] w-[330px] object-cover'
              />
              <button
                type='button'
                className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-neutral-800 bg-opacity-90 px-[30px] py-[10px] font-poppins text-[16px] font-medium text-white opacity-0 transition group-hover:opacity-100'
              >
                View Now
              </button>
              <div className='absolute bottom-[22px] left-[18px] flex -space-x-2'>
                {card.avatars.map((avatar, i) => (
                  <Image
                    key={i}
                    src={avatar}
                    alt={`avatar-${i}`}
                    className='h-[30px] w-[30px] rounded-full border-2 border-white'
                  />
                ))}
              </div>
            </div>

            <div className='group rounded-xl bg-white px-5 py-[14px] text-neutral-800 hover:bg-neutral-800 hover:text-white'>
              <h3 className='font-poppins text-lg font-semibold'>{card.title}</h3>
              <p className='font-poppins text-[8px] font-normal'>
                Created by{' '}
                <span className='font-poppins text-[8px] font-medium text-orange-400'>
                  Official
                </span>
              </p>
              <div className='mt-2 flex items-center justify-between'>
                <div className='flex items-center gap-2 font-poppins text-lg font-normal'>
                  <Image src={NFT} width={16} height={16} alt='' className='rounded-full' />
                  {card.price}
                </div>
                <div className='rounded-full bg-blue-600 px-4 py-2 font-poppins text-[16px] font-medium text-white'>
                  {card.time}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {!showAll && (
        <>
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
    </section>
  )
}

export default MarketPlace
