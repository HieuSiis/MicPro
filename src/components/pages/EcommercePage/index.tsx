import React from 'react'
import HeroComponent from './HeroComponent'
import ProductsComponent from './ProductsComponent'
import SimilarItems from './SimilarItems'
import SellComponent from './SellComponent'
import GrowFaster from './GrowFaster'
import StatsComponent from './StatsComponent'
import SliderComponent from './SliderComponent'
import FeatureComponent from './FeatureComponent'
import CtaComponent from './CtaComponent'

const EcommercePage = () => {
    return (
        <main>
            <HeroComponent />

            <ProductsComponent />

            <div>
                <div className='relative overflow-x-hidden'>
                    <SimilarItems />
                    <div className="sm:w-[347px] sm:h-[345px] sm:rounded-[166px] w-[154px] h-[153px] rounded-[80px] bg-blue-400 sm:blur-[150px] blur-[67px] sm:left-[100px] -left-[33px] absolute sm:top-[750px] top-[1350px] -z-20"></div>
                    <SellComponent />
                    <div className="sm:w-[411px]  sm:h-[409px] sm:rounded-[204px] inset-0 w-[165px] h-[164px] rounded-[82px] bg-fuchsia-300 sm:blur-[150px] blur-[100px] absolute sm:top-[1450px] sm:left-[1000px] top-[2200px] left-[258px] -z-20 "></div>
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
