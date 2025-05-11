import Heading from 'components/ui/Heading'
import React from 'react'

import Image from 'next/image'
import { ChickenGrill, Lunch, SpicyClub, SpicySalad } from 'assets/images/restaurant-page';

const menuItems = [
    {
        name: 'Spicy Club',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu.',
        price: 42,
        image: SpicyClub,
    },
    {
        name: 'Spicy Salad',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu.',
        price: 42,
        image: SpicySalad,
    },
    {
        name: 'Chicken Grill',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu.',
        price: 42,
        image: ChickenGrill,
    },
];

const OfferComponent = () => {
    return (
        <section className='main-container sm:mt-[120px] mt-[60px]'>
            <Heading>Get The Best <span className='text-primary'>Offer</span></Heading>
            <p className='text-dark1 sm:max-w-[553px] max-w-[317px] sm:text-xl text-sm font-poppins font-normal sm:mt-6 mt-5 mx-auto text-center'>Eat the food you dream about at affordable prices. No need to come to us just call is.</p>
            <div className="flex sm:flex-row flex-col justify-center items-center sm:mt-20 mt-10 font-inter">
                <div className="relative sm:rounded-r-none rounded-2xl overflow-hidden sm:mr-4 mr-0">
                    <Image
                        src={Lunch}
                        alt="Lunch Promo"
                        className="h-[428px] object-cover object-left"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20 flex flex-col justify-center sm:px-[50px] px-[30px]  text-white">
                        <h2 className="text-2xl font-semibold mb-1">Lunch Time</h2>
                        <div className="flex items-baseline font-medium">
                            <span className="text-7xl text-blue-600  italic">30%</span>
                            <span className="ml-3 text-xl">OFF</span>
                        </div>
                        <p className="text-base mt-2 mb-10 w-[220px] leading-7 font-normal">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <button className="bg-primary w-[130px] text-white px-4 py-3 rounded-full text-sm hover:bg-blue-600 transition">
                            Order Now
                        </button>
                    </div>
                </div>

                <div className="flex flex-col gap-3 sm:mt-0 mt-[14px]">
                    {menuItems.map((item, index) => (
                        <div key={index} className="flex items-center bg-bgWhiteFC rounded-lg px-1 py-2">
                            <div className="">
                                <Image src={item.image} alt={item.name} className='sm:rounded-none rounded-lg' />
                            </div>
                            <div className="flex-1 ml-3">
                                <div className="flex flex-row justify-between">
                                    <h3 className="font-semibold sm:text-2xl text-xl mb-[15px]">{item.name}</h3>
                                    <div className="text-2xl mr-3">
                                        <span className="text-primary font-normal italic">$ </span>
                                        <span className="text-primary font-semibold">{item.price}</span>
                                    </div>
                                </div>
                                <p className="sm:text-base text-[12px] text-dark1 sm:max-w-[412px]">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OfferComponent
