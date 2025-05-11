import { Fire, Img1GroupPlace, Img1Place, Img2GroupPlace, Img2Place, Img3GroupPlace, Img3Place, Img4Place, Img5Place, Img6Place, NFT } from 'assets/images/nft-page'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

import Arrow from 'assets/images/nft-page/arrow-gray.svg';

const categories = [
    "Trendings",
    "Art",
    "Music",
    "Sports",
    "Photography",
    "Trending Card",
    "See More",
];

const cards = [
    {
        image: Img1Place,
        title: "LuppyclubOfficial",
        price: "0.65 ETH",
        time: "04h 20m 14s",
        avatars: [Img1GroupPlace, Img2GroupPlace, Img3GroupPlace],
    },
    {
        image: Img2Place,
        title: "LuppyclubOfficial",
        price: "0.65 ETH",
        time: "04h 20m 14s",
        avatars: [Img1GroupPlace, Img2GroupPlace, Img3GroupPlace],
    },
    {
        image: Img3Place,
        title: "LuppyclubOfficial",
        price: "0.65 ETH",
        time: "04h 20m 14s",
        avatars: [Img1GroupPlace, Img2GroupPlace, Img3GroupPlace],
    },
    {
        image: Img4Place,
        title: "LuppyclubOfficial",
        price: "0.65 ETH",
        time: "04h 20m 14s",
        avatars: [Img1GroupPlace, Img2GroupPlace, Img3GroupPlace],
    },
    {
        image: Img5Place,
        title: "LuppyclubOfficial",
        price: "0.65 ETH",
        time: "04h 20m 14s",
        avatars: [Img1GroupPlace, Img2GroupPlace, Img3GroupPlace],
    },
    {
        image: Img6Place,
        title: "LuppyclubOfficial",
        price: "0.65 ETH",
        time: "04h 20m 14s",
        avatars: [Img1GroupPlace, Img2GroupPlace, Img3GroupPlace],
    },
    {
        image: Img5Place,
        title: "LuppyclubOfficial",
        price: "0.65 ETH",
        time: "04h 20m 14s",
        avatars: [Img1GroupPlace, Img2GroupPlace, Img3GroupPlace],
    },
    {
        image: Img6Place,
        title: "LuppyclubOfficial",
        price: "0.65 ETH",
        time: "04h 20m 14s",
        avatars: [Img1GroupPlace, Img2GroupPlace, Img3GroupPlace],
    },
];

const MarketPlace = () => {

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
        ? cards
        : isMobile
            ? cards.slice(0, 1)
            : cards.slice(0, 6);
    return (
        <section className='main-container'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center sm:gap-4 gap-2'>
                    <h2 className='sm:text-[50px] text-[28px] font-bold leading-tight font-sora'>Market <span className='text-blue-600'>Place</span></h2>
                    <img src={Fire} alt='' className='sm:w-auto h-auto w-[28px] h-[28px]' />
                </div>
                {!showAll && (
                    <>
                        {/* Desktop Button */}
                        <div onClick={() => setShowAll(true)} className='sm:flex hidden gap-[10px] cursor-pointer'>
                            <span className='text-neutral-800 font-poppins text-lg font-semibold'>See All</span>
                            <div className='flex items-center justify-center'>
                                <img src={Arrow} alt="" />
                            </div>
                        </div>
                    </>
                )}
            </div>

            <div className="flex gap-4 overflow-x-auto py-2 sm:mt-[55px] mt-5">
                {categories.map((category, index) => {
                    return (
                        <button
                            key={index}
                            className="sm:px-[30px] px-5 sm:py-[18px] py-3 rounded-full sm:text-base text-sm font-poppins font-medium whitespace-nowrap border
                             hover:bg-blue-600 hover:text-white hover:border-transparent bg-white text-neutral-800 border-zinc-100"
                        >
                            {category}
                        </button>
                    );
                })}
            </div>
            <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-[70px] gap-5 sm:mt-[60px] mt-[30px]">
                {visibleItems.map((card, index) => (
                    <div
                        key={index}
                        className="bg-white py-5 px-5 rounded-xl shadow-lg group"
                    >
                        <div className="relative rounded-xl overflow-hidden mb-[14px]">
                            <Image
                                src={card.image}
                                alt={card.title}
                                className="w-[330px] h-[330px] object-cover"
                            />
                            <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-neutral-800 bg-opacity-90 text-white text-[16px] font-poppins font-medium px-[30px] py-[10px] rounded-full opacity-0 group-hover:opacity-100 transition">
                                View Now
                            </button>
                            <div className="absolute left-[18px] bottom-[22px] flex -space-x-2">
                                {card.avatars.map((avatar, i) => (
                                    <Image
                                        key={i}
                                        src={avatar}
                                        alt={`avatar-${i}`}
                                        className="w-[30px] h-[30px] rounded-full border-2 border-white"
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="bg-white text-neutral-800 px-5 py-[14px] rounded-xl hover:bg-neutral-800 hover:text-white group">
                            <h3 className="font-semibold text-lg font-poppins">{card.title}</h3>
                            <p className="text-[8px] font-normal font-poppins">Created by <span className='text-[8px] font-medium font-poppins text-orange-400'>Official</span></p>
                            <div className="flex justify-between items-center mt-2">
                                <div className="flex items-center gap-2 text-lg font-poppins font-normal">
                                    <Image src={NFT} width={16} height={16} alt='' className='rounded-full' />
                                    {card.price}
                                </div>
                                <div className="bg-blue-600 text-white text-[16px] font-medium font-poppins px-4 py-2 rounded-full">
                                    {card.time}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {!showAll && (
                <>
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
        </section>
    )
}

export default MarketPlace
