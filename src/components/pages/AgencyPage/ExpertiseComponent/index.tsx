import Image from 'next/image'
import React from 'react'

import {
  CheckGradientBlue,
  CheckGradientOrange,
  CheckGradientPurple,
  CheckGradientRed,
} from 'assets/icons/check-icons'
import Heading from 'components/ui/Heading'

const expertiseItems = [
  {
    title: 'UI/UX Design',
    features: [
      'High-quality motion design',
      'Thoughtful user experience design',
      'Unique user interface design for websites and apps',
      'Design concepts & strategies for MVPs',
    ],
    image: CheckGradientPurple,
  },
  {
    title: 'Webflow Design',
    features: [
      'High-quality motion design',
      'Thoughtful user experience design',
      'Unique user interface design for websites and apps',
      'Design concepts & strategies for MVPs',
    ],
    image: CheckGradientOrange,
  },
  {
    title: 'Webflow Developer',
    features: [
      'Full-cycle development of powerful corporate websites and one-pagers',
      'Webflow integrations with third-party services and apps',
      'Migration of your designs or even ready website to Webflow CMS',
    ],
    image: CheckGradientBlue,
  },
  {
    title: 'Shopify Developer',
    features: [
      'Cost-effective e-commerce development',
      'Reinvention of your online store with a strong tech stack',
    ],
    image: CheckGradientRed,
  },
]

const ExpertiseComponent = () => {
  return (
    <section className='sm:main-container mobile-container mb-10 rounded-3xl bg-grayF1  px-[10px] py-[30px] pt-[70px] sm:mb-[105px] sm:px-10 sm:py-12'>
      <Heading className='mb-6 sm:mb-[30]'>
        Explore our core <span className='text-primary'>Expertise</span>
      </Heading>
      <p className='mx-auto mb-[30px] max-w-[327px] text-center font-poppins text-[16px] font-normal leading-normal sm:mb-12 sm:max-w-[709px] sm:text-lg'>
        We produce beautiful and engaging websites. Our team is mostly experienced in the design of
        stunning interfaces, e-commerce and marketing website development, ready to work with you on
        your project!
      </p>
      <div className='grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 sm:gap-y-6'>
        {expertiseItems.map((item, index) => (
          <div key={index} className='rounded-xl bg-white px-8 py-6'>
            <h4 className='border-b border-b-grayF2 pb-5 text-xl font-semibold'>{item.title}</h4>
            <div className='mt-6 flex flex-col gap-4'>
              {item.features.map((feature, idx) => (
                <div key={idx} className='flex items-center gap-3'>
                  <span className='h-5 w-5 flex-shrink-0'>
                    <Image src={item.image} alt='' width={20} height={20} />
                  </span>
                  <p className='font-poppins text-sm font-normal leading-normal text-black sm:text-[16px]'>
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ExpertiseComponent
