import Image from 'next/image'
import React from 'react'
import Heading from 'components/ui/Heading'
import { CheckBgOrange } from 'assets/icons/sport-page'
import { ImgRight } from 'assets/images/sport-page'

const lists = [
    { icon: CheckBgOrange, content: 'Powered by GPT-3 from OpenAI' },
    { icon: CheckBgOrange, content: 'Generate effective copy fast' },
    { icon: CheckBgOrange, content: 'Facebook Ads, Headlines, Idea Generator and more' },
]

const BenefitComponent = () => {
    return (
        <section className='main-container sm:mt-[100px] mt-[35px]'>
            <div className="flex sm:flex-row flex-col justify-center sm:gap-[190px] gap-[30px]">
                <div className='flex flex-col sm:mt-5'>
                    <h2 className='sm:text-[48px] text-[28px] text-dark font-bold leading-tight font-sora'>Many <span className='text-primary'>Benefits</span> for you</h2>
                    <p className='sm:text-base text-sm font-poppins font-normal text-dark1 mt-6 sm:mb-10 mb-[30px] sm:max-w-[500px] max-w-[309px]'>We use artificial intelligence to write your marketing copy for you. From Facebook Ads to web pages—our AI creates text that converts.</p>
                    <ul className="flex flex-col space-y-4">
                        {lists.map((item, index) => (
                            <li key={index} className="flex items-center space-x-2">
                                <Image src={item.icon} alt="" width={20} height={20} />
                                <span className="text-dark sm:text-base text-sm font-poppins font-semibold">
                                    {item.content}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='sm:-ml-20 sm:-mt-16'>
                    <Image src={ImgRight} alt='' width={522} height={502} />
                </div>
            </div>
        </section>
    )
}

export default BenefitComponent
