import { BidMonkey, NFT } from 'assets/images/nft-page'
import RadiusButton from 'components/ui/Button/RadiusButton'
import Heading from 'components/ui/Heading'
import Image from 'next/image'
import React from 'react'

const datetime = [
    { value: 0, label: 'Days' },
    { value: 4, label: 'HRS' },
    { value: 17, label: 'MINS' },
    { value: 59, label: 'SECS' },
]

const BidComponent = () => {
    return (
        <section className='main-container sm:py-[120px] py-[50px]'>
            <div className="flex sm:flex-row flex-col-reverse sm:gap-[70px] gap-[60px] items-center">
                <Image src={BidMonkey} alt='' width={470} height={470} className='rounded-t-full rounded-b-md' />
                <div className="flex flex-col">
                    <Heading className='text-left'>JUNK FOOD PARTY #137</Heading>
                    <div className="flex gap-2 sm:mb-9 mb-[30px] items-center mt-[15px]">
                        <Image src={NFT} alt='' className='rounded-full' />
                        <p className="text-lg font-normal font-spaceGrotesk text-slate-500">
                            Created by <span className="text-blue-600 font-spaceGrotesk text-lg font-semibold">MitsuoKatori</span>
                        </p>
                    </div>
                    <div className='flex gap-5'>
                        {datetime.map((item, index) => (
                            <div key={index} className='flex flex-col text-base rounded-md text-slate-400 font-poppins font-normal items-center justify-center bg-blue-600 bg-opacity-10 w-[70px] h-[70px]'>
                                <span className='text-blue-600 text-base font-spaceGrotesk font-semibold'>{item.value}</span>{item.label}
                            </div>
                        ))}
                    </div>
                    <p className='text-gray-400 font-spaceGrotesk text-base font-normal mt-[18px]'>Current Bid</p>
                    <span className='text-xl font-bold text-slate-500 font-beVietnamPro'>1.0324 ETH</span>
                    <div className="flex gap-5 sm:mt-[38px] mt-[30px]">
                        <RadiusButton className='bg-blue-600 text-white font-poppins sm:text-lg text-base font-semibold sm:py-[18px] sm:px-8 py-3 px-5'>Place a Bid</RadiusButton>
                        <RadiusButton className='bg-neutral-800 text-white font-poppins sm:text-lg text-base font-semibold sm:py-[18px] sm:px-8 py-3 px-5'>View Artwork</RadiusButton>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BidComponent
