import React from 'react'

import ArrowButton from 'components/ui/Button/ArrowButton'

const CtaComponent = () => {
    return (
        <section>
            <div className="sm:main-container mobile-container bg-gradientBlue2 sm:pt-20 pt-[30px] sm:pb-[56px] pb-[30px] rounded-2xl">
                <h3 className='text-center font-bold sm:text-[34px] text-[28px] font-sora sm:max-w-[858px] max-w-[279px] text-white mx-auto mb-[30px]'>We'll take the time to understand your goals and then help you create a website that's exactly what you envisioned.</h3>
                <p className='text-white text-center mx-auto max-w-[692px] font-poppins font-thin'>We believe your project is only as good as the team that's working on it. When we work with you and your team, we know there are no shortcuts to success. Your research is done; now lets get down to business!</p>
                <div className="flex justify-center mt-10">
                    <ArrowButton>Join the team</ArrowButton>
                </div>
            </div>
        </section>
    )
}

export default CtaComponent
