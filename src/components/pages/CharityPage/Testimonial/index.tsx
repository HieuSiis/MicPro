import Heading from 'components/ui/Heading'
import React from 'react'

import Image from 'next/image'
import { Avt1, Avt2, Avt3 } from 'assets/images/charity-page';

const testimonials = [
    {
        id: 1,
        imageSrc: Avt1,
        content: "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
        author: "Joe Root",
        position: "Head of Design at AMA"
    },
    {
        id: 2,
        imageSrc: Avt2,
        content: "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
        author: "Billy Root",
        position: "Web Designer at AMA"
    },
    {
        id: 3,
        imageSrc: Avt3,
        content: "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
        author: "Sarah Root",
        position: "UI Designer at AMA"
    }
];

const Testimonial = () => {
    return (
        <section className='main-container'>
            <Heading>Our <span className='text-primary'>Testimonial</span></Heading>
            <p className='text-dark1 sm:text-xl text-[16px] font-normal font-poppins mt-5 sm:max-w-[653px] max-w-[306px] mx-auto text-center'>Read and understand our testimonial and know what people say</p>
            <div className="flex sm:flex-row flex-col items-center justify-center sm:gap-5 gap-[30px] sm:mt-20 mt-[30px]">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className='flex flex-col items-center border border-grayEB rounded-lg sm:px-10 px-[15px] sm:py-10 py-[30px] '>
                        <Image src={testimonial.imageSrc} alt='' className='mb-6'></Image>
                        <p className='text-[16px] font-normal font-poppins space-y-6 w-[286px] text-center mb-5'>{testimonial.content}</p>
                        <div className='border border-orange-400 w-[120px] mt-5'></div>
                        <h5 className='text-xl font-sora font-semibold mt-5'>{testimonial.author}</h5>
                        <span className='text-sm font-poppins font-normal mt-1 text-dark1'>{testimonial.position}</span>
                    </div>
                ))}

            </div>
        </section>
    )
}

export default Testimonial
