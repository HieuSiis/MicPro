import Heading from 'components/ui/Heading'
import Image from 'next/image'
import React from 'react'
import { StarFilled } from '@ant-design/icons'
import { Ben, Julita, Matthias } from 'assets/images/dental-page'
import Arrow from 'assets/images/nft-page/arrow-gray.svg';

const patients = [
    {
        avatar: Julita,
        name: 'Julita Czyżewska',
        position: 'CEO, PZU Zdrowie',
        review: 'We highly appreciate the quality of Infermedica’s technology, ease of deployment and the outstanding ability to'
    },
    {
        avatar: Matthias,
        name: 'Dr. Matthias Kuss',
        position: 'Head of Health Innovation',
        review: 'Throughout our engagement we continue to be impressed with Infermedica’s involvement and the level of provided'
    },
    {
        avatar: Ben,
        name: 'Ben Rosner',
        position: 'CMIO, Get Well Network',
        review: 'Infermedica beats out other “elephants in the room” such as IBM Watson. Throughout our engagement we continue to be'
    }
]
const PatientsComponent = () => {
    return (
        <section className='bg-slate-100 sm:h-[721px] h-[1350px] sm:mt-[78px] mt-[60px] sm:py-[70px] py-[50px] sm:px-[135px] px-6'>
            <Heading className=''>Our thousand of smile <span className='text-primary'>patients</span></Heading>
            <p className='max-w-[623px] text-dark1 font-poppins font-normal sm:text-xl text-base mx-auto text-center sm:mt-6 mt-5'>Join thousands of other patients who have transformed their smiles through Laser vision correction.</p>
            <div className="overflow-x-auto">
                <div className='flex sm:flex-row flex-col mt-[70px] sm:gap-[50px] gap-5'>
                    {patients.map((item, index) => (
                        <div key={index} className=' bg-white sm:py-[30px] py-6 sm:px-12 px-6 rounded-[20px]'>
                            <div className="flex items-center sm:gap-6 gap-4">
                                <Image src={item.avatar} alt='' width={76} height={76} className='rounded-full' />
                                <div>
                                    <h5 className='sm:font-sora font-poppins sm:text-xl text-lg text-dark font-semibold'>{item.name}</h5>
                                    <p className='sm:text-base text-sm text-dark1 font-poppins font-normal'>{item.position}</p>
                                </div>
                            </div>
                            <div className="flex gap-3 sm:mt-10 mt-5 sm:mb-[30px] mb-[15px]">
                                {Array(5).fill(0).map((item, index) => (
                                    <div key={index} className="text-starYellow text-xl"><StarFilled /></div>
                                ))}
                            </div>
                            <p className='sm:w-[400px] w-[294px] text-dark1 font-poppins font-normal sm:text-lg text-base'>{item.review}</p>
                        </div>
                    ))}

                </div>
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

export default PatientsComponent
