import React from 'react'

import CtaComponent from './CtaComponent'
import FeatureComponent from './FeatureComponent'
import GrowFaster from './GrowFaster'
import HeroComponent from './HeroComponent'
import ProductsComponent from './ProductsComponent'
import SellComponent from './SellComponent'
import SimilarItems from './SimilarItems'
import SliderComponent from './SliderComponent'
import StatsComponent from './StatsComponent'

const EcommercePage = () => {
  return (
    <main>
      <HeroComponent />

      <ProductsComponent />

      <div>
        <div className='relative overflow-x-hidden'>
          <SimilarItems />
          <div className='absolute -left-[33px] top-[1350px] -z-20 h-[153px] w-[154px] rounded-[80px] bg-blue-400 blur-[67px] sm:left-[100px] sm:top-[750px] sm:h-[345px] sm:w-[347px] sm:rounded-[166px] sm:blur-[150px]' />
          <SellComponent />
          <div className='absolute  inset-0 left-[258px] top-[2200px] -z-20 h-[164px] w-[165px] rounded-[82px] bg-fuchsia-300 blur-[100px] sm:left-[1000px] sm:top-[1450px] sm:h-[409px] sm:w-[411px] sm:rounded-[204px] sm:blur-[150px] ' />
          <GrowFaster />
          <StatsComponent />
        </div>
      </div>

      <SliderComponent />

      <FeatureComponent />

      <CtaComponent />
    </main>
  )
}

export default EcommercePage
