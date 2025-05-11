import Heading from 'components/ui/Heading'
import React from 'react'

import { Slack, Amazon, Woo, MeUndies, SitePoint, AirWallex, Ghost, HubSpot, Gusto, UpWork } from 'assets/logo-companies'

const companyLogos = [
    { name: 'Slack', logo: Slack },
    { name: 'Amazon', logo: Amazon },
    { name: 'WooCommerce', logo: Woo },
    { name: 'MeUndies', logo: MeUndies },
    { name: 'SitePoint', logo: SitePoint },
    { name: 'AirWallex', logo: AirWallex },
    { name: 'Ghost', logo: Ghost },
    { name: 'HubSpot', logo: HubSpot },
    { name: 'Gusto', logo: Gusto },
    { name: 'UpWork', logo: UpWork },
]

const ClientLogos = () => {
    return (
        <section className='bg-white sm:-top-5 relative sm:pb-[140px] pb-[60px]'>
            <div className='main-container'>
                <Heading className='sm:max-w-[810px] max-w-[270px] sm:text-[50px] text-xl sm:mb-[70px] mb-[30px] leading-tight'>Join <span className='text-blue-600'>10,000+</span> marketers writing with AI</Heading>
                <div className='flex flex-wrap sm:gap-x-[100px] gap-x-[30px] sm:gap-y-10 gap-y-6 justify-center'>
                    {companyLogos.map((item, index) => (
                        <img key={index} src={item.logo} alt={item.name} className={index <= 3 ? 'sm:h-auto h-[13px]' : 'sm:h-auto h-[20px]'} />
                    ))}
                </div>
            </div>

        </section>
    )
}

export default ClientLogos
