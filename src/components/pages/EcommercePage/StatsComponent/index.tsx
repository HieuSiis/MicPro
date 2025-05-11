import React from 'react'

const stats = [
    { value: '36+', label: 'User Trust', color: 'text-pink-400' },
    { value: '42k+', label: 'Brand Vision', color: 'text-orange-400' },
    { value: '8k+', label: 'Achievement', color: 'text-sky-400' },
    { value: '20k+', label: 'Products', color: 'text-rose-400' },
];
const StatsComponent = () => {
    return (
        <section className='flex items-center justify-center bg-grayF4 sm:h-[328px] sm:mt-[100px] mt-[50px] py-[70px]'>
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
