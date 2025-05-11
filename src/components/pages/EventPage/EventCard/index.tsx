import Heading from 'components/ui/Heading'
import React from 'react'
import Image from 'next/image'
import { Card1, Card2, Card3 } from 'assets/images/event-page'

const eventCards = [
    {
        title: 'In Person events',
        description: 'Go beyond webinars and workshop',
        bgCard: 'bg-gradientPinkEvent',
        img: Card1
    },
    {
        title: 'Virtual Events',
        description: 'Go beyond webinars and workshop',
        bgCard: 'bg-gradientBlueEvent',
        img: Card2
    },
    {
        title: 'Design events',
        description: 'Go beyond webinars and workshop',
        bgCard: 'bg-gradientOrangeEvent',
        img: Card3
    }
]
const EventCard = () => {
    return (
        <section className='main-container sm:py-[70px] py-10'>
            <Heading className='sm:max-w-[720px] max-w-[3270px] sm:mb-20 mb-10'>The simplest way to host all your <span className='text-primary'>events</span></Heading>
            <div className='flex sm:flex-row flex-col items-center justify-center gap-[30px]'>
                {eventCards.map((item, index) => (
                    <div key={index} className={`flex flex-col justify-center items-center py-[30px] sm:px-10 px-5 ${item.bgCard} rounded-[20px]`}>
                        <h3 className='text-white font-sora text-[34px] font-bold mb-4'>{item.title}</h3>
                        <p className='text-[16px] font-poppins font-normal mb-[26px] text-white'>{item.description}</p>
                        <button className='bg-white text-base text-primary font-poppins font-medium py-3 px-[50px] rounded-full mb-4'>
                            Get Ticket
                        </button>

                        <Image src={item.img} alt='' className='w-[244px] h-[162px] overflow-hidden rounded-[10px]' />

                    </div>
                ))}

            </div>
        </section>
    )
}

export default EventCard
