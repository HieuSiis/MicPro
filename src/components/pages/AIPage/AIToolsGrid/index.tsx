import Heading from 'components/ui/Heading'
import React from 'react'
import OptionCard from 'components/ui/Card/OptionCard'
import { IContent, IEdit, IFb, IGoogle, IKeywordRed, IMicePink, ITextBlue, ITwitter, IWebsite, IWriting } from 'assets/icons/ai-page'

const itemsGrid = [
    { bgIcon: 'bg-blue-50', icon: ITextBlue, name: 'Article and Blog', description: 'Write your dream SEO article short time.' },
    { bgIcon: 'bg-rose-50', icon: IMicePink, name: 'Social Media', description: 'Write compelling detailed product' },
    { bgIcon: 'bg-rose-50', icon: IKeywordRed, name: 'Keyword Research', description: 'Pick your excet keyword for rank anything' },
    { bgIcon: 'bg-amber-50', icon: IEdit, name: 'Blog Idea', description: 'Blog ideas generate more website traffic.' },
    { bgIcon: 'bg-amber-50', icon: IEdit, name: 'Blog Intro', description: 'Start write compelling introduction' },
    { bgIcon: 'bg-amber-50', icon: IEdit, name: 'Article Generator', description: 'Generate more copies with article AI' },
    { bgIcon: 'bg-sky-50', icon: IFb, name: 'Facebook Ads', description: 'Facebooks ad copies that make your ads.' },
    { bgIcon: 'bg-sky-50', icon: ITwitter, name: 'Tweet Ideas', description: 'Engage with your amazing followers' },
    { bgIcon: 'bg-sky-50', icon: IContent, name: 'Content Rephrase', description: 'Rephrase your content in different voice.' },
    { bgIcon: 'bg-amber-50', icon: IWebsite, name: 'Landing Page Headline', description: 'A unique and memorable perfect headline' },
    { bgIcon: 'bg-sky-50', icon: IGoogle, name: 'SEO Meta Description', description: 'Your website for maximum visibility' },
    { bgIcon: 'bg-amber-50', icon: IWriting, name: 'Product Description', description: 'Write compelling detailed product' },
]

const AIToolsGrid = () => {
    return (
        <section className='sm:main-container mobile-container rounded-xl bg-gradientBlue2 sm:pt-[70px] pt-8 sm:px-[49px] px-4'>
            <Heading className='text-white sm:mb-[50px] sm:text-[50px] text-xl mb-6'>MicPro will help you...</Heading>
            <div className='grid sm:grid-cols-3 grid-cols-1 sm:gap-5 gap-3 pb-12'>
                {itemsGrid.map((item, index) => (
                    <OptionCard className='bg-white' key={index} icon={item.icon} bgIcon={item.bgIcon} name={item.name} description={item.description} />
                ))}
            </div>
        </section>
    )
}

export default AIToolsGrid
