import React from 'react'

const stats = [
    { value: '7K+', color: 'text-pink-400', label: 'Active Members' },
    { value: '230+', color: 'text-orange-400', label: 'Expert Trainer' },
    { value: '10+', color: 'text-blue-400', label: 'Sports' },
    { value: '50+', color: 'text-red-400', label: 'Awards' },
]
const StatsComponent = () => {
    return (
        <section className='flex items-center justify-center bg-grayF4 sm:h-[328px] sm:mt-[100px] mt-[70px] py-[70px]'>
            <div className="flex sm:flex-row flex-col sm:divide-x sm:divide-y-0 divide-y divide-slate-200">
                {stats.map((item, index) => (
                    <div key={index} className="flex flex-col sm:px-20 py-[30px]">
                        <h1 className={`text-6xl font-sora font-extrabold ${item.color} mb-6`}>{item.value}</h1>
                        <span className='opacity-70 text-xl font-poppins font-normal text-dark1'>{item.label}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default StatsComponent
