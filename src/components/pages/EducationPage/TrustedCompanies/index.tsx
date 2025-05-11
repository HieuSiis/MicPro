import { AmazonColor, GGColor, GustoColor, HubSpotColor, SlackColor } from 'assets/logo-companies'
import React from 'react'

const Logos = [{ img: GGColor }, { img: SlackColor }, { img: AmazonColor }, { img: HubSpotColor }, { img: GustoColor }]
const TrustedCompanies = () => {
    return (
        <section className='bg-grayF1 sm:h-[200px] h-[269px] flex sm:flex-row flex-col items-center sm:justify-evenly justify-center'>
            <h5 className='text-xl font-semibold font-sora w-[264px] sm:text-left text-center sm:mb-0 mb-10'>Trusted By Top 100+ Companies & Universities</h5>
            <div className="flex flex-wrap sm:gap-[60px] gap-x-10 gap-y-[30px] justify-center sm:px-0 px-11">
                {Logos.map((item, index) => (
                    <img src={item.img} alt="" className='sm:h-12 h-8' />
                ))}

            </div>
        </section>
    )
}

export default TrustedCompanies
