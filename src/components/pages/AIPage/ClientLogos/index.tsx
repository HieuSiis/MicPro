import React from 'react'

import {
  Slack,
  Amazon,
  Woo,
  MeUndies,
  SitePoint,
  AirWallex,
  Ghost,
  HubSpot,
  Gusto,
  UpWork,
} from 'assets/logo-companies'
import Heading from 'components/ui/Heading'

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
    <section className='relative bg-white pb-[60px] sm:-top-5 sm:pb-[140px]'>
      <div className='main-container'>
        <Heading className='mb-[30px] max-w-[270px] text-xl leading-tight sm:mb-[70px] sm:max-w-[810px] sm:text-[50px]'>
          Join <span className='text-blue-600'>10,000+</span> marketers writing with AI
        </Heading>
        <div className='flex flex-wrap justify-center gap-x-[30px] gap-y-6 sm:gap-x-[100px] sm:gap-y-10'>
          {companyLogos.map((item, index) => (
            <img
              key={index}
              src={item.logo}
              alt={item.name}
              className={index <= 3 ? 'h-[13px] sm:h-auto' : 'h-[20px] sm:h-auto'}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientLogos
