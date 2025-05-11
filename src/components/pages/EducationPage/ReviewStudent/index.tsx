import React from 'react'
import Image from 'next/image';
import { StarFilled } from '@ant-design/icons';
import { Avatar1, Avatar2, Avatar3 } from 'assets/images/ai-page';

const testimonials = [
    {
        name: "Sarah Rose",
        role: "Co- Founder of Web Design",
        avatar: Avatar1,
        content:
            "The ChatBot platform has become a key part of our proposition. It's fully flexible and has allowed us to drive 30% more leads while dramatically reducing our cost to serve.",
    },
    {
        name: "Meghan Scutt",
        role: "Co- Founder of Vector CX",
        avatar: Avatar2,
        content:
            "The ChatBot platform has become a key part of our proposition. It's fully flexible and has allowed us to drive 30% more leads while dramatically reducing our cost to serve.",
    },
    {
        name: "Valentina",
        role: "Founder of Web UI",
        avatar: Avatar3,
        content:
            "The ChatBot platform has become a key part of our proposition. It's fully flexible and has allowed us to drive 30% more leads while dramatically reducing our cost to serve.",
    },
];

const ReviewStudent = () => {
    return (
        <section className="sm:main-container mobile-container bg-gradientCarousel sm:mt-20 mt-[50px] sm:p-[70px] px-4 py-6 rounded-2xl">
            <h3 className="text-white sm:text-[34px] text-xl font-sora sm:font-bold font-semibold sm:mb-[50px] mb-5 text-center">
                What our Student Say
            </h3>
            <div className='overflow-x-auto'>
                <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-[30px] gap-3">
                    {testimonials.map((item, index) => (
                        <div key={index} className="bg-white rounded-md shadow-sm sm:p-[29px] p-5 flex flex-col justify-between sm:max-w-[370px] max-w-[295px] h-full">
                            <div className="flex gap-1 mb-[30px]">
                                {Array(5).fill(0).map((item, index) => (
                                    <div key={index} className="text-starYellow mt-1 text-sm"><StarFilled /></div>
                                ))}
                            </div>
                            <p className="text-dark1 sm:max-w-[314px] max-w-[242px] sm:text-sm text-xs font-poppins font-normal">
                                {item.content}
                            </p>

                            <div className="flex items-center gap-3 mt-6">

                                <Image
                                    src={item.avatar}
                                    alt={item.name}
                                    width={40}
                                    height={40}
                                    className="rounded-full"
                                />
                                <div className='font-poppins'>
                                    <p className="font-semibold text-dark sm:text-base text-sm">{item.name}</p>
                                    <p className="sm:text-sm text-xs text-dark1">{item.role}</p>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>

        </section>
    )
}

export default ReviewStudent
