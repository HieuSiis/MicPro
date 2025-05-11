import React from 'react'
import RadiusButton from 'components/ui/Button/RadiusButton'
import Image from 'next/image'
import { Tooth } from 'assets/icons/dental-page'
import { CheckGradientBlue, CheckGradientBlueDark, CheckGradientOrange, CheckGradientPurple, CheckGradientRed } from 'assets/icons/check-icons'
import { DentistBlue, DentistDo } from 'assets/images/dental-page'

const overviews = [
    {
        title: 'Dental Health is Our Top Priority',
        description: 'Esteem spirit temper too say adieus who direct esteem. It esteems luckily or picture placing drawing.',
        img: DentistDo,
        lists: [
            {
                icon: CheckGradientOrange,
                description: 'Apartments frequently or motionless.'
            },
            {
                icon: CheckGradientBlue,
                description: 'Voluptatem quia voluptas sit aspernatur.'
            }
        ]
    },
    {
        title: 'A healthy smile is a happy smile',
        description: 'our mission is to provide our patients with the highest quality dental care in a comfortable and welcoming environment.',
        img: DentistBlue,
        lists: [
            { icon: CheckGradientOrange, description: 'Skilled Dentist' },
            { icon: CheckGradientBlue, description: 'Patients Value' },
            { icon: CheckGradientRed, description: 'Affortable Costs' },
            { icon: CheckGradientPurple, description: 'Latest Technologies' },
            { icon: CheckGradientBlueDark, description: 'Comfortable & Friendly' }
        ]
    }
]
const DentalOverview = () => {
    return (
        <section className='main-container'>
            <div className='flex flex-col gap-[140px]'>
                {overviews.map((item, index) => (
                    <div key={index} className='flex sm:flex-row flex-col items-center justify-center odd:gap-[30px] sm:even:gap-[60px] even:gap-0 sm:even:flex-row-reverse group'>
                        <div>
                            <h2 className='max-w-[520px] sm:text-[50px] text-[28px] text-dark font-bold leading-tight font-sora sm:mb-[30px] mb-5'>{item.title}</h2>
                            <p className='text-dark1 font-poppins sm:font-normal font-medium sm:text-xl text-base sm:group-odd:max-w-[400px] group-odd:max-w-[327px] sm:group-even:max-w-[520px] group-even:max-w-[327px]'>{item.description}</p>

                            <div className='flex flex-col sm:py-[50px] py-[30px] gap-[18px]'>
                                {item.lists.map((item, index) => (
                                    <div key={index} className='flex gap-[10px]'>
                                        <img src={item.icon} alt="" />
                                        <p className='font-poppins sm:group-odd:text-lg group-odd:text-sm group-odd:font-normal group-odd:text-dark1 group-even:text-dark sm:group-even:font-semibold group-even:font-normal sm:group-even:text-xl group-even:text-sm'>{item.description}</p>
                                    </div>
                                ))}

                            </div>
                            <RadiusButton className='text-white bg-blue-600 group-even:hidden'>Get Started</RadiusButton>
                        </div>
                        <div className=''>
                            <Image src={item.img} alt='' className='rounded-tl-[50px] rounded-br-[50px] relative' />
                            <div className='absolute sm:-translate-x-24 -translate-y-24 flex flex-col items-center p-4 bg-white rounded-lg group-even:hidden shadow-md'>
                                <div className='flex mb-4 font-poppins text-base font-medium items-center justify-center w-[60px] h-[60px] bg-orange-50 rounded-full'>
                                    <img src={Tooth} alt="" />
                                </div>
                                <h5 className='text-neutral-800'>Operation</h5>
                                <p className='text-slate-500'>Let’s start Process</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>



        </section>
    )
}

export default DentalOverview
