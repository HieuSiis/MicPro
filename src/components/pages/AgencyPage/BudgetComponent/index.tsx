import Heading from 'components/ui/Heading'
import Image from 'next/image'
import React from 'react'

import { CheckGradientPurple } from 'assets/icons/check-icons'
import RadiusButton from 'components/ui/Button/RadiusButton'

const plans = [
    {
        name: 'Pro',
        price: '$35',
        period: '/Per Month',
        tag: 'Most popular',
        isPopular: true,
        features: [
            'UI/UX Designer',
            'Dedicated Developer',
            'QA technician',
            'Project Manager',
            'On time Support'
        ],
        isFree: false
    },
    {
        name: 'Pro',
        price: '$0',
        period: '',
        tag: 'Free',
        isPopular: false,
        features: [
            'UI/UX Designer',
            'Dedicated Developer',
            'QA technician'
        ],
        isFree: true
    }
]

const BudgetComponent = () => {
    return (
        <section className='w-full sm:py-[70px] py-10 sm:px-[135px] px-6 bg-grayF2'>
            <Heading className='sm:max-w-[679px] max-w-[327px] sm:mb-[70px] mb-[30px]'>
                Find the plan that fits your <span className='text-primary'>budget</span>
            </Heading>
            <div className="flex items-center justify-center gap-3 mb-10">
                <button className='rounded-full py-[10px] px-[27px] bg-primary text-white text-sm font-normal font-poppins'>Monthly</button>
                <button className='rounded-full py-[10px] px-[33px] bg-stone-50 text-dark1 text-sm font-normal font-poppins'>Yearly</button>
            </div>
            <div className="flex sm:flex-row flex-col justify-center gap-8">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`w-full max-w-[730px] rounded-3xl ${plan.isFree ? 'flex-1' : ''} bg-grayEa`}
                    >
                        <div className='bg-white py-5 px-8 rounded-t-3xl'>
                            <div className="flex items-center justify-between mb-3">
                                <h5 className='font-semibold font-poppins'>{plan.name}</h5>
                                <span className={`flex items-center justify-center rounded-full py-3 px-6 
                                    ${plan.isPopular ? 'text-primary bg-primary bg-opacity-10' : 'text-gray-950 bg-dark1 bg-opacity-10'}
                                    font-medium font-poppins`}>
                                    {plan.tag}
                                </span>
                            </div>
                            <h4 className='text-[50px] font-sora font-bold'>
                                {plan.price}
                                {plan.period && (
                                    <small className='text-xl text-dark1 font-poppins font-normal'>{plan.period}</small>
                                )}
                            </h4>
                        </div>
                        <div className='py-11 px-10 rounded-b-3xl bg-grayEa'>
                            <div className={`grid ${plan.features.length > 3 ? 'sm:grid-cols-2 grid-cols-1 gap-5 mb-11' : 'space-y-5'}`}>
                                {plan.features.map((feature, i) => (
                                    <div key={i} className='flex items-center gap-3 text-lg font-poppins text-dark1'>
                                        <Image src={CheckGradientPurple} width={20} height={20} alt='' />
                                        <p>{feature}</p>
                                    </div>
                                ))}
                            </div>
                            {plan.isFree ? (
                                <div className="p-[1px] bg-gradientButton mt-11 w-fit rounded-full">
                                    <button className="rounded-full py-[10px] px-9 bg-grayEa text-gray-950 text-[16px] font-medium font-poppins">
                                        Buy Now
                                    </button>
                                </div>
                            ) : (
                                <button className='rounded-full py-[10px] px-9 bg-gradientButton text-white text-lg font-medium font-poppins'>Buy Now</button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default BudgetComponent
