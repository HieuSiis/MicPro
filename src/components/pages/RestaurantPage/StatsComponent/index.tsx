import React from 'react'

const stats = [
  { value: '+20k', label: 'Trusted Retails' },
  { value: '+50k', label: 'Customers' },
  { value: '+400k', label: 'Review' },
]

const StatsComponent = () => {
  return (
    <section className='mt-[70px] w-full sm:mt-[100px]'>
      <div className='mx-auto flex flex-col items-center justify-center divide-y divide-indigo-400 bg-gradientCtaCharity py-[30px] text-white sm:flex-row sm:divide-x sm:divide-y-0 sm:py-[70px]'>
        {stats.map((item, index) => (
          <div key={index} className='py-10 text-center sm:px-[120px] sm:py-0'>
            <h2 className='font-sora text-[50px] font-bold'>{item.value}</h2>
            <p className='mt-2 font-poppins text-lg font-normal'>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StatsComponent
