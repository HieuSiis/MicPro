import Image from 'next/image'
import React from 'react'

import { Arrow } from 'assets/icons'
import { Img, Img1, Img2 } from 'assets/images/charity-page'
import RadiusButton from 'components/ui/Button/RadiusButton'
import Heading from 'components/ui/Heading'

const articles = [
  {
    id: 1,
    category: 'Donation',
    categoryColor: 'text-sky-600 bg-indigo-50',
    title: 'Why Are Forest So Important For Earth?',
    image: Img,
  },
  {
    id: 2,
    category: 'Donation',
    categoryColor: 'text-orange-400 bg-orange-50',
    title: 'What To Donate To A Food Bank & What To Avoid.',
    image: Img1,
  },
  {
    id: 3,
    category: 'Donation',
    categoryColor: 'text-rose-400 bg-pink-50',
    title: 'What To Donate To A Food Bank & What To Avoid.',
    image: Img2,
  },
]

const CampaignsComponent = () => {
  return (
    <section className='main-container mt-[70px] sm:mt-[130px]'>
      <Heading className='mb-[83px] max-w-[272px] sm:max-w-[672px]'>
        {' '}
        Latest News & <span className='text-blue-500'>Campaigns</span>
      </Heading>

      {/* Articles Grid */}
      <div className='grid gap-6 sm:gap-[74px] md:grid-cols-3'>
        {articles.map((article) => (
          <div key={article.id} className=''>
            <p
              className={`inline-block rounded-md px-3 py-1 font-poppins text-[16px] font-normal ${article.categoryColor}`}
            >
              {article.category}
            </p>
            <h3 className='mb-8 mt-4 max-w-[311px] font-sora text-xl font-semibold text-gray-800 sm:max-w-[298px]'>
              {article.title}
            </h3>
            <div className='relative h-56 w-full overflow-hidden rounded-lg shadow-md'>
              <Image src={article.image} alt={article.title} layout='fill' objectFit='cover' />
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className='flex items-center justify-center gap-6'>
        <RadiusButton className='mt-[30px] rounded-lg bg-primary font-normal text-white sm:mt-[70px]'>
          VIEW ALL ARTICLES <Image src={Arrow} alt='' width={24} height={24} />{' '}
        </RadiusButton>
      </div>
    </section>
  )
}

export default CampaignsComponent
