import React from 'react'

import { Medical, Tag, User } from 'assets/icons/event-page'
import {
  AmazonColor,
  ContentfulColor,
  DropboxColor,
  SlackColor,
  WhatsAppColor,
} from 'assets/logo-companies'

const logolist = [AmazonColor, ContentfulColor, WhatsAppColor, DropboxColor, SlackColor]

const stats = [
  {
    bgIcon: 'bg-orange-50',
    icon: Tag,
    quantity: '10,000',
    description: 'Conference Tickets Confirmed',
  },
  {
    bgIcon: 'bg-blue-50',
    icon: User,
    quantity: '30+',
    description: 'Participants from Different Countries',
  },
  {
    bgIcon: 'bg-indigo-50',
    icon: Medical,
    quantity: '100+',
    description: 'Sponsor of big company',
  },
]

const PartnerStats = () => {
  return (
    <section className='bg-white'>
      <div className='main-container'>
        <div className='flex flex-wrap items-center justify-center gap-x-8 gap-y-[29px] py-12 sm:gap-[70px] sm:py-20 '>
          {logolist.map((item, index) => (
            <img key={index} src={item} alt='' className='h-[29px] sm:h-auto' />
          ))}
        </div>
        <div className='flex flex-col items-center justify-center gap-[30px] py-10 sm:flex-row sm:py-20'>
          {stats.map((item, index) => (
            <div
              key={index}
              className='rounded-2xl border border-slate-100 px-11 py-[30px] hover:shadow-md'>
              <div
                className={`mb-5 flex h-20 w-20 items-center justify-center rounded-[10px] ${item.bgIcon}`}
              >
                <img src={item.icon} alt='' />
              </div>
              <h4 className='mb-4 font-sora text-[28px] font-bold'>{item.quantity}</h4>
              <p className='w-[260px] font-poppins text-2xl font-normal text-dark1'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnerStats
