import React from 'react'

const stats = [
    { value: '+20k', label: 'Trusted Retails' },
    { value: '+50k', label: 'Customers' },
    { value: '+400k', label: 'Review' }
]

const StatsComponent = () => {
    return (
        <section className="w-full sm:mt-[100px] mt-[70px]">
            <div className="bg-gradientCtaCharity text-white sm:py-[70px] py-[30px] mx-auto flex sm:flex-row flex-col items-center justify-center sm:divide-x divide-y divide-indigo-400 sm:divide-y-0">
                {stats.map((item, index) => (
                    <div key={index} className="text-center sm:px-[120px] sm:py-0 py-10">
                        <h2 className="text-[50px] font-sora font-bold">{item.value}</h2>
                        <p className="text-lg font-poppins font-normal mt-2">{item.label}</p>
                    </div>
                ))}
            </div>
        </section>

    )
}

export default StatsComponent
