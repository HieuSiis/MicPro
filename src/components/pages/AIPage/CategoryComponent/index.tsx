import React from 'react'
import PartyPopper from 'assets/images/ai-page/party-popper.svg'
import Image from 'next/image'
import OptionCard from 'components/ui/Card/OptionCard'
import { IContent, IEdit, IFb, IKeyword, IMice, IText, ITwitter } from 'assets/icons/ai-page'

const CategoriesName = [
    { name: 'All' },
    { name: 'Article and Blog' },
    { name: 'Social Media' },
    { name: 'Writing' },
    { name: 'Keyword Research' },
    { name: 'Ecommerce' },
    { name: 'Website' },
]

const PopularCategory = [
    {
        bgColor: 'bg-sky-200',
        icon: IText,
        name: 'Article and Blog',
        description: 'Write your dream SEO article short time.'
    },
    {
        bgColor: 'bg-red-100',
        icon: IMice,
        name: 'Social Media',
        description: 'Write compelling detailed product'
    },
    {
        bgColor: 'bg-pink-100',
        icon: IKeyword,
        name: 'Keyword Research',
        description: 'Pick your excet keyword for rank anything'
    },
]

const AllTopics = [
    {
        bgIcon: 'bg-amber-50',
        icon: IEdit,
        name: 'Blog Idea',
        description: 'Blog ideas generate more website traffic.'
    },
    {
        bgIcon: 'bg-amber-50',
        icon: IEdit,
        name: 'Blog Intro',
        description: 'Start write compelling introduction'
    },
    {
        bgIcon: 'bg-amber-50',
        icon: IEdit,
        name: 'Article Generator',
        description: 'Generate more copies with article AI'
    },
    {
        bgIcon: 'bg-sky-50',
        icon: IFb,
        name: 'Facebook Ads',
        description: 'Facebooks ad copies that make your ads.'
    },
    {
        bgIcon: 'bg-sky-50',
        icon: ITwitter,
        name: 'Tweet Ideas',
        description: 'Engage with your amazing followers'
    },
    {
        bgIcon: 'bg-sky-50',
        icon: IContent,
        name: 'Content Rephrase',
        description: 'Rephrase your content in different voice.'
    },
]

const CategoryComponent = () => {
    return (
        <section>
            <div className='l-container mt-[70px] bg-white rounded-[20px]'>
                <div className='rounded-lg sm:p-12 py-6'>
                    <div className="flex items-center justify-center">
                        <Image src={PartyPopper} alt='' width={36} height={36} className='sm:w-[36px] sm:h-[36px] w-5 h-5'></Image>
                        <h5 className='sm:text-xl text-[13px] font-extrabold font-manrope text-slate-900 sm:ml-2 ml-1'>Delowar, So, what exactly do you have in mind?</h5>
                    </div>
                    <p className='text-gray-700 font-normal sm:text-xs text-[9px] mx-auto text-center font-manrope'>Begin with selecting the content type from the options below.</p>
                    <ul className='flex overflow-x-auto sm:gap-[13px] gap-2 sm:justify-center justify-start sm:mt-9 mt-4 sm:mb-4 mb-6 py-2'>
                        {CategoriesName.map((item, index) => (
                            <li key={index} className='shrink-0 min-w-max py-1 px-4 rounded-full text-neutral2 border border-neutral5 sm:text-[13px] text-[9px] font-manrope hover:bg-primary hover:text-white '><a href="#">{item.name}</a></li>
                        ))}
                    </ul>
                    <h6 className='text-sm font-bold font-manrope text-slate-900 mb-[13px]'>Popular Category</h6>
                    <div className="flex sm:flex-row flex-col sm:gap-[27px] gap-[18px] mb-9">
                        {PopularCategory.map((item, index) => (
                            <OptionCard className={item.bgColor}
                                key={index}
                                icon={item.icon}
                                bgIcon='bg-white'
                                name={item.name}
                                description={item.description}
                            />
                        ))}
                    </div>
                    <h6 className='text-sm font-bold font-manrope text-slate-900 mb-[13px]'>All Topics</h6>
                    <div className="grid sm:grid-cols-3 grid-cols-1 gap-x-[27px] gap-y-[18px] ga mb-9">
                        {AllTopics.map((item, index) => (
                            <OptionCard className='border border-purple-100'
                                key={index}
                                icon={item.icon}
                                bgIcon={item.bgIcon}
                                name={item.name}
                                description={item.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CategoryComponent
