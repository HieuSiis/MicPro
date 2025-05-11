/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image'
import React from 'react'

import { IContent, IEdit, IFb, IKeyword, IMice, IText, ITwitter } from 'assets/icons/ai-page'
import PartyPopper from 'assets/images/ai-page/party-popper.svg'
import OptionCard from 'components/ui/Card/OptionCard'

const CategoriesName = [
  { name: 'All' },
  { name: 'Article and Blog' },
  { name: 'Social Media' },
  { name: 'Writing' },
  { name: 'Keyword Research' },
  { name: 'Ecommerce' },
  { name: 'Website' },
]

const PopularCategory = [
  {
    bgColor: 'bg-sky-200',
    icon: IText,
    name: 'Article and Blog',
    description: 'Write your dream SEO article short time.',
  },
  {
    bgColor: 'bg-red-100',
    icon: IMice,
    name: 'Social Media',
    description: 'Write compelling detailed product',
  },
  {
    bgColor: 'bg-pink-100',
    icon: IKeyword,
    name: 'Keyword Research',
    description: 'Pick your excet keyword for rank anything',
  },
]

const AllTopics = [
  {
    bgIcon: 'bg-amber-50',
    icon: IEdit,
    name: 'Blog Idea',
    description: 'Blog ideas generate more website traffic.',
  },
  {
    bgIcon: 'bg-amber-50',
    icon: IEdit,
    name: 'Blog Intro',
    description: 'Start write compelling introduction',
  },
  {
    bgIcon: 'bg-amber-50',
    icon: IEdit,
    name: 'Article Generator',
    description: 'Generate more copies with article AI',
  },
  {
    bgIcon: 'bg-sky-50',
    icon: IFb,
    name: 'Facebook Ads',
    description: 'Facebooks ad copies that make your ads.',
  },
  {
    bgIcon: 'bg-sky-50',
    icon: ITwitter,
    name: 'Tweet Ideas',
    description: 'Engage with your amazing followers',
  },
  {
    bgIcon: 'bg-sky-50',
    icon: IContent,
    name: 'Content Rephrase',
    description: 'Rephrase your content in different voice.',
  },
]

const CategoryComponent = () => {
  return (
    <section>
      <div className='l-container mt-[70px] rounded-[20px] bg-white'>
        <div className='rounded-lg py-6 sm:p-12'>
          <div className='flex items-center justify-center'>
            <Image
              src={PartyPopper}
              alt=''
              width={36}
              height={36}
              className='h-5 w-5 sm:h-[36px] sm:w-[36px]'
            />
            <h5 className='ml-1 font-manrope text-[13px] font-extrabold text-slate-900 sm:ml-2 sm:text-xl'>
              Delowar, So, what exactly do you have in mind?
            </h5>
          </div>
          <p className='mx-auto text-center font-manrope text-[9px] font-normal text-gray-700 sm:text-xs'>
            Begin with selecting the content type from the options below.
          </p>
          <ul className='mb-6 mt-4 flex justify-start gap-2 overflow-x-auto py-2 sm:mb-4 sm:mt-9 sm:justify-center sm:gap-[13px]'>
            {CategoriesName.map((item, index) => (
              <li
                key={index}
                className='min-w-max shrink-0 rounded-full border border-neutral5 px-4 py-1 font-manrope text-[9px] text-neutral2 hover:bg-primary hover:text-white sm:text-[13px] '
              >
                <a href='#'>{item.name}</a>
              </li>
            ))}
          </ul>
          <h6 className='mb-[13px] font-manrope text-sm font-bold text-slate-900'>
            Popular Category
          </h6>
          <div className='mb-9 flex flex-col gap-[18px] sm:flex-row sm:gap-[27px]'>
            {PopularCategory.map((item, index) => (
              <OptionCard
                className={item.bgColor}
                key={index}
                icon={item.icon}
                bgIcon='bg-white'
                name={item.name}
                description={item.description}
              />
            ))}
          </div>
          <h6 className='mb-[13px] font-manrope text-sm font-bold text-slate-900'>All Topics</h6>
          <div className='ga mb-9 grid grid-cols-1 gap-x-[27px] gap-y-[18px] sm:grid-cols-3'>
            {AllTopics.map((item, index) => (
              <OptionCard
                className='border border-purple-100'
                key={index}
                icon={item.icon}
                bgIcon={item.bgIcon}
                name={item.name}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CategoryComponent
