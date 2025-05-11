import Heading from 'components/ui/Heading'
import React from 'react'
import Image from 'next/image'
import { StarFilled } from '@ant-design/icons'
import RadiusButton from 'components/ui/Button/RadiusButton'
import { Doctor1, Doctor2, Doctor3 } from 'assets/images/dental-page'
import Arrow from 'assets/images/nft-page/arrow-gray.svg';

const specialists = [
    {
        img: Doctor1,
        name: 'Dr. Melissa Smith',
        rating: 4.8,
        numberOfReviews: 252,
        position: 'Dental'
    },
    {
        img: Doctor2,
        name: 'Dr. Melissa Smith',
        rating: 4.8,
        numberOfReviews: 252,
        position: 'Dental'
    },
    {
        img: Doctor3,
        name: 'Dr. Melissa Smith',
        rating: 4.8,
        numberOfReviews: 252,
        position: 'Dental'
    },
]

const SpecialistComponent = () => {
    return (
        <section className='main-container'>
            <Heading>Our Dental <span className='text-primary'>Specialist</span></Heading>
            <p className='sm:max-w-[509px] max-w-[300px] text-dark1 font-poppins font-normal sm:text-xl text-base mx-auto text-center mt-6'>Clinical excellence must be the priority for any health care service provider.</p>
            <div className="flex sm:flex-wrap overflow-auto items-center mt-[57px] sm:gap-10 gap-5 whitespace-nowrap">
                {specialists.map((item, index) => (
                    <div key={index} className="flex flex-shrink-0 flex-col items-center justify-center border border-zinc-100 p-5 rounded-[10px] sm:max-w-[360px] max-w-[327px]">
                        <Image src={item.img} alt='' className='bg-slate-50 rounded-[10px]' />
                        <h5 className='mt-[15px] font-sora text-xl font-semibold'>{item.name}</h5>
                        <div className="flex gap-[14px] py-5">
                            <button className='text-blue-600 font-poppins text-sm py-[10px] px-5 bg-slate-50 rounded-[10px]'>
                                {item.position}
                            </button>
                            <div className='flex items-center gap-1'>
                                <StarFilled className='text-amber-400 ' />
                                <div className='font-poppins text-sm font-semibold text-blue-950'>{item.rating} <span className='text-slate-500'>({item.numberOfReviews})</span></div>
                            </div>
                        </div>
                        <RadiusButton className='text-white bg-blue-600'>Appointment</RadiusButton>
                    </div>
                ))}

            </div>
            <div className='flex sm:hidden justify-center mt-[30px] gap-[10px] cursor-pointer'>
                <span className='text-neutral-800 font-poppins text-lg font-semibold'>See All</span>
                <div className='flex items-center justify-center'>
                    <img src={Arrow} alt="" />
                </div>
            </div>
        </section>
    )
}

export default SpecialistComponent
