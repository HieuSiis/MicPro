import Heading from 'components/ui/Heading'
import Image from 'next/image'
import React from 'react'

import { Fb, Instagram, LinkedIn, Twitter } from 'assets/icons';
import { ImgPerson1, ImgPerson2, ImgPerson3, ImgPerson4, ImgPerson5, ImgPerson6 } from 'assets/images/agency-page';

const teams = [
    {
        name: 'STEVE THOMAS',
        role: 'WEB DEVELOPER',
        icon: [Fb, Twitter, LinkedIn, Instagram],
        img: ImgPerson1
    },
    {
        name: 'STEVE THOMAS',
        role: 'WEB DEVELOPER',
        icon: [Fb, Twitter, LinkedIn, Instagram],
        img: ImgPerson2
    },
    {
        name: 'STEVE THOMAS',
        role: 'WEB DEVELOPER',
        icon: [Fb, Twitter, LinkedIn, Instagram],
        img: ImgPerson3
    },
    {
        name: 'STEVE THOMAS',
        role: 'WEB DEVELOPER',
        icon: [Fb, Twitter, LinkedIn, Instagram],
        img: ImgPerson4
    },
    {
        name: 'STEVE THOMAS',
        role: 'WEB DEVELOPER',
        icon: [Fb, Twitter, LinkedIn, Instagram],
        img: ImgPerson5
    },
    {
        name: 'STEVE THOMAS',
        role: 'WEB DEVELOPER',
        icon: [Fb, Twitter, LinkedIn, Instagram],
        img: ImgPerson6
    }
]

const TeamComponent = () => {
    return (
        <section className='sm:pb-[120px] pb-[60px]'>
            <div className='sm:main-container mobile-container'>
                <Heading className='sm:mb-[30px] mb-6'>Our Creative <span className='text-primary'>Team</span></Heading>
                <p className='text-center text-dark1 font-poppins sm:max-w-[481px] max-w-[327px] mx-auto sm:mb-[70px] mb-12'>Flowgiri is a creative and modern theme for startups, freelancers and creatives. </p>
                <div className='grid sm:grid-cols-3 grid-cols-1 gap-12 max-w-[1075px] mx-auto'>
                    {teams.map((item, index) => (
                        <div key={index} className='w-full h-[385px] relative rounded-full group'>
                            <div className="overlay absolute inset-0 z-10 bg-primary flex flex-col items-center justify-center p-2 bg-opacity-80 rounded-full text-white opacity-0 invisible transition-all group-hover:opacity-100 group-hover:visible">
                                <h4 className='text-xl font-semibold font-poppins'>{item.name}</h4>
                                <p className='text-sm'>{item.role}</p>
                                <div className='flex space-x-2 mt-5'>
                                    {item.icon.map((item, index) => (
                                        <img key={index} src={item} alt="" />
                                    ))}
                                </div>
                            </div>
                            <Image src={item.img} alt='' fill className='w-full h-full object-cover rounded-full'></Image>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default TeamComponent
