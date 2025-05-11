import React from 'react'

const CtaComponent = () => {
    return (
        <section className="sm:main-container mobile-container bg-gradientBlue2 text-white rounded-2xl mx-auto text-center sm:py-20 py-10 sm:mt-[120px] mt-[60px]">
            <h2 className="sm:text-[50px] text-[28px] font-sora font-bold leading-snug max-w-[858px] mx-auto text-center sm:mb-10 mb-[30px]">
                Your Own Online Store is Just a Few Clicks Away
            </h2>
            <button className="bg-white text-black text-lg font-poppins font-semibold p-4 rounded-[10px] hover:bg-gray-100 transition">
                Get Started for free
            </button>
            <p className="text-base text-white mt-[14px] font-thin font-poppins">
                No credit card required — pay when you're ready.
            </p>
        </section>
    )
}

export default CtaComponent
