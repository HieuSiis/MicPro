import Heading from 'components/ui/Heading'
import React from 'react'
import Image from 'next/image'
import { ICalendar, IClock, ICoin, IGroup } from 'assets/icons/education-page'


const Items = [
    {
        icon: IGroup,
        bgIcon: 'bg-primary',
        title: 'One-by one Teaching',
        description: 'All of our special education experts have a degree in special education'

    },
    {
        icon: IClock,
        bgIcon: 'bg-orange-500',
        title: '24/7 Tutor Availability',
        description: 'All of our special education experts have a degree in special education'
    },
    {
        icon: ICalendar,
        bgIcon: 'bg-pink-400',
        title: 'Interactive WhiteBook',
        description: 'All of our special education experts have a degree in special education'
    },
    {
        icon: ICoin,
        bgIcon: 'bg-red-500',
        title: 'Affordable Prices',
        description: 'All of our special education experts have a degree in special education'
    }
]
const DifferenceComponent = () => {
    return (
        <section className='l-container sm:py-[100px] py-[70px]'>
            <Heading>A Choice That Makes The <span className='text-primary'>Difference</span></Heading>
            <div className="flex sm:flex-row flex-col items-center justify-center gap-[22px] sm:mt-[42px] mt-[30px] ">
                {Items.map((item, index) => (
                    <div className="flex flex-col rounded-xl py-5 px-4 border border-zinc-100 hover:shadow-lg">
                        <div className={`flex shadow-lg items-center justify-center w-[64px] h-[64px] rounded-xl  ${item.bgIcon}`}>
                            <Image src={item.icon} alt="" width={34} height={34} />
                        </div>
                        <h5 className='text-xl font-sora font-semibold mt-5 mb-[14px]'>{item.title}</h5>
                        <p className='text-dark1 text-sm font-normal font-inter max-w-[237px]'>{item.description}</p>
                    </div>
                ))}

            </div>
        </section>
    )
}

export default DifferenceComponent
