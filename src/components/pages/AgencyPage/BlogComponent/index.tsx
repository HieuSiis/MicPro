import Image from 'next/image'
import React from 'react'

import { ImgBlog1, ImgBlog2, ImgBlog3 } from 'assets/images/agency-page'
import Heading from 'components/ui/Heading'

const blogItems = [
  {
    category: 'Design Blog',
    time: 'Jul 12, 2022',
    title: '15 Important Usability Principles for User Interface Design',
    image: ImgBlog1,
  },
  {
    category: 'Design Blog',
    time: 'Jul 12, 2022',
    title: '15 Important Usability Principles for User Interface Design',
    image: ImgBlog2,
  },
  {
    category: 'Design Blog',
    time: 'Jul 12, 2022',
    title: '15 Important Usability Principles for User Interface Design',
    image: ImgBlog3,
  },
]

const BlogComponent = () => {
  return (
    <section className='pb-[60px] sm:pb-[112px]'>
      <div className='sm:main-container mobile-container'>
        <Heading className='mb-10 sm:mb-[58px]'>
          OUR Design <span className='text-primary'>BLOG</span>
        </Heading>
        <div className='grid grid-cols-1 gap-7 sm:grid-cols-3'>
          {blogItems.map((item, index) => (
            <div key={index}>
              <div className='relative mb-7 aspect-video w-full'>
                <Image
                  src={item.image}
                  alt=''
                  fill
                  className='h-full w-full rounded-lg object-cover'
                />
              </div>
              <div className='mb-4 flex items-center gap-3'>
                <span className='inline-block rounded bg-orangeFF px-2 py-1.5 text-sm font-medium'>
                  {item.category}
                </span>
                <span className='text-xs text-dark1'>{item.time}</span>
              </div>
              <h3 className='font-poppins text-[16px] font-medium'>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogComponent
