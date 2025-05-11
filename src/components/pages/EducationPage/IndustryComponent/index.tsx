import React from 'react'
import Img from 'assets/images/education-page/img-polygon.png'
import Image from 'next/image'
import RadiusButton from 'components/ui/Button/RadiusButton'
import { CheckGradientBlue, CheckGradientOrange, CheckGradientPurple, CheckGradientRed } from 'assets/icons/check-icons'

const Items = [
    {
        icon: CheckGradientPurple,
        title: 'World Class'
    },
    {
        icon: CheckGradientOrange,
        title: 'Easily Learning'
    },
    {
        icon: CheckGradientBlue,
        title: 'Flexibel'
    },
    {
        icon: CheckGradientRed,
        title: 'Affordable'
    }
]
const IndustryComponent = () => {
    return (
        <section className='l-container'>
            <div className="flex sm:flex-row flex-col-reverse sm:gap-[69px] gap-[60px]">
                <Image src={Img} alt='' />
                <div className="flex flex-1 flex-col">
                    <h2 className='sm:text-[50px] text-[28px] font-sora font-bold sm:mb-[30px] mb-6 leading-tight'>Premium courses from the <span className='text-primary'>industry</span> leaders</h2>
                    <p className='sm:text-xl text-sm font-poppins font-normal text-dark1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                    <div className="grid grid-cols-2 py-10">
                        {Items.map((item, index) => (
                            <div className="flex mb-[30px]">
                                <Image src={item.icon} alt='' width={20} height={20}></Image>
                                <span className='text-base font-poppins font-semibold ml-3'>{item.title}</span>
                            </div>
                        ))}
                    </div>
                    <div>
                        <RadiusButton className='text-white bg-blue-600 font-normal'>Get Started</RadiusButton>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default IndustryComponent
