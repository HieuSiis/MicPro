import React from 'react'
import Image from 'next/image'
import RadiusButton from 'components/ui/Button/RadiusButton'
import { ChefMonkey, ClownMonkey, HiphopMonkey, MonkeyPurple, MonkeyThree, StarLeft, StarRight } from 'assets/images/nft-page'
import { Amazon, MeUndies, SitePoint, Slack, Woo } from 'assets/logo-companies'

const companyLogos = [
    { name: 'Slack', logo: Slack },
    { name: 'Amazon', logo: Amazon },
    { name: 'WooCommerce', logo: Woo },
    { name: 'MeUndies', logo: MeUndies },
    { name: 'SitePoint', logo: SitePoint },
]

const HeroComponent = () => {
    return (
        <section>
            <div className="l-container ">
                <h1 className='font-sora sm:max-w-[1010px] max-w-[327px] mx-auto sm:font-extrabold font-bold sm:text-6xl text-[34px] text-center leading-snug sm:mb-0 mb-6'>
                    Embrace Digital Ownership Buy, Trade, and <span className='text-gradient'>Collect NFTs</span>
                </h1>
                <div className='sm:flex hidden justify-between'>
                    <img src={StarLeft} alt="" />
                    <img src={StarRight} alt="" />
                </div>

                <div className="relative flex justify-center mb-12">
                    <Image
                        src={MonkeyPurple}
                        alt=""
                        className="w-[71px] h-[72px] absolute left-14 sm:block hidden"
                    />
                    <div className="font-poppins text-center sm:max-w-[653px] max-w-[327px] text-xl text-neutral-800 mx-auto">
                        We are building the first NFT marketplace that enables creators to choose and embed licenses when they mint.
                    </div>
                </div>

                <div className='relative flex'>
                    <RadiusButton className='bg-blue-600 text-white font-poppins font-medium text-base mx-auto'>
                        Let’s Started
                    </RadiusButton>

                    <div className='sm:flex hidden flex-col gap-[10px] absolute right-0'>
                        <Image src={MonkeyThree} alt=''></Image>
                        <h5 className='font-sora text-lg font-semibold text-neutral-800'>10k+ CREATORS</h5>
                        <p className='w-[182px] font-poppins text-xs font-normal text-slate-500'>The first NFT market place that emles creators to choose</p>
                    </div>
                </div>

                <div className='flex items-end justify-center sm:mt-20 mt-12'>
                    <div className="relative z-10">
                        <Image src={HiphopMonkey} alt="" className="rounded-t-full sm:w-auto sm:h-auto w-[109px] h-[150px]" />
                    </div>
                    <div className="absolute -translate-x-[87%] z-30">
                        <Image src={ClownMonkey} alt="" className="rounded-t-full sm:w-auto sm:h-auto w-[109px] h-[130px] " />
                    </div>
                    <div className="absolute  translate-x-[85%] z-0">
                        <Image src={ChefMonkey} alt="" className="rounded-t-full sm:w-auto sm:h-auto w-[109px] h-[130px]" />
                    </div>
                </div>

                <div className='bg-white rounded-2xl justify-center flex flex-wrap sm:gap-[100px] gap-x-[30px] gap-y-5 sm:pt-[70px] pt-[30px] sm:pb-[130px] pb-[70px] sm:px-[60px] px-5'>
                    {companyLogos.map((item, index) => (
                        <img key={index} src={item.logo} alt={item.name} className='sm:w-auto sm:h-auto h-[18px]' />
                    ))}
                </div>

            </div>
        </section>
    )
}

export default HeroComponent
