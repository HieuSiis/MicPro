import Image from 'next/image'
import React from 'react'

import ElementaryStudent from 'assets/images/education-page/elementary-school.png'

const JoinUsComponent = () => {
    return (
        <section className='main-container sm:mt-[140px] mt-[100px]'>
            <div className="flex sm:flex-row flex-col rounded-2xl overflow-hidden shadow-sm">
                {/* Left Side */}
                <div className="bg-gray-50 flex-1 flex flex-col justify-center sm:px-[60px] px-[26px] sm:py-0 py-6">
                    <p className="text-base text-blue-600 mb-4 font-medium font-poppins">Join Us</p>
                    <h2 className="font-sora sm:text-[28px] text-xl sm:max-w-[371px] max-w-[267px] sm:font-bold font-semibold text-dark sm:mb-6 mb-3">
                        Join our Trusted 20,000+ Students all over the world
                    </h2>
                    <p className="text-dark1 font-poppins text-base sm:mb-10 mb-[18px] font-normal max-w-[357px]">
                        Fuel your company’s growth with real-time customer insights.
                    </p>
                    <button className="bg-blue-600 text-white px-10 py-4 w-fit rounded-md hover:bg-blue-700 transition">
                        Get Started
                    </button>
                </div>

                {/* Right Side */}
                <div className="bg-gradient-to-br from-purple-400 to-blue-600 text-white flex-1 sm:px-[122px] px-16 relative">
                    <Image src={ElementaryStudent} alt="" />
                </div>
            </div>
        </section>
    )
}

export default JoinUsComponent
