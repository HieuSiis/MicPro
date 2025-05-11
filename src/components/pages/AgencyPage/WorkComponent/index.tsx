import { ImgFrame490, ImgFrame494, ImgFrame495, ImgFrame496 } from 'assets/images/agency-page';
import Heading from 'components/ui/Heading'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const portfolioItems = [
    {
        category: "Mobile app, Weather, Software",
        title: <>Weather App UI Kit<br />- WETHY</>,
        description: "Hello Designers! This is the video calling website landing page design concept. Video calling software is very popular nowadays.",
        image: ImgFrame490
    },
    {
        category: "Web Design, Video call, Software",
        title: <>Video Calling Website<br />- Jabber</>,
        description: "WEATHY is a modern and clean mobile app project based on the weather app. The UI Kit gives you the necessary screens for creating stunning iOS screens and applying them to any weather app.",
        image: ImgFrame494
    },
    {
        category: "Web app, Software, Car Dashboard",
        title: <>Car Dashboard UI<br />Kit Design</>,
        description: "Motiv. is a Free Car Dashboard UI Kit Design of 20+ Free pixel-perfect screens and 60+ Components easy to use in Figma.",
        image: ImgFrame495
    },
    {
        category: "Web Design, Software",
        title: <>Video Editing Website<br />- Revise</>,
        description: "Hello Peoples! This is the Video Editing Website landing page design concept. Video editing is an essential part of a tech user.",
        image: ImgFrame496
    }
];

const WorkComponent = () => {
    return (
        <section className='main-container sm:pb-[120px] pb-[50px]'>
            <Heading className='sm:mb-[100px] mb-[30px]'>
                Our Team’s <span className='text-primary'>Work</span>
            </Heading>
            <div className='flex flex-col sm:gap-[100px] gap-[60px]'>
                {portfolioItems.map((item, index) => (
                    <div className='sm:flex grid grid-cols-1 items-center sm:odd:gap-[104px] odd:gap-[36px] sm:even:gap-[70px] even:gap-[30px] even:flex-row-reverse sm:even:text-right even:text-left group' key={index}>
                        <div>
                            <div className='text-dark1 text-base font-normal font-poppins mb-4 flex items-start gap-2 sm:group-even:justify-end'>
                                <span >{item.category}</span>
                            </div>
                            <h3 className='sm:font-bold font-sora sm:text-[34px] text-xl font-semibold sm:mb-8 mb-6 leading-snug'>
                                {item.title}
                            </h3>
                            <p className='text-gray17 sm:text-lg font-normal text-[14px] font-poppins leading-normal sm:mb-10 mb-5'>
                                {item.description}
                            </p>
                            <Link href={"#"} className='text-lg uppercase tracking-[10px]'>
                                <span className='block mb-4'>VIEW PORTFOLIO</span>
                                <div className='w-36 h-[2px] gradient-line sm:group-even:ml-auto'></div>
                            </Link>
                        </div>
                        <div className='w-full max-w-[700px] flex-shrink-0'>
                            <Image src={item.image} alt='' width={700} height={585} className=' object-cover'></Image>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default WorkComponent
