import Image from 'next/image'
import React from 'react'
import RadiusButton from 'components/ui/Button/RadiusButton'
import { Play } from 'assets/icons'
import { Board, Books, Light, Std1, Std2, Std3, Std4 } from 'assets/images/education-page'

const ImgStudents = [{ img: Std1 }, { img: Std2 }, { img: Std3 }, { img: Std4 }]

const HeroComponent = () => {

    return (
        <section className=''>


            <div className="l-container">

                <h1 className='max-w-[782px] mx-auto font-sora font-extrabold sm:text-6xl text-[34px] text-center leading-snug sm:mb-[30px] mb-5'>
                    Welcome to the World of <div className='flex justify-center'><span className='text-gradient'>Knowledge  </span> <img src={Light} alt="" /></div>
                </h1>

                <div className='flex items-center sm:justify-between justify-center sm:text-xl text-sm font-poppins font-normal mb-12'>
                    <img src={Books} alt="" className='sm:block hidden' />
                    <span className='sm:max-w-[610px] max-w-[285px] text-center'>Lets explore new ideas, knowledge and experiences together with a beautiful teacher and enjoy it!</span>
                    <img src={Board} alt="" className='sm:block hidden' />
                </div>

                <div className="flex sm:flex-row flex-col items-center gap-6 justify-center">
                    <RadiusButton className='text-white bg-blue-600'>Get Started</RadiusButton>
                    <RadiusButton className=''>
                        <div className='flex items-center justify-center bg-primary bg-opacity-10 w-12 h-12 rounded-full'>
                            <Image src={Play} alt='' width={24} height={24}></Image>
                        </div>
                        Watch Video
                    </RadiusButton>
                </div>
                <div className="flex justify-center items-start sm:gap-8 gap-[10px]">
                    {ImgStudents.map((item, index) => (
                        <Image
                            key={index}
                            src={item.img}
                            alt={`Student ${index + 1}`}
                            className={`object-cover rounded-full transition-transform duration-300 sm:w-[252px] sm:h-[384px] w-[74px] h-[113px] ${index === 1 || index === 2 ? 'sm:mt-[90px] mt-[26px]' : 'mt-0'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HeroComponent
