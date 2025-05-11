import React from 'react'
import RadiusButton from 'components/ui/Button/RadiusButton'
import Image from 'next/image'
import { StarFilled } from '@ant-design/icons'
import { Call, Doctor, Tap, Tooth } from 'assets/icons/dental-page'
import { SparkleBlue } from 'assets/icons'
import { DoctorGroup, ImgBg } from 'assets/images/dental-page'

const cards = [
    {
        icon: Tap,
        bgIcon: 'bg-orange-50',
        title: 'Easy to use',
        description: 'An easy-to-use online directory that lets you search and filter'
    },
    {
        icon: Call,
        bgIcon: 'bg-blue-50',
        title: 'Free support',
        description: 'On what matters most Free matching support an optional'
    },
    {
        icon: Doctor,
        bgIcon: 'bg-indigo-50',
        title: 'Online care',
        description: 'One-to-one matching experience to support you'
    }
]

const HeroComponent = () => {
    return (
        <section>
            <div className='l-container'>
                <div className='flex sm:flex-row flex-col sm:gap-3 gap-9'>
                    <div className="flex sm:items-start items-center flex-col">
                        <div className='flex sm:max-w-[330px] max-w-[153px] sm:py-4 py-1 sm:px-5 px-3 rounded-full bg-orange-50 sm:gap-5 gap-2'>
                            <img src={Tooth} alt="" className='sm:w-[28px] sm:h-[30px] w-3 h-[13px]' />
                            <h5 className='text-orange-400 font-sora sm:text-xl text-[9px] sm:font-semibold font-normal'>Award Winning Dentist</h5>
                        </div>
                        <h1 className='relative font-sora sm:text-start text-center sm:max-w-[613px] max-w-[327px] font-extrabold sm:text-6xl text-[34px] leading-tight sm:mt-[30px] mt-[14px]'>
                            Smile Brighter with Our <span className='text-gradient'>Professional</span> Dental Services
                        </h1>
                        <img src={SparkleBlue} alt="" className='w-6 h-6 text-center sm:block hidden mx-auto mb-[10px]' />
                        <div className="font-poppins sm:max-w-[612px] max-w-[327px] sm:text-start text-center font-normal text-xl text-neutral-800 sm:mt-0 mt-5">
                            Our team of skilled dentists and dental professionals are dedicated to providing you with comprehensive and personalized dental care.
                        </div>
                        <div className='flex flex-wrap sm:mt-11 mt-6 sm:gap-[30px] gap-y-6 gap-x-[30px] justify-center'>
                            <RadiusButton className='bg-blue-600 text-white font-poppins text-base font-medium'>Book An Appointment</RadiusButton>
                            <div className="flex flex-col">
                                <h3 className='font-sora text-[34px] font-bold mb-[10px]'>100+</h3>
                                <p className='text-slate-500 font-poppins text-[16px] font-medium'>Dentist Doctors</p>
                            </div>
                            <div className="flex flex-col">
                                <h3 className='font-sora text-[34px] font-bold mb-[10px]'>40k+</h3>
                                <p className='text-slate-500 font-poppins text-[16px] font-medium'>Patient Treatment</p>
                            </div>
                        </div>
                    </div>
                    <Image src={ImgBg} alt='' width={571} height={681} className='relative ' />
                    <div className='absolute top-1/4 right-1/3 translate-x-14 sm:flex hidden flex-col items-center p-4 bg-white rounded-lg'>
                        <div className='flex mb-4 font-poppins text-[16px] font-medium items-center justify-center w-[60px] h-[60px] bg-orange-50 rounded-full'>
                            <img src={Tooth} alt="" />
                        </div>
                        <h5 className='text-neutral-800'>Micpro</h5>
                        <p className='text-slate-500'>Dental Care Clinic</p>
                    </div>
                    <div className='absolute bottom-1/4 right-1/4 translate-x-60 translate-y-52 sm:flex hidden items-center justify-center bg-white rounded-full w-20 h-20'>
                        <img src={Tooth} alt="" className='w-10 h-10' />
                    </div>
                    <div className='absolute sm:block hidden right-1/4 bottom-1/3 translate-x-80 translate-y-5 bg-white p-3 rounded-lg'>
                        <h3 className='text-black font-poppins text-sm font-normal'>Our Smile Patient</h3>
                        <div className="flex justify-center items-center gap-2">
                            <Image src={DoctorGroup} alt='' />

                            <div className="flex gap-1">
                                {Array(5).fill(0).map((item, index) => (
                                    <div key={index} className="text-starYellow mt-1 text-sm"><StarFilled /></div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className='main-container bg-white sm:rounded-3xl rounded-none sm:p-[60px] py-[30px] px-6'>
                <div className='flex sm:flex-row flex-col sm:gap-[30px] gap-5'>
                    {cards.map((item, index) => (
                        <div key={index} className='bg-white border border-slate-100 hover:shadow-md rounded-lg py-[30px] px-11'>
                            <div className={`flex justify-center items-center ${item.bgIcon} w-20 h-20 rounded-lg  mb-5`}>
                                <Image src={item.icon} alt="" width={50} height={50} />
                            </div>
                            <h4 className='text-neutral-800 text-[28px] font-sora font-bold mb-4'>{item.title}</h4>
                            <p className='text-[16px] font-poppins font-normal text-slate-500 w-[260px]'>{item.description}</p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default HeroComponent
