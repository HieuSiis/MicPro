import { Aerobic, Building, Cardio, Zumba } from 'assets/icons/sport-page';
import Heading from 'components/ui/Heading';
import React from 'react'

const programs = [
    {
        title: "Zumba Exercise",
        description: "The Program has a lot of fans is Zumba Gymnastics",
        img: Zumba,
    },
    {
        title: "Aerobic Gymnastics",
        description: "The Program has a lot of fans is Zumba Gymnastics",
        img: Aerobic,
    },
    {
        title: "Cardio Exercise",
        description: "The Program has a lot of fans is Zumba Gymnastics",
        img: Cardio,
    },
    {
        title: "Building Muscle",
        description: "The Program has a lot of fans is Zumba Gymnastics",
        img: Building,
    },
];

const ProgramComponent = () => {
    return (
        <section className="main-container sm:mt-0 mt-5">
            <Heading>Get <span className='text-primary'>Program</span> of the month </Heading>
            <p className='text-dark1 sm:mb-[70px] mb-[30px] sm:max-w-[553px] max-w-[322px] sm:text-xl text-base font-poppins font-normal mt-6 mx-auto text-center'>You can join our program and enjoy the fun as we are always working hard to make our community better.</p>

            <div className="sm:py-20 py-[26px] sm:px-[70px] px-[14px] bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl grid sm:grid-cols-2 grid-cols-1 sm:gap-20 gap-6 ">
                {programs.map((program, idx) => (
                    <div key={idx} className="flex items-center sm:gap-6 gap-4 text-white">
                        <img src={program.img} alt="" className='sm:w-[134px] sm:h-[134px] w-[78px] h-[78px]' />
                        <div>
                            <h5 className="text-xl font-sora font-semibold sm:mb-4 mb-[10px]">{program.title}</h5>
                            <p className="sm:text-base text-sm font-poppins font-normal text-blueBB max-w-[256px]">{program.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ProgramComponent
