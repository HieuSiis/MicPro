import Image from 'next/image'
import React from 'react'

import { BidMonkey, NFT } from 'assets/images/nft-page'
import RadiusButton from 'components/ui/Button/RadiusButton'
import Heading from 'components/ui/Heading'

const datetime = [
  { value: 0, label: 'Days' },
  { value: 4, label: 'HRS' },
  { value: 17, label: 'MINS' },
  { value: 59, label: 'SECS' },
]

const BidComponent = () => {
  return (
    <section className='main-container py-[50px] sm:py-[120px]'>
      <div className='flex flex-col-reverse items-center gap-[60px] sm:flex-row sm:gap-[70px]'>
        <Image
          src={BidMonkey}
          alt=''
          width={470}
          height={470}
          className='rounded-b-md rounded-t-full'
        />
        <div className='flex flex-col'>
          <Heading className='text-left'>JUNK FOOD PARTY #137</Heading>
          <div className='mb-[30px] mt-[15px] flex items-center gap-2 sm:mb-9'>
            <Image src={NFT} alt='' className='rounded-full' />
            <p className='font-spaceGrotesk text-lg font-normal text-slate-500'>
              Created by{' '}
              <span className='font-spaceGrotesk text-lg font-semibold text-blue-600'>
                MitsuoKatori
              </span>
            </p>
          </div>
          <div className='flex gap-5'>
            {datetime.map((item, index) => (
              <div
                key={index}
                className='flex h-[70px] w-[70px] flex-col items-center justify-center rounded-md bg-blue-600 bg-opacity-10 font-poppins text-base font-normal text-slate-400'
              >
                <span className='font-spaceGrotesk text-base font-semibold text-blue-600'>
                  {item.value}
                </span>
                {item.label}
              </div>
            ))}
          </div>
          <p className='mt-[18px] font-spaceGrotesk text-base font-normal text-gray-400'>
            Current Bid
          </p>
          <span className='font-sora text-xl font-bold text-slate-500'>1.0324 ETH</span>
          <div className='mt-[30px] flex gap-5 sm:mt-[38px]'>
            <RadiusButton className='bg-blue-600 px-5 py-3 font-poppins text-base font-semibold text-white sm:px-8 sm:py-[18px] sm:text-lg'>
              Place a Bid
            </RadiusButton>
            <RadiusButton className='bg-neutral-800 px-5 py-3 font-poppins text-base font-semibold text-white sm:px-8 sm:py-[18px] sm:text-lg'>
              View Artwork
            </RadiusButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BidComponent
