import Heading from 'components/ui/Heading'
import React from 'react'
import Image from 'next/image'
import { Crispy, ExqRecipe, Pasta } from 'assets/images/restaurant-page'
const listFood = [
    {
        ImgSrc: ExqRecipe,
        title: "Exquisite Recipe",
        desc: "Phasollus risus turpis sit arnot magna non."
    },
    {
        ImgSrc: Crispy,
        title: "Crispy Baked",
        desc: "Phasollus risus turpis sit arnot magna non."
    },
    {
        ImgSrc: Pasta,
        title: "Pasta Recipe",
        desc: "Phasollus risus turpis sit arnot magna non."
    }
]
const FeaturesComponent = () => {
    return (
        <section className='main-container sm:mt-[120px] mt-[60px]'>
            <Heading>Our Special <span className='text-primary'>Features</span></Heading>
            <p className='text-dark1 sm:text-lg text-base font-medium font-poppins sm:mt-6 mt-5 mx-auto text-center sm:max-w-[713px] max-w-[282px]'>This lesson provides a basic framework for conducting a recipe demonstration</p>

            <div className="flex sm:flex-row flex-col items-center justify-center sm:mt-20 mt-[54px] gap-10">
                {listFood.map((item, index) => (
                    <div key={index} className="flex flex-col items-center justify-center p-3 shadow-md rounded-xl">
                        <Image src={item.ImgSrc} alt="" />
                        <h4 className='text-dark text-[28px] font-bold font-sora mt-6 mb-4'>{item.title}</h4>
                        <p className='text-dark1 text-base font-normal font-poppins text-center max-w-[222px] mb-[18px]'>{item.desc}</p>
                    </div>
                ))}

            </div>
        </section>
    )
}

export default FeaturesComponent
