import Image from 'next/image'
import React from 'react'

import { AppleIcon, MenuIcon, SpeakerIcon, StackIcon } from 'assets/icons'
import { Amazon, MeUndies, SitePoint, Slack, Woo } from 'assets/logo-companies'
import Heading from 'components/ui/Heading'

const brandItems = [
  { img: Slack },
  { img: Amazon },
  { img: Woo },
  { img: MeUndies },
  { img: SitePoint },
]

const cards = [
  {
    icon: AppleIcon,
    bgIcon: 'bg-gradientPink',
    title: 'Discover, Explore the Product',
  },
  {
    icon: StackIcon,
    bgIcon: 'bg-gradientOrange',
    title: 'Product UX, Design & Development',
  },
  {
    icon: MenuIcon,
    bgIcon: 'bg-gradientBlue',
    title: 'Art Direction & Brand Strategy',
  },
  {
    icon: SpeakerIcon,
    bgIcon: 'bg-gradientRed',
    title: 'Marketing Strategy & SEO Campaigns',
  },
]

const CompaniesComponent = () => {
  return (
    <>
      <section className='sm:main-container mobile-container mx-auto rounded-[30px] bg-white p-10 sm:p-12 sm:pb-[120px] sm:pt-[70px] '>
        <div className='mb-11 grid grid-cols-1 gap-4 sm:mb-32 sm:grid-cols-4 sm:gap-[30px]'>
          {cards.map((item, index) => (
            <div
              key={index}
              className='rounded-xl border border-grayF2 bg-white p-8 hover:shadow-md'
            >
              <div
                className={`mb-8 h-[88px] w-[88px] rounded-full ${item.bgIcon} flex items-center justify-center`}
              >
                <img src={item.icon} alt='Apple Icon' />
              </div>
              <h3 className='text-xl font-semibold'>{item.title}</h3>
            </div>
          ))}
        </div>

        {/* Only show Heading and Brand inside section on large screen */}
        <div className='-mx-10 sm:mx-0'>
          <Heading className='mb-10 max-w-[305px] sm:max-w-[810px]'>
            More than <span className='text-primary'>80,000+</span> companies trust Micpro
          </Heading>
          <div className='flex items-center justify-between gap-11 overflow-auto'>
            {brandItems.map((item, index) => (
              <Image
                key={index}
                src={item.img}
                alt=''
                width={150}
                height={40}
                className='aspect-video object-contain'
              />
            ))}
          </div>
        </div>
      </section>

      {/* Show Heading and Brand outside section on mobile */}
      {/* <div className="block sm:hidden px-6 mt-11 mb-[70px]">
                <Heading className='max-w-[305px] mb-10'>
                    More than <span className='text-primary'>80,000+</span> companies trust Micpro
                </Heading>
                <div className="flex items-center gap-11 overflow-auto">
                    {brandItems.map((item, index) => (
                        <Image key={index} src={item.img} alt='' width={150} height={30} className='aspect-video object-contain'></Image>
                    ))}
                </div>
            </div> */}
    </>
  )
}

export default CompaniesComponent
