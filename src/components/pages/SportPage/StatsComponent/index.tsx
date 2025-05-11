import React from 'react'

const stats = [
  { value: '7K+', color: 'text-pink-400', label: 'Active Members' },
  { value: '230+', color: 'text-orange-400', label: 'Expert Trainer' },
  { value: '10+', color: 'text-blue-400', label: 'Sports' },
  { value: '50+', color: 'text-red-400', label: 'Awards' },
]
const StatsComponent = () => {
  return (
    <section className='mt-[70px] flex items-center justify-center bg-grayF4 py-[70px] sm:mt-[100px] sm:h-[328px]'>
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
