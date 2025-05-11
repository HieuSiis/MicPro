import React from 'react'

import { AmazonColor, GGColor, GustoColor, HubSpotColor, SlackColor } from 'assets/logo-companies'

const Logos = [
  { img: GGColor },
  { img: SlackColor },
  { img: AmazonColor },
  { img: HubSpotColor },
  { img: GustoColor },
]
const TrustedCompanies = () => {
  return (
    <section className='flex h-[269px] flex-col items-center justify-center bg-grayF1 sm:h-[200px] sm:flex-row sm:justify-evenly'>
      <h5 className='mb-10 w-[264px] text-center font-sora text-xl font-semibold sm:mb-0 sm:text-left'>
        Trusted By Top 100+ Companies & Universities
      </h5>
      <div className='flex flex-wrap justify-center gap-x-10 gap-y-[30px] px-11 sm:gap-[60px] sm:px-0'>
        {Logos.map((item, index) => (
          <img key={index} src={item.img} alt='' className='h-8 sm:h-12' />
        ))}
      </div>
    </section>
  )
}

export default TrustedCompanies
