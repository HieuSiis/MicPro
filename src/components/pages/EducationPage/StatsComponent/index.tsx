import React from 'react'

const stats = [
  { value: '360+', label: 'Hours Of Learning', color: 'text-pink-400' },
  { value: '1200+', label: 'Enrolled Learners', color: 'text-orange-400' },
  { value: '650+', label: 'Online Instructors', color: 'text-sky-400' },
  { value: '100%', label: 'Satisfaction rate', color: 'text-rose-400' },
]
const StatsComponent = () => {
  return (
    <section className='mt-[70px] flex items-center justify-center bg-grayF4 py-20 sm:mt-[100px]'>
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
