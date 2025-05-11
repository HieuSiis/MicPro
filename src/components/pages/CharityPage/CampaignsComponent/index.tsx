import React from 'react'
import Image from "next/image";

import Heading from 'components/ui/Heading';
import RadiusButton from 'components/ui/Button/RadiusButton';
import { Img, Img1, Img2 } from 'assets/images/charity-page';
import { Arrow } from 'assets/icons';

const articles = [
    {
        id: 1,
        category: "Donation",
        categoryColor: "text-sky-600 bg-indigo-50",
        title: "Why Are Forest So Important For Earth?",
        image: Img,
    },
    {
        id: 2,
        category: "Donation",
        categoryColor: "text-orange-400 bg-orange-50",
        title: "What To Donate To A Food Bank & What To Avoid.",
        image: Img1,
    },
    {
        id: 3,
        category: "Donation",
        categoryColor: "text-rose-400 bg-pink-50",
        title: "What To Donate To A Food Bank & What To Avoid.",
        image: Img2,
    },
];

const CampaignsComponent = () => {
    return (
        <section className="main-container sm:mt-[130px] mt-[70px]">
            <Heading className='sm:max-w-[672px] max-w-[272px] mb-[83px]'> Latest News & <span className="text-blue-500">Campaigns</span></Heading>

            {/* Articles Grid */}
            <div className="grid md:grid-cols-3 sm:gap-[74px] gap-6">
                {articles.map((article) => (
                    <div key={article.id} className="">
                        <p
                            className={`inline-block px-3 py-1 text-[16px] font-poppins font-normal rounded-md ${article.categoryColor}`}
                        >
                            {article.category}
                        </p>
                        <h3 className="mt-4 mb-8 text-xl sm:max-w-[298px] max-w-[311px] font-sora font-semibold text-gray-800">
                            {article.title}
                        </h3>
                        <div className="relative w-full h-56 rounded-lg overflow-hidden shadow-md">
                            <Image
                                src={article.image}
                                alt={article.title}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>


                    </div>
                ))}
            </div>

            {/* Button */}
            <div className="flex items-center gap-6 justify-center">
                <RadiusButton className='font-normal bg-primary text-white rounded-lg sm:mt-[70px] mt-[30px]'>VIEW ALL ARTICLES <Image src={Arrow} alt='' width={24} height={24}></Image> </RadiusButton>
            </div>
        </section>
    )
}

export default CampaignsComponent
