import React from 'react'
import Image from "next/image";
import IMG from "assets/images/charity-page/img-cta-charity.png"

import ArrowButton from 'components/ui/Button/ArrowButton';

const CtaComponent = () => {
    return (
        <section className="main-container sm:pt-[120px] pt-[70px]">
            <div className="w-full bg-gradientCtaCharity text-white rounded-2xl sm:pt-11 pt-9 flex flex-col-reverse sm:flex-row items-center">

                <div >
                    <Image
                        src={IMG}
                        alt="Volunteers"
                        className='sm:mt-0 mt-8 sm:px-0 px-[18px] '
                    />
                </div>

                <div className="sm:w-1/2 sm:mt-0 sm:pl-8 text-white sm:text-left text-center">
                    <h2 className="sm:text-[34px] text-xl font-sora font-bold sm:max-w-[413px] max-w-[241px] sm:mb-8 mb-6 sm:leading-10 leading-7 sm:mx-0 mx-auto">Become a Volunteer of  our charity</h2>
                    <p className="text-[16px] font-poppins sm:max-w-[486px] max-w-[267px] font-normal opacity-70">
                        We believe your project is only as good as the team that's working on it. When we work with you and your team, we know there are no shortcuts to success. Your research is done; now lets get down to business!
                    </p>
                    <ArrowButton className='sm:mt-11 mt-6 sm:mx-0 mx-auto'>Join the team</ArrowButton>
                </div>
            </div>
        </section>
    )
}

export default CtaComponent
