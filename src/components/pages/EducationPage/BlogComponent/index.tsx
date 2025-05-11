import React from 'react'

import Heading from 'components/ui/Heading'

const blogs = [
  {
    date: '11-08-2020',
    title: 'Take Your Career to the Next Level Future ',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    bgContent: 'bg-orange-50',
  },
  {
    date: '10-08-2020',
    title: 'Take Your Career to the Next Level Future ',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    bgContent: 'bg-blue-100',
  },
  {
    date: '10-08-2020',
    title: 'Take Your Career to the Next Level Future ',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    bgContent: 'bg-blue-100',
  },
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
    <section className='mt-[70px] bg-slate-100 py-[50px] sm:mt-[100px] sm:py-[100px]'>
      <div className='main-container'>
        <Heading>
          Our Latest <span className='text-primary'>Blog</span>
        </Heading>
        <div className='mt-[60px] sm:mt-[100px] sm:overflow-x-auto sm:pt-[30px]'>
          <div className='flex w-max flex-col gap-6 sm:flex-row sm:gap-[30px]'>
            {blogs.map((item, index) => (
              <div
                key={index}
                className='relative max-w-[340px] rounded-[20px] bg-white px-5 py-10 sm:max-w-[536px] sm:px-10'
              >
                {item.date === latestDate && (
                  <div className='absolute -top-6 left-6 rounded-full bg-red-500 px-8 py-3 font-poppins text-base font-medium text-white sm:left-10'>
                    New
                  </div>
                )}
                <span className='mb-4 block font-poppins text-[22px] font-medium text-dark1'>
                  {item.date}
                </span>
                <h4 className='mb-5 font-sora text-xl font-semibold text-dark sm:mb-[30px] sm:text-[28px] sm:font-bold'>
                  {item.title}
                </h4>
                <div
                  className={`px-[14px] py-4 sm:px-5 sm:py-6 ${item.bgContent} -mb-[26px] rounded-[15px] font-poppins text-xs font-normal sm:-mb-[10px] sm:text-base`}
                >
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
