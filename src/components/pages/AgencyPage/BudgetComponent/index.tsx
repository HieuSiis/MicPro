import Image from 'next/image'
import React from 'react'

import { CheckGradientPurple } from 'assets/icons/check-icons'
import Heading from 'components/ui/Heading'

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
      'On time Support',
    ],
    isFree: false,
  },
  {
    name: 'Pro',
    price: '$0',
    period: '',
    tag: 'Free',
    isPopular: false,
    features: ['UI/UX Designer', 'Dedicated Developer', 'QA technician'],
    isFree: true,
  },
]

const BudgetComponent = () => {
  return (
    <section className='w-full bg-grayF2 px-6 py-10 sm:px-[135px] sm:py-[70px]'>
      <Heading className='mb-[30px] max-w-[327px] sm:mb-[70px] sm:max-w-[679px]'>
        Find the plan that fits your <span className='text-primary'>budget</span>
      </Heading>
      <div className='mb-10 flex items-center justify-center gap-3'>
        <button
          type='button'
          className='rounded-full bg-primary px-[27px] py-[10px] font-poppins text-sm font-normal text-white'
        >
          Monthly
        </button>
        <button
          type='button'
          className='rounded-full bg-stone-50 px-[33px] py-[10px] font-poppins text-sm font-normal text-dark1'
        >
          Yearly
        </button>
      </div>
      <div className='flex flex-col justify-center gap-8 sm:flex-row'>
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`w-full max-w-[730px] rounded-3xl ${plan.isFree ? 'flex-1' : ''} bg-grayEa`}
          >
            <div className='rounded-t-3xl bg-white px-8 py-5'>
              <div className='mb-3 flex items-center justify-between'>
                <h5 className='font-poppins font-semibold'>{plan.name}</h5>
                <span
                  className={`flex items-center justify-center rounded-full px-6 py-3 ${
                    plan.isPopular
                      ? 'bg-primary bg-opacity-10 text-primary'
                      : 'bg-dark1 bg-opacity-10 text-gray-950'
                  }font-poppins font-medium`}
                >
                  {plan.tag}
                </span>
              </div>
              <h4 className='font-sora text-[50px] font-bold'>
                {plan.price}
                {plan.period && (
                  <small className='font-poppins text-xl font-normal text-dark1'>
                    {plan.period}
                  </small>
                )}
              </h4>
            </div>
            <div className='rounded-b-3xl bg-grayEa px-10 py-11'>
              <div
                className={`grid ${
                  plan.features.length > 3 ? 'mb-11 grid-cols-1 gap-5 sm:grid-cols-2' : 'space-y-5'
                }`}
              >
                {plan.features.map((feature, i) => (
                  <div key={i} className='flex items-center gap-3 font-poppins text-lg text-dark1'>
                    <Image src={CheckGradientPurple} width={20} height={20} alt='' />
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
              {plan.isFree ? (
                <div className='mt-11 w-fit rounded-full bg-gradientButton p-[1px]'>
                  <button
                    type='button'
                    className='rounded-full bg-grayEa px-9 py-[10px] font-poppins text-[16px] font-medium text-gray-950'
                  >
                    Buy Now
                  </button>
                </div>
              ) : (
                <button
                  type='button'
                  className='rounded-full bg-gradientButton px-9 py-[10px] font-poppins text-lg font-medium text-white'
                >
                  Buy Now
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BudgetComponent
