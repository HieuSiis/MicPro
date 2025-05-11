import Image from 'next/image'
import React from 'react'

import { Arrow } from 'assets/icons'
import { GrillBeef, NamPrik, PennePasta } from 'assets/images/restaurant-page'
import Heading from 'components/ui/Heading'

const blogPosts = [
  {
    id: 1,
    title: 'How to make a rice bowl?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor the incididunt ut labore...',
    image: GrillBeef,
  },
  {
    id: 2,
    title: 'Get the pizza of the week.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor the incididunt ut labore...',
    image: NamPrik,
  },
  {
    id: 3,
    title: 'Make your burger like this.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor the incididunt ut labore...',
    image: PennePasta,
  },
]

const BlogComponent = () => {
  return (
    <section className='mt-[60px] bg-grayF1 sm:mt-[120px]'>
      <div className='flex w-full flex-col justify-center px-6 py-10 sm:flex-row sm:space-x-[140px] sm:px-[135px] sm:py-[115px]'>
        {/* Left content */}
        <div className=''>
          <Heading className='mb-[14px] sm:mb-[30px] sm:text-left'>
            Our Food <span className='text-blue-600'>Blog</span>
          </Heading>
          <p className='mx-auto max-w-[289px] text-center font-poppins text-base font-normal text-dark1 sm:max-w-[411px] sm:text-left'>
            Eat the food you dream about at affordable prices. No need to come to us just call is.
          </p>
          <button
            type='button'
            className=' mx-auto mt-6 flex justify-center rounded-lg bg-primary px-11 py-[18px] text-white sm:mx-0 sm:mt-11'>
            Learn More <Image className='ml-[10px]' src={Arrow} alt='' width={24} height={24} />
          </button>
        </div>

        {/* Right content - Blog list */}
        <div className='mt-11 flex flex-col sm:mt-0'>
          {blogPosts.map((post, index) => (
            <div>
              <div key={post.id} className='flex  space-x-[13px] sm:space-x-[50px]'>
                <Image
                  src={post.image}
                  alt={post.title}
                  className='h-[118px] w-[134px] rounded-xl sm:h-[160px] sm:w-[230px] '
                />
                <div>
                  <p className='font-poppins text-sm font-normal text-dark1'>Blog 0{index + 1}</p>
                  <h3 className='mb-[10px] mt-[6px] font-sora text-sm font-semibold text-gray-800 sm:mb-4 sm:mt-2 sm:text-xl'>
                    {post.title}
                  </h3>
                  <p className='max-w-[178px] font-poppins text-xs font-normal text-gray-500 sm:max-w-[334px] sm:text-base'>
                    {post.description}
                  </p>
                </div>
              </div>
              {index !== blogPosts.length - 1 && <div className='my-[35px] border border-grayE2' />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogComponent
