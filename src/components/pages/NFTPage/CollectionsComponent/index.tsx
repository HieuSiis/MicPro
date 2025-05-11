import { BeeMonkey, ClownRounded, Fire, HeartGray, HeartRed, HiphopRounded, PoliceMonkey, VMonkey, WowMonkey } from 'assets/images/nft-page'
import RadiusButton from 'components/ui/Button/RadiusButton'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Arrow from 'assets/images/nft-page/arrow-gray.svg';

const collections = [
    { img: HiphopRounded, favorite: true },
    { img: ClownRounded, favorite: false },
    { img: WowMonkey, favorite: false },
    { img: BeeMonkey, favorite: false },
    { img: PoliceMonkey, favorite: false },
    { img: VMonkey, favorite: false },
]

const CollectionsComponent = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };

        handleResize(); // Kiểm tra ban đầu
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Depending on the device and "see more" status, display the appropriate number of items
    const visibleItems = showAll
        ? collections
        : isMobile
            ? collections.slice(0, 1)
            : collections.slice(0, 6);
    return (
        <section className='bg-white -top-5 relative'>
            <div className='main-container'>
                <div className='flex items-center justify-center sm:gap-4 gap-2'>
                    <h2 className='sm:text-[50px] text-[28px] font-bold leading-tight font-sora'>Featured <span className='text-blue-600'>Collections</span></h2>
                    <img src={Fire} alt='' className='sm:w-[33px] sm:h-11 w-4 h-[21px] ' />
                </div>
                <p className='text-dark1 sm:font-spaceGrotesk font-poppins sm:text-lg text-sm font-normal sm:mt-[10px] mt-5 text-center max-w-[470px] mx-auto sm:mb-[55px] mb-11'>Discover, collect, and sell extraordinary NFTs through our awesome platform.</p>
                <div className='grid sm:grid-cols-3 grid-cols-1 sm:gap-[30px] gap-5'>
                    {visibleItems.map((item, index) => (
                        <div key={index} className="sm:max-w-[370px] rounded-xl hover:shadow-md border border-zinc-100 p-5">
                            <div className="relative">
                                <Image
                                    src={item.img}
                                    alt="NFT Image"
                                    className='w-[330px] h-[330px] rounded-xl'
                                />
                                <button className="absolute top-4 right-4 bg-white rounded-full p-[12px] shadow-md">
                                    {item.favorite ? <img src={HeartRed} alt="" /> : <img src={HeartGray} alt="" />}

                                </button>
                            </div>

                            <div className="mt-7">
                                <h3 className="font-spaceGrotesk font-bold text-xl text-neutral-800">LuppyclubOfficial</h3>
                                <p className="text-[16px] font-normal font-poppins text-slate-500">
                                    Created by <span className="text-blue-600 font-poppins text-[16px] font-medium">LuppyclubOfficial</span>
                                </p>

                                <div className="flex justify-between items-center text-xs text-gray-600 mt-4">
                                    <div>
                                        <p className="text-sm font-normal font-poppins uppercase text-slate-500">Floor</p>
                                        <p className='text-lg font-poppins font-normal'>0.06 ETH</p>
                                    </div>
                                    <div className='text-right'>
                                        <p className="text-sm font-normal font-poppins uppercase text-slate-500">
                                            Total Volume
                                        </p>
                                        <p className="text-lg font-poppins font-normal">0.65 ETH</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {!showAll && (
                    <>
                        {/* Desktop Button */}
                        <RadiusButton
                            onClick={() => setShowAll(true)}
                            className='bg-blue-600 sm:block hidden font-spaceGrotesk font-semibold text-white text-lg mt-[60px] mx-auto'
                        >
                            View More
                        </RadiusButton>

                        {/* Mobile Button */}
                        <div
                            onClick={() => setShowAll(true)}
                            className='sm:hidden flex justify-center gap-[10px] mt-6 cursor-pointer'
                        >
                            <span className='text-neutral-800 font-poppins text-lg font-semibold'>See All</span>
                            <div className='flex items-center justify-center'>
                                <img src={Arrow} alt="" />
                            </div>
                        </div>
                    </>
                )}
            </div>

        </section>
    )
}

export default CollectionsComponent
