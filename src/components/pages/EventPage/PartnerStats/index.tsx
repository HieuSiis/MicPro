import { Medical, Tag, User } from 'assets/icons/event-page'
import { AmazonColor, ContentfulColor, DropboxColor, SlackColor, WhatsAppColor } from 'assets/logo-companies'
import React from 'react'

const logolist = [
    AmazonColor, ContentfulColor, WhatsAppColor, DropboxColor, SlackColor
]

const stats = [
    {
        bgIcon: 'bg-orange-50',
        icon: Tag,
        quantity: '10,000',
        description: 'Conference Tickets Confirmed'
    },
    {
        bgIcon: 'bg-blue-50',
        icon: User,
        quantity: '30+',
        description: 'Participants from Different Countries'
    },
    {
        bgIcon: 'bg-indigo-50',
        icon: Medical,
        quantity: '100+',
        description: 'Sponsor of big company'
    }
]

const PartnerStats = () => {
    return (
        <section className='bg-white'>
            <div className='main-container'>
                <div className='flex flex-wrap items-center justify-center sm:gap-[70px] gap-x-8 gap-y-[29px] sm:py-20 py-12 '>
                    {logolist.map((item, index) => (
                        <img src={item} alt="" className='sm:h-auto h-[29px]' />
                    ))}
                </div>
                <div className='flex sm:flex-row flex-col items-center justify-center gap-[30px] sm:py-20 py-10'>
                    {stats.map((item, index) => (
                        <div className='py-[30px] px-11 border border-slate-100 rounded-2xl hover:shadow-md'>
                            <div className={`flex w-20 h-20 rounded-[10px] mb-5 items-center justify-center ${item.bgIcon}`}>
                                <img src={item.icon} alt="" />
                            </div>
                            <h4 className='text-[28px] font-sora font-bold mb-4'>{item.quantity}</h4>
                            <p className='text-dark1 font-poppins font-normal text-2xl w-[260px]'>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default PartnerStats
