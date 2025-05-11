import Heading from 'components/ui/Heading'
import Image from 'next/image'
import React from 'react'

import { CheckBgRed } from 'assets/icons/check-icons'
import { ImgHelping } from 'assets/images/charity-page'

const lists = [
    {
        content: '500m liters of water provided through communities'
    },
    {
        content: '4000+ houses built for the poor people'
    },
    {
        content: '700+ schools built for those childrens'
    }
]

const HelpingComponent = () => {
    return (
        <section className='bg-white'>
            <Heading className='sm:max-w-[810px] max-w-[285px]'>You can Help lots of people <span className='text-primary'>helping</span> others.</Heading>
            <div className="flex sm:flex-row flex-col-reverse sm:mt-[120px] justify-center">
                <div className='flex flex-col sm:ml-20 px-6'>
                    <h1 className='sm:text-5xl text-[28px]  font-bold sm:max-w-[379px] font-sora sm:mt-0 -mt-10 leading-tight'>We are here to support the vulnerable.</h1>
                    <p className='text-[16px] font-poppins font-medium text-gray-500 sm:mt-6 mt-4 sm:mb-12 mb-[30px] sm:max-w-[512px] max-w-[318px]'>Transform the way you work with one place for everyone and everything you need to get stuff done.</p>
                    <ul className="flex flex-col space-y-5">
                        {lists.map((item, index) => (
                            <li key={index} className="flex items-center space-x-4">
                                <Image src={CheckBgRed} alt="" width={20} height={20} />
                                <span className="text-gray-700 sm:text-lg text-[16px] sm:font-medium font-normal sm:font-dmSans font-poppins">
                                    {item.content}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='sm:-mt-24 sm:-ml-20'>
                    <Image src={ImgHelping} alt='' />
                </div>
            </div>
        </section>
    )
}

export default HelpingComponent
