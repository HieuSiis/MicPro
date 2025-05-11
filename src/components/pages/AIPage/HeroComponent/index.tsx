import RadiusButton from 'components/ui/Button/RadiusButton'
import React from 'react'

const HeroComponent = () => {
    return (
        <section>
            <h1 className='sm:max-w-[947px] max-w-[327px] mx-auto sm:font-extrabold font-bold font-sora sm:text-6xl text-[34px] text-center leading-tight sm:mb-[30px] mb-5 '>
                World's Best AI Writer for Easy <span className='text-gradient'> Content Creation</span>
            </h1>
            <div className='sm:max-w-[806px] max-w-[285px] text-dark sm:text-xl text-sm font-normal font-poppins mx-auto text-center '>We will create high-quality, well-organized and SEO-optimized content for you that's 10X faster than anything you can create on your own.</div>
            <RadiusButton className='bg-primary text-sm text-white mx-auto mt-12'>Start Writing for free</RadiusButton>
        </section>
    )
}

export default HeroComponent
