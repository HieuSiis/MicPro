import Heading from 'components/ui/Heading'
import React from 'react'

const blogs = [
    {
        date: '11-08-2020',
        title: 'Take Your Career to the Next Level Future ',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
        bgContent: 'bg-orange-50'
    },
    {
        date: '10-08-2020',
        title: 'Take Your Career to the Next Level Future ',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
        bgContent: 'bg-blue-100'
    },
    {
        date: '10-08-2020',
        title: 'Take Your Career to the Next Level Future ',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
        bgContent: 'bg-blue-100'
    }
]

const parseDate = (dateStr: any) => {
    const [day, month, year] = dateStr.split('-')
    return new Date(`${year}-${month}-${day}`)
}

const BlogComponent = () => {
    // Find the latest date
    const latestDate = blogs.reduce((maxDate, blog) => {
        return parseDate(blog.date) > parseDate(maxDate) ? blog.date : maxDate
    }, blogs[0].date)

    return (
        <section className='bg-slate-100 sm:py-[100px] py-[50px] sm:mt-[100px] mt-[70px]'>
            <div className='main-container'>
                <Heading>Our Latest <span className='text-primary'>Blog</span></Heading>
                <div className='sm:overflow-x-auto sm:pt-[30px] sm:mt-[100px] mt-[60px]'>
                    <div className='flex sm:flex-row flex-col sm:gap-[30px] gap-6 w-max'>
                        {blogs.map((item, index) => (
                            <div key={index} className='relative sm:px-10 px-5 py-10 bg-white rounded-[20px] sm:max-w-[536px] max-w-[340px]'>
                                {item.date === latestDate && (
                                    <div className='absolute -top-6 sm:left-10 left-6 bg-red-500 text-white px-8 py-3 rounded-full text-base font-poppins font-medium'>
                                        New
                                    </div>
                                )}
                                <span className='text-dark1 font-poppins text-[22px] font-medium mb-4 block'>{item.date}</span>
                                <h4 className='font-sora sm:text-[28px] text-xl sm:font-bold font-semibold text-dark sm:mb-[30px] mb-5'>{item.title}</h4>
                                <div className={`sm:py-6 py-4 sm:px-5 px-[14px] ${item.bgContent} sm:text-base text-xs font-poppins font-normal rounded-[15px] sm:-mb-[10px] -mb-[26px]`}>
                                    {item.content}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogComponent
