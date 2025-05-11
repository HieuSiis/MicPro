import { IArrow, IAuthority, IChampion, ITiming, ITraining } from 'assets/icons/sport-page'
import Heading from 'components/ui/Heading'
import React from 'react'

const cards = [
    {
        title: 'Training',
        icon: ITraining,
        bgIcon: 'bg-gradientPink',
        description: 'Content AI allows anyone to create custom tailored'
    },
    {
        title: 'Authority',
        icon: IAuthority,
        bgIcon: 'bg-gradientOrange',
        description: 'Content AI allows anyone to create custom tailored'
    },
    {
        title: 'Precision & timing',
        icon: ITiming,
        bgIcon: 'bg-gradientBlue',
        description: 'Content AI allows anyone to create custom tailored'
    },
    {
        title: 'Championship',
        icon: IChampion,
        bgIcon: 'bg-gradientRed',
        description: 'Content AI allows anyone to create custom tailored'
    }
]

const ServiceComponent = () => {
    return (
        <section className='main-container  rounded-2xl sm:py-[76px] py-10 sm:px-12 px-16 sm:mt-[51px] mt-5 bg-white'>
            <Heading className='sm:mb-[70px] mb-[30px]'>Let’s Check our <span className='text-primary'>service</span></Heading>

            <div className="grid sm:grid-cols-4 grid-cols-1 gap-8">
                {cards.map((item, index) => (
                    <div key={index} className='bg-white p-5 border border-grayF2 rounded-xl'>
                        <div className={`rounded-full w-[88px] h-[88px] mb-5 ${item.bgIcon} flex items-center justify-center`}>
                            <img src={item.icon} alt="" />
                        </div>
                        <h3 className="text-xl font-sora font-semibold mb-[10px]">
                            {item.title}
                        </h3>
                        <p className='text-base font-poppins max-w-[215px] font-normal text-dark1 leading-6'>{item.description}</p>
                        <button className='flex gap-1 justify-center text-base font-inter font-semibold mt-4'>Learn More <img src={IArrow} alt="" /></button>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ServiceComponent
