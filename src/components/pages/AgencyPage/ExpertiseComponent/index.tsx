import { CheckGradientBlue, CheckGradientOrange, CheckGradientPurple, CheckGradientRed } from 'assets/icons/check-icons'
import Heading from 'components/ui/Heading'
import Image from 'next/image'
import React from 'react'

const expertiseItems = [
    {
        title: "UI/UX Design",
        features: [
            "High-quality motion design",
            "Thoughtful user experience design",
            "Unique user interface design for websites and apps",
            "Design concepts & strategies for MVPs"],
        image: CheckGradientPurple
    },
    {
        title: "Webflow Design",
        features: [
            "High-quality motion design",
            "Thoughtful user experience design",
            "Unique user interface design for websites and apps",
            "Design concepts & strategies for MVPs"],
        image: CheckGradientOrange
    },
    {
        title: "Webflow Developer",
        features: [
            "Full-cycle development of powerful corporate websites and one-pagers",
            "Webflow integrations with third-party services and apps",
            "Migration of your designs or even ready website to Webflow CMS",],
        image: CheckGradientBlue
    },
    {
        title: "Shopify Developer",
        features: [
            "Cost-effective e-commerce development",
            "Reinvention of your online store with a strong tech stack",],
        image: CheckGradientRed
    },
]

const ExpertiseComponent = () => {
    return (
        <section className='sm:main-container mobile-container bg-grayF1 rounded-3xl pt-[70px]  sm:px-10 px-[10px] sm:py-12 py-[30px] sm:mb-[105px] mb-10'>
            <Heading className='sm:mb-[30] mb-6'>
                Explore our core <span className='text-primary'>Expertise</span>
            </Heading>
            <p className='sm:max-w-[709px] max-w-[327px] font-poppins font-normal sm:text-lg text-[16px] text-center mx-auto sm:mb-12 mb-[30px] leading-normal'>
                We produce beautiful and engaging websites. Our team is mostly experienced in the design of stunning interfaces, e-commerce and marketing website development, ready to work with you on your project!
            </p>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-8 sm:gap-y-6 gap-y-4">
                {expertiseItems.map((item, index) => (
                    <div key={index} className='bg-white rounded-xl py-6 px-8'>
                        <h4 className='font-semibold text-xl pb-5 border-b border-b-grayF2'>{item.title}</h4>
                        <div className="flex flex-col gap-4 mt-6">
                            {item.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <span className='w-5 h-5 flex-shrink-0'>
                                        <Image src={item.image} alt='' width={20} height={20}></Image>
                                    </span>
                                    <p className='text-black leading-normal font-poppins sm:text-[16px] text-sm font-normal'>{feature}</p>
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
