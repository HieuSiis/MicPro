import Heading from 'components/ui/Heading'
import React from 'react'

import { AirWallex, Amazon, Ghost, Slack, Woo } from 'assets/logo-companies'
import { Edu, Food, Insurance, Shelter } from 'assets/icons'

const brandItems = [Slack, Amazon, Woo, AirWallex, Ghost]

const cards = [
    {
        title: 'Health & Shelter',
        description: 'Support',
        icon: Shelter
    },
    {
        title: 'Food & Groceries',
        description: 'Support',
        icon: Food
    },
    {
        title: 'Educational',
        description: 'Support',
        icon: Edu
    },
    {
        title: 'Health & Insurance',
        description: 'Support',
        icon: Insurance
    }
]
const CompaniesComponent = () => {
    return (
        <section className='w-full bg-white'>
            <div className='sm:main-container mobile-container mx-auto sm:pt-[70px] pt-10 sm:px-12 px-[0px] sm:pb-[120px] pb-[70px]'>
                <Heading className='sm:mb-[70px] mb-[30px]'>
                    More than <span className='text-primary'>80,000+</span> companies trust Micpro
                </Heading>
                <div className='border border-grayEE mb-[30px]'></div>
                <div className="flex items-center sm:px-16 px-0 justify-between gap-10 overflow-auto">
                    {brandItems.map((item, index) => (
                        <img key={index} src={item} alt='' />
                    ))}
                </div>
                <div className='max-w-[1170px] border border-grayEE mt-[30px] sm:mb-[146px] mb-[100px]'></div>
                <div className="grid sm:grid-cols-4 grid-cols-1 sm:gap-8 gap-[70px] justify-items-center">
                    {cards.map((item, index) => (
                        <div key={index} className="bg-white p-6 border h-[138px] w-[246px] border-grayF2 rounded-xl relative">
                            <div className="absolute -top-10">
                                <img src={item.icon} alt="Shelter Icon" />
                            </div>
                            <div className="pt-10">
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                <p className="text-dark1 text-sm font-normal">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default CompaniesComponent
