import React from 'react'

const stats = [
    { value: '360+', label: 'Hours Of Learning', color: 'text-pink-400' },
    { value: '1200+', label: 'Enrolled Learners', color: 'text-orange-400' },
    { value: '650+', label: 'Online Instructors', color: 'text-sky-400' },
    { value: '100%', label: 'Satisfaction rate', color: 'text-rose-400' },
];
const StatsComponent = () => {
    return (
        <section className='flex items-center justify-center bg-grayF4 sm:mt-[100px] mt-[70px] py-20'>
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
