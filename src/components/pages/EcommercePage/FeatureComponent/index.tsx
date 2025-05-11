import { AppMarket, MoB, OntimeSp } from 'assets/images/ecommerce-page';
import Image from 'next/image';
import React from 'react'

const features = [
    {
        title: "Onetime Support",
        description: "Find your place with an immersive photo experience and the most listings, including things",
        icon: OntimeSp,
    },
    {
        title: "App Market",
        description: "No matter what path you take to sell your home, we can help you navigate a successful",
        icon: AppMarket,
    },
    {
        title: "Manage on Mobile",
        description: "We’re creating a seamless online experience – from shopping on the largest rental network",
        icon: MoB,
    },
];

const FeatureComponent = () => {
    return (
        <section className="bg-[#f4f8fc] sm:py-[70px] py-[60px] sm:px-[135px] px-5">
            <div className="mx-auto grid grid-cols-1 sm:grid-cols-3 sm:gap-[30px] gap-6">
                {features.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white py-12 sm:px-8 p-4 rounded-xl max-w-[370px] shadow-sm flex flex-col items-center text-center transition hover:shadow-md"
                    >
                        <Image src={item.icon} alt={item.title} className="mb-5" />
                        <h3 className="text-[28px] font-sora font-bold mb-7">{item.title}</h3>
                        <p className="text-gray-500 text-xl font-poppins font-normal mb-8 max-w-[302px]">{item.description}</p>
                        <button
                            className='px-9 py-4 rounded-md font-semibold text-lg font-manrope bg-white text-black border hover:bg-primary hover:text-white'
                        >
                            Learn More
                        </button>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FeatureComponent
