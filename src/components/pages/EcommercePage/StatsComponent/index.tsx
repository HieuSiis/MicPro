import React from 'react'

const stats = [
  { value: '36+', label: 'User Trust', color: 'text-pink-400' },
  { value: '42k+', label: 'Brand Vision', color: 'text-orange-400' },
  { value: '8k+', label: 'Achievement', color: 'text-sky-400' },
  { value: '20k+', label: 'Products', color: 'text-rose-400' },
]
const StatsComponent = () => {
  return (
    <section className='mt-[50px] flex items-center justify-center bg-grayF4 py-[70px] sm:mt-[100px] sm:h-[328px]'>
      <div className='flex flex-col divide-y divide-slate-200 sm:flex-row sm:divide-x sm:divide-y-0'>
        {stats.map((item, index) => (
          <div key={index} className='flex flex-col py-[30px] sm:px-20'>
            <h1 className={`font-sora text-6xl font-extrabold ${item.color} mb-6`}>{item.value}</h1>
            <span className='font-poppins text-xl font-normal text-dark1 opacity-70'>
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StatsComponent
