import Heading from 'components/ui/Heading'
import Image from 'next/image'
import React from 'react'

import { Amazon, MeUndies, SitePoint, Slack, Woo } from 'assets/logo-companies'
import { AppleIcon, MenuIcon, SpeakerIcon, StackIcon } from 'assets/icons'

const brandItems = [
    { img: Slack },
    { img: Amazon },
    { img: Woo },
    { img: MeUndies },
    { img: SitePoint },
]

const cards = [
    {
        icon: AppleIcon,
        bgIcon: 'bg-gradientPink',
        title: 'Discover, Explore the Product'
    },
    {
        icon: StackIcon,
        bgIcon: 'bg-gradientOrange',
        title: 'Product UX, Design & Development'
    },
    {
        icon: MenuIcon,
        bgIcon: 'bg-gradientBlue',
        title: 'Art Direction & Brand Strategy'
    },
    {
        icon: SpeakerIcon,
        bgIcon: 'bg-gradientRed',
        title: 'Marketing Strategy & SEO Campaigns'
    }
]

const CompaniesComponent = () => {
    return (
        <>
            <section className='bg-white rounded-[30px] sm:main-container mobile-container mx-auto sm:p-12 p-10 sm:pt-[70px] sm:pb-[120px] '>
                <div className="grid sm:grid-cols-4 grid-cols-1 sm:gap-[30px] gap-4 sm:mb-32 mb-11">
                    {cards.map((item, index) => (
                        <div key={index} className='bg-white p-8 border border-grayF2 rounded-xl hover:shadow-md'>
                            <div className={`rounded-full w-[88px] h-[88px] mb-8 ${item.bgIcon} flex items-center justify-center`}>
                                <img src={item.icon} alt="Apple Icon" />
                            </div>
                            <h3 className="text-xl font-semibold">
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* Only show Heading and Brand inside section on large screen */}
                <div className="-mx-10 sm:mx-0">
                    <Heading className='sm:max-w-[810px] max-w-[305px] mb-10'>
                        More than <span className='text-primary'>80,000+</span> companies trust Micpro
                    </Heading>
                    <div className="flex items-center justify-between overflow-auto gap-11">
                        {brandItems.map((item, index) => (
                            <Image key={index} src={item.img} alt='' width={150} height={40} className='aspect-video object-contain'></Image>
                        ))}
                    </div>
                </div>
            </section>

            {/* Show Heading and Brand outside section on mobile */}
            {/* <div className="block sm:hidden px-6 mt-11 mb-[70px]">
                <Heading className='max-w-[305px] mb-10'>
                    More than <span className='text-primary'>80,000+</span> companies trust Micpro
                </Heading>
                <div className="flex items-center gap-11 overflow-auto">
                    {brandItems.map((item, index) => (
                        <Image key={index} src={item.img} alt='' width={150} height={30} className='aspect-video object-contain'></Image>
                    ))}
                </div>
            </div> */}
        </>

    )
}

export default CompaniesComponent
