import React from 'react'

import RadiusButton from 'components/ui/Button/RadiusButton'

const HeroComponent = () => {
  return (
    <section>
      <h1 className='mx-auto mb-5 max-w-[327px] text-center font-sora text-[34px] font-bold leading-tight sm:mb-[30px] sm:max-w-[947px] sm:text-6xl sm:font-extrabold '>
        World's Best AI Writer for Easy <span className='text-gradient'> Content Creation</span>
      </h1>
      <div className='mx-auto max-w-[285px] text-center font-poppins text-sm font-normal text-dark sm:max-w-[806px] sm:text-xl '>
        We will create high-quality, well-organized and SEO-optimized content for you that's 10X
        faster than anything you can create on your own.
      </div>
      <RadiusButton className='mx-auto mt-12 bg-primary text-sm text-white'>
        Start Writing for free
      </RadiusButton>
    </section>
  )
}

export default HeroComponent
