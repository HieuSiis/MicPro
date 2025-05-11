import { Chemistry, Person, Pharmacy, Siren, Tomography, ToothBlue } from 'assets/icons/dental-page'
import Heading from 'components/ui/Heading'
import React from 'react'

const services = [
    {
        icon: Person,
        title: 'Anti Wrinkle',
        description: 'Ease your pain and soothe your joints.'
    },
    {
        icon: Chemistry,
        title: 'Laboratory',
        description: 'Ease your pain and soothe your joints.'
    },
    {
        icon: ToothBlue,
        title: 'Smile Makeover',
        description: 'Ease your pain and soothe your joints.'
    },
    {
        icon: Tomography,
        title: 'Radiology',
        description: 'Ease your pain and soothe your joints.'
    },
    {
        icon: Siren,
        title: 'Emergency Care',
        description: 'Ease your pain and soothe your joints.'
    },
    {
        icon: Pharmacy,
        title: 'Emergency Care',
        description: 'Ease your pain and soothe your joints.'
    },
]
const ServicesComponent = () => {
    return (
        <section className='main-container sm:py-[140px] py-[70px]'>
            <Heading className='sm:max-w-[758px] max-w-[327px]'>Smile Confidently with Our Dental <span className='text-primary'>Services</span></Heading>
            <p className='sm:max-w-[596px] max-w-[300px] text-dark1 font-poppins font-normal sm:text-xl text-base mx-auto text-center sm:mt-[30px] mt-5'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>

            <div className='grid sm:grid-cols-3 justify-items-center grid-cols-1 gap-x-[105px] gap-y-[50px] sm:mt-[86px] mt-12'>
                {services.map((item, index) => (
                    <div key={index} className='flex flex-col sm:items-start items-center'>
                        <div className='flex mb-6 items-center justify-center bg-sky-50 rounded-lg w-[84px] h-[84px]'>
                            <img src={item.icon} alt="" />
                        </div>
                        <h4 className='font-sora text-[28px] font-bold text-dark mb-2'>{item.title}</h4>
                        <p className='font-poppins text-[16px] font-medium text-dark1'>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ServicesComponent
