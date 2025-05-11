import React from 'react'

const CtaComponent = () => {
    return (
        <section className="sm:main-container mobile-container bg-gradientBlue2 text-white rounded-2xl mx-auto text-center sm:py-20 py-11 sm:mt-[90px] mt-[60px]">
            <h2 className="sm:text-[50px] text-[28px] font-sora font-bold leading-snug sm:max-w-[711px] max-w-[265px] mx-auto text-center sm:mb-6 mb-5">
                Enter your email to get the latest news
            </h2>
            <p className="sm:text-xl text-sm text-white font-thin font-poppins sm:max-w-[613px] max-w-[257px] text-center mx-auto">
                Stay informed about the latest school news with notifications.
            </p>

            <form className="sm:mt-10 mt-[49px] sm:max-w-[402px] max-w-[287px] mx-auto flex items-center rounded-full text-dark bg-white px-1 py-1 shadow-sm">
                <input
                    type="email"
                    placeholder="Enter Email Address"
                    className="flex-grow outline-none sm:ml-5 ml-3 bg-transparent sm:text-lg text-sm placeholder-dark1"
                />
                <button type='submit' className="bg-primary text-white sm:text-lg text-sm font-poppins font-thin px-6 py-[15px] rounded-full hover:bg-blue-800 transition">
                    Submit
                </button>
            </form>
        </section>
    )
}

export default CtaComponent
