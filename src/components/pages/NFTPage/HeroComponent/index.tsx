import Image from 'next/image'
import React from 'react'

import {
  ChefMonkey,
  ClownMonkey,
  HiphopMonkey,
  MonkeyPurple,
  MonkeyThree,
  StarLeft,
  StarRight,
} from 'assets/images/nft-page'
import { Amazon, MeUndies, SitePoint, Slack, Woo } from 'assets/logo-companies'
import RadiusButton from 'components/ui/Button/RadiusButton'

const companyLogos = [
  { name: 'Slack', logo: Slack },
  { name: 'Amazon', logo: Amazon },
  { name: 'WooCommerce', logo: Woo },
  { name: 'MeUndies', logo: MeUndies },
  { name: 'SitePoint', logo: SitePoint },
]

const HeroComponent = () => {
  return (
    <section>
      <div className='l-container '>
        <h1 className='mx-auto mb-6 max-w-[327px] text-center font-sora text-[34px] font-bold leading-snug sm:mb-0 sm:max-w-[1010px] sm:text-6xl sm:font-extrabold'>
          Embrace Digital Ownership Buy, Trade, and{' '}
          <span className='text-gradient'>Collect NFTs</span>
        </h1>
        <div className='hidden justify-between sm:flex'>
          <img src={StarLeft} alt='' />
          <img src={StarRight} alt='' />
        </div>

        <div className='relative mb-12 flex justify-center'>
          <Image
            src={MonkeyPurple}
            alt=''
            className='absolute left-14 hidden h-[72px] w-[71px] sm:block'
          />
          <div className='mx-auto max-w-[327px] text-center font-poppins text-xl text-neutral-800 sm:max-w-[653px]'>
            We are building the first NFT marketplace that enables creators to choose and embed
            licenses when they mint.
          </div>
        </div>

        <div className='relative flex'>
          <RadiusButton className='mx-auto bg-blue-600 font-poppins text-base font-medium text-white'>
            Let’s Started
          </RadiusButton>

          <div className='absolute right-0 hidden flex-col gap-[10px] sm:flex'>
            <Image src={MonkeyThree} alt='' />
            <h5 className='font-sora text-lg font-semibold text-neutral-800'>10k+ CREATORS</h5>
            <p className='w-[182px] font-poppins text-xs font-normal text-slate-500'>
              The first NFT market place that emles creators to choose
            </p>
          </div>
        </div>

        <div className='mt-12 flex items-end justify-center sm:mt-20'>
          <div className='relative z-10'>
            <Image
              src={HiphopMonkey}
              alt=''
              className='h-[150px] w-[109px] rounded-t-full sm:h-auto sm:w-auto'
            />
          </div>
          <div className='absolute z-30 -translate-x-[87%]'>
            <Image
              src={ClownMonkey}
              alt=''
              className='h-[130px] w-[109px] rounded-t-full sm:h-auto sm:w-auto '
            />
          </div>
          <div className='absolute  z-0 translate-x-[85%]'>
            <Image
              src={ChefMonkey}
              alt=''
              className='h-[130px] w-[109px] rounded-t-full sm:h-auto sm:w-auto'
            />
          </div>
        </div>

        <div className='flex flex-wrap justify-center gap-x-[30px] gap-y-5 rounded-2xl bg-white px-5 pb-[70px] pt-[30px] sm:gap-[100px] sm:px-[60px] sm:pb-[130px] sm:pt-[70px]'>
          {companyLogos.map((item, index) => (
            <img
              key={index}
              src={item.logo}
              alt={item.name}
              className='h-[18px] sm:h-auto sm:w-auto'
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroComponent
